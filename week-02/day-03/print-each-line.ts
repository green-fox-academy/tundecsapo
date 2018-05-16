'use strict';
export{};

declare function require(path: string): any;
const fs = require('fs');
let charEncoding = 'utf-8';

function readFromFile(filePath: string) {
  try {
    return fs.readFileSync('my-file.txt', charEncoding);
  } catch(error) {
    console.log('Unable to read file: my-file.txt');
    return null;
  }  
}

function readMyFile() {
  let result: string = readFromFile('my-file.txt');
  if (result !== null) {
    if (result.length === 0) {
      console.log('***This is an empty file***')
    } else {
      let content = result.split('\r\n').forEach(element => {
        console.log(element);
      })
    }
  }
}
readMyFile();
