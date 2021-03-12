'use strict';
//global variables

let gameBoard = document.getElementById('game-board');
let gameQuestions = document.getElementById('modalQuestion');
let modalBg = document.getElementsByClassName('modal-bg');
let gameCategories = [];

function Category(catName) {
  this.catName = catName;
  this.catQuestions = [];
  gameCategories.push(this);
}

Category.prototype.addQuestion = function (question, answer, a, b, c) {
  this.catQuestions.push({
    question,
    answer,
    a,
    b,
    c,
  });
};

// Questions

let whoreCategory = new Category('whore-oh-scope');
whoreCategory.addQuestion('first question in this category', 'correct answer', 'wrong answer', 'wrong answer', 'wrong answer');
whoreCategory.addQuestion('second question in this category', 'correct answer', 'wrong answer', 'wrong answer', 'wrong answer');
whoreCategory.addQuestion('third question in this category', 'correct answer', 'wrong answer', 'wrong answer', 'wrong answer');
whoreCategory.addQuestion('fourth question in this category', 'correct answer', 'wrong answer', 'wrong answer', 'wrong answer');
whoreCategory.addQuestion('fifth question in this category', 'correct answer', 'wrong answer', 'wrong answer', 'wrong answer');

let tvCategory = new Category('reality-television');
tvCategory.addQuestion('first question in this category', 'correct answer', 'wrong answer', 'wrong answer', 'wrong answer');
tvCategory.addQuestion('second question in this category', 'correct answer', 'wrong answer', 'wrong answer', 'wrong answer');
tvCategory.addQuestion('third question in this category', 'correct answer', 'wrong answer', 'wrong answer', 'wrong answer');
tvCategory.addQuestion('fourth question in this category', 'correct answer', 'wrong answer', 'wrong answer', 'wrong answer');
tvCategory.addQuestion('fifth question in this category', 'correct answer', 'wrong answer', 'wrong answer', 'wrong answer');

let eazyCategory = new Category('eazy-e');
eazyCategory.addQuestion('first question in this category', 'correct answer', 'wrong answer', 'wrong answer', 'wrong answer');
eazyCategory.addQuestion('second question in this category', 'correct answer', 'wrong answer', 'wrong answer', 'wrong answer');
eazyCategory.addQuestion('third question in this category', 'correct answer', 'wrong answer', 'wrong answer', 'wrong answer');
eazyCategory.addQuestion('fourth question in this category', 'correct answer', 'wrong answer', 'wrong answer', 'wrong answer');
eazyCategory.addQuestion('fifth question in this category', 'correct answer', 'wrong answer', 'wrong answer', 'wrong answer');

let anotherCategory = new Category('another-category');
anotherCategory.addQuestion('first question in this category', 'correct answer', 'wrong answer', 'wrong answer', 'wrong answer');
anotherCategory.addQuestion('second question in this category', 'correct answer', 'wrong answer', 'wrong answer', 'wrong answer');
anotherCategory.addQuestion('third question in this category', 'correct answer', 'wrong answer', 'wrong answer', 'wrong answer');
anotherCategory.addQuestion('fourth question in this category', 'correct answer', 'wrong answer', 'wrong answer', 'wrong answer');
anotherCategory.addQuestion('fifth question in this category', 'correct answer', 'wrong answer', 'wrong answer', 'wrong answer');

let somethingElseCategory = new Category('something-else');
somethingElseCategory.addQuestion('first question in this category', 'correct answer', 'wrong answer', 'wrong answer', 'wrong answer');
somethingElseCategory.addQuestion('second question in this category', 'correct answer', 'wrong answer', 'wrong answer', 'wrong answer');
somethingElseCategory.addQuestion('third question in this category', 'correct answer', 'wrong answer', 'wrong answer', 'wrong answer');
somethingElseCategory.addQuestion('fourth question in this category', 'correct answer', 'wrong answer', 'wrong answer', 'wrong answer');
somethingElseCategory.addQuestion('fifth question in this category', 'correct answer', 'wrong answer', 'wrong answer', 'wrong answer');


function submitAnswer(event) {
  event.preventDefault();
  let playerAnswer = event.target.options.value;
  let category = document.getElementById('category').value;
  let answeredCorrectly = false;

  for (let i = 0; i < gameCategories.length; i++) {
    if (category === gameCategories[i].catName) {
      for (let j = 0; j < gameCategories[i].catQuestions.length; i++) {
        if (playerAnswer === gameCategories[i].catQuestions[j].answer) {
          answeredCorrectly = true;
          document.getElementById('results').textContent = 'Correct!!!';
          modalBg.classList.remove('bg-active');
        }
        else {
          modalBg.classList.remove('bg-active');
        }
      }
    }
  }
}


gameQuestions.addEventListener('submit', submitAnswer);
