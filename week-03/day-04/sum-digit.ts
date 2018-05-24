function sumDigits(n: number) {
  if (n >= 0 && n <= 9) {
    return n;
  }
  return n % 10 + sumDigits(Math.floor(n / 10));
}
console.log(sumDigits(123456));
