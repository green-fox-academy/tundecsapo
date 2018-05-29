'use strict';

import {Person} from './greenFox_person';

export class Student extends Person {
    previousOrganization: string;
    skippedDays: number;
  
    constructor(name: string, age: number, gender: string, previousOrganization: string = 'The School of Life',) {
      super(name, age, gender);
      this.previousOrganization = previousOrganization;
      this.skippedDays = 0;
    }
  
    getGoal(): void {
      console.log('My goal is: Be a junior software developer.')  
    }
  
    introduce(): void {
      console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} from ${this.previousOrganization} who skipped ${this.skippedDays} days from the course already.`);      
    }
    skipDays(numberOfDays): number {
      return this.skippedDays += numberOfDays; 
    }
  }