'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'yellow';
ctx.fillRect(0, 0, canvas.width, canvas.height); 

function drawRecSquares(num: number, boxSize: number, startX: number, startY: number) {
  let side: number = Math.ceil(boxSize * num);
  if (side > 1) {
    for (let y: number = startY; y < startY + boxSize; y += side) {
      for (let x: number = startX; x < startX + boxSize; x += side) { 
        let checker: number = ((x-startX) + (y-startY)) / side;   
        if (checker != 0 && checker % 2 != 0) {
          ctx.strokeRect(x, y, side, side);
          drawRecSquares(num, side, x, y);
        } 
      }
    }
  }
}
drawRecSquares(1/3, canvas.height, 0, 0);
