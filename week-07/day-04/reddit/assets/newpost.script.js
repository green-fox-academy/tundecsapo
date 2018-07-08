'use strict';

const sendButt = document.querySelector('.sendButt');
let inputs = document.querySelectorAll('.inputs');

sendButt.addEventListener('click', (e) => {
  e.preventDefault();
  if (inputs[0].value !== '') {  
    let post = {};
    post.title = inputs[0].value;
    post.descr = inputs[1].value;    
    let newPostHttp = new XMLHttpRequest();
    let params = `title=${post.title}&url=${post.descr}`;
    newPostHttp.open('POST', `/post`);
    newPostHttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');  
    newPostHttp.onload = function () {}
    newPostHttp.send(params);
    window.location = "http://localhost:3000/";
  } else {
    alert('Please, add a title to your post!');  
  }
})
