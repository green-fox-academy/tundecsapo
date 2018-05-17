'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function drawToCenter(hor: number, vert: number) {
  ctx.strokeStyle = "red";
  ctx.beginPath();
  ctx.moveTo(hor, vert);
  ctx.lineTo(canvas.width/2, canvas.height/2);
  ctx.stroke();
  for (let y: number = 0; y <= canvas.height; y += 20){
    for (let x: number = 0; x <= canvas.width; x += 20){
      if (x === 0 || x === canvas.width || y === 0 || y === canvas.height){  
        ctx.strokeStyle = "blue";
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(canvas.width/2, canvas.height/2);
        ctx.stroke();
      }
    }
  }
}
drawToCenter(200, 10);
//I had trouble with understanding this exercise (like some others as well):
//it feels like the author wants me to draw one line that was called into the function,
//and besides that, fill the canvas with line from the edges
//so that's what I did
  