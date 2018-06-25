'use strict';

const test = require('tape');
const request = require('supertest'); //for test the endpoint
const app = require('../routes');

//we are looking for a json response --line15
test('main endpoint', (t) => {
  request(app)
    .get('/')
    .expect('Content-Type', 'text/html; charset=UTF-8')
    .expect(200, { message: 'yayyy' })
    .end((err, res) => {
      t.error(err);  //if there is an error console.log it
      t.end();
    }); 
});

test('doubling endpoint', (t) => {
  request(app)
    .get('/doubling')
    .expect('Content-Type', /json/)
    .expect(200, { "error": "Please provide an input!" })
    .end((err, res) => {
      t.error(err);  //if there is an error console.log it
      t.end();
    }); 
});    

test('doubling endpoint', (t) => { 
  request(app)
    .get('/doubling?input=10')
    .expect('Content-Type', /json/)
    .expect(200, { "received": '10', "result": '20'})
    .end((err, res) => {
      t.error(err);  //if there is an error console.log it
      t.end();
    }); 
});

test('greeter endpoint', (t) => {
  request(app)
    .get('/greeter')
    .expect('Content-Type', /json/)
    .expect(200, { "error": "Please provide a name!" })
    .end((err, res) => {
      t.error(err);  //if there is an error console.log it
      t.end();
    });
});

test('greeter endpoint', (t) => {
  request(app)
    .get('/greeter?name=Tundi&title=student')
    .expect('Content-Type', /json/)
    .expect(200, { "welcome_message": "Oh, hi there Tundi, my dear student!" })
    .end((err, res) => {
      t.error(err);  //if there is an error console.log it
      t.end();
    }); 
});

test('greeter endpoint', (t) => {
  request(app)
    .get('/greeter?name=Tundi')
    .expect('Content-Type', /json/)
    .expect(200, { "error": "Please provide a title!" })
    .end((err, res) => {
      t.error(err);  //if there is an error console.log it
      t.end();
    });  
});

test('greeter endpoint', (t) => {
  request(app)
    .get('/greeter?title=mentee')
    .expect('Content-Type', /json/)
    .expect(200, { "error": "Please provide a name!" })
    .end((err, res) => {
      t.error(err);  //if there is an error console.log it
      t.end();
    });   
});

test('appenda endpoint', (t) => {
  request(app)
    .get('/appenda/kuty')
    .expect('Content-Type', /json/)
    .expect(200, { "appended": "kutya" })
    .end((err, res) => {
      t.error(err);  //if there is an error console.log it
      t.end();
    }); 
});

/*
test('dountil endpoint', (t) => {
  request(app)
    .post('/dountil/sum')
    .expect('Content-Type', /json/)
    .expect(200, { "error": "Please provide a number!" })
    .end((err, res) => {
      t.error(err);  //if there is an error console.log it
      t.end();
    }); 

  request(app)
    .post('/dountil/sum')
    .expect('Content-Type', /json/)
    .expect(200, { "error": "Please provide a number!" })
    .end((err, res) => {
      t.error(err);  //if there is an error console.log it
      t.end();
    }); 

  request(app)
    .post('/dountil/factor')
    .expect('Content-Type', /json/)
    .expect(200, { "error": "Please provide a number!" })
    .end((err, res) => {
      t.error(err);  //if there is an error console.log it
      t.end();
    }); 

  request(app)
    .post('/dountil/factor')
    .expect('Content-Type', /json/)
    .expect(200, { "error": "Please provide a number!" })
    .end((err, res) => {
      t.error(err);  //if there is an error console.log it
      t.end();
    });   
});
*/
