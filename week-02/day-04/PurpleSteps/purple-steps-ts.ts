'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let side: number = 10;

//Corrected solution
function drawPurpleSteps(start: number, side: number) {
  ctx.fillStyle = '#aa42f4';
  ctx.fillRect(start, start, side, side);
  ctx.strokeRect(start, start, side, side);
}

for (let i: number = 0; i < 400; i += side) {  
  drawPurpleSteps(i, side);
}
