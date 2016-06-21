exports.up = function(knex, Promise) {
  return knex.schema.table('comments', function (table) {
  	table.dropTimeStamps()
  	table.timestamp('created_at')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.table('comments', function (table) {
  	table.dropColumn('created_at')
  	table.timestamps()
  })
}
