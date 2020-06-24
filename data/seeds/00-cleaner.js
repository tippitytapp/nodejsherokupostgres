// import the knex cleaner
const cleaner = require('knex-cleaner')
// optional import colors
const colors = require('colors')

// export seed file
exports.seed = function(knex){
  return cleaner
    .clean(knex, {
      mode: "delete",
      restartIdentity: true, // tell postgresql to rest teh primary keys
      ignoreTables: ["knex_migrations", "knex_migrations_lock"], // these tables are automatically generated when you you knex... it saves the migrations data and the seeds data
    })
    .then(() => {
      console.log("\n == All tables truncated, ready to seed == \n".cyan.bold.underline)
    })
}