// create a db connection variable so that Heroku Postges can set your Database URL dynamically
const pgConnection = process.env.DATABASE_URL; // DATABASE_URL is the automatic environment variable that heroku postgres will create. 

module.exports = {

  development: {
    client: 'pg', // this is the postgresql client
    connection: {
      host: 'localhost', // you can also use 127.0.0.1
      database: 'tutorialdb', // name your db, you will need this in PGAdmin
      user: 'postgres', // this is your db username
      password: 'marctapp' // this is the password you used when you set up PGAdmin
    },
    migrations: {
      directory: './data/migrations' // you do not need to create this directory, when you run the knex migrate command it will initialize this directory for you
    },
    seeds: {
      directory: './data/seeds'// you do not need to create this directory, when you run the knex migrate command it will initialize this directory for you
    },
  },
  testing: {
    client: 'pg', // this is the postgresql client
    connection: {
      host: 'localhost', // you can also use 127.0.0.1
      database: 'tutorialdb', // name your db, you will need this in PGAdmin
      user: 'postgres', // this is your db username
      password: 'marctapp' // this is the password you used when you set up PGAdmin
    },
    migrations: {
      directory: './data/migrations' // you do not need to create this directory, when you run the knex migrate command it will initialize this directory for you
    },
    seeds: {
      directory: './data/seeds'// you do not need to create this directory, when you run the knex migrate command it will initialize this directory for you
    },
    pool: {
      min: 2,
      max: 10
    }
  },

  production: {
    client: 'pg', // postgresql client
    connection: pgConnection, // this needs to be set because heroku postgres will implement this for you
    migrations: {
      directory: './data/migrations' // you do not need to create this directory, when you run the knex migrate command it will initialize this directory for you
    },
    seeds: {
      directory: './data/seeds'// you do not need to create this directory, when you run the knex migrate command it will initialize this directory for you
    },
  }

};
