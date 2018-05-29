'use strict';

export class Person {
  name: string;
  age: number;
  gender: string;
  
  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  introduce(): void {
    console.log(`Hi, I\'m ${this.name}, a ${this.age} year old ${this.gender}.`);
  }

  getGoal(): void {
    console.log('My goal is: Live for the moment!');  
  }
}

export class Student extends Person {
  previousOrganization: string;
  skippedDays: number;

  constructor(name: string, age: number, gender: string, previousOrganization: string) {
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

export class Mentor extends Person {
  level: string;

  constructor(name: string, age: number, gender: string, level: string) {
    super(name, age, gender);
    this.level = level;
  }

  getGoal() {
    console.log('My goal is: Educate brilliant junior software developers.')
  }
  introduce() {
    console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} ${this.level} mentor.`)
  }
}

export class Sponsor extends Person {
  company: string;
  hiredStudents: number;

  constructor(name: string, age: number, gender: string, company: string) {
    super(name, age, gender);
    this.company = company;
    this.hiredStudents = 0;  
  }

  introduce() {
    console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} who represents ${this.company} and hired ${this.hiredStudents} students so far.`)
  }

  hire() {
    this.hiredStudents++;  
  }
  
  getGoal() {
    console.log('My goal is: Hire brilliant junior software developers.')
  }
}

export class Cohort {
  name: string;
  students: any[];
  mentors: any[];
  constructor(name: string) {
    this.name = name;
    this.students = [];
    this.mentors = [];
  }
  addStudent(Student) {
    this.students.push(Student);
  }   
  addMentor(Mentor) {
    this.mentors.push(Mentor);  
  }
  info() {
    console.log(`The ${this.name} cohort has ${this.students.length} students and ${this.mentors.length} mentors.`)      
  }
}

let people = [];

let mark = new Person('Mark', 46, 'male');
people.push(mark);
let jane = new Person('Jane Doe', 30, 'female');
people.push(jane);
let john = new Student('John Doe', 20, 'male', 'BME');
people.push(john);
let student = new Student('Jane Doe', 30, 'female', 'The School of Life');
people.push(student);
let gandhi = new Mentor('Gandhi', 148, 'male', 'senior');
people.push(gandhi);
let mentor = new Mentor('Jane Doe', 30, 'female', 'intermediate');
people.push(mentor);
let sponsor = new Sponsor('Jane Doe', 30, 'female', 'Google');
let elon = new Sponsor('Elon Musk', 46, 'male', 'SpaceX');
people.push(elon);
student.skipDays(3);

for (let i = 0; i < 6; i++) {
  elon.hire();
}

for (let i = 0; i < 4; i++) {
  sponsor.hire();
}

for (let person of people) {
  person.introduce();
  person.getGoal();
}

let awesome = new Cohort('AWESOME');
awesome.addStudent(student);
awesome.addStudent(john);
awesome.addMentor(mentor);
awesome.addMentor(gandhi);
awesome.info();
