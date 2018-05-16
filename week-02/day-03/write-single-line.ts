'use strict';
export{};

declare function require(path: string): any;
const fs = require('fs');
let charEncoding = 'utf-8';

function writeToFile(filePath: string, content: string) {
    try {
      fs.writeFileSync(filePath, content);
      console.log(content);  
    } catch(error) {
      console.log('Unable to write file: my-file.txt');  
    }
  }

function openFile(fileName: string) {
  const name: string = 'Tunde Csapo';
    writeToFile(fileName, name);
}
openFile('my-file.txt');
