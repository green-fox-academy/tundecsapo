'use strict';
export{};

let far: string[] = ['kuty', 'macsk', 'kacs', 'rók', 'halacsk'];

function appendA(animals) {
    Object.keys(animals).forEach(key => {
        animals[key] = animals[key].concat('a');
        animals.splice(key, 1, `'${animals[key]}'`)
    });
    let animalStr: string = animals.join(', ');
    return animalStr;
}
console.log(appendA(far));
export = appendA;
