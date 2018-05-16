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

function reverseText(revLines: string) {
  let content: string = readFromFile(revLines);
  let testArr: string[] = content.split('\r\n');
  let finalArr: string[] = [];
  let newStr: string = '';
  for (let i: number = 0; i < testArr.length; i++) {
    for (let j: number = testArr[i].length-1; j >=0; j--) {
      newStr = newStr.concat(testArr[i][j]);    
    }
    finalArr.push(newStr);
    newStr = '';
  }
  let finalText: string = finalArr.join('\r\n');
  writeToFile(revLines, finalText);
}
reverseText('reversed-lines.txt');
