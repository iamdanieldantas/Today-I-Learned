exports.up = function (knex) {
  return knex.schema
    .alterTable('tools', function (table) {
      table.string('title', 100).notNullable();
      table.string('link', 100).notNullable();
      table.string('description', 255).notNullable();
    })
};

exports.down = function (knex) {
  return knex.schema
    .alterTable('tools', function (table) {
      table.increments('id');
      table.string('title', 255).notNullable();
      table.string('link', 255).notNullable();
      table.string('description', 255).notNullable();
      table.specificType('tags', 'text ARRAY');
    })
};