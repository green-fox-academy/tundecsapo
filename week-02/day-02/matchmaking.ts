'use strict';
export{};

let girls: string[] = ['Eve', 'Ashley', 'Bözsi', 'Kat', 'Jane'];
let boys: string[] = ['Joe', 'Fred', 'Béla', 'Todd', 'Neef', 'Jeff'];
//if someone doesn't have a match I don't print out its name

function makingMatches(f, m) {
    let matches: string[] = [];
    let peopleCount: number;
    if (f.length > m.length) {
        peopleCount = m.length
    } else {
        peopleCount = f.length
    }
    for (let i: number = 0; i < peopleCount; i++){
        matches.push(f[i]);
        matches.push(m[i]);
    }  
    return matches;  
}
console.log(makingMatches(girls, boys));
export = makingMatches;
