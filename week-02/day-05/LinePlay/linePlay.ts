'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let size: number = 20;
let amount: number = 15;
function linePlay(startX: number, startY: number, endX: number, endY: number, color: string) {
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.stroke();
}
  
for (let i: number = 1; i <= amount; i++) {
    let horSize: number = (canvas.width - 30) / amount; 
    let vertSize: number = (canvas.height - 30) / amount; 

    let startXPurp: number = 30 + (i - 1) * horSize;
    let startYPurp: number = 0;
    let endXPurp: number = canvas.width;
    let endYPurp: number = i * vertSize;
    let purpColor: string = 'rgb(200, 66, 244)';
    linePlay(startXPurp, startYPurp, endXPurp, endYPurp, purpColor);

    let startXGreen: number = i * horSize;
    let startYGreen: number = canvas.height;
    let endXGreen: number = 0;
    let endYGreen: number = 30 + (i-1) * vertSize;
    let greenColor: string = 'rgb(51, 232, 60)';
    linePlay(startXGreen, startYGreen, endXGreen, endYGreen, greenColor);
}
    