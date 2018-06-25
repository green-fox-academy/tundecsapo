function division(a: number, b: number) {
  if (b === 0) {
    throw new Error(`Can't divide by 0`);
  }
  return a / b;
}

try {
  console.log(division(3, 0));
  //let you test some code
  //code
  //only handles runtime errors
} catch(error){
  console.log(error.message);
  //it catches the error
} finally {
  console.log('This is a finally block');
  //if we want to execute the code regardless of the result
}