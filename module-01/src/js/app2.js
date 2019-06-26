'use strict';
// Задача №2
const credits = 23580;
const pricePerDroid = 3000;
let message;
message = prompt('Какое количество дроидов желаете приобрести?');
const totalPrice = credits - Number(message) * pricePerDroid;
const notMoney = Number(message) * pricePerDroid;
if (message === null) {
  message = 'Отменено пользователем!';
} else if (notMoney > credits) {
  message = 'Недостаточно средств на счету!';
} else if (totalPrice <= credits) {
  message = `Вы купили ${message} дроидов, на счету осталось ${totalPrice} кредитов.`;
}
alert(message);
console.log(message);
