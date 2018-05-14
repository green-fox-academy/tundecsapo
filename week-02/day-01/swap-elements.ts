'use strict';
export{};

let abc: string[] = ['Arthur', 'Boe', 'Chloe'];

abc.splice(0, 0, abc[2]);
abc.splice(3, 1, abc[1]);
abc.splice(1, 1);
console.log(abc);

/*shorter solution:
let removed = abc.splice(0, 1, abc[2]);
abc.splice(2, 1, `${removed}`)
console.log(abc);
*/
