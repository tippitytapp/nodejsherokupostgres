
exports.up = function(knex) {
        return knex.schema.createTable('owners', owners => {
            owners.increments()
            owners.string('fname')
                .notNullable()
            owners.string('lname')
                .notNullable()
            owners.string('email')
                .notNullable()
            owners.string('phone')
        })
        .createTable('animals', animals => {
            animals.increments()
            animals.string('name')
                .notNullable()
            animals.string('age')
            animals.string('firstseen')
            animals.string('type')
                .notNullable()
            animals.integer('owner_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('owners')
                .onUpdate('CASCADE')
                .onDelete('RESTRICT')
        })
};

exports.down = function(knex) {
        return knex.schema.dropTableIfExists('animals')
        .dropTableIfExists('owners')
};
