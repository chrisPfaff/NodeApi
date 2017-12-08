const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const bodyParser = require("body-parser");
const path = require('path');

const db = require("./config/db");

const app = express();

const port = 8080;

app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'app/views'));


app.use(express.static(path.join('app/public')));

MongoClient.connect(db.url, (err, database) => {
  console.log("here");
  if (err) {
    console.log(err);
  } else {
    require("./app/routes")(app, database);
    app.listen(port, () => {
      console.log(`we are listening on port ${port}`);
    });
  }
});
