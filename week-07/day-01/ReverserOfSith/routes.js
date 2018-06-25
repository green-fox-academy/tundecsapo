'use strict';

const express = require('express');
const app = express();

app.use(express.json());

//code needs to be refactored, and not every output sentence look like they should
//i just wanted to go on to other exercises,
//and don't want to spend more time on playing with the strings now

app.post('/sith', (req, res) => {
  if (!req.body.text || req.body.text === '') {
    res.json({
      "error": "Feed me some text you have to, padawan young you are. Hmmm."
    });  
  } else {
    let textArr = req.body.text.toLowerCase().split('. ');
    let textArr2 = [];
    for (let j = 0; j < textArr.length; j++) {
      textArr2.push(textArr[j].split(' '));
    }
    let fillArr = ['Arrgh. Uhmm.', 'Err..err.err.'];
    let newArr = [];  

    for (let i = 0; i < textArr2.length; i++) {
      let lilArr = [];
      for (let k = 0; k < textArr2[i].length; k += 2) {
        if (k+1 !== textArr2[i].length) {
          if (k+1 === 1) {
            textArr2[i][k+1] = textArr2[i][k+1].replace(textArr2[i][k+1][0], textArr2[i][k+1][0].toUpperCase());  
          } 
          lilArr.push(textArr2[i][k+1]);
        }
        if (k === textArr2[i].length - 1 && textArr2[i].length % 2 === 1 && i !== textArr2.length - 1) {
          lilArr.push(`${textArr2[i][k]}.`); 
        } else if (k === textArr2[i].length - 2 && textArr2[i].length % 2 === 0 && i !== textArr2.length - 1) {
          lilArr.push(`${textArr2[i][k]}.`); 
        } else {
        lilArr.push(textArr2[i][k]);
        }
      }
      lilArr.push(fillArr[i]);
      newArr.push(lilArr);
    }
    let finArr = [];
    for (let m = 0; m < newArr.length; m++) {
      finArr.push(newArr[m].join(' '));
    }
    let newStr = finArr.join(' ');
    res.json({
      "sith_text": newStr
    });    
  }
});

module.exports = app;
