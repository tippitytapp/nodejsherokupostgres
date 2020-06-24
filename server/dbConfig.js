// import knex
const knex = require('knex')
// import the dotenv file to use your NODE_ENV variable
require('dotenv').config()
// import your knexfile.js
const knexConfig = require('../knexfile.js')
// read your environment
const environment = process.env.NODE_ENV;
// export your configuration 
// this allows you to dynamically change which db you are using based on what environment you're in
module.exports = knex(knexConfig[environment])