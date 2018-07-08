'use strict';

let titleField = document.querySelector('.titleInput');
let descrField = document.querySelector('.descrInput');
let post_id = undefined;

pageLoad();

function pageLoad() {
  let http = new XMLHttpRequest();
  http.open('GET', `/modify`, false);
    http.onload = () => {
      const post = JSON.parse(http.responseText).response;
      titleField.setAttribute('value', post.title);
      descrField.setAttribute('value', post.url); 
      post_id = post.post_id;
    }
  http.send();

  const sendButt = document.querySelector('.sendButt');
  sendButt.addEventListener('click', (e) => {
    e.preventDefault();
    let newTitle = titleField.value;
    let newUrl = descrField.value;    
    if (newTitle !== '') {    
      let updateHttp = new XMLHttpRequest();
      let newInfo = `post_id=${post_id}&title=${newTitle}&url=${newUrl}`;
      updateHttp.open('PUT', '/modify', false);
      updateHttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      updateHttp.onload = function () {};
      updateHttp.send(newInfo);  
      window.location = "http://localhost:3000/";
    } else {
        alert('Please, add a title to your post!');
    }
  })
};

const newPost = document.querySelector('.createpost');
newPost.addEventListener('click', () => {
  window.location = "http://localhost:3000/newpost";
})
