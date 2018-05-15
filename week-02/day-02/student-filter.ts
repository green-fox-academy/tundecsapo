'use strict';
export{};

let students: any[] = [
  {name: 'Rezso', age: 9.5, candies: 2},
  {name: 'Zsombor', age: 12, candies: 5},
  {name: 'Aurel', age: 7, candies: 3},
  {name: 'Olaf', age: 12, candies: 7},
  {name: 'Gerzson', age: 10, candies: 1},
];

function min4candies(people: any[]): string[] {
    let candyOwners: string[] = [];
    for (let i: number = 0; i < people.length; i++) {
        if (people[i]['candies'] > 4) {
            candyOwners.push(people[i]['name']);
        }
    }
    return candyOwners;
}
console.log(min4candies(students));

function averageCandy(pupil: any[]): number {
    let sumCandy: number = 0;
    let studentCount: number = 0;
    for (let i: number = 0; i < pupil.length; i++) {    
            sumCandy += pupil[i]['candies'];
            studentCount++;
    }
    let average: number = sumCandy/studentCount;
    return average;
}
console.log(averageCandy(students));
