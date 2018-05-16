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
    fs.writeFileSync(file, newText);
  } catch(error) {
    return null;  
  }
}

function makingNewFile(fileName: string) {
  let content: string = readFromFile('oldtext.txt');
  if (content !== null) {
    writeToFile(fileName, content);
    console.log(true);
  } else {
    console.log(false)
  }
}
makingNewFile('newtext.txt');
