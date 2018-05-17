'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function drawSquare(side){
  let y: number = (400 - 20 - side * 3)/2;
  for (let i: number = 0; i < 3; i++) {  
    ctx.fillStyle = 'tomato';
    ctx.fillRect(300 - side/2, y, side, side);
    y += side + 10;
    console.log(y);
  }
}
drawSquare(100);
