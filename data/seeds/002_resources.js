
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {r_id: 1, r_name: 'rowValue1', r_description: 'rowValue1'},
        {r_id: 2, r_name: 'rowValue2', r_description: 'rowValue2'},
        {r_id: 3, r_name: 'rowValue3', r_description: 'rowValue3'},

      ]);
    });
};
