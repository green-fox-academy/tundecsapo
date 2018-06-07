//  Create a function that takes a list of numbers as parameter
//  Returns a list where the elements are sorted in ascending numerical order
//  Make a second boolean parameter, if it's `True` sort that list descending 

//NOTE: the given example for the advanced function are incorrect

function bubble(list: number[]): number[] {
  list = list.sort(function(a, b) {
    return a - b
  });
  return list;
}
console.log(bubble([34, 12, 24, 9, 5]));

//Advanced function
function advancedBubble(list: number[], bool?: boolean) {
  if (bool === true) {
    list = list.sort(function(a, b) {
      return b - a
    })
  } else {  
    list = list.sort(function(a, b) {
      return a - b
    });
  }
  return list;
}
console.log(advancedBubble([34, 12, 24, 9, 5]));
console.log(advancedBubble([34, 12, 24, 9, 5], true));
console.log(advancedBubble([34, 12, 24, 9, 5], false));
