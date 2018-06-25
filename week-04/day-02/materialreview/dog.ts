'use strict';
import {Animal} from './animal';

export class Dog extends Animal {
  constructor() {
    super(20);  
  }
  public reactToCucumber(): void {
    console.log('snif-snif');  
  }
}

let morzsi: Dog = new Dog();
morzsi.eat();
console.log(morzsi.isHungry());
console.log(morzsi.reactToCucumber());