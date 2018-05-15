'use strict';
export{};

let quote: string = 'Hofstadter\'s Law: It you expect, even when you take into account Hofstadter\'s Law.'

quote = quote.replace(':', ' -');

let youIndex = quote.indexOf('you');
let firstPart: string =  quote.slice(0, youIndex);
let secondPart: string = quote.slice(youIndex);
quote = `${firstPart}always takes longer than ${secondPart}`;

console.log(quote);
