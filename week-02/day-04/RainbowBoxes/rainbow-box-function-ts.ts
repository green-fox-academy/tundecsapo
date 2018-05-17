'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

//Refactored solution with ACTUAL RAINBOW
let side: number = 30;
let frequency = .02;

function drawRainbow(currSize: number, color: string) {
    ctx.fillStyle = color;
    ctx.fillRect(300 - currSize/2, 200-currSize/2, currSize, currSize);
}

for (let i: number = canvas.width; i >= side; i-=10) {
  let red: number = Math.sin(frequency*i + 0) * 127 + 128;
  let green: number = Math.sin(frequency*i + 2*Math.PI/3) * 127 + 128;
  let blue: number = Math.sin(frequency*i + 4*Math.PI/3) * 127 + 128;
  let randomColor: string = `rgb(${red},${green},${blue})`;
  drawRainbow(i, randomColor);
}

/* Original solution with random colors
for (let i: number = canvas.width; i >= side; i-=10) {
  let chars = '0123456789ABCDEF';
  let randomColor = '#';
  if (i === side){
    randomColor = color
  } else {
    for (let j: number = 0; j < 6; j++) {
      randomColor += chars[Math.floor(Math.random() * 16)];
    }
  }  
  drawRainbow(i, randomColor);
}
*/
