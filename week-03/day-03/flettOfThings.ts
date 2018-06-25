import {Thing} from "./thing";
import {Fleet} from "./fleet";

class FleetOfThings {
    fleet: Fleet[] = [];
  constructor() {}
  main(){
    new Fleet();
  };  
}
let fleetOfThings = new FleetOfThings;
fleetOfThings.main();
let firstLine = new Thing('Get milk');
let secLine = new Thing('Remove the obstacles');
let thirdLine = new Thing('Stand up');
thirdLine.complete();
let fourthLine = new Thing('Eat lunch');
fourthLine.complete();

this.things.add(firstLine);
//this.fleet.add(secLine);
//this.fleet.add(thirdLine);
//this.fleet.add(fourthLine); 

console.log(fleetOfThings);



//* crete a fleet of things to have this output:*/
//* 1. [ ] Get milk */
//* 2. [ ] Remove the obstacles */
//* 3. [x] Stand up */
//* 4. [x] Eat lunch */
//* Hint: You have to create a Print method also */

/*
function print(something) {
    something.forEach(function (things) {
        console.log(things);
    });
}

print(fleet);
*/

/*
let firstThing = new Thing('Get Milk');
let secondThing = new Thing('Remove the obstacles');
let thirdThing = new Thing('Stand up');
thirdThing.complete();
let fourthThing = new Thing('Eat lunch');
fourthThing.complete();

let newfleet = new Fleet();
console.log(newfleet); */