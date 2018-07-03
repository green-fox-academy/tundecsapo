'use strict';

//Here is an image inspector, but the buttons are not implemented yet, that will
//be your task!
// - the nav buttons (up, down, left, right) move the background by 10px
// - the zoom buttons increase/decrease the image by 20%
// - attach only two event listeners to the nav element
//   - one for navigation
//   - one for zooming

const nav = document.querySelector('nav');
const image = document.querySelector('.img-inspector');

nav.addEventListener('click', (e) => {
  image.style.backgroundRepeat = 'no-repeat';
  let Ypos = image.style.backgroundPositionY;
  if (image.style.backgroundPositionY !== '') {
    Ypos = parseInt(Ypos.replace('px', ''));   
  } 
  let Xpos = image.style.backgroundPositionX;
  if (image.style.backgroundPositionX !== '') {
    Xpos = parseInt(Xpos.replace('px', ''));   
  } 

  if (e.target.dataset.direction === 'up') {
    image.style.backgroundPositionY = `${Ypos-10}px`; 
  } else if (e.target.dataset.direction === 'down') {
    image.style.backgroundPositionY = `${Ypos+10}px`; 
  } else if (e.target.dataset.direction === 'left') {
    image.style.backgroundPositionX = `${Xpos-10}px`;
  } else if (e.target.dataset.direction === 'right') {
    image.style.backgroundPositionX = `${Xpos+10}px`;
  } 
})

nav.addEventListener('click', (e) => {
  let size = image.style.backgroundSize;
  if (image.style.backgroundSize !== '') {
    size = parseInt(image.style.backgroundSize.replace('%', ''));   
  } else if (image.style.backgroundSize === '') {
    size = 200;   
  }

  if (e.target.dataset.direction === 'in') {
    image.style.backgroundSize = `${size+20}%`;
  } else if (e.target.dataset.direction === 'out') {
    image.style.backgroundSize = `${size-20}%`;
  } 
})
