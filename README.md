# superSimpleAgent

**Authors**: Seamus Brown, Clement Buchanan, Sang Lee, Jason Quaglia

**Version**: 0.0.3

## Overview

This is our code 301 Final Project while at Code Fellows. This is an app that helps you parse through the data received from an API call. Instead of trying to `console.log()` to parse through data in your own project, put the API link into our app to see the JSON object and get the relevant data (Remember, __no__ API keys!). Our app will even give you the direct JavaScript that you need to access the data in your own project.

## Getting Started (local server)

1. Install packages: run `npm init`; then run `npm install` to get express, cors, pg, dotenv, superagent, fecha, pretty-print-json
2. Once in IDE: add `.env` file, include: `PORT` and `DATABASE_URL` info
3. Connect to database using psql: database name is associated with the `DATABASE_URL` info and the table name can be found in the `schema.sql` file
4. Start nodemon

## Architecture

This is a mobile first app. The client is build using [EJS](https://ejs.co/) and is styled using CSS. The backend is built using [node.js](https://nodejs.org/en/about/). It uses [Postgres SQL](https://www.postgresql.org/) for its database and [heroku](https://www.heroku.com/platform) as the cloud platform for deployment. The code is hosted on [GitHub](https://github.com/) on the team's [superSimpleAgent](https://github.com/jquaglia/super-simple-agent) repository.

## Change Log

**Timestamp - Description of activity**
1612219947 - Initial set-up of database (table, schema, seed) and server

1612232048 - Confirmed Server working with Heroku deployment.

000000000 - Category search recommendations functional

000000000 - API search functionality works

1612393371812 -  Pretify JSON and `<pre>` tag implemented to display JSON in user friendly manner

1612393371812 - About Me mobile and desktop view styled and contented

1612416220 - Overall site layout (e.g. base.css and layout.css) are complete. Recommendation feature is complete. Dynamic search and search error handling features are complete. JSON prettification is near-complete.

1612461409989 - mobile styling entirely complete

## Credits and Collaborations

Nich Carignan
Skyler Burger

#### Web Resources:

+ Search error handling page gif:
`https://tenor.com/view/milk-mocha-milk-and-mocha-bears-bored-wait-gif-13418519`