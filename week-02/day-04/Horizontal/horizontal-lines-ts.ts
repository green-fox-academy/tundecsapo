'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function drawHorizontal(hor, vert) {
  for (let i: number = 0; i < 3; i++) {
    ctx.strokeStyle = "tomato";
    ctx.beginPath();
    ctx.moveTo(hor, vert);
    ctx.lineTo(hor + 400, vert);
    ctx.stroke();
    vert += 100;
  }
}
drawHorizontal(100, 100);
