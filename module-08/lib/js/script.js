'use strict';

var _app = _interopRequireDefault(require("./app.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var form = document.querySelector('.form-control');
var overlay = document.querySelector('.overlay');
var headline = document.createElement('h2');
headline.textContent = _app["default"].title;
т;
overlay.prepend(headline);

var trueAnswers = _app["default"].questions.map(function (question) {
  return question.answer;
});

var markup = _app["default"].questions.map(function (question, index) {
  return renderListQestion(index, question);
}).join('');

form.insertAdjacentHTML("afterbegin", markup);
form.addEventListener('submit', handleFormSubmit);

function renderListQestion(index, _ref) {
  var question = _ref.question,
      choices = _ref.choices;
  var markup = "<section>\n  <h3>".concat(index + 1, ". ").concat(question, " </h3>\n  <ol> ").concat(choices.map(function (choice, idx) {
    return "  <li>\n      <label>\n        <input type=\"radio\" name=\"q_".concat(index, "\" value=\"").concat(idx, "\" />\n        ").concat(choice, "\n      </label>\n    </li>");
  }).join(''), "\n  </ol>\n</section>");
  return markup;
}

function handleFormSubmit(e) {
  e.preventDefault();
  var userAnswers = [];
  var formData = new FormData(e.currentTarget);
  formData.forEach(function (value) {
    userAnswers.push(Number(value));
  });
  var chekedAnswer = [];
  userAnswers.forEach(function (answer, idx) {
    chekedAnswer.push({
      answer: answer,
      passed: answer === trueAnswers[idx]
    });
  });
  var amountCorrectAnswer = chekedAnswer.reduce(function (acc, answer) {
    if (answer.passed) {
      return acc + 1;
    }

    return acc;
  }, 0);

  if (amountCorrectAnswer / userAnswers.length >= 0.8) {
    alert('Сongratulations!!! You passed the test');
  } else {
    alert('You answered incorrectly. Try again.');
  }
}