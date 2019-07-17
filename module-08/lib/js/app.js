"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  title: 'Тест на базовый уровень JavaScript.',
  questions: [{
    question: 'Что возвращает метод Array.prototype.filter()?',
    choices: ['Массив, если результат работы содержит более одного элемента', 'Один элемент, если только он прошел фильтрацию', 'Всегда массив'],
    answer: 2
  }, {
    question: 'Как получить список всех ключей объекта obj?',
    choices: ['obj.keys()', 'Object.keys(obj)', 'obj.keys', 'Object.getKeys(obj)'],
    answer: 1
  }, {
    question: 'Что такое статическое свойство класса?',
    choices: ['Свойство доступное только экземплярам, но не классу', 'Свойство доступное только классу, но не его экземплярам', 'Свойство которое нельзя изменять после создания'],
    answer: 1
  }, {
    question: 'Что такое обещание (promise)?',
    choices: ['Функция, представляющая конечный результат асинхронной операции', 'Данные полученные в результате асинхронной операции', 'Объект, представляющий конечный результат асинхронной операции'],
    answer: 2
  }, {
    question: 'Выберите не существующий HTTP-метод.',
    choices: ['PUT', 'GET', 'GRAB', 'DELETE', 'PATCH'],
    answer: 2
  }, {
    question: 'Какой командой будет запускаться npm-скрипт с именем server?',
    choices: ['npm server', 'npm start server', 'npm execute server', 'npm run server'],
    answer: 3
  }]
};
exports["default"] = _default;