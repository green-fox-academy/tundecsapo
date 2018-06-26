'use strict';

const mapWith = (array, callback) => {
  let output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(callback(array[i]));
  };
  return output;
}

const addOne = (number) => {
  return number + 1;
}

// Exercise 1:
console.log(mapWith([1, 2, 3], addOne));
//expected result: [2, 3, 4]

// Exercise 2:
const words = ['map', 'reduce', 'filter'];

const removeSecondLetter = (word) => {
  let string = '';
  for (let i = 0; i < word.length; i += 2) {
    string += word[i];  
  }
  return string;
}

console.log(mapWith(words, removeSecondLetter));
// expected result: ['mp','rdc', 'fle']
