'use strict';
export{};

class Sharpie {
  color: string;
  width: number;
  inkAmount: number;
  
  constructor(sharpieColor: string, sharpieWidth: number) {
    this.color = sharpieColor;
    this.width = sharpieWidth;
    this.inkAmount = 100;
  }

  use() {
    this.inkAmount--;    
  }
}

let firstSharpie = new Sharpie('white', 200);
firstSharpie.use();
let secondSharpie = new Sharpie('black', 300);

console.log(firstSharpie);
console.log(secondSharpie);
