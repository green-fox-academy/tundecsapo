'use strict';

const createCandy = document.querySelector('.create-candies');
let candyCount = document.querySelector('.candies');
const buyLollipop = document.querySelector('.buy-lollypops');
let lollypopCount = document.querySelector('.lollypops');
let speed = document.querySelector('.speed');
const candyRain = document.querySelector('.candy-machine');
let multiplier = 0;

//Gather 10.000 candies!
//Clicking the ‘Create candies’ button gives you 1 candy.
createCandy.addEventListener('click', () => {
  candyCount.textContent = parseInt(candyCount.textContent) + 1;
})

//You can buy a lollipop for 100 candies by clicking the ‘Buy lollipop’ button.
buyLollipop.addEventListener('click', () => {
  if (parseInt(candyCount.textContent) >= 100) {  
    lollypopCount.textContent += "🍭";
    candyCount.textContent = parseInt(candyCount.textContent) - 100;
    if (lollypopCount.textContent.length/2 >= 10) {
      multiplier = Math.floor(lollypopCount.textContent.length/2/10);   
      moreCandy(multiplier);
      displaySpeed();
    }
  }
})

//10 lollipops generate 1 candy per second.
let addCandy;
function moreCandy(multiplier) {
  addCandy = setInterval(autoCandy, 1000, multiplier);
}

function autoCandy(multiplier) {
  candyCount.textContent = parseInt(candyCount.textContent) + multiplier;
}

//Use the 🍭 emoji to display the lollipops you have
//Display the candy production rate in the Candies / Second row
function displaySpeed() {
  speed.textContent = multiplier;  
}

//If you press the "make candy rain" button, the candy generation should speed up 10x
candyRain.addEventListener('click', () => {
  clearInterval(addCandy);
  multiplier = multiplier * 10;  
  displaySpeed();
  moreCandy(multiplier);
})
