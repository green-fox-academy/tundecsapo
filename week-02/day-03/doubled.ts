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

function checkDuplicate(doubledText: string) {
  let content: string = readFromFile(doubledText);
  let newStr: string = '';
  for (let i: number = 0; i < content.length; i+=2) {
    newStr = newStr.concat(content[i]);    
  }
  writeToFile(doubledText, newStr);
}
checkDuplicate('duplicated-chars.txt');
