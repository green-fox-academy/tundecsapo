'use strict';
export {};

let lineCount: number = 6;
// Write a program that draws a square 

let char: string = "";
let lineSpace: string = "";
let fullLine: string = "";

for (let i: number = 0; i < lineCount; i++){
    if (i === 0 || i === lineCount-1){
        char = "";
        let k: number = 1;
        do {
            char += "%";
            k++;
        } while(k < lineCount)
        console.log(char);
    }
    else if (i === lineCount-2){
        char = "%";
        lineSpace = "";
        let j: number=2;
        do {
            lineSpace += " ";
            j++;
        } while(j < lineCount-1)
        console.log(char + lineSpace + char);
    }
    else {
        char = "%";
        lineSpace = "";
        for (let k: number = 0; k < lineCount-1; k++){
            if (k == i || k == 0 || k == lineCount-2){
                fullLine += char;
            }
            else {
                fullLine += " ";
            }
        }
        console.log(fullLine);
        fullLine = "";
    }
}
