
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {p_id: 1, p_name: 'rowValue1', p_description: 'rowValue1', p_completed: 'rowValue1'},
        {p_id: 2, p_name: 'rowValue2', p_description: 'rowValue2', p_completed: 'rowValue2'},
        {p_id: 3, p_name: 'rowValue3', p_description: 'rowValue3', p_completed: 'rowValue3'}
      ]);
    });
};
