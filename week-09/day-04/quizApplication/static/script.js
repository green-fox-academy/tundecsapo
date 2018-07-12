'use strict';

let questions = []; 
let question = document.querySelector('.question'); 
let firstAnsw = document.querySelector('.firstAnsw'); 
let secAnsw = document.querySelector('.secAnsw'); 
let thirdAnsw = document.querySelector('.thirdAnsw'); 
let fourthAnsw = document.querySelector('.fourthAnsw'); 
let buttons = document.querySelectorAll('.button');
let card = document.querySelector('.card'); 
let currentScore = document.querySelector('.currScore');
let answers = [];
let score = 0;

let myFunc;

function pageLoad() {
  currentScore.textContent = score;  
  const questionReq = new XMLHttpRequest();
  questionReq.open('GET', '/questions');
  questionReq.onload = () => {
    const response = JSON.parse(questionReq.responseText);
    console.log(response); 
    for (let i = 0; i < response.questions.length; i++) {
      questions.push(response.questions[i].id);   
      console.log(response.questions[i].id); 
    } 
    console.log(questions);
    generateQuestion();
  }
  questionReq.send();
}
pageLoad();
console.log('something');

function generateQuestion() {
  myFunc = undefined;  
  clearTimeout(myFunc);
  for (let i = 0; i < buttons.length; i++) {
   buttons[i].removeAttribute('disabled');
    if (buttons[i].classList.contains('wrong')) {
      buttons[i].classList.remove('wrong');
      console.log(buttons[i].classList);   
    }
    if (buttons[i].classList.contains('right')) {
      buttons[i].classList.remove('right'); 
      console.log(buttons[i].classList);   
  
    }      
  }  
  console.log(questions);
  if (questions.length > 0) {  
     console.log('this is the length'); 
    const randomNum = Math.floor(Math.random() * questions.length);  
    const randomQuest = `?id=${questions[randomNum]}`;
    const allQuests = new XMLHttpRequest();
    allQuests.open('GET', `/game${randomQuest}`);
    allQuests.onload = () => {
      const response = JSON.parse(allQuests.responseText);
      answers = response.answers;
      question.textContent = response.question;
      firstAnsw.textContent = response.answers[0].answer;
      firstAnsw.dataset.id = response.answers[0].id;
      secAnsw.textContent = response.answers[1].answer;
      secAnsw.dataset.id = response.answers[1].id;
      thirdAnsw.textContent = response.answers[2].answer;
      thirdAnsw.dataset.id = response.answers[2].id;
      fourthAnsw.textContent = response.answers[3].answer;
      fourthAnsw.dataset.id = response.answers[3].id;
      questions.splice(randomNum, 1);

      console.log(response);
    }  
    allQuests.send();
  } else {
    card.innerHTML = 'There is no questions left';
    //console.log('There is no questions left');  
  }
  handleEvents();  

}

function handleEvents() {
  for (let i = 0; i < buttons.length; i++ ) {
    buttons[i].addEventListener('click', (e) => {

      e.preventDefault();
      console.log(buttons[i]);
      console.log(answers);
      console.log(buttons[i].dataset.id);
      let index = undefined;
      for (let k = 0; k < answers.length; k++) {
        console.log(typeof answers[k].id);
        console.log(typeof buttons[i].dataset.id);

        if (answers[k].id === parseInt(buttons[i].dataset.id)) {
          index = k;    
        }
      }
      if (answers[index].is_correct === 1) {
        clearTimeout(myFunc);
        score++;
        buttons[i].classList.add('right');
        console.log(`VALASZ: ${currentScore.textContent}`);
        currentScore.textContent = score; 
        console.log('right');

      } else if (answers[index].is_correct === 0) {
        buttons[i].classList.add('wrong');  
        console.log('wrong');  
        clearTimeout(myFunc);
      }
      //console.log(answers[index]);
      
    //setTimeout(() => {
      if (buttons[i].classList.contains('wrong') || buttons[i].classList.contains('right')) {
        for (let n = 0; n < buttons.length; n++) {
          buttons[n].setAttribute('disabled', true); 
          console.log(buttons[n]); 
        }
        clearTimeout(myFunc);

        myFunc = setTimeout(() => {generateQuestion()}, 3000);
        
      }
    //}, 1000);
      for (let m = 0; m < buttons.length; m++) {
      }
    })  
  }
}


//after clicking on the answer
//And it should get a new random question (use setTimeout() for that)

//It should show your score
//First time it's 0, and every right answer increment it by one.
//It should have a link manage questions
//That is links to http://localhost:8080/questions