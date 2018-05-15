'use strict';
export{};

//if we know how many arguments we expect:
let args: number[] = [];
function printParams(a, b, c) {
  for (let i: number = 0; i < arguments.length; i++) {
    args.push(arguments[i]);
  }
  console.log(args)
}

printParams(3, 4, 5);
