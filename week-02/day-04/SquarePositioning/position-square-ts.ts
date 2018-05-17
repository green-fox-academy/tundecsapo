'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function squareDrawing(x, y){
  for (let i: number = 0; i < 3; i++) {  
    ctx.fillStyle = 'red';
    ctx.fillRect(x, y, 50, 50);
    x += 60;
  }
}
squareDrawing(10,10);
