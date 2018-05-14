'use strict';
export{};

let name: string = 'Greenfox';
function greet(nameStr: string = 'little fox'){
    console.log(`Greetings, dear ${nameStr}`);
}

greet(name);
