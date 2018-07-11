'use strict';

let url = 'http://api.icndb.com/jokes/random';
const button = document.querySelector('button');
const container = document.querySelector('.container');

//Only showing one quote at a time instead of multiple on purpose;
function loadQuote() {
  fetch(url)
    .then( (response) => response.json())
    .then( (response) => {
      if (container.textContent !== '') {
        container.textContent = '';
        postJoke(response);    
      } else {
        button.addEventListener('click', () => {
          postJoke(response);  
        });
      }
    });
}

loadQuote();

function postJoke(response) {
  if (container.textContent === '') { 
    container.textContent = response.value.joke; 
    console.log(response.value.joke);
  } else {
    loadQuote();
  } 
};  
