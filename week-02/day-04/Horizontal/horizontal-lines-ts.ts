'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

//Refactored, corrected solution
function drawHorizontal(hor, vert) {
  ctx.beginPath();
  ctx.moveTo(hor, vert);
  ctx.lineTo(hor + 50, vert);
  ctx.stroke();
}

for (let i: number = 0; i < 3; i++) {
  let x: number = Math.floor(Math.random() * (canvas.width - 50));
  let y: number = Math.floor(Math.random() * (canvas.height));
  drawHorizontal(x, y);
}
