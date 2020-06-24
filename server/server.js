// import express.... base of your server
const express = require('express')

// import helmet... basic security
const helmet = require('helmet')
// declare server using express
const server = express()
// import cors. without cors, this implementation will not be accessible to the frontend
const cors = require('cors')
// ensure that the entire server will use helmet
server.use(helmet())
// ensure the entire server can parse json
server.use(express.json())
// ensure the entire server will use cors
server.use(cors())

// allows you to do a _GET_ request to the server to ensure its online
server.get('/', (req, res) => {
    res.status(200).json({
        api: "Online"
    })
})

// export your server so you can import it into your index.js file
module.exports=server;