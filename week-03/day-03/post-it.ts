'use strict';

class PostIt {
  backgroundColor: string;
  text: string;
  textColor: string;

  constructor(bgColor: string) {
    this.backgroundColor = bgColor;
  }

  addText(newText: string): void {
    this.text = newText; 
  }

  addColor(newColor: string): void {
    this.textColor = newColor;
  }
}

let orange = new PostIt('orange');
orange.addText('Idea 1');
orange.addColor('blue');
let pink = new PostIt('pink');
pink.addText('Awesome');
pink.addColor('black');
let yellow = new PostIt('yellow');
yellow.addText('Superb!');
yellow.addColor('green');

console.log(orange);
console.log(pink);
console.log(yellow);
