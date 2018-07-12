'use strict';

require('dotenv').config();
const express = require('express');
const mysql = require('mysql');
const path = require('path');
const app = express();
const PORT = 3000;
app.use('/static', express.static('static'));
app.use(express.json());

const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,  
})

app.get('/', (req, res) => {
  //if (Object.keys(req.query).length === 0) {  
    res.sendFile(path.join(__dirname, './index.html')); 
  //}
})

app.get('/questions', (req, res) => {
  if (Object.keys(req.query).length === 0) {
    res.sendFile(path.join(__dirname, './manage.html'));  
  } else { 
  let sql = `SELECT * FROM questions;`;
  console.log('I received sth');   
  conn.query(sql, (err, questions) => {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;  
    } 
    res.json({
      questions,  
    });  
     //res.sendStatus(200);
  });
  }
})

app.get('/game', (req, res) => {
    let sql = `SELECT * FROM questions LEFT JOIN answers ON questions.id = answers.question_id WHERE answers.question_id = ${req.query.id};`;
    let answer = [];
    console.log('I received a question');   
    conn.query(sql, (err, question) => {
      if (err) {
        console.log(err);
        res.status(500).send();
        return;  
      } 
      for (let i = 0; i < question.length; i++) {
        let option = {'question_id': question[i].question_id, 'id': question[i].id, 'answer': question[i].answer, 'is_correct': question[i].is_correct};  
        answer.push(option)  
      }
      res.json({
        id: question[0].question_id,
        question: question[0].question,
        answers: answer, 
      });  
       //res.sendStatus(200);
    });
  })

app.listen(PORT, () =>{
  console.log(`Server is up and running on port ${PORT}.`);  
})
