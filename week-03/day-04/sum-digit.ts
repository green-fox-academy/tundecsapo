let result: number = 0;

function sumDigits(n: number) {
  if (n >= 0 && n <= 9) {
    result += n;  
    return result;
  }
  result += n % 10;
  return sumDigits(Math.floor(n / 10));
}
console.log(sumDigits(12345));
