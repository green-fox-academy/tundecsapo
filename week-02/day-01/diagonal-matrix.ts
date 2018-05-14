'use strict';
export{};

let lineCount: number = 4;
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

// if I want to print the element of the array like this:

//    0 0 0 1
//    0 0 1 0
//    0 1 0 0
//    1 0 0 0

//for (let k: number = 0; k < arr.length; k++){
//    console.log(arr[k].join(' '));
//    }
