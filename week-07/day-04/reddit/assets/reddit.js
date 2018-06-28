'use strict';

//let http = new XMLHttpRequest();
let feed = document.querySelector('.feed');
let inputs = document.querySelectorAll('.inputs');

/*
http.open('GET', '/hello', true);
http.onload = () => {
  const response = JSON.parse(http.responseText);
  const message = document.querySelector('.message');
  message.textContent = response.message;
}
http.send(); */ 

let http1 = new XMLHttpRequest();
http1.open('GET', '/feed', true);
http1.onload = () => {
  const response = JSON.parse(http1.responseText);
  console.log(response.posts);
  for (let i = 0; i < response.posts.length; i++) {
    let post = document.createElement('div');
    post.classList.add('post');
    let title = document.createElement('div');
    title.classList.add('title');
    title.textContent = response.posts[i].title;
    let url= document.createElement('div');
    url.classList.add('url');
    url.textContent = response.posts[i].url;
    post.appendChild(title);
    post.appendChild(url);
    feed.appendChild(post);
  }
  //message.textContent = response.message;
}
http1.send();  

const send = document.querySelector('.sendButt');
send.addEventListener('click', () => {
  let post = {};
  post.title = inputs[0].value;
  post.descr = inputs[1].value;    
  let http3 = new XMLHttpRequest();
  let params = `title=${post.title}&url=${post.descr}`;
  http3.open('POST', `/post`, true);
    
    //Send the proper header information along with the request
  http3.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    
  http3.onreadystatechange = function() {//Call a function when the state changes.
    //if (http3.readyState == 4 && http3.status == 200) {
    //  alert(http3.responseText);
    //}
  }
  http3.send(params);

  let http2 = new XMLHttpRequest();
  console.log(post);
  http2.open('GET', `/post?title=${post.title}&url=${post.descr}`, true);
  http2.onload = () => {
    const response = JSON.parse(http2.responseText);
    console.log(response);
  
  for (let i = 0; i < response.posts.length; i++) {
    let post = document.createElement('div');
    post.classList.add('post');
    let title = document.createElement('div');
    title.classList.add('title');
    title.textContent = response.posts[i].title;
    let url= document.createElement('div');
    url.classList.add('url');
    url.textContent = response.posts[i].url;
    post.appendChild(title);
    post.appendChild(url);
    feed.appendChild(post);
  }
  //message.textContent = response.message;

  }
  http2.send();
})
