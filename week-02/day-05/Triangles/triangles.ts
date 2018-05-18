'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let size: number = 20;
function drawTriangles(startX: number, startY: number, endX: number, endY: number) {
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(endX, endY);
  ctx.stroke();
}

const sectionWidth: number = canvas.width / 2;
const sectionHeight: number = canvas.height / 2;

for (let y: number = 0; y <= canvas.height; y += size) {
  for (let x: number = 0; x <= canvas.width; x += size) {
    let endXForw: number = sectionWidth + x/2;
    let endXBack: number = x/2;
    let endYBack: number = canvas.height - x;
    let endXhor: number = canvas.height - x/2;
    if (y === canvas.height) {
       drawTriangles(x, y, endXForw, x);
       drawTriangles(x, y, endXBack, endYBack);
       drawTriangles(endXBack, endYBack, endXhor, endYBack);
    }
  }
}
