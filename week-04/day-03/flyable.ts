'use strict';

export interface Flyable {
  land(): void;
  fly(): void;
  takeOff(): void;    
}

abstract class Vehicle {
  numberOfWheels: number;
  fuelType: string;
  canFly: boolean;
}

class Helicopter extends Vehicle implements Flyable {
  land(): void {};
  fly(): void {};
  takeOff(): void {}; 
}

//you can find the task with the Bird Class in the Zoo exercise
