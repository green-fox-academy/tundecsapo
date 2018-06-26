'use strict';

let input ='';
let url = '';

const request = new XMLHttpRequest();
const movieReq = new XMLHttpRequest();

//console.log(request);

let response = '';
let movieRes = '';
request.onload = () => {
 response = JSON.parse(request.responseText);
  //console.log(response);
    //for (let i=0; i < response.results.)

  //const container = document.querySelector('#pics');
  console.log(response.results);

let resultArr = [];  
let resultCont = document.querySelector('#firstList').innerHTML;
let films = document.querySelector('#secList');
let counter = 1;
let idName = 'name';  

  for (let i = 0; i < response.results.length; i++) {
    let id = idName + counter;  
    resultCont += `<li>${response.results[i].name}</li>`;
    let person = {name: response.results[i].name, movies: response.results[i].films}
    resultArr.push(person);

/*
let id = idName + counter;
    let li = document.createElement(li);
    li.textContent = `${response.results[i].name}`;
    li.setAttribute("id", `${id}`);
    resultCont.appendChild(li);
    */

    /* 
    document.querySelectorAll('li')[i].addEventListener('click', () => {
      for (let j = 0; j < person.movies.length; j++ ) {
        request.open('GET', person.movies[i], true);
        request.send();
        request.onload = () => {
            movieRes = JSON.parse(request.responseText);
        }    
        films.innerHTML += `<li id="counter">${movieRes.title}</li>` 
        //document.querySelector('#secList').innerHTML
      }  
      //console.log(url);
      request.open('GET', url, true);
      request.send();  
    })*/
    counter++;  
  }
  document.querySelector('#firstList').innerHTML = resultCont; 
}


let people = document.querySelector('li');
console.log(people);


const button = document.querySelector('#btn');
button.addEventListener('click', () => {
  input = document.querySelector('#inputfield').value;  
  url = 'https://swapi.co/api/people/?search=' + input;
  //console.log(url);
  request.open('GET', url, true);
  request.send();  
})

