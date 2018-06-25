'use strict';

const express = require('express');
const app = express();

app.use(express.json());
app.use('/assets', express.static('assets'));
  
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/doubling', (req, res) => {
  let message = '';
  if (req.query.input) {
    res.json({
      "received": req.query.input,
      "result": 2 * req.query.input 
    });   
  } else {
    res.json({
      "error": "Please provide an input!"  
    });
  }   
});

app.get('/greeter', (req, res) => {
  if (!req.query.name && !req.query.title) {
    res.json({
      "error": "Please provide a name!"
    });
  } else if (!req.query.name && req.query.title) {
    res.json({
        "error": "Please provide a name!"
      });  
  } else if (req.query.name && !req.query.title) {
    res.json({
      "error": "Please provide a title!"
    });  
  } else if (req.query.name && req.query.title) {
    res.json({
      "welcome_message": `Oh, hi there ${req.query.name}, my dear ${req.query.title}!`
    });   
  } 
});

app.get('/appenda/:appendable', (req, res) => {
  if (req.params) {
    res.json({
      "appended": `${req.params.appendable}a`
    });  
  } 
});

app.post('/dountil/:what', (req, res) => {
  console.log(req.body);
  console.log(req.params);

  let num = req.body.until;
  let resultSum = 0;
  let resultFact = 1;
  if (!req.body.until) {
    res.json({
      "error": "Please provide a number!"
    });  
  } else if (req.body.until) {
    if (req.params.what === 'sum') {
      for (let i = num; i > 0; i-- ) {
        resultSum += i;
      }
      res.json({
        "result": resultSum
      });    
    } else if (req.params.what === 'factor') {
      for (let i = num; i > 0; i-- ) {
        resultFact *= i;
      }
      res.json({
        "result": resultFact
      });    
    }
  }
});

module.exports = app;