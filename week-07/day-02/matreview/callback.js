'use strict';

//setTimeout(greetClass(), );  //like this() we call the function and executes it right away


//if we don't want to use a parameter
/*
setTimeout(greetClass, 5000);

function greetClass() {
  console.log('Whatap Secret?!?!?');
}
*/

// SOLUTION 2: if we want to use a parameter in the funnction
/*
setTimeout(greetSecret, 5000);

function greetSecret() {
greetClass('Secret');
}

function greetClass(name) {
  console.log(`Whatap ${name}?!?!?`);
}
*/

//Another, shorter solution if we want to use a parameter
setTimeout(() => greet('secret'), 1000);

function greet(name) {
  console.log(`Whatap ${name}?!?!?`);
}