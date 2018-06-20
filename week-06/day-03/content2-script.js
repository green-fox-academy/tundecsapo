let listElements = document.querySelectorAll('li');
let newList = ['apple', 'banana', 'cat', 'dog'];

//1
for (let i = 0; i < listElements.length; i++) {
  listElements[i].innerText = newList[i];
}

//2
let list = document.querySelector('ul');
list.classList.add("newStyle");
