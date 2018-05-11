'use strict';

export {};

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
    else if(i===2){
        char = "%";
        lineSpace = "";
        let j: number=2;
        do{
            lineSpace += " ";
            j++;
        }while(j<lineCount-1)
        console.log(char + lineSpace + char);
    }
    else{
        char = "%";
        lineSpace = "";
        /*let l: number=1;
            do{
                lineSpace += " ";
                l++;
            }while(l<lineCount-2)
            console.log(char + lineSpace + char);*/
            console.log("-----");
    }
}




// %%%%%  0  %sign  space 
// %%  %  1  1 2 5  3 4
// % % %  2  1 3 5  2 4
// %  %%  3  1 4 5  2 3
// %   %  4  1   5  2 3 4 
// %%%%%  5
