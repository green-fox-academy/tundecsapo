'use strict';

//Create an event listener which logs the current timestamp to the console once the button is clicked.
//When the button is clicked for the second or any other times no event listener should be called.
//Try to solve this two different ways.
//hint: take a look at the button attributes https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button

const button = document.querySelector('button');

//Solution 1.
const print = function printer(e) {
  console.log(e.timeStamp);
  button.removeEventListener('click', print, true)
}

button.addEventListener('click', print, true);

/*
Solution 2.
with disabling the button
--------------------------
button.addEventListener('click', (e) => {
  console.log(e.timeStamp);
  button.setAttribute('disabled', true);
})*/

/*
Solution 3.
with implementing a counter
---------------------------
let clickCounter = 0;
button.addEventListener('click', (e) => {
  if (clickCounter === 0) {  
    console.log(e.timeStamp);
  }
  clickCounter++;
})
*/
