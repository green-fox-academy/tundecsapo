'use strict';
export{};

let students: any[] = [
  {name: 'Teodor', age: 3, candies: 2},
  {name: 'Rezso', age: 9.5, candies: 2},
  {name: 'Zsombor', age: 12, candies: 5},
  {name: 'Aurel', age: 7, candies: 3},
  {name: 'Olaf', age: 12, candies: 7},
  {name: 'Gerzson', age: 10, candies: 1},
];

// create a function that takes a list of students and logs: 
// - how many candies are owned by students
function sumCandies(people: any[]): number {
  let candies: number = 0;
  for (let i: number = 0; i < people.length; i++) {
    candies += people[i]['candies'];
  }
  return candies;
}
console.log(sumCandies(students));

function sumAge(people: any[]): number {
  let ages: number = 0;
  for (let i: number = 0; i < people.length; i++) {
    if (people[i]['candies'] < 5){
      ages += people[i]['age'];
    }
  }
  return ages;
}
console.log(sumAge(students));
