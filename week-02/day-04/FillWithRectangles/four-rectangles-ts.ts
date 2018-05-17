'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'red';
ctx.fillRect(10, 10, 10, 10);

ctx.fillStyle = 'blue';
ctx.fillRect(250, 10, 100, 100);

ctx.fillStyle = 'black';
ctx.fillRect(10, 130, 180, 180);

ctx.fillStyle = 'tomato';
ctx.fillRect(250, 130, 250, 250);
