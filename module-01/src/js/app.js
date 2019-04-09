'use strict';
// Задача №1
const ADMIN_PASSWORD = 'm4ng0h4ckz';
let message;
message = prompt('Авторизация администратора');
if (message === ADMIN_PASSWORD) {
  message = 'Добро пожаловать!';
} else if (message === null) {
  message = 'Отменено пользователем!';
} else {
  message = 'Доступ запрещен, неверный пароль!';
}
alert(message);
console.log(message);
// ====================================================
// Задача №2
// const credits = 23580;
// const pricePerDroid = 3000;
// let totalPrice;
// let message;
// message = prompt('Какое количество дроидов желаете приобрести?');
// if (message === null) {
//   message = 'Отменено пользователем!';
// } else if (Number(message) * pricePerDroid > credits) {
//   message = 'Недостаточно средств на счету!';
// } else if ((totalPrice = credits - Number(message) * pricePerDroid)) {
//   message =
//     'Вы купили ' +
//     message +
//     ' дроидов, на счету осталось ' +
//     totalPrice +
//     ' кредитов.';
// }
// alert(message);
// console.log(message);
// // ========================================================================
// // Задача №3
// let userCountry = prompt('Введите страну доставки');
// let howMuch;
// if (userCountry) {
//   userCountry = userCountry.toLowerCase().trim();
// }
// switch (userCountry) {
//   case 'китай':
//     howMuch = 100;
//     break;
//   case 'южная америка':
//     howMuch = 250;
//     break;
//   case 'австралия':
//     howMuch = 170;
//     break;
//   case 'индия':
//     howMuch = 80;
//     break;
//   case 'ямайка':
//     howMuch = 120;
//     break;
//   default:
//     console.log('В вашей стране доставка не доступна.');
// }
//   console.log(`Доставка в ${userCountry} будет стоить ${howMuch} кредитов.`),
// ;
