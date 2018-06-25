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
}

let jozsi = new Student("Jozsi");
jozsi.grades.push(5);
console.log(jozsi.grades);
console.log(jozsi);
console.log(jozsi.name);
let god = new Student("God");
console.log(god.grades);