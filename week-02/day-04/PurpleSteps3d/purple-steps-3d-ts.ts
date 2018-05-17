'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

//Corrected solution
let side: number = 10;
let newSize: number = side;

function drawPurpleSteps3D(start: number, side: number) {
  ctx.fillStyle = '#aa42f4';
  ctx.fillRect(start, start, side, side);
  ctx.strokeRect(start, start, side, side);
}

for (let i: number = 0; i < canvas.height-newSize; i += newSize){  
  newSize += side;
  drawPurpleSteps3D(i, newSize);
}
