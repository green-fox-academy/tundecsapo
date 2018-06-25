'use strict';

import {Animal} from './animal';

export class Cat extends Animal {
  constructor() {
    super(4);  
  }

  public isHungry(): boolean {
    return this.belly < 4;  
  } 
  
  public reactToCucumber(): void {
    throw new Error('Holy shit...');  
  }

  public meow() {
    console.log('Hi can I has food?');  
  }
}

let roze: Cat = new Cat();
console.log(roze.reactToCucumber());
console.log(roze.isHungry());

/*
roze.eat();
try {
  roze.reactToCucumber(); 
} catch(error) {
  
}
*/