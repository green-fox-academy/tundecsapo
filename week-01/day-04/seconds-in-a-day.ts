'use strict';

let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;

// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables

let totalSecs: number = 24 * 60 * 60;
let passedHoursInSec: number = 14 * 60 * 60;
let passedMinsInSec: number = 34 * 60;
let remainingSec: number = totalSecs - passedHoursInSec - passedMinsInSec - currentSeconds; 
console.log(totalSecs);
console.log(remainingSec);
