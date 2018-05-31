'use strict';

export function getFibonacci(num: any): any {
  if (typeof num === 'undefined') {
    return 'The input is empty. This method only works for numbers as input.'
  } else if (typeof num === 'string') {
    return 'The input is a string. This method only works for numbers as input.'
  } else if (num === null || typeof num === 'boolean') {
    return 'The input is not a number. This method only works for numbers as input.'
  } else if (num < 0 || num % 1 !== 0 ) {
    return 'This metod only works for 0 or positive integers.'
  } else if (typeof num === 'number' && num >= 0) {
    if (num >= 0 && num <= 1) {
      return num;
    } 
    return getFibonacci(num - 2) + getFibonacci(num - 1);
  }
}
