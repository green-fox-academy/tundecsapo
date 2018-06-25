'use strict';
export{};

declare function require(path: string): any;
const fs = require('fs');
let charEncoding = 'utf-8';

/*
function readFromFile(filePath: string) {
  try {
    return fs.readFileSync(filePath, charEncoding);
  } catch(error) {
    console.log('Unable to read file');
    return null;
  }  
}
*/

function writeToFile(filePath: string, content: string) {
    try {
      fs.writeFileSync(filePath, content);
      console.log(content);  
    } catch(error) {
      console.log('Unable to write file: myfile.txt');  
    }
  }

function openFile(fileName: string) {
  //let result: string = readFromFile(fileName);
  const name: string = 'Tunde Csapo';
  //if (result !== null) {
    writeToFile(fileName, name);
  //}
}
openFile('myfile.txt');
