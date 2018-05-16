'use strict';
export{};

declare function require(path: string): any;
const fs = require('fs');
let charEncoding = 'utf-8';

function writeToFile(file: string, lines: string) {
    try {
      fs.writeFileSync(file, lines);
      console.log('File writing succesful');  
    } catch(error) {
      return null;  
    }
  }

function writeApples(filePath: string, word: string, num: number) {
  let newStr: string = "";  
  for (let i: number = 0; i < num; i++) {
    if (i === 0) {
      newStr = newStr.concat(word)
    } else {
      newStr = newStr.concat(`\r\n${word}`)
    }
  }
  writeToFile(filePath, newStr);
}
writeApples('appleText.txt', 'apple', 5);
