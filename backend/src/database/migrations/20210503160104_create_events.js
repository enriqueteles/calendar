const connection = require('../connection');

exports.up = function(knex) {
    return knex.schema.createTable('events', function(table) {
        table.uuid('id').primary().defaultTo(knex.raw(connection.uuidGenerationRaw));
        table.datetime('startDate').notNullable();
        table.datetime('endDate').notNullable();
        table.string('name').notNullable();
        table.string('description').defaultTo(null);
        table.string('tagId')
            .defaultTo(null)
            .references('id')
            .inTable('tags');
        table.string('ownerId')
            .notNullable()
            .references('id')
            .inTable('users');
        table.timestamps();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('events');
};
