'use strict';
import quizData from './app.js';
const form = document.querySelector('.form-control');
const overlay = document.querySelector('.overlay');
const headline = document.createElement('h2');
headline.textContent = quizData.title;
overlay.prepend(headline);
const trueAnswers = quizData.questions.map(question=>question.answer);
const markup = quizData.questions
  .map((question, index) => renderListQestion(index, question))
  .join('');
form.insertAdjacentHTML("afterbegin",markup );
form.addEventListener('submit', handleFormSubmit);

function renderListQestion(index, { question, choices }) {
  const markup = `<section>
  <h3>${index + 1}. ${question} </h3>
  <ol> ${choices
    .map(
      (choice, idx) => `  <li>
      <label>
        <input type="radio" name="q_${index}" value="${idx}" />
        ${choice}
      </label>
    </li>`
    )
    .join('')}
  </ol>
</section>`;
  return markup;
}

function handleFormSubmit(e){
    e.preventDefault();
    
    const userAnswers = [];
    const formData = new FormData(e.currentTarget);
    formData.forEach(( value)=>{
      userAnswers.push(Number(value));
    });
      const chekedAnswer = [];
     userAnswers.forEach((answer, idx)=>{
      chekedAnswer.push({
        answer,
        passed: answer === trueAnswers[idx]
      })
     })

    const amountCorrectAnswer =  chekedAnswer.reduce((acc, answer)=> {
       if(answer.passed){
         return acc +1;
       }
        return acc;
     },0)

     if(amountCorrectAnswer/userAnswers.length >= 0.8){
       alert('Сongratulations!!! You passed the test')
     }
     else{
       alert('You answered incorrectly. Try again.')
     }
}

