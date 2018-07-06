'use strict';

//NAMES WERE CHANGED IN THE DATABASE, AND CODE IS UNDER CONSTRUCTION
//SO THE FEED AND POST DOESN'T WORK PROPERLY AT THE MOMENT

//let http = new XMLHttpRequest();
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
      console.log(post);
      upvoting(post, voteCount, upvoteimg);   
    })
    downlink.addEventListener('click', (e) => {
      e.preventDefault();
      let post = posts[i];
      console.log(post);

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
      modLink.setAttribute('href', "/modify");
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
        console.log(post);
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
  //pageLoad();
}

function upvoting(post, voteCount, upvoteimg) {
  let vote = 0;
  let scoreChanger = ''; 
  console.log(post.vote);
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
  let http1 = new XMLHttpRequest();
  http1.open('POST', '/upvote', false);
  http1.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  http1.onreadystatechange = function() {}
  http1.send(params); 
  console.log(params);
  let http2 = new XMLHttpRequest();
  let putparam = `post_id=${post.post_id}&scoreChanger=${scoreChanger}`;
  console.log(scoreChanger);
  http2.open('PUT', '/upvote', false);
  http2.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  http2.onload = function () {}
  console.log(scoreChanger);
  console.log(putparam);
  http2.send(putparam); 
  let getparam = `?post_id=${post.post_id}&voter_id=1`;
  let http4 = new XMLHttpRequest();
  http4.open('GET', `/upvote${getparam}`, false);
  http4.onload = () => {
  const response = JSON.parse(http4.responseText);
  console.log(response);
  voteCount.textContent = response.score;
  pageLoad();
  //message.textContent = response.message;
  }
  http4.send();
}

function downvoting(post, voteCount, downvoteimg) {
  let vote = 0;
  let scoreChanger = ''; 
  console.log(post.vote);
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
  let http1 = new XMLHttpRequest();
  http1.open('POST', '/downvote', false);
  http1.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  http1.onreadystatechange = function() {}
  http1.send(params); 
  let http2 = new XMLHttpRequest();
  let putparam = `post_id=${post.post_id}&scoreChanger=${scoreChanger}`;
  http2.open('PUT', '/downvote', false);
  http2.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  http2.onload = function () {}
  http2.send(putparam); 
  let getparam = `?post_id=${post.post_id}&voter_id=1`;
  let http4 = new XMLHttpRequest();
  http4.open('GET', `/downvote${getparam}`, false);
  http4.onload = () => {
  const response = JSON.parse(http4.responseText);
  console.log(response.score);
  voteCount.textContent = response.score;
  pageLoad();
  //message.textContent = response.message;
  }
  http4.send();
}

function pageLoad() {
let http1 = new XMLHttpRequest();
http1.open('GET', '/feed', false);
http1.onload = () => {
  const response = JSON.parse(http1.responseText);
  console.log('THIS IS THE RESPONSE' + response.posts[0].vote);
  creatingElements(response.posts);
  //message.textContent = response.message;
}
http1.send();
}  

function removing(post) {
    console.log(post.post_id);
    let httpreq = new XMLHttpRequest();
    httpreq.open('DELETE', `/remove/${post.post_id}`);
    httpreq.send();
    feed.textContent = '';
    pageLoad();

}

const send = document.querySelector('.sendButt');
send.addEventListener('click', () => {
  let post = {};
  post.title = inputs[0].value;
  post.descr = inputs[1].value;    
  let http3 = new XMLHttpRequest();
  let params = `title=${post.title}&url=${post.descr}`;
  console.log(params);
  http3.open('POST', `/post`, false);
    
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
  http2.open('GET', `/post?title=${post.title}&url=${post.descr}`, false);
  http2.onload = () => {
    const response = JSON.parse(http2.responseText);
    console.log(response);
    feed.textContent = '';
    console.log(response.posts);
    pageLoad();
  //message.textContent = response.message;

  }
  http2.send();
})
