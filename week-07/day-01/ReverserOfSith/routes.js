'use strict';

const express = require('express');
const app = express();

app.use(express.json());
//app.use('/assets', express.static('assets'));

/*
{
  "text": "This is my example sentence. Just for fun."
}*/

app.post('/sith', (req, res) => {
  if (!req.body.text || req.body.text === '') {
    res.json({
      "error": "Feed me some text you have to, padawan young you are. Hmmm."
    });  
  } else {
    let textArr = req.body.text.toLowerCase().split(' ');
    let newArr = [];  
    for (let i = 0; i < textArr.length; i += 2) {
      if (textArr[i+1] !== undefined) {  
        newArr.push(textArr[i+1]);
      }
      newArr.push(textArr[i]);
    }
    let newStr = textArr.join(' ');
    let tempArr = newStr.split('.');
    let fillArr = ['Arrgh. Uhmm.', 'Err..err.err.'];
    let finArr = [];
    for (let i = 0; i < tempArr.length; i++) {
      tempArr[i].replace(tempArr[i][0], tempArr[i][0].toUpperCase());  
      finArr.push(tempArr[i]);
      finArr.push(fillArr[i]);
    }
    let finString = finArr.join('.');
    res.json({
      "sith_text": finString
    });    
  }
});

module.exports = app;
