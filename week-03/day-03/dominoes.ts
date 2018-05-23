import {Domino} from "./domino";

function initializeDominoes(): Domino[] {
  let dominoes = [];
  dominoes.push(new Domino(5, 2));
  dominoes.push(new Domino(4, 6));
  dominoes.push(new Domino(1, 5));
  dominoes.push(new Domino(6, 7));
  dominoes.push(new Domino(2 ,4));
  dominoes.push(new Domino(7, 1));
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

//print(dominoes);
//console.log(dominoes);
function orderDominoes(dominoes: Domino[]) {
  for (let j: number = 0; j < dominoes.length; j++) {
    for (let i: number = j + 1; i < dominoes.length; i++) {
      if (dominoes[i].values[0] === dominoes[j].values[1]) {
        let temp = dominoes[i];   
        dominoes.splice(i, 1);
        dominoes.splice(j + 1, 0, temp);
      }
    }
  }
  console.log(dominoes);  
}
orderDominoes(dominoes);
