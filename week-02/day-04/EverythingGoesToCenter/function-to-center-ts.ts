'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function drawToCenter(hor: number, vert: number) {
  ctx.strokeStyle = "tomato";
  ctx.beginPath();
  ctx.moveTo(hor, vert);
  ctx.lineTo(canvas.width/2, canvas.height/2);
  ctx.stroke();
}

for (let y: number = 0; y <= canvas.height; y += 20){
  for (let x: number = 0; x <= canvas.width; x += 20){
    if (x === 0 || x === canvas.width || y === 0 || y === canvas.height){  
      drawToCenter(x, y);
    }
  }
}
  