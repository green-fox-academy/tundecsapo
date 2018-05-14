'use strict';
export{};

let lineCount: number = 6;
let arr: number[][] = [];

for (let i: number = 0; i < lineCount; i++){
    let temp: number[] = [];
    for (let j: number = lineCount-1; j >= 0; j--){
        if (i === j){
            temp.push(1);
        }
        else {
            temp.push(0)
        }
    }
    arr.push(temp);
}

console.log(arr);
