'use strict';
export{};

class Counter {
  value: number;
  private originalValue: number;

  constructor(num?: number) {
    if (num === undefined) {
      this.value = 0;
    } else {
      this.value = num;
    }
    this.originalValue = this.value;  
  }

  add(number?: number) {
    if (number === undefined) {
      this.value++;
    } else {
      this.value += number;    
    }
  }
  
  get() {
    console.log(this.value);  
  }

  reset() {
    this.value = this.originalValue;
  }
}

let firstCount = new Counter();
//firstCount.get();
let fourthCount = new Counter(20);
//fourthCount.add(10);
//fourthCount.get();
//fourthCount.reset();
//fourthCount.get();
console.log(fourthCount);
