'use strict';

let lineCount: number = 7;

// Write a program that draws a
// diamond like this:
//
//    *           1  3
//   ***          3  2
//  *****         5  1
// *******        7  0 
//  *****         5  1
//   ***          3  2
//    *           1  3
//
// The diamond should have as many lines as lineCount is

export{};

let lineSpace: string = '';
let lineChar: string = '*';

for (let i: number = lineCount; i>0; i--){
    if (i>lineCount/2){
        let j: number = 3; 
        do {lineSpace += ' ';
            j++;
        }while (j<i)
        console.log(lineSpace + lineChar);
        lineChar += '**';
        lineSpace = '';
    }
    else {
        lineChar = '';
        let j: number = lineCount; 
        do {lineChar += '*';
            j--;
        }while (j>lineCount/2)
        console.log(lineSpace + lineChar);
        lineSpace += ' ';
        lineChar = '';
    }
}
