'use strict';

const test = require('tape');
const request = require('supertest'); 
const app = require('../routes');

test('array endpoint without numbers and what', (t) => {
  request(app)
    .post('/arrays')
    .send()
    .expect('Content-Type', /json/)
    .expect(200, { "error": "Please provide what to do with the numbers!" })
    .end((err, res) => {
      t.error(err);  
      t.end();
    }); 
});

test('array endpoint without what', (t) => {
  request(app)
    .post('/arrays')
    .send({
      "numbers": [1, 2, 5, 10]
    })
    .expect('Content-Type', /json/)
    .expect(200, { "error": "Please provide what to do with the numbers!" })
    .end((err, res) => {
      t.error(err);  
      t.end();
    }); 
});

test('array endpoint without numbers', (t) => {
  request(app)
    .post('/arrays')
    .send({
      "what": "sum"
    })
    .expect('Content-Type', /json/)
    .expect(200, { "error": "Please provide what to do with the numbers!" })
    .end((err, res) => {
      t.error(err);  
      t.end();
    }); 
});

test('array endpoint with empty array', (t) => {
  request(app)
    .post('/arrays')
    .send({
      "what": "sum",
      "numbers": []
    })
    .expect('Content-Type', /json/)
    .expect(200, { "error": "Please provide numbers!" })
    .end((err, res) => {
      t.error(err);  
      t.end();
    }); 
});

test('array endpoint with numbers and what(sum)', (t) => {
  request(app)
    .post('/arrays')
    .send({
      "what": "sum",
      "numbers": [1, 2, 5, 10]
    })
    .expect('Content-Type', /json/)
    .expect(200, { "result": 18 })
    .end((err, res) => {
      t.error(err);  
      t.end();
    }); 
});

test('array endpoint with numbers and what(multiply)', (t) => {
  request(app)
    .post('/arrays')
    .send({
      "what": "multiply",
      "numbers": [1, 2, 5, 10]
    })
    .expect('Content-Type', /json/)
    .expect(200, {"result": 100})
    .end((err, res) => {
      t.error(err);  
      t.end();
    }); 
});

test('array endpoint with numbers and what(double)', (t) => {
  request(app)
    .post('/arrays')
    .send({
      "what": "double",
      "numbers": [1, 2, 5, 10]
    })
    .expect('Content-Type', /json/)
    .expect(200, {"result": [2,4,10,20]})
    .end((err, res) => {
      t.error(err);  
      t.end();
    }); 
});
