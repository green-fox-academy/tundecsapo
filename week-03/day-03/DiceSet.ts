class DiceSet {
    // You have a `DiceSet` class which has a list for 6 dices
    // You can roll all of them with roll()
    // Check the current rolled numbers with getCurrent()
    // You can reroll with reroll()
    // Your task is to roll the dices until all of the dices are 6
  dices: number[];
  readonly numOfDices: number = 6;
    
  roll(): number[] {
    this.dices = [];
    for(var i = 0; i < this.numOfDices; i++) { 
      this.dices.push(Math.floor(Math.random() * 6 + 1));
    }
    return this.dices;
  }
  
  reroll(index?: number) {
    if(index == undefined) {
      for(var i = 0; i < this.numOfDices; i++) { 
        this.dices[i] = Math.floor(Math.random() * 6 + 1);
      }
    } else {
      this.dices[index] = Math.floor(Math.random() * 6 + 1);
    }
  }
        
  getCurrent(index?: number) {
    if(index == undefined) {
      for(var i = 0; i < this.numOfDices; i++) { 
        console.log(this.dices[i]);
      }
    } else {
      console.log(this.dices[index]);
    }        
  }
}
 
let diceSet = new DiceSet();

//I overcompicated it, but works.....
function rollSixes() {
  let rollCounter: number = 0;  
  diceSet.roll();
  rollCounter++;
  console.log(`The original set is: ${diceSet.dices}`);
  let sixCount: number = 0;
  do {
    sixCount = 0;  
    for (let i: number = 0; i < diceSet.numOfDices; i++) {
        if (diceSet.dices[i] === 6) {
          sixCount++;
        }
      }   
    if (sixCount === 0) {
      diceSet.reroll();
      rollCounter++;
    } else if (sixCount > 0 && sixCount < 6) {
      for (let i: number = 0; i < diceSet.numOfDices; i++) {
        if (diceSet.dices[i] !== 6) {
          diceSet.reroll(i);
          rollCounter++;
        }
      } 
    }
  } while (sixCount < 6)
  if (sixCount === 6) {
    console.log(`The final set is: ${diceSet.dices}`);
    console.log(`The dices had to be rolled ${rollCounter} times`);
  }
}
rollSixes();
