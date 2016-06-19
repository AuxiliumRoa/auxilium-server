exports.up = function(knex, Promise) {
  return knex.schema.table('users', function (table) {
  	table.string('oauth_provider')
  	table.string('oauth_id')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.table('users', function (table) {
  	table.dropColumn('oauth_provider')
  	table.dropColumn('oauth_id')
  })
}
