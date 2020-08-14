
exports.up = function(knex) {
    return knex.schema
    .createTable ('projects', tbl => { 
        tbl.increments('id');
        tbl.string('name').notNullable();
        tbl.string('description');
        tble.boolean('completed').defaultTo(false);
    })
    
    .createTable ('resources', tbl => { 
        tbl.increments('id');
        tbl.string('name').notNullable();
        tbl.string('description');
    })

    .createTable ('tasks', tbl => { 
        tbl.increments('id');
        tbl.string('description').notNullable();
        tbl.string('notes');
        tble.boolean('completed').defaultTo(0);
    })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('tasks')
        .dropTableIfExists('resources')
        .dropTableIfExists('projects')
};
