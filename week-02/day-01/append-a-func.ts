'use strict';
export{};

let typo: string = 'kuty';
function appendA(longTypo: string) {
    return longTypo += 'a';
}

console.log(appendA(typo));
