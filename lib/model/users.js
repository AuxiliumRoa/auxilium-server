'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Users;
function Users(knex) {

  return {

    getOrCreate: function getOrCreate(oAuthProvider, oAuthID, oAuthName) {
      return getUser(oAuthProvider, oAuthID).then(function (user) {
        return user ? user : knex('users').insert({
          name: oAuthName,
          oauth_provider: oAuthProvider,
          oauth_id: oAuthID
        }).then(function () {
          return getUser(oAuthProvider, oAuthID);
        });
      });
    }

  };

  function getUser(oAuthProvider, oAuthID) {
    return knex.select('id', 'name').from('users').where({
      oauth_provider: oAuthProvider,
      oauth_id: oAuthID
    }).then(function (rows) {
      return rows.length > 0 ? rows[0] : null;
    });
  }
}