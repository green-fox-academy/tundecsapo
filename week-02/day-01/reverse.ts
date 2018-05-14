'use strict';
export{};

let numList: number[] = [3, 4, 5, 6, 7];

//short solution with the built in method
numList = numList.reverse(); 
console.log(numList);

/*longer solution with creating a new temp array and a loop
let tempArr: number[] = [];
for (let i: number = numList.length-1; i >= 0; i--){
    tempArr.push(numList[i]);
}
numList = tempArr;
console.log(numList);
*/
