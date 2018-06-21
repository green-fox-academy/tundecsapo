'use strict';

const express = require('express'); //we never want to change this content --> const
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!!!!!');
})

/* ===
app.get('/', function(req, res) {
  res.send('Hello');
})
*/

app.listen(PORT, () => {
  console.log(`Yey, I am running on port ${PORT}`);  
})

//you can stop the server by ctrl+c

//npm i nodemon -g  --we can use nodemon server
//it is watching for every file in every type






