'use strict';
export{};

class Station {
  gasAmount: number;

  constructor (){
    this.gasAmount = 1000;  
  }

  refill(car) {
    this.gasAmount -= car.capacity;
    car.gasAmount += car.capacity;
    console.log(`The station has ${this.gasAmount} gas`);
    console.log(`The car has ${car.gasAmount} gas`);
  }
}

class Car {
  gasAmount: number;
  capacity: number;

  constructor() {
    this.gasAmount = 0;
    this.capacity = 100;    
  }
}

let mol = new Station();
let fordKa = new Car();
mol.refill(fordKa);
