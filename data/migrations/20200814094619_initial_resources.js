
exports.up = function(knex) {
    return knex.schema
    .createTable ('projects', tbl => { 
        tbl.increments('p_id');
        tbl.string('p_name').notNullable();
        tbl.string('p_escription');
        tbl.boolean('p_completed').notNullable().defaultTo(false);
    })
    
    .createTable ('resources', tbl => { 
        tbl.increments('r_id');
        tbl.string('r_name').notNullable();
        tbl.string('r_description');
    })

    .createTable ('tasks', tbl => { 
        tbl.increments('t_id');
        tbl.string('t_description').notNullable();
        tbl.string('t_notes');
        tbl.boolean('t_completed').notNullable().defaultTo(false);
    })
    
    .createTable ('project_resources', tbl => {
        tbl.increments()
        tbl.integer('project_resources_id').unsigned().notNullable().references('p_id').inTable('projects')
        tbl.integer('resource_id').unsigned().notNullable().references('r_id').inTable('resources')
    })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('project_resources')
        .dropTableIfExists('tasks')
        .dropTableIfExists('resources')
        .dropTableIfExists('projects')
};
