exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('comments', function (table) {
  	table.increments('id')
  	table.integer('action_id')
  	table.integer('user_id')
  	table.string('comment')
  	table.timestamps()
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('comments')
}

