
exports.up = function(knex, Promise) {
  return knex.schema.table('comments', function (table) {
   	table.string('created_at')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.table('comments', function (table) {
   	table.dropColumn('created_at')  	
  })
}
