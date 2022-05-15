require("dotenv").config();
const express = require("express");
const path = require("path");
const sessionHandler = require("./middleware/session-handler");
const logger = require("./middleware/logger");

// Establishes connection to the database on server start
const db = require("./db");

const app = express();

//-----parser hmst-----
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

// Adds `req.session_id` based on the incoming cookie value.
// Generates a new session if one does not exist.
app.use(sessionHandler);

// Logs the time, session_id, method, and url of incoming requests.
app.use(logger);

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));

/****
 *
 *
 * Other routes here....
 *
 *
 */

app.post('/theGoods', (req, res) => {
  // console.log('res in post', res.body)
  db.addUser(req, res);
  // , (err, results) => {
  //   if (err) {
  //     res.status(404).send(err);
  //   } else {
  //     res.status(201).send(results);
  //   }
  // })

})

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
