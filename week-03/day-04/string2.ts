function removeXes(oldString: string): string {
    if (oldString.indexOf('x') > -1) {  
      oldString = oldString.slice(0, oldString.indexOf('x')) + oldString.slice((oldString.indexOf('x')) + 1);
      return removeXes(oldString);
    }
    return oldString;  
  }
  console.log(removeXes('xLotsx xofx xsmallXesx xwerex xherex xbeforex'));
  