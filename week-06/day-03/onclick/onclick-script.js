// Turn the party on and off by clicking the button. (the whole page)

let button = document.querySelector('button');

button.onclick = function() { 
  if (document.body.classList.contains('party') === true) {
    document.body.classList.remove('party');      
  } else {
    document.body.classList.add('party');  
  }
};
