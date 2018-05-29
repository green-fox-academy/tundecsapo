'use strict';

import {Person} from './greenFox_person';

export class Sponsor extends Person {
    company: string;
    hiredStudents: number;
  
    constructor(name: string, age: number, gender: string, company: string = 'Google') {
      super(name, age, gender);
      this.company = company;
      this.hiredStudents = 0;  
    }
  
    introduce(): void {
      console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} who represents ${this.company} and hired ${this.hiredStudents} students so far.`)
    }
  
    hire(): void {
      this.hiredStudents++;  
    }
    
    getGoal(): void {
      console.log('My goal is: Hire brilliant junior software developers.')
    }
  }