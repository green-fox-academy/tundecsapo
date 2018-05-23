'use strict';
export{};

class Animal {
  animal: string;
  hunger: number;
  thirst: number;
    
  constructor(name: string) {
    this.animal = name;
    this.hunger = 50;
    this.thirst = 50;
  }

  eat() {
    this.hunger--;   
  }
  drink() {
    this.thirst--;    
  }
  play() {
    this.hunger--;   
    this.thirst--;    
  }
}

let tiger = new Animal('tiger');
tiger.eat();
let cat = new Animal('cat');
cat.drink();
let dog = new Animal('dog');
dog.play();

console.log(tiger);
console.log(cat);
console.log(dog);
