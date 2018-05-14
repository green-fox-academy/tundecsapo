'use strict';
export{};

let factorial: number = 1;

function factorio(num: number){
    for (let i: number = 1; i <= num; i++){
        factorial *= i;
    }
    return factorial;
}

console.log(factorio(4));
