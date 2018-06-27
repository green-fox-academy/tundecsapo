'use strict';

let booklist = document.querySelector('.booklist');
const titles = document.querySelector('#titles');
const catalog = document.querySelector('#catalog');

titles.addEventListener('click', () => {
  const http = new XMLHttpRequest();
  http.open('GET', '/api/books/titles', true);
  http.onload = () => {
    const response = JSON.parse(http.responseText);
    const container = document.querySelector('.booklist');
    console.log(response.books);
    
    response.books.forEach((book) => {
      if (book === response.books[0]) {
      booklist.textContent = '';  
      }
      let li = document.createElement('li');
      li.textContent = book.book_name;
      booklist.appendChild(li);       
    });
  }
  http.send();   
})

let headers = ['Title', 'Author', 'Category', 'Publisher', 'Price'];

catalog.addEventListener('click', () => {
  const http1 = new XMLHttpRequest();
  http1.open('GET', '/api/books/catalog', true);
  http1.onload = () => {
    const response = JSON.parse(http1.responseText);
    let table = document.createElement('table');
    let headerRow = document.createElement('tr');
    booklist.textContent = '';  
    for (let i = 0; i < headers.length; i++ ) {
      let th = document.createElement('th');
      th.textContent = headers[i];
      headerRow.appendChild(th);  
    }   
    table.appendChild(headerRow);
    for (let i = 0; i < response.books.length; i++ ) {
      let result = document.createElement('tr');
      let title = document.createElement('td');
      title.textContent = response.books[i].book_name;
      let author = document.createElement('td');
      author.textContent = response.books[i].aut_name;
      let category = document.createElement('td');
      category.textContent = response.books[i].cate_descrip;
      let publisher = document.createElement('td');
      publisher.textContent = response.books[i].pub_name;
      let price = document.createElement('td');
      price.textContent = `$${response.books[i].book_price}`;
      result.appendChild(title);
      result.appendChild(author);  
      result.appendChild(category);  
      result.appendChild(publisher);  
      result.appendChild(price);
      table.appendChild(result);  
    }   
    booklist.appendChild(table);
  }
  http1.send();   
})
