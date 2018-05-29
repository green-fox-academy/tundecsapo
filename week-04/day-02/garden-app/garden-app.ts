'use strict';

let plants: any[] = [];

class Garden {
  color: string;
  water: number;
  waterNeed: number;
  waterAbsorb: number;
  
  constructor() {
    this.water = 0;
  }

  watering(waterAmount: number): void {
    let inNeedOfWater: number = 0;  
    for (let i: number = 0; i < plants.length; i++) {
      if (plants[i].water < plants[i].waterNeed) {
      inNeedOfWater++;
      }    
    }  
    for (let i: number = 0; i < plants.length; i++) {
      if (plants[i].water < plants[i].waterNeed) {  
        plants[i].water += ((waterAmount/inNeedOfWater) * (plants[i].waterAbsorb));
      }
    }
    this.showStatus(waterAmount);
  }

  showStatus(waterAmount?: number): void {
    if (waterAmount) {  
      console.log(`\r\nWatering with ${waterAmount}`)
    }  
    for (let i: number = 0; i < plants.length; i++) {
      if (plants[i].water < plants[i].waterNeed) {
        console.log(`The ${plants[i].color} ${plants[i].constructor.name} needs water`)
      } else {
        console.log(`The ${plants[i].color} ${plants[i].constructor.name} doesnt need water`)  
      }      
    }    
  }
}

class Flower extends Garden {
  constructor(flowerColor: string) {
    super();
    this.color = flowerColor;  
    this.waterNeed = 5;
    this.waterAbsorb = 0.75;    
  }
}

class Tree extends Garden {
  constructor(treeColor: string) {
    super();  
    this.color = treeColor;  
    this.waterNeed = 10; 
    this.waterAbsorb = 0.4; 
  }
}

let yellow = new Flower('yellow');
plants.push(yellow);
let blue = new Flower('blue');
plants.push(blue);
let purple = new Tree('purple');
plants.push(purple);
let orange = new Tree('orange');
plants.push(orange);

//show how the garden looks like
orange.showStatus();
//water the garden twice:
  //water the garden with 40 and show the state of garden
yellow.watering(40);
  //water the garden with 70 and show the state of garden
yellow.watering(70);


