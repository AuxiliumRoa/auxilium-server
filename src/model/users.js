export default function Users (knex) {

  return {

    getOrCreate: (oAuthProvider, oAuthID, oAuthName) => {
      return getUser(oAuthProvider, oAuthID)
        .then((user) => (user) ? user : knex('users')
          .insert({
            name: oAuthName,
            oauth_provider: oAuthProvider,
            oauth_id: oAuthID
          })
          .then(() => getUser(oAuthProvider, oAuthID))
        )
    }

  }

  function getUser(oAuthProvider, oAuthID) {
    return knex.select('id', 'name')
      .from('users')
      .where({
        oauth_provider: oAuthProvider,
        oauth_id: oAuthID
      })
      .then((rows) => (rows.length > 0) ? rows[0] : null)
  }

}
