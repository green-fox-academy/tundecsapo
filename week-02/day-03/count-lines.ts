'use strict';
export{};

declare function require(path: string): any;
const fs = require('fs');
let charEncoding = 'utf-8';

function readFromFile(filePath: string) {
  try {
    return fs.readFileSync(filePath, charEncoding);
  } catch(error) {
    console.log(0);
    return null;
  }  
}

function countLines(fileName: string) {
  let result: string = readFromFile(fileName);
  let lineCount: number = 0;
  if (result !== null) {
    let content = result.split('\r\n').forEach(element => {
        lineCount++;
    })
    console.log(lineCount);
  }
}
countLines('my-fileee.txt');
