'use strict';

// ========= Create server =========
const express = require('express');
const superagent = require('superagent');
const pg = require('pg');
const prettyPrintJson = require('pretty-print-json');
const fecha = require('fecha');
// const format = fecha.format;
// const beautify = require('beautify');
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
function getIndex(req, res) {
  console.log('Yes, we are here');
  res.render('pages/index.ejs');
}


function makeSearch(req, res) {
  // const url = req.body.search[0];
  const url = 'https://pokeapi.co/api/v2/pokemon/ditto'
  superagent.get(url)
    .then(results => {
      const data = results.body;
      const html = prettyPrintJson.prettyPrintJson.toHtml(data);
      res.render('pages/search-results.ejs', { html: html, url: url });
    })
    .catch(error => console.log(error));
};

function saveResult(req, res) {
  // 2021-02-01 20:10:05
  const url = req.body.url;
  const codename = req.body.codename;
  const timestamp = fecha.format(new Date(), 'YYYY-MM-DD HH:mm:ss')
  const sqlQuery = 'INSERT INTO apis (url, time_stamp, code_name) VALUES ($1, $2, $3);';
  const sqlArray = [url, timestamp, codename];
  client.query(sqlQuery, sqlArray)
    .then(result => {
      console.log(result);
      res.redirect('/collection')
    })
    .catch(error => console.log(error));
};

function getAboutUs(req, res) {
  res.render('pages/about-us.ejs');

}

function getSavedSearches(req, res) {
  res.render('pages/collection.ejs');

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
