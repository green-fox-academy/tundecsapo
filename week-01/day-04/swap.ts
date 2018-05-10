'use strict';

let a: number = 123;
let b: number = 526;

let temp: number = null;

temp = a;
a = b;
b = temp;

console.log(a);
console.log(b);