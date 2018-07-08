'use strict';

let feed = document.querySelector('.feed');
let inputs = document.querySelectorAll('.inputs');

pageLoad();
/*
http.open('GET', '/hello', false);
http.onload = () => {
  const response = JSON.parse(http.responseText);
  const message = document.querySelector('.message');
  message.textContent = response.message;
}
http.send(); */ 

function creatingElements(posts) {
  feed.textContent = '';
  for (let i = 0; i < posts.length; i++) {
    let post = document.createElement('div');
    post.classList.add('post');
    let voter = document.createElement('div');
    voter.classList.add('voter');
    let voteCount = document.createElement('p');
    voteCount.textContent = posts[i].score;
    let uplink = document.createElement('a');
    uplink.setAttribute('href', '/upvote');
    let upvoteimg = document.createElement('img'); 
    let downlink = document.createElement('a');
    downlink.setAttribute('href', '/downvote');
    let downvoteimg = document.createElement('img');
    if (posts[i].vote === '-1' || posts[i].vote === -1) {
      upvoteimg.setAttribute('src', '/static/upvote.png');
      downvoteimg.setAttribute('src', '/static/downvoted.png');
    } else if (posts[i].vote === '1' || posts[i].vote === 1) {
      downvoteimg.setAttribute('src', '/static/downvote.png');
      upvoteimg.setAttribute('src', '/static/upvoted.png');
    } else if (posts[i].vote === '0' || posts[i].vote === 0 || posts[i].vote === 'NULL' || posts[i].vote === null || posts[i].vote === undefined) {
      upvoteimg.setAttribute('src', '/static/upvote.png');
      downvoteimg.setAttribute('src', '/static/downvote.png');
    } else {
      upvoteimg.setAttribute('src', '/static/upvote.png');
      downvoteimg.setAttribute('src', '/static/downvote.png');       
    }
    uplink.addEventListener('click', (e) => {
      e.preventDefault();
      let post = posts[i];
      upvoting(post, voteCount, upvoteimg);   
    })
    downlink.addEventListener('click', (e) => {
      e.preventDefault();
      let post = posts[i];
      downvoting(post, voteCount, downvoteimg);   
    })
    uplink.appendChild(upvoteimg);
    downlink.appendChild(downvoteimg);    
    voter.appendChild(uplink);
    voter.appendChild(voteCount);
    voter.appendChild(downlink);
    let postCont = document.createElement('div');
    postCont.classList.add('container');
    postCont.classList.add('postCont');
    let title = document.createElement('div');
    title.classList.add('title');
    title.textContent = posts[i].title;
    let url= document.createElement('div');
    url.classList.add('url');
    url.textContent = posts[i].url;
    let changer = document.createElement('div');
    changer.classList.add('changer');
    if (posts[i].owner_id === 1) {
      let modifier = document.createElement('span');
      let modLink = document.createElement('a');
      modLink.classList.add('modifier');
      modLink.setAttribute('href', `/modify?post_id=${posts[i].post_id}`);
      modLink.textContent = 'Modify';
      modifier.appendChild(modLink);
      let remover = document.createElement('span');
      let removeLink = document.createElement('a');
      removeLink.classList.add('remover');
      removeLink.setAttribute('href', `/remove/${posts[i].post_id}`);
      removeLink.textContent = 'Remove';
      remover.appendChild(removeLink);
      changer.appendChild(modifier);
      changer.appendChild(remover);  
      remover.addEventListener('click', (e) => {
        e.preventDefault();  
        let post = posts[i];
        removing(post);   
      })
    } 
    postCont.appendChild(title);
    postCont.appendChild(url);
    postCont.appendChild(changer);
    post.appendChild(voter);
    post.appendChild(postCont);
    feed.appendChild(post);
  }
}

function upvoting(post, voteCount, upvoteimg) {
  let vote = 0;
  let scoreChanger = ''; 
  if (post.vote === '-1' || post.vote === -1) {
    vote = 1;
    scoreChanger = '2'; 
  } else if (post.vote === '0' || post.vote === 0 || post.vote === 'NULL' || post.vote === null) {
    vote = 1; 
    scoreChanger = '1'; 
  } else if (post.vote === '1' || post.vote === 1) {
    vote = 0;
    scoreChanger = 'min1';    
  }
  let params = `vote=${vote}&voter_id=1&post_id=${post.post_id}`;
  let upvotePostReq = new XMLHttpRequest();
  upvotePostReq.open('POST', '/upvote', false);
  upvotePostReq.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  upvotePostReq.onreadystatechange = function() {};
  upvotePostReq.send(params); 
  let upvotePutReq = new XMLHttpRequest();
  let putparam = `post_id=${post.post_id}&scoreChanger=${scoreChanger}`;
  upvotePutReq.open('PUT', '/upvote', false);
  upvotePutReq.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  upvotePutReq.onload = function () {};
  upvotePutReq.send(putparam); 
  let getparam = `?post_id=${post.post_id}&voter_id=1`;
  let upvoteGetReq = new XMLHttpRequest();
  upvoteGetReq.open('GET', `/upvote${getparam}`, false);
  upvoteGetReq.onload = () => {
    const response = JSON.parse(upvoteGetReq.responseText);
    voteCount.textContent = response.score;
    pageLoad();
  }
  upvoteGetReq.send();
}

function downvoting(post, voteCount, downvoteimg) {
  let vote = 0;
  let scoreChanger = ''; 
  if (post.vote === '-1' || post.vote === -1) {
    vote = 0;
    scoreChanger = '1'; 
  } else if (post.vote === '0' || post.vote === 0 || post.vote === 'NULL' || post.vote === null) {
    vote = -1; 
    scoreChanger = 'min1'; 
  } else if (post.vote === '1' || post.vote === 1) {
    vote = -1;
    scoreChanger = 'min2';    
  }
  let params = `vote=${vote}&voter_id=1&post_id=${post.post_id}`;
  let downvotePostReq = new XMLHttpRequest();
  downvotePostReq.open('POST', '/downvote', false);
  downvotePostReq.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  downvotePostReq.onreadystatechange = function() {};
  downvotePostReq.send(params); 
  let downvotePutReq = new XMLHttpRequest();
  let putparam = `post_id=${post.post_id}&scoreChanger=${scoreChanger}`;
  downvotePutReq.open('PUT', '/downvote', false);
  downvotePutReq.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  downvotePutReq.onload = function () {};
  downvotePutReq.send(putparam); 
  let getparam = `?post_id=${post.post_id}&voter_id=1`;
  let downvoteGetReq = new XMLHttpRequest();
  downvoteGetReq.open('GET', `/downvote${getparam}`, false);
  downvoteGetReq.onload = () => {
    const response = JSON.parse(downvoteGetReq.responseText);
    voteCount.textContent = response.score;
    pageLoad();
  }
  downvoteGetReq.send();
}

function pageLoad() {
let feedReq = new XMLHttpRequest();
feedReq.open('GET', '/feed', false);
feedReq.onload = () => {
  const response = JSON.parse(feedReq.responseText);
  creatingElements(response.posts);
}
feedReq.send();
}  

function removing(post) {
  let deleteReq = new XMLHttpRequest();
  deleteReq.open('DELETE', `/remove/${post.post_id}`);
  deleteReq.send();
  feed.textContent = '';
  pageLoad();
}

const newPost = document.querySelector('.createpost');
newPost.addEventListener('click', () => {
  window.location = "http://localhost:3000/newpost";
})
