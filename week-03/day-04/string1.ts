function changeXes(oldString: string): string {
  if (oldString.indexOf('x') > -1) {  
    oldString = oldString.slice(0, oldString.indexOf('x')) + 'y' + oldString.slice((oldString.indexOf('x')) + 1);
    return changeXes(oldString);
  }
  return oldString;  
}
console.log(changeXes('Lots of xXxXxXxX'));
