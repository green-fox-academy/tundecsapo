'use strict';
export{};

let result: number = 0;

function sum(num: number){
    for (let i: number = 1; i <= num; i++){
        result += i;
    }
    return result;
}

console.log(sum(5));
