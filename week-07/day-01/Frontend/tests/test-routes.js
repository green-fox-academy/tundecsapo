'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('../routes');

test('Frontend main endpoint', (t) => {
  request(app)
    .get('/')
    .expect('Content-Type', 'text/html; charset=UTF-8')
    .expect(200)
    .end((err, res) => {
      t.error(err); 
      t.end();
    }); 
});

test('doubling without input endpoint', (t) => {
  request(app)
    .get('/doubling')
    .expect('Content-Type', /json/)
    .expect(200, { "error": "Please provide an input!" })
    .end((err, res) => {
      t.error(err); 
      t.end();
    }); 
});    

test('doubling with input endpoint', (t) => { 
  request(app)
    .get('/doubling?input=10')
    .expect('Content-Type', /json/)
    .expect(200, { "received": '10', "result": '20'})
    .end((err, res) => {
      t.error(err); 
      t.end();
    }); 
});

test('greeter without name&title endpoint', (t) => {
  request(app)
    .get('/greeter')
    .expect('Content-Type', /json/)
    .expect(200, { "error": "Please provide a name!" })
    .end((err, res) => {
      t.error(err); 
      t.end();
    });
});

test('greeter with name%title endpoint', (t) => {
  request(app)
    .get('/greeter?name=Tundi&title=student')
    .expect('Content-Type', /json/)
    .expect(200, { "welcome_message": "Oh, hi there Tundi, my dear student!" })
    .end((err, res) => {
      t.error(err); 
      t.end();
    }); 
});

test('greeter without title endpoint', (t) => {
  request(app)
    .get('/greeter?name=Tundi')
    .expect('Content-Type', /json/)
    .expect(200, { "error": "Please provide a title!" })
    .end((err, res) => {
      t.error(err); 
      t.end();
    });  
});

test('greeter without name endpoint', (t) => {
  request(app)
    .get('/greeter?title=mentee')
    .expect('Content-Type', /json/)
    .expect(200, { "error": "Please provide a name!" })
    .end((err, res) => {
      t.error(err); 
      t.end();
    });   
});

test('appenda endpoint', (t) => {
  request(app)
    .get('/appenda/kuty')
    .expect('Content-Type', /json/)
    .expect(200, { "appended": "kutya" })
    .end((err, res) => {
      t.error(err); 
      t.end();
    }); 
});

test('dountil/sum without number endpoint', (t) => {
  request(app)
    .post('/dountil/sum')
    .expect('Content-Type', /json/)
    .expect(200, { "error": "Please provide a number!" })
    .end((err, res) => {
      t.error(err); 
      t.end();
    });
});     

test('dountil/sum with number endpoint', (t) => {
  request(app)
    .post('/dountil/sum')
    .send({"until": 5})
    .expect('Content-Type', /json/)
    .expect(200, {"result": 15})
    .end((err, res) => {
      t.error(err); 
      t.end();
    }); 
});    

test('dountil/factor without number endpoint', (t) => {
  request(app)
    .post('/dountil/factor')
    .expect('Content-Type', /json/)
    .expect(200, { "error": "Please provide a number!" })
    .end((err, res) => {
      t.error(err); 
      t.end();
    }); 
});   

test('dountil/factor with number endpoint', (t) => {
  request(app)
    .post('/dountil/factor')
    .send({"until": 5})
    .expect('Content-Type', /json/)
    .expect(200, {"result": 120})
    .end((err, res) => {
      t.error(err); 
      t.end();
    });   
});
