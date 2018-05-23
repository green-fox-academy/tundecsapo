'use strict';
export {};

import {Animal} from "./animal";

class Farm {
  animals: Animal[] = [];
  slots: number;

  constructor() {
    this.slots = 4;  
    this.animals.length = this.slots;
  }

  breed(name: string) {
    for (let i: number = 0; i < this.animals.length; i++) {
      if (this.animals[i] === undefined) {  
        this.animals[i] = new Animal(name);
        break;
      }
    }
  }

  slaughter() {
    let minHunger: number = this.animals[0].hunger;
    let minHungerInd = 0;  
    for (let i: number = 1; i < this.animals.length; i++) {
      if (this.animals[i].hunger < minHunger) {  
        minHunger = this.animals[i].hunger;
        minHungerInd = i;
      }
    }
    this.animals.splice(minHungerInd, 1);   
  }
}

let animalFarm = new Farm();
animalFarm.breed('chicken');
animalFarm.breed('dog');
animalFarm.breed('cat');
animalFarm.breed('turkey');
animalFarm.breed('pig');
animalFarm.animals[3].eat();
animalFarm.breed('horse');
console.log(animalFarm.animals);
animalFarm.slaughter();
console.log(animalFarm.animals);
