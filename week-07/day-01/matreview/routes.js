'use strict';

const express = require('express');
const app = express();

let cars = [
    {id: 1, brand: 'BMW', type: 'X6'}, 
    {id: 2, brand: 'Audi', type: 'TT'},  
  ];
  
  app.use(express.json());
  
  app.get('/ping', (req, res) => {
    res.json({
      message: 'pong',  
    });  
  });
  
  app.get('/api/cars', (rew, res) => {
    res.json({
      cars,  //it is the same as cars: cars,
    });  
  });
  
  //without ID I will remove the last one
  app.delete('/api/cars', (req, res) => {
    cars.pop();
    res.json({
      message: 'Car has been deleted',  
    });
  });
  
  //with ID I will remove the item on specific ID
  app.delete('/api/cars/:id', (req, res) => {
    let carIndex = -1;  
    cars.forEach((car, index) => {
      if (car.id === parseInt(req.params.id)) {
        carIndex = index;  
      }
    });
  
    let message = '';
  
    if (carIndex !== -1) {
      cars.splice(carIndex, 1);  
      message = 'Car has been deleted.';
    } else {
      message = 'This car is not in the array';  
    }
  
    res.json({
      message: 'Car has been deleted',  
    });
  });
  
  app.post('/api/cars', (req, res) => {
    console.log(req.body);
    cars.push({
      id: cars.length + 1,
      brand: req.body.brand,
      type: req.body.type,
  });  
  
  //same as this:
  //  const {brand, type} = req.body;
  //  cars.push({
  //    id: cars.length + 1,
  //    brand,
  //    type,  
  //  });
    res.json({
      message: 'OK, that was a good request',  
    }); //you have to answer the request
  });

  module.exports = app;