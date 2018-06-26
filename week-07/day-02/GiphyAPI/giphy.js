'use strict';

let httpRequest = new XMLHttpRequest();
httpRequest.open('GET', 'http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=fYL6DJre6uj6Z3yNS7MctszyAouwskGB&limit=16', true); // Also try http://444.hu/feed
//httpRequest.onreadystatechange = console.log("success got data");

console.log(httpRequest);

let orDiv = document.querySelector('.imageDiv');

httpRequest.onload = function() {  
  if (httpRequest.status >= 200 && httpRequest.status < 400) {
    let res = JSON.parse(httpRequest.responseText);
    for (let i = 0; i < res.data.length; i++ ) {
      let url = res.data[i].images.fixed_width_still.url;
      let newImage = document.createElement('img');
      newImage.setAttribute('src', url);
      orDiv.appendChild(newImage)
    }
  } else {
    console.log('reached giphy, but API returned an error');
  }
  httpRequest.send();   
};

httpRequest.onerror = function() {
    console.log('connection error');
};

//httpRequest.send();


let imageDiv = document.querySelector('#imageDiv');
let giphyimage = document.querySelector('.giphyimage');

//console.log(data);

//let firstCont = Number(firstDiv.innerHTML);
//let section = document.querySelector('section')

//giphyimage.setAttribute('href', 'https://www.greenfoxacademy.com/')

/*
for (let i = 1; i < 100; i++) {
  let div = document.createElement('div');
  section.appendChild(div);
*/

//var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5");
//xhr.done(function(data) { console.log("success got data", data); });

/*
HOST
api.giphy.com
PATH
GET /v1/gifs/search
DESCRIPTION
Search all GIPHY GIFs for a word or phrase. Punctuation will be stripped and ignored. Use a plus or url encode for phrases. Example paul+rudd, ryan+gosling or american+psycho.
*/