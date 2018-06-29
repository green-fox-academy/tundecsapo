'use strict';

//NAMES WERE CHANGED IN THE DATABASE, AND CODE IS UNDER CONSTRUCTION
//SO THE FEED AND POST DOESN'T WORK PROPERLY AT THE MOMENT

require('dotenv').config();
const express = require('express'); 
const mysql = require('mysql');
const path = require('path');
const app = express();
const PORT = 3000;
const bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/static', express.static('static')); 
app.use('/assets', express.static('assets'));
app.use(express.json());


const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
})

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

app.get('/hello', (req, res) => {
  res.json({message: "hello world",});
});

app.get('/feed', (req, res) => {
  let sql = 'SELECT * FROM post;';
     
  conn.query(sql, (err, posts) => {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;  
    } 
    res.json({
      posts,  
    });  
    //res.sendStatus(200);

  });
});

app.post('/post', (req, res) => {
  console.log(req.body.title);
  //console.log('-----------');
  //console.log(res);
  if (!req.body.title  || !req.body.url || req.body.title === '') {
    res.json({
      "error": "Not enough data provided."
    });  
  } else {  
    let insertSql = `INSERT INTO post (title, url) VALUES ('${req.body.title}', '${req.body.url}');`;
       
    conn.query(insertSql, (err, insertion) => {
      if (err) {
        console.log(err);
        res.status(500).send();
        return;  
      } 
      res.json({
        insertion,  
      });  
            //res.sendStatus(200);
    });
  }    
});

app.get('/post', (req, res) => {
  //console.log(req);  
  console.log(`yayyy${req.query.title}${req.query.url}`);
  let sql = `SELECT * FROM post WHERE title = "${req.query.title}";`;
  console.log(sql);
  conn.query(sql, (err, posts) => {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;  
    } 
    console.log(posts);

    res.json({
      posts,  
    });  
      //res.sendStatus(200);
  });
});

app.post('/upvote', (req, res) => {
  console.log(req.body);
  if (!req.body.vote || !req.body.voter_id || !req.body.post_id) {
    res.json({
      "error": "Not enough data provided."
    });  
  } else {  
    let upvoteSql = `INSERT INTO vote (vote, voter_id, post_id) VALUES (${req.body.vote}, ${req.body.voter_id}, ${req.body.post_id});`;
      
    conn.query(upvoteSql, (err, upvote) => {
      if (err) {
        console.log(err);
        res.status(500).send();
        return;  
      } 
      res.json({
        upvote,  
      });  
          //res.sendStatus(200);
    });
  }    
});

app.put('/upvote', (req, res) => {
  console.log(`PUUUUUUUUUUUUUT${req.body.post_id}`);
  if (!req.body.post_id) {
    res.json({
      "error": "Not enough data provided."
    });  
  } else {  
    let sql = `UPDATE post INNER JOIN vote ON post.post_id = vote.post_id SET score = score + 1 WHERE post.post_id = ${req.body.post_id};`;
       
    conn.query(sql, (err, score) => {
      if (err) {
        console.log(err);
        res.status(500).send();
        return;  
      } 
      res.json({
        score,  
      });  
            //res.sendStatus(200);
    });
  }    
});

app.get('/upvote', (req, res) => {
  //console.log(req);  
  let sql = `SELECT post.post_id, post.title, post.url, post.timestamp, post.score, user.name, vote.vote FROM post, user, vote WHERE vote.post_id = ${req.query.post_id} AND post.post_id = ${req.query.post_id} AND post.owner_id = user.user_id AND vote.voter_id = ${req.query.voter_id};`;
  console.log(sql);
  console.log(req.post_id);

  conn.query(sql, (err, post) => {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;  
    } 
    console.log(post);
  
    res.json({
      post,  
    });  
        //res.sendStatus(200);
  });
});

app.post('/downvote', (req, res) => {
  console.log(req.body);
  if (!req.body.vote || !req.body.voter_id || !req.body.post_id) {
    res.json({
      "error": "Not enough data provided."
    });  
  } else {  
    let downvoteSql = `INSERT INTO vote (vote, voter_id, post_id) VALUES (${req.body.vote}, ${req.body.voter_id}, ${req.body.post_id});`;
        
    conn.query(downvoteSql, (err, downvote) => {
      if (err) {
        console.log(err);
        res.status(500).send();
        return;  
      } 
      res.json({
        downvote,  
      });  
            //res.sendStatus(200);
    });
  }    
});
  
app.put('/downvote', (req, res) => {
  console.log(`PUUUUUUUUUUUUUT${req.body.post_id}`);
  if (!req.body.post_id) {
    res.json({
      "error": "Not enough data provided."
    });  
  } else {  
    let sql = `UPDATE post INNER JOIN vote ON post.post_id = vote.post_id SET score = score - 1 WHERE post.post_id = ${req.body.post_id};`;
         
    conn.query(sql, (err, score) => {
      if (err) {
        console.log(err);
        res.status(500).send();
        return;  
      } 
      res.json({
        score,  
      });  
              //res.sendStatus(200);
    });
  }    
});
  
app.get('/downvote', (req, res) => {
    //console.log(req);  
  let sql = `SELECT post.post_id, post.title, post.url, post.timestamp, post.score, user.name, vote.vote FROM post, user, vote WHERE vote.post_id = ${req.query.post_id} AND post.post_id = ${req.query.post_id} AND post.owner_id = user.user_id AND vote.voter_id = ${req.query.voter_id};`;
  console.log(sql);
  console.log(req.post_id);
  
  conn.query(sql, (err, post) => {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;  
    } 
    console.log(post);
    
    res.json({
      post,  
    });  
          //res.sendStatus(200);
  });
});
  
module.exports = app;

app.listen(PORT, () => {
  console.log(`The server is app and running on port ${PORT}`);  
})
