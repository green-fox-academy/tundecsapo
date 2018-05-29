'use strict';

export class Cohort {
    name: string;
    students: any[];
    mentors: any[];
    constructor(name: string) {
      this.name = name;
      this.students = [];
      this.mentors = [];
    }
    addStudent(Student): void {
      this.students.push(Student);
    }   
    addMentor(Mentor): void {
      this.mentors.push(Mentor);  
    }
    info() {
      console.log(`The ${this.name} cohort has ${this.students.length} students and ${this.mentors.length} mentors.`)      
    }
  }