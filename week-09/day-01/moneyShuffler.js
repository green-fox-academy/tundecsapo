'use strict';

const Cyprus = {
  cash: 0,
  name: 'Cyprus',
  tax: '5%',
  deposit: function(amt) {
    this.cash += amt;
  }
};

const Panama = {
  cash: 0,
  name: 'Panama',
  tax: '1%',
  deposit: function(amt) {
    this.cash += amt;
  }
};

const Shuffler = {
  count: 0,  
  cash: 10000,
  pick: function() {
    if (this.count % 2 !== 0 ) {
      Cyprus.deposit(1000);
      this.cash -= 1000;
      console.log(`${Cyprus.name} got 1000`);
      this.count = this.count + 1;
    } else {
      Panama.deposit(1000);
      this.cash -= 1000;
      console.log(`${Panama.name} got 1000`);
      this.count = this.count + 1;
    } 
  }  
}

Shuffler.pick(); // prints Panama got 1000
Shuffler.pick(); // prints Cyprus got 1000
Shuffler.pick(); // prints Panama got 1000
Shuffler.pick(); // prints Cyprus got 1000

console.log(Panama.cash); // 2000 
console.log(Cyprus.cash); // 2000 