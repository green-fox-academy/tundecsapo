'use strict';

let lineCount: number = 6;
// Write a program that draws a square

let char: string = "";
let lineSpace: string = "";

for (let i: number=lineCount; i>0; i--){
    if(i===1 || i===lineCount){
        char = "";
        let k: number=1;
        do{
            char += "%";
            k++;
        }while(k<lineCount)
        console.log(char);
    }
    else{
        char = "%";
        lineSpace = "";
        let k: number=1;
        do{
            lineSpace += " ";
            k++;
        }while(k<lineCount-2)
        console.log(char + lineSpace + char);
    }
}
