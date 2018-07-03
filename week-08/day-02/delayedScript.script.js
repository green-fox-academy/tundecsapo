'use strict';

//Create a simple HTML document with one button. If the user clicks the button 
//it should wait 2 seconds and it should show a text under the button: 2 seconds ellapsed
const text = document.createElement('p');
text.textContent = 'You clicked a button!'
const button = document.querySelector('button');

button.addEventListener('click', () => {
  setTimeout(() => {
    document.body.appendChild(text)  
  }, 2000)  
})

//original solution
/*  
button.addEventListener('click', () => {
  setTimeout(() => showText(text), 2000)  
})

function showText(element) {
  document.body.appendChild(element);
}*/
