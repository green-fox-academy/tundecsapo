function powerN(base: number, n: number): number {
  if (n > 0) { 
    return base * powerN(base, n - 1);
  }
  return 1;
}
console.log(powerN(3, 2));
console.log(powerN(2, 6));
