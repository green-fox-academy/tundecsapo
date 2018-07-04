'use strict';

let users = [
  {'username': 'tundi@email.com', 'password': 'password'},
  {'username': 'somebody@email.com', 'password': 'greenfox'},
  {'username': 'anybody@email.com', 'password': 'academy'}  
];

document.querySelector('.login-form').addEventListener('submit', (e) => {
  e.preventDefault(); 
  const username = e.target.elements.username.value;
  const password = e.target.elements.password.value;
  const user = {'username': username, 'password': password};
  console.log(e.target.elements.username.value);
  let userindex;
  
  for (let i = 0; i < users.length; i++) {
    if (users[i].username === username) {
      userindex = i;
      if (users[i].password === password) {
        alert('Login was successful!');
        break;  
      } else {
        alert('Passwords doesn\'t match, please try again!');
        break;
      } 
    }
  }
  if (userindex === undefined) {
    alert('There is no user with this username!');
  }   
});

document.querySelector('p').addEventListener('click', (e) => {
  e.preventDefault();
  const username = document.querySelector('#user').value;
  let userindex;   
  for (let i = 0; i < users.length; i++) {
    if (users[i].username === username) {
      userindex = i;
      alert('We are sending you your password in email!');
    }
  } if (userindex === undefined && username !=='') {
    alert('There is no user with this username!');
  }  
});
