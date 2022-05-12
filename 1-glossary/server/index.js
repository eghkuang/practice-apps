require("dotenv").config();
const express = require("express");
const path = require("path");
const axios = require("axios");
const db = require("./db.js");
const controller = require("./controller.js");


const app = express();

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));

app.use(express.urlencoded({
  extended: true
}));

/****
 *
 *
 * Other routes here....
 *
 *
 */

// post
app.post('/addEntry', controller.post);

// get
app.get('/getEntry', controller.get);


app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);

