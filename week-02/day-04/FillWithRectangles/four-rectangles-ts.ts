'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let maxSize: number = canvas.height;

//New solution with Function, without duplication - pulls in random sizes and colors
for (let i: number = 0; i < 4; i++) {
  let chars = '0123456789ABCDEF';
  let randomColor = '#';
  for (let j: number = 0; j < 6; j++) {
    randomColor += chars[Math.floor(Math.random() * 16)];
  }
  let side: number = Math.floor(Math.random() * (maxSize - maxSize/3 + 1)) + maxSize/3;
  let hor: number = Math.floor(Math.random() * (canvas.width-side));
  let vert: number = Math.floor(Math.random() * (canvas.height-side));
  draw4Rect(hor, vert, side, randomColor);
  maxSize = side;
}  

function draw4Rect(x: number, y: number, size: number, color: string){
ctx.fillStyle = color;
ctx.fillRect(x, y, size, size);
}

/* Original solution - without function (with duplication)
ctx.fillStyle = 'red';
ctx.fillRect(10, 10, 10, 10);

ctx.fillStyle = 'blue';
ctx.fillRect(250, 10, 100, 100);

ctx.fillStyle = 'black';
ctx.fillRect(10, 130, 180, 180);

ctx.fillStyle = 'tomato';
ctx.fillRect(250, 130, 250, 250);
*/
