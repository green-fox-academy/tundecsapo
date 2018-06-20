//1
let king = document.querySelector('#b325');
console.log(king.innerHTML);

//2
let businessLamp = document.querySelectorAll('.big');
for (let i = 0; i < businessLamp.length; i++) {
  console.log(businessLamp[i].innerText);
}

//3
let conceitedKing = document.querySelectorAll('section > div.asteroid');
for (let i = 0; i < conceitedKing.length; i++) {
  alert(conceitedKing[i].innerText);
}

//4
let noBusiness = document.querySelectorAll('div.asteroid');
for (let i = 0; i < noBusiness.length; i++) {
  console.log(noBusiness[i].innerText);
}
