'use strict';
export{};

let newArr: number[] = [];

function unique(arr) {
    for (let i: number = 0; i < arr.length; i++){
        if (newArr.indexOf(arr[i]) === -1){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(unique([1, 11, 34, 11, 52, 61, 1, 34, 1, 1, 1]));
