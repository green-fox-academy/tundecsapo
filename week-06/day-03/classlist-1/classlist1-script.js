//If the fourth p has a 'dolphin' class, replace apple's content with 'pear'
let pars = document.querySelectorAll('p');
if (pars[3].classList.contains('dolphin') === true) {
  pars[0].innerText = 'pear';
}

//If the first p has an 'apple' class, replace cat's content with 'dog'
if (pars[0].classList.contains('apple') === true) {
  pars[2].innerText = 'dog';
}

//Make apple red by adding a .red class
pars[0].classList.add("red");

//Make balloon less balloon-like
pars[1].classList.remove("balloon");
pars[1].classList.add("lessballoon");
