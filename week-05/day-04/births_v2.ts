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

export function popYearFinder(file: string) {
  //let content: string = readFromFile(file);
  //let tempArray: string[] = content.split('\r\n');
  //if (content !== null) {
  
    /*
    ANOTHER SOLUTION

    let tempArray: string[] = content.split(/[-;\r\n]+/);
    console.log(tempArray);

    let temp: string[] = [];

    for (let i: number = 0; i < tempArray.length; i++) {
      if (i % 5 === 1) {
        temp.push(tempArray[i]);  
      }
    }
    */

    /*
    ANOTHER SOLUTION
    let fileContent: string = readFromFIle(file);
    fileContent.split('\r\n').forEach((element) => {
      let births: object = {}; 
      
      if (element !== '') {
        let year = element.split(';')[1].slice(0, 4);  
        if (births[year]) {
          births[year]++;          
        } else {
          births[year] = 1;  
        }
      }
    })

    let years: string[] = Object.keys(births);
    let yearCount: number[] = Object.keys(births).map((keys) => {
      return births[keys]; 
    });

    console.log(years);
    console.log(yearCount);

    let yearCountMax: number = Math.max(...yearCount);
    let yearCountMaxIndex: number = yearCount.indexOf(yearCountMax);
    return years[yearCountMaxIndex];  
    })



    console.log(births);
    */

    
    //NEW SOLUTION AGAIN
    let fileContent: string = readFromFile(file);
    let peopleArray: string[] = fileContent.split(/[-;\r\n]+/);

    let temp: string[] = [];
    for (let i: number = 0; i < peopleArray.length; i++) {
      if (i % 5 === 1) {
        temp.push(peopleArray[i]);  
      }  
    }

    let count: object = {};
    for (let i: number = 0; i < temp.length; i++) {
      let date: string = temp[i];
      count[date] = count[date] ? count[date] + 1 : 1;  
    }

    let final: any[][] = [];
    for (let year in count) {
      final.push([year, count[year]]);
      final.sort((a, b) => {
        return a[1] - b[1];
      })
    }
   
    let finArr: number[] = [];
    for (let i: number = 0; i < final.length; i++ ) {
      if (final[i][1] === final[final.length - 1][1]) {
        finArr.push(final[i][0]);
      }
    }
  
    return finArr;

    /*FINDING A YEAR

    content.match(/\d{4}/gm).forEach(value => {
    countYear[value] ? countYear[value]++
      : countYear[value] = 1;
    });
      
    })
   
    

    let contArray: string[][] = [];
    let years: number[] = [];
    
    for (let i: number = 0; i < tempArray.length; i++) {
      contArray.push(tempArray[i].split(';'));
    }

    for (let j: number = 0; j < contArray.length; j++) {
      let tempObject = {}; 
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
  }*/
}

function readFromFile(source: string): string {
  try {
    return fs.readFileSync(source, charEncoding);
  } catch(error) {
    //console.log(`Unable to read file: ${filePath}`);
    return null;
  }
}
  
console.log(popYearFinder('births.csv'));
