'use strict';

//Create an Animal constructor function
//Every animal has a hunger property, which is a number
//Every animal has a thirst property, which is a number
//When creating a new animal object these properties are created with the default 5 value
//Every animal can eat() which decreases their hunger by one
//Every animal can drink() which decreases their thirst by one
//Every animal can play() which increases both by one
function Animal() {
  this.hunger = 5;
  this.thirst = 5;
  this.eat = function() {
    this.hunger--;
  }  
  this.drink = function() {
    this.thirst--;
  }
  this.play = function() {
    this.hunger++;
    this.thirst++;
  }
}

//Create a Farm constructor function
//The farm has slots which defines the number of free places for animals
//The farm has list of Animals
//The farm can breed() which creates a new animal if there's place for it
//The farm can slaughter() which removes the least hungry animal
//The farm can print reports about their current state:
//The farm has 11 living animals we are bankrupt
//The farm can progress from day to a new day by calling it's progress() method:
//All animals should have their methods called randomly with 50% chance
//The farm should call its breed and slaughter method at the end of each day
//The farm should print report at the end of each day
//Print the number of sheeps
//Print "bankrupt" if no animals left
//Print "okay" if the number of animals is above zero and under the slot number
//Print "full" if the number of animals are at the maximum allowed

function Farm(slots) {
  this.slots = slots;
  this.animals = [];
  this.breed = function(animal) {
    if (this.animals.length < slots) {
      let newAnimal = new Animal();    
      this.animals.push(newAnimal);
      console.log('A new animal arrived to the farm');  
    } else {
      console.log('There is no free slot for this animal in the farm');  
    } 
  }  
  this.slaughter = function() {
    let minHungerIndex = this.animals[0].hunger;  
    for (let i = 1; i < this.animals.length; i++) {
      if (this.animals[i].hunger < this.animals[minHungerIndex].hunger) {  
        minHungerIndex = [i]  
      }
    }
    this.animals.splice(minHungerIndex, 1);
  }
  this.print = function() {
    let status = undefined;
    if (this.animals.length === this.slots) {
      status = 'full';  
    } else if (this.animals.length < this.slots && this.animals.length > 0) {
      status = 'okay';  
    } else {
      status = 'bankrupt';  
    }
    console.log(`The farm has ${this.animals.length} living animals, we are ${status}`);  
  }
  this.progress = function() {
    for (let i = 0; i < this.animals.length; i++) {
      let randomNum = Math.ceil(Math.random() * 3);
      if (randomNum === 1) {
        this.animals[i].eat();  
      } else if (randomNum === 2) {
        this.animals[i].drink();  
      } else {
        this.animals[i].play();  
      }
    }  
    this.breed();
    this.slaughter(); 
    this.print();
    console.log(this.animals);
  }
  for (let i = 0; i < 20; i++) {
    this.breed();
  }
}

// Create a sheep farm with 20 slots
const SheepFarm = new Farm(20);
console.log(SheepFarm.animals); // Should log 20 Animal objects

// Add a click event to the button and call 'progress'
// The progress function should log the following to the console:
//  -  The farm has 20 living animals, we are full
const button = document.querySelector('button');
button.addEventListener('click', SheepFarm.progress.bind(SheepFarm));
