'use strict';

//If the user clicks the button 3 times, and 5 seconds is already elapsed since the page is loaded, 
//a text should appear under the button:
//5 seconds elapsed and clicked 3 times
//If the user starts clicking before the first 5 seconds, nothing should be printed

const button = document.querySelector('button');
const greeter = document.createElement('h1');
greeter.textContent = '5 seconds elapsed and clicked 3 times';

window.onload = () => {
  let clickCounter = 0;  
  //console.log('Page is loaded'); 
  setTimeout(() => {
    button.addEventListener('click', () => {
      clickCounter++;
      //console.log(clickCounter);     
      if (clickCounter === 3) {
        document.body.appendChild(greeter);
      };
    })
  }, 5000)  
}
