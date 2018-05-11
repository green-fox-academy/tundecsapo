'use strict';
export {};

let lineCount: number = 8;
let lineChars: string = "";

for (let i: number = 0; i < lineCount; i++){
    if (i % 2 === 0){
        for (let j: number = 0; j < lineCount; j++){
            if (j % 2 === 0){
                lineChars += "%";
            }
            else {
                lineChars += " ";
            }
        }
        console.log(lineChars);
        lineChars = "";
    }
    else {
        for (let j: number = 0; j < lineCount; j++){
            if (j % 2 === 0){
                lineChars += " ";
            }
            else {
                lineChars += "%";
            }
        }
        console.log(lineChars);
        lineChars = "";
    }
} 
