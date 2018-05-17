'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function drawSquare(side: number, color: string) {
  for (let i: number = 600; i >= side; i-=10) {
    let chars = '0123456789ABCDEF';
    let randomColor = '#';
    if (i === side){
      randomColor = color
    } else {
      for (let j: number = 0; j < 6; j++) {
      randomColor += chars[Math.floor(Math.random() * 16)];
      }
    }  
    ctx.fillStyle = randomColor;
    ctx.fillRect(300 - i/2, 200-i/2, i, i);
  }
}
drawSquare(50, '#ef629f');
