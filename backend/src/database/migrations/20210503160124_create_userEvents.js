const connection = require('../connection');

exports.up = function(knex) {
    return knex.schema.createTable('userEvents', function(table) {
        table.uuid('id').primary().defaultTo(knex.raw(connection.uuidGenerationRaw));
        table.string('userId')
            .notNullable()
            .references('id')
            .inTable('users');
        table.string('eventId')
            .notNullable()
            .references('id')
            .inTable('events');
        table.timestamps();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('userEvents');
};
