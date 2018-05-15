'use strict';
export{};

let listOfNumbers: number[] = [2, 4, 6, 8, 10, 12, 14, 16];
let findNums: number[] = [4, 8, 12, 16];
let result: boolean = true;

function checkNums(list: number[]): boolean {
    for (let i: number = 0; i < findNums.length; i++) {
        if (list.indexOf(findNums[i]) === -1) {
            result = false;
        } 
    }
    return result;
}
console.log(checkNums(listOfNumbers));

export = checkNums;
