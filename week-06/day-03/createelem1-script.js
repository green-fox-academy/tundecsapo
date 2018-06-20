//Add an item that says 'The Green Fox' to the asteroid list.
let newLi1 = document.createElement('li'); //it created a new element
let list = document.querySelector('ul.asteroids');
list.appendChild(newLi1);
newLi1.innerText = 'The Green Fox';

//Add an item that says 'The Lamplighter' to the asteroid list.
let newLi2 = document.createElement('li'); //it created a new element
list.appendChild(newLi2);
newLi2.innerText = 'The Lamplighter';

//Add a heading saying 'I can add elements to the DOM!' to the .container.
let heading = document.createElement('heading');
document.querySelector('.container').appendChild(heading);
heading.innerText = 'I can add elements to the DOM!';

//Add an image, any image, to the container.
let image = document.createElement('img');
document.querySelector('.container').appendChild(image);
image.setAttribute('src', 'http://www.clker.com/cliparts/b/s/a/r/8/z/green-fox-outline-hi.png');
