'use strict';

export class Student {
  name: string;
  average: number;
  gradeCount: number;

  constructor(name: string) {
    this.name = name;
    if (name === 'God') {
      this.average = 5;
      this.gradeCount = 3;
    } else {
      this.average = 0;
      this.gradeCount = 0;
    }
  }

  addGrade(grade: number): void {
    this.average = (this.average * this.gradeCount + grade) / (this.gradeCount + 1);
    this.gradeCount += 1;
  }

  getAverage(): number {
    return this.average;
  }
}

let jozsi = new Student('Jozsi');
jozsi.addGrade(5);
jozsi.addGrade(3);
console.log(jozsi.getAverage());
let god = new Student('God');
console.log(god.getAverage());