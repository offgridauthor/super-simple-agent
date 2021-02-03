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
app.get('/recommendations', getRecApis);

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

function saveResult(req, res) {


}

function getAboutUs(req, res) {


}

function getSavedSearches(req, res) {


}

function getRecApis(req, res) {
  // const category = req.body.category;
  // const category = 'news';
  // const url = `https://api.publicapis.org/entries?category=${category}`;

  // superagent.get(url).then(obj => {
  //   const recs = obj.body.entries.map(item => new RecommendedApi(item));
  //   console.log('****** recs ******', recs);
  //   console.log('###### req.body #####', req.body);

  //   res.render('pages/recommendations.ejs', { recs: recs });
  // })
  //   .catch(error => {
  //     res.status(500).send('Something went wrong with Big PAPA');
  //     console.log(error.message);
  //   });

}


// ========= Helper Functions =========

// Shay's Helpers
function RecommendedApi(obj) {
  // console.log('&&&&&& Api obj &&&&&', obj);
  this.name = obj.api;
  this.description = obj.description;
  this.url = obj.link;
  this.cors = obj.cors;
}

// ========= Start Server =========
client.connect().then(() => {
  app.listen(PORT, console.log(`We are here on ${PORT}`));
}).catch(error => console.error(error));
