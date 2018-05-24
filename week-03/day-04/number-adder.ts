function numAdder(n: number): number {
  if (n === 1) {
    return 1;  
  }
  return (n + numAdder(n - 1));  
}
console.log(numAdder(4));
