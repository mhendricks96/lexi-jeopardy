'use strict';
//global variables

let tileSelect = document.querySelector('#gameboard');
let modalBg = document.querySelector('.modal-bg');
let gameForm = document.querySelector('#modalQuestion');
let playerScore = 0;
//let eventCounter = 0;
let gameCategories = [];

function Category(catName) {
  this.catName = catName;
  this.catQuestions = [];
  gameCategories.push(this);
}

Category.prototype.addQuestion = function (question, answer, a, b, c, points) {
  this.catQuestions.push({
    question,
    answer,
    a,
    b,
    c,
    points,
  });
};

// Questions

let whoreCategory = new Category('whore');
whoreCategory.addQuestion('first question in whore category', 'correct answer', 'wrong answer', 'wrong answer', 'correct answer', 1);
whoreCategory.addQuestion('second question in whore category', 'correct answer', 'wrong answer', 'correct answer', 'wrong answer', 1);
whoreCategory.addQuestion('third question in whore category', 'correct answer', 'wrong answer', 'correct answer', 'wrong answer', 1);
whoreCategory.addQuestion('fourth question in whore category', 'correct answer', 'correct answer', 'wrong answer', 'wrong answer', 1);
whoreCategory.addQuestion('fifth question in whore category', 'correct answer', 'wrong answer', 'correct', 'wrong answer', 1);

let tvCategory = new Category('reality');
tvCategory.addQuestion('first question in tv category', 'correct answer', 'wrong answer', 'wrong answer', 'wrong answer', 2);
tvCategory.addQuestion('second question in tv category', 'correct answer', 'wrong answer', 'wrong answer', 'wrong answer', 2);
tvCategory.addQuestion('third question in tv category', 'correct answer', 'wrong answer', 'wrong answer', 'wrong answer', 2);
tvCategory.addQuestion('fourth question in tv category', 'correct answer', 'wrong answer', 'wrong answer', 'wrong answer', 2);
tvCategory.addQuestion('fifth question in tv category', 'correct answer', 'wrong answer', 'wrong answer', 'wrong answer', 2);

let eazyCategory = new Category('eazy');
eazyCategory.addQuestion('first question in eazy category', 'correct answer', 'wrong answer', 'wrong answer', 'wrong answer', 3);
eazyCategory.addQuestion('second question in eazy category', 'correct answer', 'wrong answer', 'wrong answer', 'wrong answer', 3);
eazyCategory.addQuestion('third question in eazy category', 'correct answer', 'wrong answer', 'wrong answer', 'wrong answer', 3);
eazyCategory.addQuestion('fourth question in eazy category', 'correct answer', 'wrong answer', 'wrong answer', 'wrong answer', 3);
eazyCategory.addQuestion('fifth question in eazy category', 'correct answer', 'wrong answer', 'wrong answer', 'wrong answer', 3);

let anotherCategory = new Category('another');
anotherCategory.addQuestion('first question in another category', 'correct answer', 'wrong answer', 'wrong answer', 'wrong answer', 4);
anotherCategory.addQuestion('second question in another category', 'correct answer', 'wrong answer', 'wrong answer', 'wrong answer', 4);
anotherCategory.addQuestion('third question in another category', 'correct answer', 'wrong answer', 'wrong answer', 'wrong answer', 4);
anotherCategory.addQuestion('fourth question in another category', 'correct answer', 'wrong answer', 'wrong answer', 'wrong answer', 4);
anotherCategory.addQuestion('fifth question in another category', 'correct answer', 'wrong answer', 'wrong answer', 'wrong answer', 4);

let somethingElseCategory = new Category('something');
somethingElseCategory.addQuestion('first question in something category', 'correct answer', 'wrong answer', 'wrong answer', 'wrong answer', 5);
somethingElseCategory.addQuestion('second question in something category', 'correct answer', 'wrong answer', 'wrong answer', 'wrong answer', 5);
somethingElseCategory.addQuestion('third question in something category', 'correct answer', 'wrong answer', 'wrong answer', 'wrong answer', 5);
somethingElseCategory.addQuestion('fourth question in something category', 'correct answer', 'wrong answer', 'wrong answer', 'wrong answer', 5);
somethingElseCategory.addQuestion('fifth question in something category', 'correct answer', 'wrong answer', 'wrong answer', 'wrong answer', 5);



function submitAnswer(event) { //eslint-disable-line
  event.preventDefault();
  let playerAnswer = event.target.options.value;
  let category = document.getElementById('category').value;
  let answeredCorrectly = false;
  //eventCounter++;
  console.log(gameCategories);

  for(let i = 0; i < gameCategories.length; i++){
    if (category === gameCategories[i].catName) {
      for (let j = 0; j < gameCategories[i].catQuestions.length; j++) {
        if (playerAnswer === gameCategories[i].catQuestions[j].answer) {
          answeredCorrectly = true; // eslint-disable-line
          playerScore = gameCategories[i].catQuestions[j].points;
          document.getElementById('results').textContent = `${playerScore} drinks`;
          localStorage.setItem('score', JSON.stringify(playerScore));
          modalBg.classList.remove('bg-active');
        }
        else {
          modalBg.classList.remove('bg-active');
        }
      }
    }
  }
}


function renderModal(obj, question) {
  document.getElementById('category').setAttribute('value', obj.catName);
  document.getElementById('question').setAttribute('value', question.question);

  document.getElementById('inputA').setAttribute('value', question.a);
  document.getElementById('inputB').setAttribute('value', question.b);
  document.getElementById('inputC').setAttribute('value', question.c);

  document.getElementById('a').setAttribute('for', question.a);
  document.getElementById('b').setAttribute('for', question.b);
  document.getElementById('c').setAttribute('for', question.c);

  document.getElementById('questionText').textContent = question.question;
  document.getElementById('a').textContent = question.a;
  document.getElementById('b').textContent = question.b;
  document.getElementById('c').textContent = question.c;
}

function questionClick(event) { //eslint-disable-line

  let category = event.target.classList[0];
  let question = +event.target.classList[1];

  for (let i = 0; i < gameCategories.length; i++) {
    if (category === gameCategories[i].catName) {
      for (let j = 0; j < gameCategories[i].catQuestions.length; j++) {
        if (question === gameCategories[i].catQuestions[j].points) {
          renderModal(gameCategories[i], gameCategories[i].catQuestions[j]);
          event.target.classList.remove('unclicked');
          event.target.classList.add('clicked');
        }
      }
    }
  }
  modalBg.classList.add('bg-active');
}






tileSelect.addEventListener('click', questionClick);
gameForm.addEventListener('submit', submitAnswer);
