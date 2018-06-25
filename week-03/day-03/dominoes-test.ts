'use strict';
export{};

class Domino {
  dots: number[];
  
  constructor (side1: number, side2: number) {
    this.dots = [side1, side2];
    //this.dots.push(side1);
    //this.dots.push(side2);
  }
}

let dom1 = new Domino(4, 5);
let dom2 = new Domino(6, 1);
let dom3 = new Domino(1, 2);
let dom4 = new Domino(3, 4);
let dom5 = new Domino(2, 3);
let dom6 = new Domino(5, 6);

console.log(dom1);
console.log(dom2);
console.log(dom3);
console.log(dom4);
console.log(dom5);
console.log(dom6);

function initializeDominoes() {
    let dominoes = [];
    dominoes.push(dom1);
    dominoes.push(dom2);
    dominoes.push(dom3);
    dominoes.push(dom4);
    dominoes.push(dom5);
    dominoes.push(dom6);
    return dominoes;
}

function print(dominoes: Domino[]) {
    dominoes.forEach(function (value) {
        console.log(value);
    });
}

let dominoes = initializeDominoes();
/** You have the list of Dominoes */
/** Order them into one snake where the adjacent dominoes have the same numbers on their adjacent sides */
/** eg: [2, 4], [4, 3], [3, 5] ... */

print(dominoes);
console.log(dominoes);


