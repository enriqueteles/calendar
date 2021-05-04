const connection = require('../connection');

exports.up = function(knex) {
    return knex.schema.createTable('tags', function(table) {
        table.uuid('id').primary().defaultTo(knex.raw(connection.uuidGenerationRaw));
        table.string('name').notNullable();
        table.string('color', 6).defaultTo('04325a');
        table.string('userId')
            .notNullable()
            .references('id')
            .inTable('users');
        table.timestamps();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('tags');
};
