'use strict';

class Student {
  name: string;
  grades: number[] = [];
}

let jozsi = new Student();
jozsi.name = "Jozsi";
jozsi.grades.push(5);
console.log(jozsi.grades);
console.log(jozsi);
console.log(jozsi.name);