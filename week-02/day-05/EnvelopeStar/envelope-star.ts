'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let size: number = 20;
let amount: number = 15;
function linePlay(startX: number, startY: number, endX: number, endY: number) {
  ctx.strokeStyle = 'rgb(51, 232, 60)';
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(endX, endY);
  ctx.stroke();
}

const sectionWidth: number = canvas.width / 2;
const sectionHeight: number = canvas.height / 2;
const horSize: number = sectionWidth / amount; 
const vertSize: number = sectionHeight / amount;
let startX: number = 0;
let startY: number = sectionHeight;
let endX: number = sectionWidth;         
let endY: number = 0; 

for (let y: number = 0; y < 2; y++) {
  for (let x: number = 0; x < 2; x++) {
    for (let i: number = 1; i <= amount; i++) {
      if (y === 0) {
        endY = (i-1) * vertSize;
        if (x === 0){
          startX = sectionWidth - i * horSize;
          endX = sectionWidth - 1;
        } else if (x === 1) {
          startX = sectionWidth + i * horSize;
        }
      } else if (y === 1) {
        endY = sectionHeight + i * vertSize;
        if (x === 0) {
          startX = (i - 1) * horSize;
        }
        else if (x === 1){
          startX = sectionWidth * 2 - (i - 1) * horSize;
        }
      }
      linePlay(startX, startY, endX, endY);
    }
  }
}
linePlay(sectionWidth, 0, sectionWidth, canvas.height);
