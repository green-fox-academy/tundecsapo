'use strict';

export class Sharpie {
  color: string;
  width: number;
  inkAmount: number;
  
  constructor(sharpieColor: string, sharpieWidth: number) {
    this.color = sharpieColor;
    this.width = sharpieWidth;
    this.inkAmount = 100;
  }

  use(amount?: any) {
    if (amount === undefined) {  
      this.inkAmount--;
    } else if (typeof amount === 'string') {
      return 'The input is a string. This method only works for numbers as input.'
    } else if (amount === null || typeof amount === 'boolean') {
      return 'The input is not a number. This method only works for numbers as input.'
    } else if (amount < 0) {
      return 'The amount of ink used can\'t be negative.'
    } else if (typeof amount === 'number' && amount >= 0) {
      this.inkAmount -= amount;
    }
    return this.inkAmount;    
  }
}
