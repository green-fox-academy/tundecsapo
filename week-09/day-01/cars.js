'use strict';
// 1st
// Call the ride method of the volvo, with 42 as a parameter
let volvo = {
  type: "Volvo",
  fuel: 23,
  consumption: 0.06,
  kms: 43000,
  ride: function (km) {
    this.kms += km;
    this.fuel -= km * this.consumption; 
  }
};
console.log(`Volvo's kms and fuel before ride: kms: ${volvo.kms}, fuel: ${volvo.fuel}`);
volvo.ride(42);
console.log(`Volvo's kms and fuel AFTER ride: kms: ${volvo.kms}, fuel: ${volvo.fuel}`);


// 2nd
// Call the refuel function on the ferrari object using the bind method, with
// 52 as a parameter
let ferrari = {
  type: "Ferrari",
  fuel: 0,
  consumption: 0.12,
  kms: 9000,
  ride: function (km) {
    this.kms += km;
    this.fuel -= km * this.consumption; 
  }
};

function refuel(liters) {
  this.fuel += liters
}

console.log(`Ferrari's fuel before refuel: ${ferrari.fuel}`);
let refuelFerrari = refuel.bind(ferrari);
refuelFerrari(52);
console.log(`Ferrari's fuel AFTER refuel: ${ferrari.fuel}`);

// 3rd
// Create a tesla object that has 3 properties
//  - type: string
//  - battery: number
//  - kms: number
//  - consunption: number
// And a method called ride, that takes a parameter celled km,
// and increments kms with it, then drains the battery based on the consumpltion 

let tesla = {
  type: 'Tesla',
  battery: 50,
  kms: 0,
  consumption: 0.6,
  ride: function (km) {
    this.kms += km;
    this.battery -= this.battery * this.consumption;
  }
}
console.log(`Tesla's km before ride: ${tesla.kms}`);
console.log(`Tesla's battery before ride: ${tesla.battery}`);
tesla.ride(36);
console.log(`Tesla's km AFTER ride: ${tesla.kms}`);
console.log(`Tesla's battery AFTER ride: ${tesla.battery}`);
