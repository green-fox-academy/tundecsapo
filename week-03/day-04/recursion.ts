function factorialIterative(n: number): number {
  let fact: number = 1;
  for (let i: number = 1; i <= n; i++) {
    //fact = fact * i;
    fact *= i;
  }
  return fact;
}

console.log(factorialIterative(4));

function factorial(n: number): number {
  // base case
  if (n === 1) {
    return 1;
  } //else {
    return n * factorial(n - 1);
  //}  
}
console.log(factorial(4));
