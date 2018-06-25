'use strict';

class Dog {
  private belly: number = 0;
  public eat(): void {
    this.belly++;  
  }  

  public poop(): boolean {
    if (this.belly > 0) {
      this.belly--;
      return true;  
    }  
  }

  public isHungry(): boolean {
    return this.belly < 20;  
  }
}