'use strict';

declare function require(path: string): any;
let fs = require('fs');
let charEncoding = 'utf-8';

function readFromFile(filePath: string) {
  try {
    return fs.readFileSync('my-text.txt', charEncoding);
  } catch(error) {
    console.log(error.message);
    return null;
  }  
}

function writeToFile(filePath: string, content: string) {
  try {
    fs.writeFileSync(filePath, content);
    console.log('file writing successful');  
  } catch(error) {
    console.log(error.message);  
  }
}

function doSomething() {
  let result: string = readFromFile('my-text.txt');
  if (result !== null) {
    let content = result.split('\r\n').forEach(element => {
        if (element === 'I love cats'){
            console.log('I searcged from the file');
        }
    })
    writeToFile('my-new-file.txt', result);  
    //console.log(result);
  }
}

doSomething();
/*
let fileContent: string = fs.readFileSync('my-text.txt', charEncoding);
//code
console.log(fileContent);
fs.writeFileSync('my-another-file.txt', fileContent);
*/
