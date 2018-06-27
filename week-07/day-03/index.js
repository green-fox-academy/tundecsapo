'use strict';

require('dotenv').config();
const express = require('express');
const mysql = require('mysql');
const app = express();
const PORT = 3000;

const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
})

//connect keeps the connection alive, so we have to close it with conn.end();
//query is a better solution cause you don't have to end it

app.get('/test', (req, res) => {
  let sql = 'SELECT * from author;';
  let queryInputs = [];  

  if (req.query.country) {
    //sql = `SELECT * from author WHERE country = "${req.query.country}";`;  
    //nicer solution:
    sql = 'SELECT * from author WHERE country = ?;';
    queryInputs = [req.query.country];
  }

  conn.query(sql, queryInputs, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send(); //or res.sendStatus(500);  we have to send it because without it it would be a pending request
      return;  
    }
    res.json({
      authors: rows,  
    });
  });  
});

app.listen(PORT, () => {
  console.log(`The server is app and running on port ${PORT}`);  
})