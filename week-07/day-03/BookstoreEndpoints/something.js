'use strict';

//require('dotenv').config();
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

let books = [];
app.get('/books', (req, res) => {
  let sql = 'SELECT book_name from book_mast;';
  let queryInputs = [];  

  /*
  if (req.query.country) {
    //sql = `SELECT * from author WHERE country = "${req.query.country}";`;  
    //nicer solution:
    sql = 'SELECT * from author WHERE country = ?;';
    queryInputs = [req.query.country];
  }
  */
  
  conn.query(sql, queryInputs, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send(); //or res.sendStatus(500);  we have to send it because without it it would be a pending request
      return;  
    }
    res.json({
      books: rows,  
    });
    for (let i = 0; i < rows.length; i++) {
      books.push(rows[i].book_name);
    }
  });  
});

/*
let listCont = document.querySelector('div');

for (let i=0; i < books.length; i++) {
  let li = document.createElement('li');
  li.innerHTML = books[i];
  listCont.appendChild(li);
}*/

console.log(books);

const http = new XMLHttpRequest();
http.open('GET', '/books', true);
http.onload = () => {
  const response = JSON.parse(http.responseText);
  const container = document.querySelector('#pics');
  response.data.forEach((element) => {
    const div = document.createElement('div');
    const image = document.createElement('img');
    image.src = element.images.fixed_width_still.url;
    image.addEventListener('click', () => {
      image.setAttribute()  
      image.setAttribute('src', element.images.fixed_height.url)  
    })
    container.appendChild(image);       
  })
}
app.listen(PORT, () => {
  console.log(`The server is app and running on port ${PORT}`);  
})