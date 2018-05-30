'use strict';

import {Animal} from './zoo';

interface Flyable {
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

class Bird extends Animal implements Flyable {
  land(): void {};
  fly(): void {};
  takeOff(): void {};
  breed(): string {return 'something'};
}

