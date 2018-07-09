'use strict';
// Create and object called car
//  - It should store its petrol level called petrolLevel
//  - It should store its petrol capacity called petrolCapacity
//  - It should have a refill(amount) method, that increments the petrol level,
//    than returns how much petrol it consumed from the given amount
//  - Initialize the petrol level to zero and the capacity to 50 

let car = {
  petrolLevel: 0,
  petrolCapacity: 50,
  refill: function(amount) {
    let petrolNeed = this.petrolCapacity - this.petrolLevel;
    if (petrolNeed < amount) {
      this.petrolLevel += petrolNeed;  
      return amount - petrolNeed;
    } else if (petrolNeed >= amount) {
      this.petrolLevel += amount;
      amount = 0;
      return amount;  
    }
  }  
}
//
// Create an object called station
//  - It should store petrol amount called petrolStorage
//  - It should have a provide(car) method that calls the refill method of the car
//    with the stored petrol amount as a parameter, then decrement the used petrol
//  - Initialize the petrol amount to 3000

let station = {
  petrolStorage: 3000,
  provide: (car) => {
    station.petrolStorage = car.refill(station.petrolStorage);
  }  
}

console.log(car.petrolLevel);
console.log(station.petrolStorage);

station.provide(car);

console.log(car.petrolLevel);
console.log(station.petrolStorage);
