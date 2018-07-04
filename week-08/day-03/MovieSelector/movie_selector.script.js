'use strict';

let category = document.querySelector('.category');
let movie = document.querySelector('.category');
let title = document.querySelector('.title');
let chosen = document.querySelector('p');

let movies = [
  {'title': 'Moon', 'category': 'scifi', 'value': 'Moon'},
  {'title': '2001 Space odessy', 'category': 'scifi', 'value': '2001 Space odessy'},
  {'title': 'Contact', 'category': 'scifi', 'value': 'Contact'},
  {'title': 'Darkest hour', 'category': 'drama', 'value': 'Darkest hour'},
  {'title': 'There will be blood', 'category': 'drama', 'value': 'There will beb lood'},
  {'title': 'American beauty', 'category': 'drama', 'value': 'American beauty'},
  {'title': 'Airplane!', 'category': 'comedy', 'value': 'Airplane!'},
  {'title': 'Deadpool', 'category': 'comedy', 'value': 'Deadpool'},
  {'title': 'Wayne\'s World', 'category': 'comedy', 'value': 'Wayne\'s World'}
];

let optTitle = '';
let optValue = '';
let optClass = '';
let defaultValue = '<option value="0" disabled selected>Select a movie</option>';

title.innerHTML = defaultValue;
for (let i = 0; i < movies.length; i++) {
  optTitle = movies[i].title;
  optValue = movies[i].value;
  optClass = movies[i].category;
  let movieHTML = `<option value="${optValue}" class="${optClass}">${optTitle}</option>`;    
  title.innerHTML += movieHTML; 
}

let chosenMovie = '-';
let text = 'The selected movie is: ';
chosen.innerHTML = text + chosenMovie;

category.addEventListener('click', () => {
  chosenMovie = '-';  
  chosen.innerHTML = text + chosenMovie;
  const chosenCat = category.value;
  title.innerHTML = defaultValue;

  for (let i = 0; i < movies.length; i++) {
    if (movies[i].category === chosenCat) {
      optTitle = movies[i].title;
      optValue = movies[i].value;
      optClass = movies[i].category;
      let movieHTML = `<option value="${optValue}" class="${optClass}">${optTitle}</option>`;    
      title.innerHTML += movieHTML; 
    } 
  }
})

title.addEventListener('click', () => {
  chosenMovie = title.value;
  chosen.innerHTML = text + chosenMovie;
})
