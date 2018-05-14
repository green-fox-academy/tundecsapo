'use strict';
export{};

let drinks: string[] = ['Gin', 'Whiskey', 'Wine', 'Beer'];
drinks = drinks.map(function(elem){
    return elem += elem
})

console.log(drinks);
