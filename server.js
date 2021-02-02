'use strict';

//======== Create server =======//
const express = require('express');
const superagent = require('superagent');
const pg = require('pg');
require('dotenv').config();

// ========= Setup Application Server =========
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
client.on('error', (error) => console.log(error));

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
  res.send('Hello World!');
};

function makeSearch (req, res) {


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
