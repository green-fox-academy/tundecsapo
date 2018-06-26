'use strict';

// Write a program that prints the following fruits:
// apple -> immediately
// pear -> after 1 seconds
// melon -> after 3 seconds
// grapes -> after 5 seconds

fruitPrinter('apple');
setTimeout(() => fruitPrinter('pear'), 1000);
setTimeout(() => fruitPrinter('melon'), 3000);
setTimeout(() => fruitPrinter('grapes'), 5000);

function fruitPrinter(name) {
  console.log(name);
}