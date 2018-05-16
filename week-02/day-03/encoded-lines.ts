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

function writeToFile(file: string, newText: string) {
  try {
    console.log('File writing succesful!');
    return fs.writeFileSync(file, newText);
  } catch(error) {
    console.log('Something went wrong while writing the file!');
    return null;  
  }
}

function encodeText(theText: string) {
  let content: string = readFromFile(theText);
  let testArr: string[] = content.split('\r\n');
  let finLine: string = '';
  let finArr: string[] = [];
  for (let i: number = 0; i < testArr.length; i++) {
    for (let j: number = 0; j < testArr[i].length; j++) {
      let charNum: number = (testArr[i].charCodeAt(j))-1;
      let finChar: string = String.fromCharCode(charNum);
      if (finChar === '') {
          finChar = ' ';
      }
      finLine = finLine.concat(finChar);
    }
    finArr[i] = finLine;
    finLine = '';
  }
  let finalText: string = finArr.join('\r\n')
  writeToFile(theText, finalText);
}
encodeText('encoded-lines.txt');
