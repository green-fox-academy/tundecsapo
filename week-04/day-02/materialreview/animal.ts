'use strict';

export class Animal {
  protected belly: number;  
  protected hungryLevel: number;
  
  protected constructor(hungryLevel: number){
    this.belly = 0;
    this.hungryLevel = hungryLevel;  
  }

  public eat(): void {
    this.belly++;
    console.log(this.belly);  
  }  
  public poop(): boolean {
    if (this.belly > 0) {
      this.belly--;
      return true;  
    }
    return false;
  }

  public isHungry() {
    return this.belly < this.hungryLevel;  
  }
}

