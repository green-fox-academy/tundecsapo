'use strict';

export{};

let a: number = 24;
let out: number = 0;

// if a is even increment out by one
if (a % 2 == 0){out++;};
console.log(out);

let b: number = 13;
let out2: string = '';

// if b is between 10 and 20 set out2 to "Sweet!"
if (b > 10 && b < 20){out2 = 'Sweet!';}
// if less than 10 set out2 to "Less!",
else if (b < 10){out2 = 'Less!';}
// if more than 20 set out2 to "More!"
else {out2 = 'More!';}
console.log(out2);

let c: number = 123;
let credits: number = 100;
let isBonus: boolean = false;

// if credits are at least 50,
// and is_bonus is false decrement c by 2
if (credits >= 50 && isBonus == false){c -= 2;}
// if credits are smaller than 50,
// and is_bonus is false decrement c by 1
else if (credits < 50 && isBonus == false){c--;}
// if is_bonus is true c should remain the same
/*
because nothing would change if isBonus is true we don't need to add another condition
*/
console.log(c);

let d: number =  8;
let time: number = 120;
let out3: string = '';

// if d is dividable by 4
// and time is not more than 200
// set out3 to "check"
if (d % 4 == 0 && !(time>200)){out3 = "check";}
// if time is more than 200
// set out3 to "Time out"
else if (time > 200){out3 = "Time out";}
// otherwise set out3 to "Run Forest Run!"
else {out3 = "Run Forest Run!";}
console.log(out3);
