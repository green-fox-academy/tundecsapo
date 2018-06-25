'use strict';
export{};

class Student {
  name: string;
  grades: number[];

  constructor(name: string) {
    this.name = name;
    if (name === "God") {
      this.grades = [5, 5, 5];
    } else {
      this.grades = [];
    }
  }

  addGrade(grade: number): void {
    this.grades.push(grade);
  }

  getAverage(): number {
    let sum: number = 0;
    for (let i: number = 0; i < this.grades.length; i++) {
      sum += this.grades[i];
    }
    return sum / this.grades.length;
  }
}

let jozsi = new Student("Jozsi");
jozsi.addGrade(5);
jozsi.addGrade(3);
console.log(jozsi);
console.log(jozsi.name);
let god = new Student("God");
console.log(god.grades);
console.log(jozsi.grades);
console.log(jozsi.getAverage());
console.log(god.getAverage());