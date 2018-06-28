'use strict';

let booklist = document.querySelector('.booklist');
const titles = document.querySelector('#titles');
const catalog = document.querySelector('#catalog');
let http = new XMLHttpRequest();

titles.addEventListener('click', () => {
  http.open('GET', '/api/books/titles', false);
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
  http.open('GET', '/api/books/catalog', false);
  http.onload = () => {
    const response = JSON.parse(http.responseText);
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
  http.send();   
})

let more = document.querySelector('.fa-plus');
let sorting = document.querySelector('.sorting');
const filter = document.querySelector('#filter');

more.addEventListener('click', () => {
  let newsort = document.createElement('div');
  newsort.classList.add('sorting');
  newsort.innerHTML = sorting.innerHTML;
  filter.appendChild(newsort);
  console.log(newsort);
})

const send = document.querySelector('#send');
send.addEventListener('click', () => {
  const options = document.querySelectorAll('select');
  const values = document.querySelectorAll('.values');
  let type = [];
  let value = [];
  for (let i = 0; i < options.length; i++) {
    type.push(options[i].value);
    const space = / /gi;
    values[i].value = values[i].value.replace(space, '+');
    value.push(values[i].value);
    console.log(options[i].value);
    console.log(values[i].value);

    //if (req.query.category) {
//  sqldata = 'SELECT book_name, aut_name, cate_descrip, pub_name, book_price FROM book_mast, author, category, publisher WHERE book_mast.aut_id = author.aut_id AND category.cate_descrip = ? AND book_mast.pub_id = publisher.pub_id;';
//  queryInputs = [req.query.category];  
//}
  }
  let apiRoute = '/api/books/catalog';
  let addition = '';

  if (type.indexOf('category') > -1) {
    let index = type.indexOf('category');
    if (value[index] !== '') {
      if (addition === '') {
        addition += `?category=${value[index]}`;
      } else {
        addition += `&category=${value[index]}`;
      } 
    }
  }
  if (type.indexOf('author') > -1) {
    let index = type.indexOf('author');
    if (value[index] !== '') {
      if (addition === '') {
        addition += `?author=${value[index]}`;
      } else {
        addition += `&author=${value[index]}`;
      }
    }
  }
  if (type.indexOf('publisher') > -1) {
    let index = type.indexOf('publisher');
    if (value[index] !== '') {
      if (addition === '') {
        addition += `?publisher=${value[index]}`;
      } else {
        addition += `&publisher=${value[index]}`;
      }
    }
  }
  if (type.indexOf('title') > -1) {
    let index = type.indexOf('title');
    if (value[index] !== '') {
      if (addition === '') {
        addition += `?title=${value[index]}`;
      } else {
        addition += `&title=${value[index]}`;
      }  
    }
  }
  if (type.indexOf('plt') > -1) {
    let index = type.indexOf('plt');
    if (value[index] !== '') {
      if (addition === '') {
        addition += `?plt=${value[index]}`;
      } else {
        addition += `&plt=${value[index]}`;
      }
    }
  }
  if (type.indexOf('pgt') > -1) {
    let index = type.indexOf('pgt');
    if (value[index] !== '') {
      if (addition === '') {
        addition += `?pgt=${value[index]}`;
      } else {
        addition += `&pgt=${value[index]}`; 
      }
    }
  }
  console.log(value);
  console.log(addition);
  http.open('GET', `${apiRoute}${addition}`, true);
  http.onload = () => {
    const response = JSON.parse(http.responseText);
    console.log(response);
    if (response.books.length > 0) {
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
    } else {
      booklist.textContent = "";
      let p = document.createElement('p');
      p.textContent = 'There is no matching result.';
      booklist.appendChild(p);
    }
  }
  http.send();   
})

