'use strict';

class Aircraft {
  ammo: number;
  maxAmmo: number;
  baseDamage: number;
  constructor() {
    
  }
  fight(): number {
    let damage: number = this.ammo * this.baseDamage;  
    this.ammo = 0;
    return damage; 
  }
  refill(num: number): number {
    let forRefill: number = this.maxAmmo - this.ammo;    
    if (num > forRefill) {
      this.ammo += forRefill;
      num = num - forRefill;  
    } else {
      this.ammo += num;
      num = 0;  
    }
    return num;
  }
  getType(theAircraft): string {
    return theAircraft.constructor.name;  
  }
  getStatus(aircraftDetails): string {
    let thisaircraft: string = aircraftDetails.toString();  
    return thisaircraft;
  }
  isPriority(currentAircraft): boolean {
    if (currentAircraft.constructor.name === 'F35') {
      return true;    
    } else {
      return false;  
    }    
  }  

}

class F16 extends Aircraft {
  constructor() {
    super();
    this.ammo = 0;
    this.maxAmmo = 8;
    this.baseDamage = 30;    
  } 
}

class F35 extends Aircraft {
  constructor() {
    super();
    this.ammo = 0;
    this.maxAmmo = 12;
    this.baseDamage = 50;   
      
  } 
}

class Carrier {
  aircrafts: any[];
  storeOfAmmo: number;
  initialAmmo: number;
  hp: number;
  totalDamage: number;

  constructor(initAmmo: number) {
    this.initialAmmo = initAmmo; //    this.storeOfAmmo = initAmmo;

    this.aircrafts = [];
    this.hp = 5000; 
  } 
  add(aircraft): void {
    this.aircrafts.push(aircraft);    
  }
  fill(): void {
    for (let i: number = 0; i < this.aircrafts.length; i++) {  
      if (this.aircrafts[i].isPriority) {
        this.storeOfAmmo = this.aircrafts[i].refill(this.storeOfAmmo);
      }
      if (this.storeOfAmmo === 0) {
        throw 'There is no ammo left to fill the aircrafts.';   
      }   
    }
    for (let i: number = 0; i < this.aircrafts.length; i++) {  
      if (!this.aircrafts[i].isPriority) {
        this.storeOfAmmo = this.aircrafts[i].refill(this.storeOfAmmo);
      }
      if (this.storeOfAmmo === 0) {
        throw 'There is no ammo left to fill the aircrafts.';   
      }   
    }
    //return this.aircrafts;  
  }
  fight(newCarrier: Carrier): Carrier {
    for (let i: number = 0; i < this.aircrafts.length; i++) {
      newCarrier.hp -= this.aircrafts[i].damage;
    }
    return newCarrier;
  } 
  getStatus(): void {
    let totalDamage: number = 0;  
    for (let i: number = 0; i < this.aircrafts.length; i++) {
      totalDamage += this.aircrafts[i].damage;    
    }  
    if (this.hp === 0) {
      console.log('It\'s dead Jim :(');
    } else { 
      console.log(`HP: ${this.hp}, Aircraft count: ${this.aircrafts.length}, Ammo Storage: ${this.storeOfAmmo}, Total damage: ${this.totalDamage}`);
      console.log('Aircrafts:');
      for (let i: number = 0; i < this.aircrafts.length; i++) {
        console.log(`Type ${this.aircrafts[i].getType(this.aircrafts[i])}, Ammo: ${this.aircrafts[i].ammo}, Base Damage: ${this.aircrafts[i].baseDamage}, All Damage: ${this.aircrafts[i].damage}`);  
      } 
    } 
  }
}

let firstCarrier: Carrier = new Carrier(3000);
let firstAirCraft: F35 = new F35();
firstCarrier.add(firstAirCraft);
let secAirCraft: F35 = new F35();
firstCarrier.add(secAirCraft);
let thirdAirCraft: F35 = new F35();
firstCarrier.add(thirdAirCraft);
let fourthAirCraft: F16 = new F16();
firstCarrier.add(fourthAirCraft);
let fifthAirCraft: F16 = new F16();
firstCarrier.add(fifthAirCraft);

let secondCarrier: Carrier = new Carrier(2000);
let enemyAirCr1: F16 = new F16();
secondCarrier.add(enemyAirCr1);
let enemyAirCr2: F35 = new F16();
secondCarrier.add(enemyAirCr2);

//console.log(firstCarrier);
//console.log(secondCarrier);
//console.log(fifthAirCraft);
firstCarrier.getStatus();
console.log(firstCarrier.fill());
firstCarrier.getStatus();
console.log(firstCarrier.fight(secondCarrier));
firstCarrier.getStatus();
secondCarrier.getStatus();





/*
HP: 5000, Aircraft count: 4, Ammo Storage: 2300, Total damage: 2280
Aircrafts:
Type F35, Ammo: 12, Base Damage: 50, All Damage: 600
Type F35, Ammo: 12, Base Damage: 50, All Damage: 600
Type F35, Ammo: 12, Base Damage: 50, All Damage: 600
Type F16, Ammo: 8, Base Damage: 30, All Damage: 240
Type F16, Ammo: 8, Base Damage: 30, All Damage: 240
*/