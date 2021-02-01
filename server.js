'use strict';

//======== Create server =======//
const express = require('express');
const superagent = require('superagent');
require('dotenv').config();
const pg = require('pg');

//======= Setup Application Server =====//
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./public'));
app.set('view engine', 'ejs');
const DATABASE_URL = process.env.DATABASE_URL;
const client = new pg.Client(DATABASE_URL);
client.on('error', (error) => console.log(error));

//======= Global Variables =======//
const PORT = process.env.PORT || 3111;

//======= Routes ======//
app.get('/', getIndex);
app.post('/search', makeSearch);
app.post('/save', saveResult);
app.get('/about-us', getAboutUs);
app.get('/collection', getSavedSearches);
app.get('/recommendation', getRecApis);


//======= Route Callbacks =====//
function getIndex(req, res){
  console.log('Yes, we are here');

}

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


//======= Helper Functions =====//


//======= Start Server =====//
client.connect().then(() => {
  app.listen(PORT, console.log(`We are here on ${PORT}`));
}).catch(error => console.error(error));