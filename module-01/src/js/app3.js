'use strict';
//  Задача №3
const userCountry = prompt('Введите страну доставки').toLocaleLowerCase();
let howMuch;

switch (userCountry) {
  case 'китай':
    howMuch = 100;
    console.log(`Доставка в ${userCountry} будет стоить ${howMuch} кредитов.`);
    break;
  case 'южная америка':
    howMuch = 250;
    console.log(`Доставка в ${userCountry} будет стоить ${howMuch} кредитов.`);
    break;
  case 'австралия':
    howMuch = 170;
    console.log(`Доставка в ${userCountry} будет стоить ${howMuch} кредитов.`);
    break;
  case 'индия':
    howMuch = 80;
    console.log(`Доставка в ${userCountry} будет стоить ${howMuch} кредитов.`);
    break;
  case 'ямайка':
    howMuch = 120;
    console.log(`Доставка в ${userCountry} будет стоить ${howMuch} кредитов.`);
    break;
  default:
    console.log('В вашей стране доставка не доступна.');
    break;
}
