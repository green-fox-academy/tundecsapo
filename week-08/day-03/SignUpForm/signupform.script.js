'use strict';

const signupButt = document.querySelector('.signupButt');
const form = document.querySelector('.form');

let users = [
  {'username': 'tundecsapo', 'email': 'tundi@email.com', 'password': 'blabla'},  
]

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let checker = true;
  users.forEach((user) => {
    if (user.username === e.target.elements.username.value && user.email === e.target.elements.email.value) {
      alert('There is a registration with this username and e-maili address already!');
      checker = false;
      return;
    } else if (user.username === e.target.elements.username.value) {
      alert('This username is already taken. Try a new one!');
      checker = false;
      return;
    } else if (user.email === e.target.elements.email.value) {
      alert('There is already a registration with this e-mail address!');
      checker = false;
      return;
    } else if (e.target.elements.passwordConfirmation.value !== e.target.elements.password.value) {
      alert('Passwords doesn\'t match, please try again!');
      checker = false;
      return;
    }; 
  });
  if (checker) {
    let newUser = {'username': e.target.elements.username.value, 'email': e.target.elements.email.value, 'password': e.target.elements.password.value};  
    users.push(newUser);
    alert(`Congrats ${newUser.username}! You have been signed up with the ${newUser.email} e-mail address!`);
    document.querySelector('.username').textContent = '';
    document.querySelector('.username').value = '';
    document.querySelector('.email').textContent = '';
    document.querySelector('.email').value = '';
    document.querySelector('.password').textContent = '';
    document.querySelector('.password').value = '';
    document.querySelector('.passwordConfirmation').textContent = '';
    document.querySelector('.passwordConfirmation').value = '';
  };
})
