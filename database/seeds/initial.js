exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { id: 1, username: 'barbara', password: 'moore', department: 'math' },
        { id: 2, username: 'ben', password: 'ransom', department: 'science' },
        { id: 3, username: 'joe', password: 'garcia', department: 'math' },
      ]);
    });
};
