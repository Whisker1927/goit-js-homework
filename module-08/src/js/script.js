import quizData from './app.js';
console.log(quizData);

const container = document.querySelector('.overlay');
const profile = renderTestList(quizData);
console.log(quizData.questions);

function renderTestList(notes) {
  const field1 = createQuestionList(
    quizData.questions.map(ques => {
      return ques.question;
    }).map(question => )
  );
  // const field2 = createQuestionList(notes);
  // const field3 = createQuestionList(notes);
  // const field4 = createQuestionList(notes);
  // const field5 = createQuestionList(notes);
  // const field6 = createQuestionList(notes);
  container.prepend(field1);
  //   field2, field3);
  // //  field4, field5, field6);
  return container;
}
console.log(renderTestList());

function createQuestionList(note) {
  const sectionItem = document.createElement('section');
  const caption = document.createElement('h3');
  caption.textContent = note;
  const list = document.createElement('ol');
  sectionItem.append(caption, list);
  const item = createAnswerItem();
  list.append(item);
  const item1 = createAnswerItem();
  list.append(item1);
  const item2 = createAnswerItem();
  list.append(item2);

  return sectionItem;
}
console.log(createQuestionList());
function createAnswerItem() {
  const item = document.createElement('li');
  const labelItem = document.createElement('label');
  item.append(labelItem);
  const inputItem = document.createElement('input');
  inputItem.type = 'radio';
  inputItem.name = 'choice';
  inputItem.value = 'answer';

  labelItem.append(inputItem);

  return item;
}
