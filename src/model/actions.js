export default function Actions (knex) {

  return {

    getAll: () => {
      return knex('actions')
        .then((rows) => {
          return { actions: rows }
        })
    },

    getJoined: (userID) => {
    	return knex('actions')
    		.join('users_actions_index', 'actions.id', 'users_actions_index.action_id')
    		.where('users_actions_index.user_id', userID)
    		.select('actions.*')
    },

    joinAction: (actionID, userID) => {
      return knex('users_actions_index')
        .insert({
          user_id: userID,
          action_id: actionID
        })
        .then(() => {
          return Promise.all([
            knex('actions').where('id', actionID),
            knex('comments').where('action_id', actionID)
            ])
            .then((results) => {
              let result = results[0][0]
              result.comments = results[1]
              return result
            })
        })
    }

  }

}
