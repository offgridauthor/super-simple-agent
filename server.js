'use strict';

// ========= Create server =========
const express = require('express');
const superagent = require('superagent');
const pg = require('pg');
const prettyPrintJson = require('pretty-print-json');
const fecha = require('fecha');
require('dotenv').config();

// ========= Setup Application Server =========
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

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
  res.render('pages/index.ejs');
};


function makeSearch(req, res) {
  if (req.body.search[0] !== '') { //see comment below on res.redirect within this function on why this if statement was created
    const url = req.body.search[0];

    superagent.get(url)
      .then(results => {
        const data = results.body;
        //using pretty print JSON to make that JSON beautiful
        const html = prettyPrintJson.prettyPrintJson.toHtml(data);
        res.render('pages/search-results.ejs', { html: html, url: url });
      })
      .catch(error => {
        //error handling
        res.status(500).render('pages/error.ejs');
        console.log(error);
      });
  } else {
    res.redirect('/'); //if user clicks on get recommendations button without making a selection from the dropdow (e.g. default value), then it will redirect them to index -- essentially this keeps them on the index page -- it's handling an edge case
  }
};

// saving responses user wants to save to the DB
function saveResult(req, res) {
  const url = req.body.url;
  const codename = req.body.codename;
  const timestamp = fecha.format(new Date(), 'YYYY-MM-DD HH:mm:ss')
  const sqlQuery = 'INSERT INTO apis (url, time_stamp, code_name) VALUES ($1, $2, $3);';
  const sqlArray = [url, timestamp, codename];
  client.query(sqlQuery, sqlArray)
    .then(result => {
      res.redirect('/collection');
    })
    .catch(error => {
      res.status(500).send('API not saved');
      console.log(error);
    });
};

//takes user to about us page
function getAboutUs(req, res) {
  res.render('pages/about-us.ejs');

};

//retrieves the searches saved in db and renders them to page
function getSavedSearches(req, res) {
  const sqlQuery = 'SELECT * FROM apis;';
  client.query(sqlQuery)
    .then(result => {
      res.render('pages/collection.ejs', { apis: result.rows })
    })
    .catch(error => {
      res.status(500).send('Error, apis not found');
      console.log(error);
    });
};

// displays recommended API's to the user
function getRecApis(req, res) {
  if (req.query.category !== 'default') {
    //see comment below on res.redirect within this function on why this if statement was created
    const category = req.query.category;
    const url = `https://api.publicapis.org/entries?category=${category}`;
    superagent.get(url).then(obj => {
      const recs = obj.body.entries.map(item => new RecommendedApi(item));
      res.render('pages/recommendations.ejs', { recs: recs, category: category });
    })
      .catch(error => {
        res.status(500).send('Something went wrong with Big PAPA');
        console.log(error.message);
      });
  } else {
    res.redirect('/'); //if user clicks on get recommendations button without making a selection from the dropdow (e.g. default value), then it will redirect them to index -- essentially this keeps them on the index page -- it's handling an edge case
  }
};


// ========= Helper Functions =========
//recommended API constructor
function RecommendedApi(obj) {
  this.name = obj.API;
  this.description = obj.Description;
  this.url = obj.Link;
  this.cors = obj.Cors;
}

// ========= Start Server =========
client.connect().then(() => {
  app.listen(PORT, console.log(`We are here on ${PORT}`));
}).catch(error => console.error(error));
