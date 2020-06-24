
exports.seed = function(knex) {
      return knex('animals').insert([
        {id: 1, name: 'Sarah', age: '15 years', firstseen:'Jan 1, 2016', type: 'dog', owner_id: 1},
        {id: 2, name: 'Bengie', age: '2 years', firstseen:'Jun 8, 2019', type: 'dog', owner_id: 2},
        {id: 3, name: 'Kitty', age: '2 years', firstseen:'Jun 8, 2019', type: 'cat', owner_id: 2},
        {id: 4, name: 'Marley', age: '8 months', firstseen:'Oct 10, 2019', type: 'dog', owner_id: 3}
      ])
      .then(()=>{
        console.log("\n == Animals Table Seeded == \n".red.bold.underline)
      })
};
