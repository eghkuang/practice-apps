const mysql = require("mysql2");
const Promise = require("bluebird");

// Configure process.env variables in ../.env
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  // database: process.env.DB_NAME,
});

const db = Promise.promisifyAll(connection, { multiArgs: true });

db.connectAsync()
  .then(() => console.log(`Connected to MySQL as id: ${db.threadId}`))
  // .then(() => db.queryAsync(`DROP DATABASE IF EXISTS ${process.env.DB_NAME}`))
  .then(() => db.queryAsync(`CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME}`))
  .then(() => db.queryAsync(`USE ${process.env.DB_NAME}`))
  .then(() =>
    // Expand this table definition as needed:
    db.queryAsync(
      `CREATE TABLE IF NOT EXISTS peopleinformation (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100),
        email VARCHAR(100),
        password VARCHAR(100),
        session VARCHAR(150)
        )`
    )
  )
  .catch((err) => console.log(err));

//-----functions here---------

addUser = function(data, res) {
  // console.log('db post??', data)
  var body = data.body;
  var session = data.session_id;
  return db.queryAsync(
    `INSERT INTO peopleinformation (name, email, password, session) VALUES ("${body.name}", "${body.email}", "${body.password}", "${session}")`
  )
  .then((results) => {
    console.log('it worked ha')
    res.status(201).send(results)
  })
  .catch((err) => {
    console.log('o no')
    res.status(500).send(err);
  })
}




module.exports = {
  db: db,
  addUser: addUser
}
