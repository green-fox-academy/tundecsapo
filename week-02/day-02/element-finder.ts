'use strict';
export{};

const numbers: number[] = [1, 2, 3, 4, 5, 6, 8];


function containsSeven(list: number[]): string {
    if (list.indexOf(7) > -1){
        return "Hoorray"
    } else {
        return "Noooooo";
    }
}
console.log(containsSeven(numbers));
export = containsSeven;

/* ******Other solution:************
let sevenCount: number = 0;
function has7(numArr: number[]): string {
    for (let i: number = 0; i < numArr.length; i++){
        if (numArr[i] === 7){
            sevenCount++;
        } 
    }
    if (sevenCount > 0){
        return "Hoorray";
    } else {
        return "Noooooo"
    }
}
console.log(has7(numbers));
export = has7;
*/