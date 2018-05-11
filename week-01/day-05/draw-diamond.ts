'use strict';

let lineCount: number = 7;
// Write a program that draws a diamond 

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
        lineChar = '*';
        let j: number = 0; 
        
        do {lineSpace += ' ';
            j++;
        }while (j<i/2)
        
        if (i != 1){
            let k: number = 1; 
            do {lineChar += '**';
                k++;
            }while (k<i)
        }
        else {lineChar = '*';}
        
        console.log(lineSpace + lineChar);
    }
}
