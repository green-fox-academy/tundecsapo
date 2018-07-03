'use strict';

//On the click of the button,
//Count the items in the list
//And display the result in the result element.

const list = document.querySelectorAll('li');
const button = document.querySelector('button');
const result = document.querySelector('.result');

button.addEventListener('click', () => {
  result.textContent = `There are ${list.length} item(s) in the list.`;     
})
