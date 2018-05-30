'use strict';

import {Flyable} from './flyable';

interface LayEggs {
  layEggs: string;
}

export abstract class Animal {
  name: string;
  age: number;
  legs: number;
  color: string;
  carnivorous: boolean;
  getName(): string {return this.name;};
  abstract breed(): string;
}

class Mammal extends Animal {
  mammaryGlands: boolean;
  middleEarBones: number;
  canHaveHair: boolean;
  
  constructor (name: string) {
    super();
    this.name = name;
    this.mammaryGlands = true; 
    this.middleEarBones = 3;
    this.canHaveHair = true;    
  }
      
  breed(): string {
    return 'pushing miniature versions out';
  };  
}

class Reptile extends Animal implements LayEggs {
  blood: string;
  skin: string;
  hasHair: boolean;
  layEggs: string;
    
  constructor (name: string) {
    super();
    this.name = name;
    this.blood = "cold"; 
    this.skin = "scaly skin";
    this.hasHair = false;
    this.layEggs = 'laying eggs';    
  }  

  breed(): string {
    return this.layEggs;
  };  
}

class Bird extends Animal implements LayEggs, Flyable {
  covering: string;
  hasWings: boolean;
  hasBeakAndBipedalism: boolean;
  layEggs: string;
  land(): void {};
  fly(): void {};
  takeOff(): void {};
      
  constructor (name: string) {
    super();
    this.name = name;
    this.covering = "feathers"; 
    this.hasWings = true;
    this.hasBeakAndBipedalism = true;
    this.layEggs = 'laying eggs';    
  }  

  breed(): string {
    return this.layEggs;
  } 
}

let reptile = new Reptile("Crocodile");
let mammal = new Mammal("Koala");
let bird = new Bird("Parrot");

console.log("How do you breed?");
console.log(`A ${reptile.getName()} is breeding by ${reptile.breed()}.`);
console.log(`A ${mammal.getName()} is breeding by ${mammal.breed()}.`);
console.log(`A ${bird.getName()} is breeding by ${bird.breed()}.`);
