# Express with NodeJs. Deployment to Heroku, and Database Management with Postgresql

- in this project, i will be pretending to work in a veterinary clinic and need to store that data for what animal belongs to what owner

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

## PLAN YOUR DATABASE
1. before you create your tables, you should plan your db out
2. you should know what tables you need, how they will connected
3. what foreign keys you will need

## After planning - create tables
1. run the command `knex migrate:make <file-name>` or if you dont have knex globally installed run `npx knex migrate:make <file-name>`
    1. you will notice the filepath created that you put in the knexfile under migrations
    2. create your tables
2. after you create your tables, open PGAdmin and add the database
3. back in your terminal run the command `knex migrate:latest` or if you dont have knex installed globally run `npx knex migrate:latest`
    1. this will send your tables to Postgresql
4. back in PG admin, refresh your database and open the file tree to schemas, verify your tables have shown up

### OPTIONAL - To create seeds
1. for each table you wish to make seeds for, you need to run the command `knex seed:make <file-name>` or `npx knex seed:make <file-name>` 
    1. it is important to note that you need to number these files, and you need to make the seed files in the same order you made your tables. 
    2. also, because you are using postgres, make sure you give default values for the ids
2. once you finish creating your seed files, run the command `knex seed:run` or `npx knex seed:run`
3. You can then go check your PGAdmin, refresh your database, navigate the tree down to schemas, and check your tables.

## Deploy to Heroku
1. if you have an account with heroku, you can proceed to step 2.. if not, i advise you to create a free account [here](http://www.heroku.com)
2. On the heroku dashboard, in the upper right hand corner, there is a 'new' button. Click that button and 2 options will be present. click the "Create New App" button.
3. Give your app a name, and then click "Create App"
4. On the next page, you should land on "Deploy" page of your new app. 
5. I will explain later how to use Heroku CLI
6. For now, click the GitHub button in the middle.
7. use the search bar to find your repo, and then click "connect"
8. I then enable automatic deploys
9. Lastly, i hit the deploy branch button on the bottom.

## Add Heroku Postgres
1. On the 'Overview' page of your app on Heroku, click the configure add-ons button.
2. Search for `Heroku Postgres`
3. In the pop-up hit `Provision`
4. Once again on the `Overview` page you should see a notice that the DATABASE_URL has been added. if you do, continue.
5. In the upper right hand corner you will see a dropdown button that says `More`, click it and select, `Run Console`
6. In the popup type `bash` and hit enter
7. whenever it loads, you should be able to migrate your tables and seed your data here. 
    1. use the following command to migrate `knex migrate:latest` or `npx knex migrate:latest`
    2. use the following command to seed `knex seed:run` or `npx knex seed:run`

## Verify your app is online
1. you can then click the `x` to close out of the console
2. then in the top right corner you will be able to click the `Open App` button
3. if you set up a `server.get` on your main `server.js` file, you should see your message
```
{
    "api": "online"
}
```

# SUCCESS 
1. if you saw your message you successfully added it