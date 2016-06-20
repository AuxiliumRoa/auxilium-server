export default function Actions (knex) {

  return {

    getNotJoined: (userID) => {
      return knex('actions')
        .whereNotIn('id', knex.select('action_id').from('users_actions_index').where('user_id', userID))
        .then((rows) => {
          // console.log('actions.getNotJoined returning rows', rows)
          return { actions: rows }
        })
    },

    getJoined: (userID) => {
    	return knex('actions')
    		.join('users_actions_index', 'actions.id', 'users_actions_index.action_id')
    		.where('users_actions_index.user_id', userID)
    		.select('actions.*')
        .then(addCommentsToActions)
        .then((rows) => {
          // console.log('actions.getJoined returning rows', rows)
          return { joinedActions: rows }
        })
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
            .then((rows) => {
              // console.log('actions.joinAction returning rows', rows)
              return { joinedAction: rows[0] }
            })
        })
    },

    unjoinAction: (userID, actionID) => {
      return knex('users_actions_index')
        .where({
          user_id: userID,
          action_id: actionID
        })
        .del()
    }

  }

  function addCommentsToActions (actions) {
    return Promise.all(actions.map((action) => selectComments(action.id)))
      .then((comments) => {
        // console.log('actions.addCommentsToActions found comments', comments)
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
      .select('users.id as user_id', 'users.name as user_name', 'comments.comment', 'comments.created_at')
  }

}
