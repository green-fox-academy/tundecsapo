'use strict';

const http = new XMLHttpRequest();
http.open('GET', 'https://api.giphy.com/v1/gifs/search?api_key=fYL6DJre6uj6Z3yNS7MctszyAouwskGB&q=kitten&limit=16&offset=0&rating=G&lang=en', true);
http.onload = () => {
  const response = JSON.parse(http.responseText);
  const container = document.querySelector('#pics');
  response.data.forEach((element) => {
    const div = document.createElement('div');
    const image = document.createElement('img');
    image.src = element.images.fixed_width_still.url;
    image.addEventListener('click', () => {
      image.setAttribute()  
      image.setAttribute('src', element.images.fixed_height.url)  
    })
    container.appendChild(image);       
  })
}

const button = document.querySelector('#get-images');
image.dataset.moving = false;
button.addEventListener('click', () => {
  if (image.dataset.moving) {
    image.data
  } else {

  } 
  http.send();  
})

//http.send();

