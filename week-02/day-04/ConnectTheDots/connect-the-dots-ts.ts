'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function connectTheDots(firstX: number, firstY: number, secX: number, secY: number) {
  ctx.strokeStyle = "green";
  ctx.beginPath();
  ctx.moveTo(firstX, firstY);
  ctx.lineTo(secX, secY);
  //ctx.closePath();
  ctx.stroke();
}
  
function checkPointList(list: number[][]){
  for (let i: number = 0; i < list.length; i++) {
    if (i === list.length-1) {
      let startX: number = list[i][0];
      let startY: number = list[i][1];
      let endX: number = list[0][0];
      let endY: number = list[0][1];
      connectTheDots(startX, startY, endX, endY);
    } else { 
      let startX: number = list[i][0];
      let startY: number = list[i][1];
      let endX: number = list[i+1][0];
      let endY: number = list[i+1][1];
      connectTheDots(startX, startY, endX, endY);
    }  
  }
}
checkPointList([[10, 10], [290,  10], [290, 290], [10, 290]]);
checkPointList([[50, 100], [70, 70], [80, 90], [90, 90], [100, 70], [120, 100], [85, 130], [50, 100]]);
