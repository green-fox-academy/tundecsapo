'use strict';

import {Animal} from './animal';
import {Cat} from './cat';
import {Dog} from './dog';

let animals: Animal[] = [];

animals.push(new Dog());
animals.push(new Cat());

for (let i: number = 0; i < animals.length; i++) {
  animals[i].eat();  
  console.log(animals[i].isHungry());
  //let cat: Cat = (animals[i]);
  //cat.meow();
}