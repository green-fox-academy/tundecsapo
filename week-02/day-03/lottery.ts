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

function popNumbers(statistic: string): number[] {
  let content: string = readFromFile(statistic);
  let tempArr: any[] = content.split('\r\n');
  let finArr: any[][] = [];
  for (let i: number = 0; i < tempArr.length; i++) {
    finArr[i] = tempArr[i].split(';');
  }
  let winNums: number[] = [];
  for (let j: number = 0; j < finArr.length; j++) {
    for (let k: number = 11; k < finArr[j].length; k++) {
      winNums.push(parseInt(finArr[j][k]));  
    }
  }
  winNums.sort(function(a, b) {
    return a - b;
  });
  let numList: number[] = [];
  let frequencyList: number[] = [];
  let commonNumbers: number[] = [];
  for (let m: number = 1; m < 91; m++){
    if (winNums.indexOf(m) !== -1 && numList.indexOf(m) === -1) {
      let last: number = winNums.lastIndexOf(m);
      let first: number= winNums.indexOf(m);
      numList.push(m);
      frequencyList.push(last -first + 1);
    }
  }
  for (let num: number = 0; num < 5; num++) {
    let index: number = frequencyList.indexOf(Math.max(...frequencyList));
    commonNumbers.push(numList[index]);
    numList.splice(index, 1);
    frequencyList.splice(index, 1);
  }
  return commonNumbers;
}
console.log(popNumbers('lottery.csv'));
