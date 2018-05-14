'use strict';
export{};

let animals: string[] = ["kuty", "macsk", "cic"];

let fullAnimals: string[] = animals.map(function(elem: string){
    return elem += 'a';
})

console.log(fullAnimals);
