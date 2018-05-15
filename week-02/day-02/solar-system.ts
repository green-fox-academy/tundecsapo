'use strict';
export{};

let planetList: string[] = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Uranus', 'Neptune'];
//Saturn is the 6th planet from Sun, so I put into 5th index 
//not at the last index as it was written in the exercise
planetList.splice(5, 0, 'Saturn');

function putSaturn(arr) {
    Object.keys(arr).forEach(key => {
        arr.splice(key, 1, `"${arr[key]}"`);
    });
    let planetStr: string = planetList.join(", ");
    return planetStr;
}
console.log(putSaturn(planetList));
export = putSaturn;
