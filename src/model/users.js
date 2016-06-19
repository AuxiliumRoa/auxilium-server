export default function Users (knex) {

  return {

    getOrCreateUser: (oAuthProvider, oAuthID, oAuthName) => {
      return getUser(oAuthProvider, oAuthID)
        .then((rows) => {
          if (rows.length > 0) {
            return rows[0]
          } else {
            return knex('users')
              .insert({
                name: oAuthName,
                oauth_provider: oAuthProvider,
                oauth_id: oAuthID
              })
              .then(() => {
                return getUser(oAuthProvider, oAuthID)
              })
          }
        })
    }

  }

  function getUser(oAuthProvider, oAuthID) {
    return select('id', 'name')
      .from('users')
      .where({
        oauth_provider: oAuthProvider,
        oauth_id: oAuthID
      })
  }

}
