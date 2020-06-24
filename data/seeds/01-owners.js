
exports.seed = function(knex) {

      return knex('owners').insert([
        {id: 1, fname: 'Johnny', lname: 'Appleseed', email: 'jappleseed@trees.com', phone: '555-512-5555'},
        {id: 2, fname: 'Margaret', lname: 'Teas', email: 'margeteas@google.com', phone: '555-722-4141'},
        {id: 3, fname: 'Tammy', lname: 'Rodriguez', email: 'tammytam@rodriguez.com', phone: '555-555-5555'}
      ])
      .then(() => {
        console.log("\n == Owners Table Seeded == \n".magenta.bold.underline)
      })
};
