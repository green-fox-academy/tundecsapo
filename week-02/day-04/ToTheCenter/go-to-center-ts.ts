'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function drawLines(hor, vert){
  for (let i: number = 0; i < 3; i++){
    ctx.strokeStyle = "tomato";
    ctx.beginPath();
    ctx.moveTo(hor, vert);
    ctx.lineTo(300, 200);
    ctx.stroke();
    hor += 100;
  }
}
drawLines(100, 0);
