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
  let sql = 'SELECT * FROM ( SELECT post.post_id, post.title, post.url, post.owner_id, post.timestamp, post.score, MAX(vote.vote_id) as lastvote FROM post LEFT JOIN vote ON post.post_id = vote.vpost_id GROUP BY post.post_id ) as this LEFT JOIN vote ON this.lastvote = vote.vote_id ORDER BY score;';
     
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
 // console.log(req.body.title);
  if (!req.body.title  || !req.body.url || req.body.title === '') {
    res.json({
      "error": "Not enough data provided."
    });  
  } else {  
    let insertSql = `INSERT INTO post (title, url, owner_id) VALUES ('${req.body.title}', '${req.body.url}', 1);`;
       
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
  let sql = `SELECT * FROM ( SELECT post.post_id, post.title, post.url, post.timestamp, post.score, MAX(vote.vote_id) as lastvote FROM post LEFT JOIN vote ON post.post_id = vote.vpost_id GROUP BY post.post_id ) as this LEFT JOIN vote ON this.lastvote = vote.vote_id WHERE this.title = "${req.query.title}";`;
  //let sql = `SELECT * FROM post WHERE title = "${req.query.title}";`;
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
    let upvoteSql = `INSERT INTO vote (vote, voter_id, vpost_id) VALUES (${req.body.vote}, ${req.body.voter_id}, ${req.body.post_id});`;
      
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
  if (!req.body.post_id || !req.body.scoreChanger) {
    res.json({
      "error": "Not enough data provided."
    });  
  } else {
    let scoreChanger = '';  
    if (req.body.scoreChanger === '2') {
      scoreChanger = '+ 2';  
    } else if (req.body.scoreChanger === '1') {
      scoreChanger = '+ 1';  
    } else if (req.body.scoreChanger === 'min1') {
      scoreChanger = '- 1';  
    }    
    console.log(req.body.scoreChanger);  
    let sql = `UPDATE post INNER JOIN vote ON post.post_id = vote.vpost_id SET score = score ${scoreChanger} WHERE post.post_id = ${req.body.post_id};`;
       
    conn.query(sql, (err, score) => {
      if (err) {
        console.log(err);
        res.status(500).send();
        return;  
      } 
      res.json({
        score,  
      });  
      console.log(score);
            //res.sendStatus(200);
    });
  }    
});

app.get('/upvote', (req, res) => {
  //console.log(req); 
  let sql = `SELECT * FROM ( SELECT post.post_id, post.title, post.url, post.timestamp, post.score, MAX(vote.vote_id) as lastvote FROM post LEFT JOIN vote ON post.post_id = vote.vpost_id GROUP BY post.post_id ) as this LEFT JOIN vote ON this.lastvote = vote.vote_id WHERE this.post_id = ${req.query.post_id};`; 
  //let sql = `SELECT post.post_id, post.title, post.url, post.timestamp, post.score, user.name, vote.vote FROM post, user, vote WHERE vote.vpost_id = ${req.query.post_id} AND post.post_id = ${req.query.post_id} AND post.owner_id = user.user_id AND vote.voter_id = ${req.query.voter_id};`;
  console.log(sql);
  console.log(req.query);

  conn.query(sql, (err, post) => {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;  
    } 
    let score = post[0].score;
  
    res.json({
      score,  
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
    let downvoteSql = `INSERT INTO vote (vote, voter_id, vpost_id) VALUES (${req.body.vote}, ${req.body.voter_id}, ${req.body.post_id});`;
       
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
  if (!req.body.post_id || !req.body.scoreChanger) {
    res.json({
      "error": "Not enough data provided."
    });  
  } else {
    let scoreChanger = '';  
    if (req.body.scoreChanger === '1') {
      scoreChanger = '+ 1';  
    } else if (req.body.scoreChanger === 'min1') {
      scoreChanger = '- 1';  
    } else if (req.body.scoreChanger === 'min2') {
      scoreChanger = '- 2';  
    }    
    console.log(req.body.scoreChanger);       
    let sql = `UPDATE post INNER JOIN vote ON post.post_id = vote.vpost_id SET score = score ${scoreChanger} WHERE post.post_id = ${req.body.post_id};`;
         
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
  let sql = `SELECT * FROM ( SELECT post.post_id, post.title, post.url, post.timestamp, post.score, MAX(vote.vote_id) as lastvote FROM post LEFT JOIN vote ON post.post_id = vote.vpost_id GROUP BY post.post_id ) as this LEFT JOIN vote ON this.lastvote = vote.vote_id WHERE this.post_id = ${req.query.post_id};`; 
  //let sql = `SELECT post.post_id, post.title, post.url, post.timestamp, post.score, user.name, vote.vote FROM post, user, vote WHERE vote.vpost_id = ${req.query.post_id} AND post.post_id = ${req.query.post_id} AND post.owner_id = user.user_id AND vote.voter_id = ${req.query.voter_id};`;
  console.log(sql);
  console.log(req.post_id);
  
  conn.query(sql, (err, post) => {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;  
    } 
    let score = post[0].score;
  
    res.json({
      score,  
    });  
          //res.sendStatus(200);
  });
});

app.delete('/remove/:id', function(req, res) {
    let sql = `DELETE FROM post WHERE post.post_id = ${req.params.id};`; 

    conn.query(sql, (err, post) => {
            if (err) {
              console.log(err);
              res.status(500).send();
              return;  
            }         
            res.json({
              message: `Post with ${req.params.id} is deleted!`,  
            });  
                  //res.sendStatus(200);
          });
    });
  
module.exports = app;

app.listen(PORT, () => {
  console.log(`The server is app and running on port ${PORT}`);  
})
