function fibonacci(n: number) {
  if (n >= 0 && n <=1) {
    return n;
  } 
  return fibonacci(n-2) + fibonacci(n-1);  
}
console.log(fibonacci(8));
