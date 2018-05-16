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
    return null;  
  }
}

function reverseText(revLines: string) {
  let content: string = readFromFile(revLines);
  let newStr: string = '';
  for (let i: number = content.length-1; i >=0; i--) {
    newStr = newStr.concat(content[i]);    
  }
  writeToFile(revLines, newStr);
}
reverseText('reversed-lines.txt');
