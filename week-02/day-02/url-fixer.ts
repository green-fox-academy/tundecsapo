'use strict';
export{};

let url: string = 'https//www.reddit.com/r/nevertellmethebots';

url = url.replace('bots', 'odds');
let firstPart: string =  url.slice(0, 5);
let secondPart: string = url.slice(5);
url = `${firstPart}:${secondPart}`;

console.log(url);
