'use strict';
export{};

class Student {
  name: string;

  constructor(studentName: string) {
    this.name = studentName;
  }

  learn() {
    console.log('I am learning'); 
  }
  
  question(teacher) {
    teacher.answer();  
  }
}

class Teacher {
  name: string;

  constructor(teacherName: string) {
    this.name = teacherName;
  }

  teach(student) {
    student.learn();
  }

  answer() {
    console.log('I am answering');
  }
}

let tundi = new Student('Tundi');
let mentor = new Teacher('Mentor');
tundi.question(mentor);
mentor.teach(tundi);
