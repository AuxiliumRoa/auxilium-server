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
    }

  }

}
