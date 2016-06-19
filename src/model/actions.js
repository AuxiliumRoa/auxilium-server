export default function Actions (knex) {

  return {

    getNotJoined: (userID) => {
      return knex('actions')
        .join('users_actions_index', 'actions.id', 'users_actions_index.action_id')
        .whereNot('users_actions_index.user_id', userID)
        .select('actions.*')
        .then((rows) => {
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
          return knex('actions')
            .where('id', actionID)
            .then(addCommentsToActions)
            .then((rows) => {
              return { joinedAction: rows[0] }
            })
        })
    }

  }

  function addCommentsToActions (actions) {
    return Promise.all(actions.map((action) => knex('comments').where('action_id', action.id)))
      .then((comments) => {
        for (let i = 0; i < actions.length; i++) {
          actions[i].comments = comments[i]
        }
        return actions
      })
  }

}
