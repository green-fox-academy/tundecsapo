function separateChars(chars: string, n: number): string {
  if (n < chars.length) {
    if (chars.indexOf(' ') > -1) {  
      chars = chars.slice(0, chars.indexOf(' ')) + chars.slice(chars.indexOf(' ') + 1);
    }  
    chars = chars.slice(0, n) + '*' + chars.slice(n);
    n += 2
    return separateChars(chars, n);
  }
  return chars;  
}
console.log(separateChars('h erec omes al ong stri n g', 1));
