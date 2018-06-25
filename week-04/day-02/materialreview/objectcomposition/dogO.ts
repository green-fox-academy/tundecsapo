'use strict';

class DigestiveSystem {
  private belly: number;
  private hungryLevel: number;
  
  public constructor(hungryLevel: number){
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



class Dog {
  private digestiveSystem: DigestiveSystem;
  
  constructor() {
    this.digestiveSystem = new DigestiveSystem(20);
  }

  public eat(): void {
    this.digestiveSystem.eat();  
  }

  public poop(): boolean {
    return this.digestiveSystem.poop();  
  }

  public isHungry(): boolean {
    return this.digestiveSystem.isHungry();  
  }

  public reactToCucumber() {
    console.log('snif-snif');  
  }
}

let dog = new Dog();
console.log(dog.reactToCucumber());