'use strict';
// Write a program that draws a pyramid
export{};

let lineCount: number = 4;
let lineSpace: string = '';
let lineChar: string = '*';

for (let i: number = lineCount; i>0; i--){
    let j: number = 0; 
    do {lineSpace += ' ';
        j++;
    }while (j<i)
    console.log(lineSpace + lineChar);
    lineChar += '**';
    lineSpace = '';
}
