'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('../routes');

test('sith endpoint with empty string as input', (t) => {
  request(app)
    .post('/sith')
    .send({  "text": "" })
    .expect('Content-Type', /json/)
    .expect(200, { "error": "Feed me some text you have to, padawan young you are. Hmmm." })
    .end((err, res) => {
      t.error(err);  
      t.end();
    }); 
});

test('sith endpoint with empty object as input', (t) => {
  request(app)
    .post('/sith')
    .send({})
    .expect('Content-Type', /json/)
    .expect(200, { "error": "Feed me some text you have to, padawan young you are. Hmmm." })
    .end((err, res) => {
      t.error(err);  
      t.end();
    }); 
});

test('sith endpoint without input', (t) => {
  request(app)
    .post('/sith')
    .send()
    .expect('Content-Type', /json/)
    .expect(200, { "error": "Feed me some text you have to, padawan young you are. Hmmm." })
    .end((err, res) => {
      t.error(err);  
      t.end();
    }); 
});

test('sith endpoint with input', (t) => {
  request(app)
    .post('/sith')
    .send({ "text": "This is my example sentence. Just for fun." })
    .expect('Content-Type', /json/)
    .expect(200, { "sith_text": "Is this example my sentence. Arrgh. Uhmm. For just fun. Err..err.err." })
    .end((err, res) => {
      t.error(err);  
      t.end();
  }); 
});
