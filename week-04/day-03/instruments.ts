'use strict';

abstract class Instrument {
  name: string;
  abstract play(): void;
}

abstract class StringedInstrument extends Instrument {
  numberOfStrings: number;
  abstract sound(): string;
}

class ElectricGuitar extends StringedInstrument {
  constructor(strings: number = 6) {
    super();
    this.name = 'Electric Guitar';
    this.numberOfStrings = strings;
  };

  sound(): string {
    return 'Twang'
  };

  play(): void {
    console.log(`${this.name}, a ${this.numberOfStrings}-stringed instrument that goes ${this.sound()}`);
  };  
}

class BassGuitar extends StringedInstrument {
  constructor(strings: number = 4) {
    super();
    this.name = 'Bass Guitar';
    this.numberOfStrings = strings;
  };

  sound(): string {
    return 'Duum-duum-duum';
  };

  play(): void {
    console.log(`${this.name}, a ${this.numberOfStrings}-stringed instrument that goes ${this.sound()}`);
  };  
}

class Violin extends StringedInstrument {
  constructor() {
    super();
    this.name = 'Violin';
    this.numberOfStrings = 4;
  }; 

  sound(): string {
    return 'Screech';
  };

  play(): void {
    console.log(`${this.name}, a ${this.numberOfStrings}-stringed instrument that goes ${this.sound()}`);
  };  
}

console.log('Test 1, create Electric Guitar, Bass Guitar and Violin with default strings.');
let guitar = new ElectricGuitar();
let bassGuitar = new BassGuitar();
let violin = new Violin();

console.log('Test 1 Play');
guitar.play();
bassGuitar.play();
violin.play();

console.log('Test 2, create Electric Guitar, Bass Guitar with 7 and 5 strings .');
let guitar2 = new ElectricGuitar(7);
let bassGuitar2 = new BassGuitar(5);

console.log('Test 2 Play');
guitar2.play();
bassGuitar2.play();
