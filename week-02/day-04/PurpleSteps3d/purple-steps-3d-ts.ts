'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function drawPurpleSteps3D(side: number) {
  let newSize: number = side;  
  for (let i: number = 0; i < 400-newSize; i += newSize-side){  
    ctx.fillStyle = 'purple';
    ctx.fillRect(i, i, newSize, newSize);
    newSize += side;
  }
}
drawPurpleSteps3D(10);
