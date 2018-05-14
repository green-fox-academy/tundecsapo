'use strict';
export{};

let ai: number[] = [3, 4, 5, 6, 7];
let sum: number = 0;

ai.map(function(elem: number): number {
    return sum += elem;
})
console.log(sum);
