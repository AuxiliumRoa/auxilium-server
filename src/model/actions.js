export default function Actions (knex) {

  return {

    getNotJoined: (userID) => {
      return knex('actions')
        .whereNotIn('id', knex.select('action_id').from('users_actions_index').where('user_id', userID))
    },

    getJoined: (userID) => {
    	return knex('actions')
    		.join('users_actions_index', 'actions.id', 'users_actions_index.action_id')
    		.where('users_actions_index.user_id', userID)
    		.select('actions.*')
        .then(addCommentsToActions)
    },

    joinAction: (userID, actionID) => {
      return knex('users_actions_index')
        .insert({
          user_id: userID,
          action_id: actionID
        })
        .then(() => {
          return addCommentsToActions([{
              id: actionID
            }])
            .then((rows) => rows[0])
        })
    },

    unjoinAction: (userID, actionID) => {
      return knex('users_actions_index')
        .where({
          user_id: userID,
          action_id: actionID
        })
        .del()
    },

    addComment: (actionID, userID, comment, timestamp) => {
      return knex('comments')
        .insert({
          action_id: actionID,
          user_id: userID,
          comment: comment,
          created_at: timestamp
        })
    },

    addAction: (action) => {
      return knex('actions')
        .insert(action)
        .then(() => knex('actions').max('id as new_id').then((rows) => rows[0].new_id))
    }

  }

  function addCommentsToActions (actions) {
    return Promise.all(actions.map((action) => selectComments(action.id)))
      .then((comments) => {
        for (let i = 0; i < actions.length; i++) {
          actions[i].comments = comments[i]
        }
        return actions
      })
  }

  function selectComments (actionID) {
    return knex('comments')
      .where('action_id', actionID)
      .join('users', 'comments.user_id', 'users.id')
      .select('users.id as user_id', 'users.name as user_name', 'comments.comment')
  }

}
