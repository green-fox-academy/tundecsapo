'use strict';

export function checkAnagrams(firstString: string, secString: string): boolean {
  for (let i: number = 0; i < firstString.length; i++) {
    if (secString.indexOf(firstString[i]) > -1) {
      secString = secString.slice(0, secString.indexOf(firstString[i])) + secString.slice((secString.indexOf(firstString[i])) + 1 )   
    }    
  }
  if (secString.length === 0) {
    return true;
  } else {
    return false;  
  }  
} 

/* Initial test:
let string1 = 'hannah';
let string2 = 'hannah';
let string3 = 'something';
let string4 = 'mesoingth';
let string5 = 'mesoingthg';

console.log(checkAnagrams(string1, string2));
console.log(checkAnagrams(string1, string3));
console.log(checkAnagrams(string3, string4));
console.log(checkAnagrams(string3, string5));
*/



