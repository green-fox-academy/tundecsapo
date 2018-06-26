// 1: generate 100 divs to the <section> element and add index numbers to it as the element's textContent
// 2: Create a function that adds a 'not-prime' class to a div if it's not a prime and 'prime' if it is
// 3: Create a timer that keeps calling the prime validatior function until it reaches the end of elements
//  - the timer should fire every 100ms
//  - the timer should stop when there are no more elements left to be colored
let firstDiv = document.querySelector('div')
let firstCont = Number(firstDiv.innerHTML);
let section = document.querySelector('section')

for (let i = 1; i < 100; i++) {
  let div = document.createElement('div');
  section.appendChild(div);
  div.textContent = `${firstCont + i}`;
}

let allDivs = document.querySelectorAll('div');

let time = 0;

for (let i = 0; i < allDivs.length; i++ ) {
  time = Number(allDivs[i].innerHTML) * 100;  
  timer(allDivs[i], time);
}

function timer(div, time) {
  setTimeout(() => primer(div), time);
}
//I realised it later that I could use setinterval instead....

function primer(div) {  
  let counter = 0;  
  for (let j = 2; j < Number(div.innerHTML); j++) {
    if (Number(div.innerHTML) % j === 0) {
      counter++;  
    };
  };
  if (counter !== 0 || Number(div.innerHTML) === 1) {
    div.classList.add("not-prime");
  } else {
    div.classList.add("prime");
  };
}
