export default function Actions (knex) {

  return {

    getAll: () => {
      return knex('actions')
        .then((rows) => {
          return { actions: rows }
        })
    }

  }

}
