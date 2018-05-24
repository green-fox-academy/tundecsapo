function countDown(n: number) {
  if (n === 1) {
    console.log(1);  
    return 1;    
  }
  console.log(n);
  countDown(n-1);  
}
countDown(9);
