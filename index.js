// allows you to read the environment variable from the .env file
require('dotenv').config()
// imports the server file in 
const server = require('./server/server.js')
// allows for custom color output in the terminal
const colors = require('colors')
// logs api call information to the terminal
const morgan = require('morgan')

// define environment variables for port and environment
const PORT = process.env.PORT
const ENV = process.env.NODE_ENV

// this turns on api call logger, only if in development.
if(ENV === 'development'){
    server.use(morgan('dev'))
}

// this turs on the server. ensures the server is listening on the defined port
// its important to make sure that the port is a variable and not hardcoded in.
// when you deploy to heroku, they will assign ports based on their availability
server.listen(PORT, () => {
    console.log(`\n ===== Server running in ${ENV} mode on port ${PORT} ===== \n`.magenta.bold.underline)
})