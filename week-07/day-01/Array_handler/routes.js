'use strict';

const express = require('express');
const app = express();
app.use(express.json());

app.post('/arrays', (req, res) => {
  if (!req.body.numbers || !req.body.what ) {
    res.json({
      "error": "Please provide what to do with the numbers!"
    });
  } else if (req.body.numbers && req.body.numbers.length === 0) {
    res.json({
      "error": "Please provide numbers!"
    });
  }
  else if (req.body.what === 'sum') {
    let sum = 0;  
    for (let i = 0; i < req.body.numbers.length; i++) {
      sum += req.body.numbers[i];
    }
    res.json({
      "result": sum
    });    
  } else if (req.body.what === 'multiply') {
    let multiple = 1;  
    for (let i = 0; i < req.body.numbers.length; i++) {
      multiple *= req.body.numbers[i];
    }
    res.json({
      "result": multiple
    });    
  } else if (req.body.what === 'double') {
    let newArr = [];  
    for (let i = 0; i < req.body.numbers.length; i++) {
      newArr.push(req.body.numbers[i] * 2);
    }
    res.json({
      "result": newArr
    });
  }
});

module.exports = app;
