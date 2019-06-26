'use strict';
// Задача №1
const numbers = [];
let input;
let total = 0;
let message;
while (true) {
  input = prompt('Введите число...');
  if (input === null) break;
  input = Number(input);
  numbers.push(input);
  total += input;
}
message = `Общая сумма чисел равна ${total}`;
alert(message);
