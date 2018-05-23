'use strict';

import {Sharpie} from "./sharpie";

class SharpieSet {
  sharpies: Sharpie[] = [];

  constructor() {}
  add(sharpie: Sharpie) {
    this.sharpies.push(sharpie);
  }
  
  countUsable() {
    let usable: number = 0;
    for (let i: number = 0; i < this.sharpies.length; i++) {
        if (this.sharpies[i].inkAmount > 0) {        
            usable++;
        }
      }
    return usable;
  }

  removeTrash() {
    for (let i: number = 0; i < this.sharpies.length; i++) {
      if (this.sharpies[i].inkAmount === 0) {        
        this.sharpies.splice(i, 1);
      } else {
        console.log(this.sharpies[i]);
      }
    }
  }
}

let sharpieGroup = new SharpieSet();
let firstSharpie = new Sharpie('white', 200);
let secondSharpie = new Sharpie('black', 300);
let thirdSharpie = new Sharpie('white', 200);
thirdSharpie.use(100);
sharpieGroup.add(firstSharpie);
sharpieGroup.add(secondSharpie);
sharpieGroup.add(thirdSharpie);
console.log(sharpieGroup);
console.log(`There are ` + sharpieGroup.countUsable() + ` usable sharpies:`);
sharpieGroup.removeTrash();
