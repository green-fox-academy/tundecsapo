'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'black';
ctx.fillRect(0, 0, canvas.width, canvas.height);
//or we can change the background color of the canvas in the html or css file  

function drawTheStars(x: number, y: number, color: string) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, 3, 3);  
}
    
function starryNight(){
  for (let i: number = 0; i < 130; i++) {
    let greyShade: number = Math.floor(Math.random() * 256);
    let randomColor: string = `rgb(${greyShade},${greyShade},${greyShade})`;
    let hor: number = Math.floor(Math.random() * canvas.width);
    let vert: number = Math.floor(Math.random() * canvas.height);
    drawTheStars(hor, vert, randomColor);
  }
}
starryNight();
