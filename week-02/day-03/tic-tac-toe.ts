'use strict';
export{};

declare function require(path: string): any;
const fs = require('fs');
let charEncoding = 'utf-8';


function readFromFile(filePath: string) {
  try {
    return fs.readFileSync(filePath, charEncoding);
  } catch(error) {
    console.log(`Unable to read file: ${filePath}`);
    return null;
  }
}

function ticTacResult(fileName: string) {
  let content: string = readFromFile(fileName);
  //I don't know why, but my content string had a space at the [0][0] index, which wasn't even visible in text editor, 
  //but messed up my code, so I removed the space from the beginning with the following slice:
  content = content.slice(1);
  let contArr: string[] = content.split('\r\n');
  if (content !== null) {
    if (contArr[0][0] === contArr[0][1] && contArr[0][1] === contArr[0][2]) {
      return contArr[0][0];
    } else if (contArr[0][0] === contArr[1][1] && contArr[1][1] === contArr[2][2]) {
      return contArr[0][0];
    } else if (contArr[0][0] === contArr[1][0] && contArr[1][0] === contArr[2][0]) {
      return contArr[0][0];
    } else if (contArr[0][1] === contArr[1][1] && contArr[1][1] === contArr[2][1]) {
      return contArr[0][1];
    } else if (contArr[0][2] === contArr[1][1] && contArr[1][1] === contArr[2][0]) {
      return contArr[0][2];
    } else if (contArr[0][2] === contArr[1][2] && contArr[1][2] === contArr[2][2]) {
      return contArr[0][2];
    } else if (contArr[1][0] === contArr[1][1] && contArr[1][1] === contArr[1][2]) {
      return contArr[1][0];
    } else if (contArr[2][0] === contArr[2][1] && contArr[2][1] === contArr[2][2]) {
      return contArr[2][0];
    } else {
      return "draw";
    }  
  } else {
    return "***The file is empty***";
  }  
}

console.log(ticTacResult('win-o.txt'));
console.log(ticTacResult('win-x.txt'));
console.log(ticTacResult('draw.txt'));
