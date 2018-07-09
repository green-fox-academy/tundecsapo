'use strict';

//Create a Sharpie constructor function
function Sharpie(color, width) {
  this.color = color;
  this.width = width;
  this.inkAmount = 100;
  this.use = function() {
    if (this.inkAmount >= this.width) {  
      this.inkAmount -= this.width; 
      console.log(`You used up ${this.width} ink, and been left with ${this.inkAmount} ink`); 
    } else if (this.inkAmount < this.width && this.inkAmount > 0) {
      let oldInkAmount = this.inkAmount;  
      this.inkAmount = 0;
      console.log(`You used up ${oldInkAmount} ink, and there is no ink left in the sharpie`); 
    } else {
      console.log(`The sharpie is out of ink, so you can't use this sharpie anymore`); 
    }
  } 
}

let orangeSharpie = new Sharpie('orange', 20);
for (let i=0; i < 6; i++) {
  orangeSharpie.use();  
}
let blueSharpie = new Sharpie('blue', 10);
for (let i=0; i <11; i++) {
    blueSharpie.use();  
}
let greySharpie = new Sharpie('grey', 48);
for (let i=0; i < 4; i++) {
  greySharpie.use();  
}
