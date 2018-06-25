'use strict';

const test = require('tape');
const request = require('supertest'); //for test the endpoint

//command: npm install -D tape supertest
//it is needed for the development part

const app = require('../routes');

//we are looking for a json response --line15
test('ping endpoint', (t) => {
  request(app)
    .get('/ping?alc-vodka')
    .expect('Content-Type', /json/)
    .expect(200, { message: 'pong' })
    .end((err, res) => {
      t.error(err);  //if there is an error console.log it
      t.end();
    }); 
});

