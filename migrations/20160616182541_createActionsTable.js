exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('actions', function (table) {
  	table.increments('id')
  	table.string('title')
  	table.string('image-url')
  	table.string('who')
  	table.string('what')
  	table.string('where')
  	table.string('when')
  	table.string('why')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('actions')
}
