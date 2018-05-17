'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function drawSquare(side, color) {
  ctx.fillStyle = color;
  ctx.fillRect(canvas.width/2 - side/2, canvas.height/2 - side/2, side, side);
}

//I used random starting size for the rectangle, that is smaller then the canvas height
let size: number = Math.floor(Math.random() * (400 - 120 + 1)) + 120;
for (let i: number = 0; i < 3; i++) {
  let chars = '0123456789ABCDEF';
  let randomColor = '#';
  for (let j: number = 0; j < 6; j++) {
      randomColor += chars[Math.floor(Math.random() * 16)];
  }
  drawSquare(size, randomColor);
  //reducing random number from the size
  let reduction: number = Math.floor(Math.random() * (50 - 10 + 1)) + 10;
  size -= reduction;
}
