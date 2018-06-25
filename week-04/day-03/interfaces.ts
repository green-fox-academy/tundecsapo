'use strict';

interface Point {
  name: string,
  x: number,
  y: number,
  z?: number,
}

function printPoint(point: Point): void {
  console.log(`Coordinates of ${point.name}: ${point.x}, ${point.y}`);  
} 

let myObj = { name: 'P1', x: 10, y: 5, z: 20 }; //with object parameter we have to add spaces before and after { and }
let myPoint: Point = { name: 'P2', x: 20, y: 10, z: 3 }; //you can't assign a variable that is not defined in the interface at least as an optional parameter

printPoint(myObj);


abstract class Car {
  brand: string;
  color: string;
  fuelAmount: number;

  constructor(brand: string, color: string) {
    this.brand = brand;
    this.color = color;
    this.fuelAmount = 0;
  }
  /*
  move() {
    console.log('Woom-woom');  
  }*/
  abstract move(): void;
}
// const myCar = new Car('BMW', 'black'); - doesn't work for abstract class
// console.log(myCar);

class BMWFactory extends Car {
  constructor(color: string) {
    super('BMW', color);
  }
  move () {
    console.log('Woom-woom');  
  }  
}

interface HybridCar {
  powerLevel: number;  
  charge(amount: number): void;
}

class AudiFactory extends Car implements HybridCar {
  powerLevel: number;
  constructor(color: string) {
    super('Audi', color);  
    this.powerLevel = 0;
  }  
  move() {
    console.log('WROOOM-wroom');  
  }
  charge(amount: number) {
   return this.powerLevel = amount;
  }
}

const myBMW = new BMWFactory('blue');
console.log(myBMW);
const myAudi = new AudiFactory('white');
console.log(myAudi);
myBMW.move();
console.log(myAudi.charge(50));
myAudi.move();
