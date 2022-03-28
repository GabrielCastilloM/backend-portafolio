const mysql = require('mysql2');
const { config } = require('./../config/config');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);

const pool = mysql.createPool({
    host     : config.dbHost,
    user     : USER ,
    password : PASSWORD,
    database : config.dbName,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  });

//   const promisePool = pool.promise()

// let query = `INSERT INTO prueba (nombre, lasname) VALUES (?, ?);`;

// // Value to be inserted
// let nombre = "Pratik";
// let lasname = "My Address";

// // Creating queries
// pool.query(query, [nombre,
//   lasname], (err, rows) => {
//   if (err) throw err;
//   console.log("Row inserted with id = "
//       + rows.insertId);
// });

module.exports = pool;

