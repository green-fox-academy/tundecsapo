'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

//Refactored solution:
let side: number = 20;
for (let y: number = 0; y < canvas.height; y += side) {
  for (let x: number = 0; x < canvas.width; x += side) { 
    let checker: number = (x+y)/side;   
    if (checker === 0 || checker % 2 == 0) { 
      drawCheckerboard(x, y, side)
    } 
  }
}

function drawCheckerboard(x, y, side) {
  ctx.fillRect(x, y, side, side);
}

/*Original solution:
function drawCheckerboard(side: number) {
  for (let y: number = 0; y < 400; y += side) {
    for (let x: number = 0; x < 600; x += side) { 
      let checker: number = (x+y)/side;   
      if (checker === 0 || checker % 2 == 0) { 
        ctx.fillRect(x, y, side, side);
      } 
    }
  }
}
drawCheckerboard(20);*/
