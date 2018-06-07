// Create a function that
    // - takes a filename as a parameter,
    // - reads a csv file which rows contains data in the following format: <person name>;<birthdate in YYYY-MM-DD format>;<city name>
    // - returns the year when the most births happend.
    // You can find such a csv file in this directory: births.csv
    // If you pass births.csv to your function, the result should be 2006.

'use strict';
export {};

declare function require(path: string): any;
const fs = require('fs');
let charEncoding = 'utf-8';

export function popYearFinder(file: string): number {
  let content: string = readFromFile(file);
  if (content !== null) {
    let tempArray: string[] = content.split('\r\n');
    let contArray: string[][] = [];
    let years: number[] = [];
    
    for (let i: number = 0; i < tempArray.length; i++) {
      contArray.push(tempArray[i].split(';'));
    }

    for (let j: number = 0; j < contArray.length; j++) {
      let birthday: string[] = contArray[j][1].split('-');
      let birthyear: number = Number(birthday[0]);
      years.push(birthyear);
    }

    years = years.sort(function(a, b){return a - b});

    let maxBirth: number = 0;
    let maxBirthYear: number = 0;

    for (let k: number = 0; k < years.length; k++) {
      if (years.indexOf(years[k]) !== years.lastIndexOf(years[k])) {
        let occur: number = years.lastIndexOf(years[k]) - years.indexOf(years[k]) + 1; 
        if (occur > maxBirth) {
          maxBirth = occur;
          maxBirthYear = years[k];    
        }    
      }
    }
    return maxBirthYear;  
  } else {
    return null;  
  }
}

function readFromFile(source: string): string {
  try {
    return fs.readFileSync(source, charEncoding);
  } catch(error) {
    //console.log(`Unable to read file: ${filePath}`);
    return null;
  }
}
    
function writeToFile(file: string, content: string): string {
  try {
    fs.writeFileSync(file, content);
    //console.log('File writing succesful');  
  } catch(error) {
    return null;  
  }
}
  
console.log(popYearFinder('births.csv'));
