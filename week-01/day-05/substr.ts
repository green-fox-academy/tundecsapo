'use strict';

function substr(str: string, keyword: string) : number {
    let keyCheck: number = str.indexOf(keyword);
    return keyCheck;
}

console.log(substr("this is what I'm searching in", "searching"));
console.log(substr("this is what I'm searching in", "not"));
