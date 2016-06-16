export default (knex) => {

  return {

    getActions: () => {
      return knex('actions')
        .then((rows) => {
          return { actions: rows }
        })
    },

    getUsers: () => {
      return knex('users')
        .then((rows) => {
          return { users: rows }
        })
    }

  }

}
