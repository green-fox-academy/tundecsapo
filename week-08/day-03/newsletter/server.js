'use strict';

const express = require('express');
const path = require('path');
const PORT = 3000;
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//app.set('view engine', 'ejs');
app.use('/static', express.static('static'));
app.use(express.json());

let signups = [];

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'));
});

app.post('/signup', (req, res) => {
  signups.push({
    id: signups.length + 1,
    username: req.body.username,
    email: req.body.email,
  })  
  let message = `Thanks ${req.body.username}, we will send updates to ${req.body.email}!`;

  res.json({
    message,  
  }); 
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
