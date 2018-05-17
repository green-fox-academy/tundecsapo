'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function drawPurpleSteps(side: number) {
  for (let i: number = 0; i < 400; i += side){  
    ctx.fillStyle = 'purple';
    ctx.fillRect(i, i, side, side);
  }
}
drawPurpleSteps(10);
