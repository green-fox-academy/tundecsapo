'use strict';

require('dotenv').config();
const express = require('express'); 
const mysql = require('mysql');
const path = require('path');
const app = express();
const PORT = 3000;

app.use('/static', express.static('static')); 
app.use('/assets', express.static('assets'));

const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
})

let books = [];
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

app.get('/api/books/titles', (req, res) => {
  let sql = 'SELECT book_name from book_mast;';
   
  conn.query(sql, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;  
    }  
    res.json({
      books: rows,  
    });
  });
});

app.listen(PORT, () => {
  console.log(`The server is app and running on port ${PORT}`);  
})
