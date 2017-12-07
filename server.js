const express = require('express');
const path = require('path');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

const app = express();

const port = 8080;

app.use(bodyParser.urlencoded({extended: true}));

require('./app/routes')(app, {});

app.listen(port, () => {
  console.log(`we are listening on port ${port}`);
});
