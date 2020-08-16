
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {t_id: 1, t_description: 'rowValue1', t_notes: 'rowValue1', t_completed: 'rowValue1'},
        {t_id: 2, t_description: 'rowValue2', t_notes: 'rowValue2', t_completed: 'rowValue2'},
        {t_id: 3, t_description: 'rowValue3', t_notes: 'rowValue3', t_completed: 'rowValue3'}
      ]);
    });
};
