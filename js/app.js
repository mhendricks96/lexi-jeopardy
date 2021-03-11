'use strict';
//global variables

let gameBoard = document.getElementById('game-board');
let gameQuestions = document.getElementById('modalQuestion');
let modalBg = document.getElementsByClassName('modal-bg');
let gameCategories = []

function Category(catName) {
  this.catName catName;
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
  })
};

