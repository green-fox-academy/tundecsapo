'use strict';
export{};

let words: string[] = ['What', 'I', 'do', 'create,', 'I', 'cannot', 'not', 'understand.'];

function quoteSwap(wordList: string[]): string {
    wordList.splice(wordList.indexOf("do"), 1, "cannot");    
    wordList.splice(wordList.lastIndexOf("cannot"), 1, "do");
    let quote: string= wordList.join(' ');
    return quote;
}
console.log(quoteSwap(words));

/* *********Solution without lastIndexOf, with more variables**********

function quoteSwap(wordList: string[]): string {
    let doInd: number = wordList.indexOf("do");
    let cannotInd: number = wordList.indexOf("cannot");
    wordList.splice(doInd, 1, "cannot");    
    wordList.splice(cannotInd, 1, "do");
    quote = wordList.join(' ');
    return quote;
}
console.log(quoteSwap(words));
*/

export = quoteSwap;
