'use strict';

// ========= Create server =========
const express = require('express');
const superagent = require('superagent');
const pg = require('pg');
const prettyPrintJson = require('pretty-print-json');
require('dotenv').config();

// ========= Setup Application Server =========
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
// client.on('error', (error) => console.log(error));

// ========= Global Variables =========
const DATABASE_URL = process.env.DATABASE_URL;
const client = new pg.Client(DATABASE_URL);
const PORT = process.env.PORT || 3111;

// ========= Routes =========
app.get('/', getIndex);
app.post('/search', makeSearch);
app.post('/save', saveResult);
app.get('/about-us', getAboutUs);
app.get('/collection', getSavedSearches);
app.get('/recommendation', getRecApis);

// ========= Route Callbacks =========
function getIndex(req, res){
  console.log('Yes, we are here');
  res.render('pages/index.ejs');
};

function makeSearch (req, res) {
  // const url = 'https://pokeapi.co/api/v2/pokemon/ditto'
  // superagent.get(url)
  //   .then(results => {
  //     console.log(results.body);
  //     // res.send(JSON.stringify(results.body, null, 2));
  //     res.render('pages/search-results.ejs', { results: results.body });
  //     // res.send(results.body);
  //   })

}

function saveResult (req, res) {


}

function getAboutUs (req, res) {


}

function getSavedSearches (req, res) {


}

function getRecApis (req, res) {


}


// ========= Helper Functions =========


// ========= Start Server =========
client.connect().then(() => {
  app.listen(PORT, console.log(`We are here on ${PORT}`));
}).catch(error => console.error(error));
