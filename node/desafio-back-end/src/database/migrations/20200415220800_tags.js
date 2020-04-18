
exports.up = function (knex) {
  return knex.schema
    .createTable('tags', function (table) {

      table.string('tag_name', 20).notNullable();
      table.integer('tools_id').notNullable();
      table
        .foreign("tools_id")
        .references("id")
        .inTable("tools");

      table.primary(['tag_name', 'tools_id'])

    })
};

exports.down = function (knex) {
  return knex.schema
    .createTable('tags', function (table) {

      table.string('tag_name', 20).notNullable();
      table.integer('tools_id').notNullable();
      table
        .foreign("tools_id")
        .references("id")
        .inTable("tools");

      table.primary(['tag_name', 'tools_id'])

    })
};
