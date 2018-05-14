'use strict';
export{};

let numList: number[] = [1, 2, 3, 8, 5, 6];

let newArr = numList.map(function(elem){
    if (elem === 8){
        return elem = 4;
    }
    else {
        return elem;
    }
});
    
console.log(newArr[3]);
