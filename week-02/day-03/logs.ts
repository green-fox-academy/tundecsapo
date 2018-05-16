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

function checkList(logMessages): any[] {
  let content: string = readFromFile(logMessages);
  let contArr: any[] = content.split('\r\n');
  let ipArr: any[] = [];
  let getCount: number = 0;
  let postCount: number = 0;
  for (let i: number = 0; i < contArr.length; i++) {
    contArr[i] = contArr[i].replace('  ', ' ');
    contArr[i] = contArr[i].replace('   ', ' ');
    contArr[i] = contArr[i].replace('   ', ' ');
    contArr[i] = contArr[i].split(' ');
    ipArr.push(contArr[i][5]);
    if (contArr[i][6] === 'GET') {
      getCount++;
    } else if (contArr[i][6] === 'POST') {
      postCount++;
    }
  }
  let requestRatio: number = getCount / postCount;
  var results=[ipArr,requestRatio];
  return results;
}

function uniqueIP(fileName: string): string[] {
  let results: any[] = checkList(fileName);
  let ipRes: string[] = results[0]; 
  return ipRes;
}

function getPostratio(fileName: string): number {
    let results: any[] = checkList(fileName);
    let requestRatio: number = results[1]; 
    return requestRatio;
}
console.log(uniqueIP('log.txt'));
console.log(getPostratio('log.txt'));
