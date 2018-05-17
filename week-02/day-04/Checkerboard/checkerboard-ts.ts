'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function drawCheckerboard(side: number) {
  for (let y: number = 0; y < 400; y += side){
    for (let x: number = 0; x < 600; x += side){ 
      let checker: number = (x+y)/side;   
      if (checker === 0 || checker % 2 == 0) { 
        ctx.fillRect(x, y, side, side);
      } 
    }
  }
}
drawCheckerboard(20);
