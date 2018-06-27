'use strict';

const http = new XMLHttpRequest();

let booklist = document.querySelector('.booklist');
http.open('GET', '/api/books/titles', true);
http.onload = () => {
  const response = JSON.parse(http.responseText);
  const container = document.querySelector('.booklist');
  console.log(response.books);
  
  response.books.forEach((book) => {
    let li = document.createElement('li');
    li.textContent = book.book_name;
    booklist.appendChild(li);       
  });
}

http.send();  
