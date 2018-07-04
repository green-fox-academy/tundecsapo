'use strict';

const animal = document.querySelector('.petchooser');
const signupCheck = document.querySelector('.signupCheck');
const fish = document.querySelector('.fish');
const yes = document.querySelector('.yes');
const no = document.querySelector('.no');
const signupButt = document.querySelector('.signupButt');
const catButt = document.querySelector('.catButt');
const buttons = document.querySelectorAll('.buttons');

//If you choose Dog or Cat, it should enable the sign up button
//If you pick Victor and no to cat facts it should enable the sign up button only
animal.addEventListener('click', (e) => {
  console.log(e.target.value);
  if (e.target.value === 'cat' || e.target.value === 'dog') {
    signupButt.disabled = false; 
  } 
  if (e.target.value === 'goldfish' && yes.checked === true || no.check === true) {
    signupButt.disabled = false; 
  } 
  if (e.target.value === 'dog' || e.target.value === 'goldfish') {
    catButt.disabled = true;
    console.log(animal);
   
  }
  if (e.target.value === 'cat') {
    catButt.disabled = false; 
  }
})

//If you choose Yes for cat facts, it should enable the sign up button
signupCheck.addEventListener('click', (e) => {
  console.log(e.target.value);
  console.log(fish.checked);  

  if (e.target.value === 'yes') {
    signupButt.disabled = false;
    catButt.disabled = false;  
  } else if (e.target.value === 'no' && fish.checked === true) {
    signupButt.disabled = false;
  } else {
    signupButt.disabled = true;
    catButt.disabled = true;  
  }
})

//Clicking on a button should alert:
//Thank you, you've successfully signed up for cat facts
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', () => {
    if (signupButt.disabled === false && catButt.disabled === true && fish.checked === true) {
      alert('Sigh, we still added you to the cat facts list');  
    } else if (signupButt.disabled === false) { 
      alert('Thank you, you\'ve successfully signed up for cat facts');
    } 
  })  
}
