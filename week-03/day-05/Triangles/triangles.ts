'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'rgb(211,211,211)';
ctx.fillRect(0, 0, canvas.width, canvas.height);

class Triangles {
  size: number;

  constructor () {}
  createTriangle(startX: number, startY: number, size: number, containerX: number, containerY: number){
   // if (size < 50) {return 0;}
    let sizeY: number = (size ** 2 - (size / 2) ** 2) ** (1/2);      
      for (let y: number = startY; y <= containerY; y += sizeY) {
        for (let x: number = startX; x <= containerX; x += size) {
          let endXForw: number = x + size;
          let endXBack: number = x + size / 2;
          let endYBack: number = (size ** 2 - (size / 2) ** 2) ** (1/2);
            this.drawTriangles(x, y, endXForw, y);
            this.drawTriangles(endXForw, y, endXBack, endYBack);
            this.drawTriangles(endXBack, endYBack, x, y);

            this.drawTriangles(size, y, size + size, y);
            this.drawTriangles(size + size, y, size + size/2, endYBack);
            this.drawTriangles(size + size/2, endYBack, size, y);

            this.drawTriangles(size/2, endYBack, size/2 + size, endYBack);
            this.drawTriangles(size/2 + size, endYBack, size, 2 * endYBack);
            this.drawTriangles(size, 2 * endYBack, size/2, endYBack);

            let newSize: number = size / 2;
            let newContainerX: number = x + containerX / 2; 
            let newContainerY: number = y + containerY / 2; 
           this.createTriangle(x, y, newSize, newContainerX, newContainerY);
           this.createTriangle(size, y, newSize, canvas.width, canvas.height);
           this.createTriangle(containerX/4, endYBack, newSize, canvas.width, canvas.height);
        }
      }
   // }
  } 
  /*createTriangle(startX: number, startY: number, sizeX: number, sizeY: number, containerX: number, containerY: number){
    if (sizeX >=2) {
    let testSizeY: number = (sizeX ** 2 - (sizeX / 2) ** 2) ** (1/2);      
      for (let y: number = startY; y < testSizeY; y += testSizeY) {
        for (let x: number = sizeX; x < containerX; x++) {
          let endXForw: number = x + sizeX/2;
          let endXBack: number = endXForw - sizeX;
          let endYBack: number = testSizeY;
          if (x === containerX/2) {
            this.drawTriangles(x, y, endXForw, y + endYBack);
            this.drawTriangles(endXForw, y + endYBack, endXBack, y + endYBack);
            this.drawTriangles(endXBack, y + endYBack, x, y);
          } else {
            let newSizeX: number = sizeX / 2;
            let newSizeY: number = testSizeY / 2;
            let newContainerX: number = x + containerX / 2; 
            let newContainerY: number = y + containerY / 2; 
           this.createTriangle(x, y, newSizeX, newSizeY, x + containerX/2, y+testSizeY);
          }
        }
      }
   }
  } */
  drawTriangles(startX: number, startY: number, endX: number, endY: number) {
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.stroke();
  } 
}

let triangle = new Triangles();
triangle.createTriangle(0, 0, canvas.width / 2, canvas.width, canvas.height);


