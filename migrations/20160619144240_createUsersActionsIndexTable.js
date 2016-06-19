knexports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('users_actions_index', function (table) {
  	table.integer('user_id')
  	table.integer('action_id')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users_actions_index')
}
