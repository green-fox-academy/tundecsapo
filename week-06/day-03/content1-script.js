let paragraphs = document.querySelectorAll('p');
/*for (let i = 0; i < paragraphs.length-1; i++) {
  paragraphs[i].innerText = paragraphs[paragraphs.length-1].innerText;  
}*/

for (let i = 0; i < paragraphs.length-1; i++) {
  paragraphs[i].innerHTML = paragraphs[paragraphs.length-1].innerHTML;  
}
