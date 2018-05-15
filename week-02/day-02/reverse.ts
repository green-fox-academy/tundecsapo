'use strict';
export{};

let reversed: string = '.eslaf eb t\'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI';
let removed: string = "";
let newStr: string = "";

function reverse(str) {
    for (let i: number = str.length - 1; i >= 0; i--) {
        removed = str.slice(i, i + 1);
        newStr = newStr.concat(removed);
    }
    return newStr;
}
console.log(reverse(reversed));

export = reverse;
