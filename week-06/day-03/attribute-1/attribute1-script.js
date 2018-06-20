//Write the image's url to the console.
let imURL = document.querySelector('img');
console.log(imURL.getAttribute('src'));

//Replace the image with a picture of your favorite animal.
imURL.setAttribute('src', 'https://scontent-vie1-1.xx.fbcdn.net/v/t1.0-9/60448_432533444862_2327401_n.jpg?_nc_cat=0&oh=30c42ec8f226dc8c4bb22020475f9c31&oe=5BC0CCA9');

//Make the link point to the Green Fox Academy website.
let gfLink = document.querySelector('a');
gfLink.setAttribute('href', 'https://www.greenfoxacademy.com/');

//Disable the second button.
let buttons = document.getElementsByTagName('button');
buttons[1].disabled = true;

//Replace its text with 'Don't click me!'.
buttons[1].innerText = "Don't click me!";
