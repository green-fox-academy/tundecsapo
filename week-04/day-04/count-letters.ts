'use strict';

export function letterCount(text: string): Object {
  let letters = new Object();  
  for (let i: number = 0; i < text.length; i++) {
    if (!letters[text[i]]) {
      letters[text[i]] = 1;
    } else {
      letters[text[i]] += 1
    }  
  }
  return letters;
} 
