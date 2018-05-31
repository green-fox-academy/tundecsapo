'use strict';

export class List {
  sum(ints: any[]): any {
    let sum: number = 0;
    if (typeof ints[0] === 'undefined') {
      return 'This array is empty. This method only works for list of numbers.';
    }
    for (let i: number = 0; i < ints.length; i++) {
      if (typeof ints[i] !== 'number') {
        return 'This method only works for list of numbers.';
      } else {  
        sum += ints[i];  
      }
    }
    return sum;   
  }
}
