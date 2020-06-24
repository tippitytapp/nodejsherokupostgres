# Express with NodeJs. Deployment to Heroku, and Database Management with Postgresql

## Initial setup and package installation

1. In your terminal, run the command `npm init -y`, this will create your `package.json` file with default values
2. In your terminal, run the command `npm i`, this will create your `package-lock.json` file.
3. In your terminal, install the dependencies you will need by running the command `npm i <package-name>`
    1. you can install multiple packages at the same time by running the following command `npm i <1st-pkg-name> <2nd-pkg-name>`
    2. Packages i will be using in this project are (links to the npmjs below):
        1. `colors` - used for printing to the terminal in custom colors - not necessary
        2. `cors` - used for frontend to backend communication.
        3. `dotenv` - used for reading values from the `.env` file
        4. `express` - this is the base package for the server
        5. `helmet` - used for generic security implementation
        6. `knex` - used for database creation, and querying
        7. `knex-cleaner` - used to clean seed files
        8. `morgan` - used for printing api calls to the console during development 
        9. `nodemon` - used during development to dynamically restart server after any changes
        10. `pg` - this is postgres, used to manage our database

## My work flow for creating the server

1. create a new file called `index.js`
2. create a file called `.env`
3. create a folder called `server`
    1. in this folder, create a file called `server.js`
    2. also in this folder, create a file called `dbConfig.js`
        1. we will code this file a little bit later
        2. This file is what allows you to query your database with Knex

## Coding the server initialization

1. starting with the `.env` file
    1. create a `PORT` variable
        1. in my case it will look like this `PORT=5551`
    2. create a `NODE_ENV` variable
        1. in case it will look like this `NODE_ENV=development`
2. In your `index.js` file, you need to "turn your server on".
3. in your `server.js` file, you need to set up your server
    1. I personally always put a `server.get()` so I can verify my API is online
4. After completing steps 1 - 3 you should be able to open your browser or postman to (in my case) `localhost:5551` and you should see a message similar to:
```
{
    "api": "Online"
}
```

## Initialize your Database using Knex
1. in your terminal run the command `knex init`
    1. if you do not have knex installed globally, you may have to use the command `npx knex init`
    2. This will create your `knexfile.js`
2. in your `knexfile.js` is where things get tricky. especially if you plan on using Postgresql for your database management
    1. Pay special attention to the connection of your development and production environments.
    2. make sure you create a connection variable for pg
3. now its time to code the `dbConfig.js` file
