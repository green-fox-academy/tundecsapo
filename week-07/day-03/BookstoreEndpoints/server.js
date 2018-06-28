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

app.get('/api/books/catalog', (req, res) => {
  let title = '';
  let plt = '';
  let pgt = '';
  let author = 'WHERE book_mast.aut_id = author.aut_id';
  let category = ' AND book_mast.cate_id = category.cate_id';
  let publisher = ' AND book_mast.pub_id = publisher.pub_id';
  let queryInputs = [];
 
  console.log(req.query);
  if (req.query.author) {
    //if (queryInputs.length === 0) {  
    //  author = `WHERE author.aut_name LIKE "${req.query.author}"`;
    //} else {
    author += ` AND author.aut_name LIKE "%${req.query.author}%"`;
    //}
    queryInputs.push(req.query.author);        
  }
  if (req.query.category) {  
    category += ` AND category.cate_descrip LIKE "%${req.query.category}%"`;
    queryInputs.push(req.query.category);    
  }
  if (req.query.publisher) {
    publisher += ` AND publisher.pub_name LIKE "%${req.query.publisher}%"`;    
    queryInputs.push(req.query.publisher);            
  }
  if (req.query.title) {
    title = ` AND book_mast.book_name LIKE "%${req.query.title}%"`;
    queryInputs.push(req.query.title);                
  }
  if (req.query.plt) {
    plt = ` AND book_mast.book_price <= ${req.query.plt}`;       
    queryInputs.push(req.query.plt);                
  }
  if (req.query.pgt) {
    pgt = ` AND book_mast.book_price >= ${req.query.pgt}`;
    queryInputs.push(req.query.pgt);                
  }
  console.log(queryInputs);
  let sqldata = `SELECT book_name, aut_name, cate_descrip, pub_name, book_price FROM book_mast, author, category, publisher ${author}${category}${publisher}${title}${plt}${pgt};`;
  console.log(sqldata);
  queryInputs = [];
  conn.query(sqldata, queryInputs, (err, books) => {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;  
    }  
    console.log(books);
    res.json({
      books,  
    });
  });
});

app.listen(PORT, () => {
  console.log(`The server is app and running on port ${PORT}`);  
})
