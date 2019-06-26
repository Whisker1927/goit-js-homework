'use strict';
// Задача №2
const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
let attemptsLeft = 3;
let input;
while (true) {
  input = prompt('Ввведите свой пароль!');
  if (input === null) {
    alert('Отменено пользователем!');
    break;
  }
  if (passwords.includes(input)) {
    alert('Добро пожаловать!');
    break;
  } else if ((attemptsLeft -= 1 && attemptsLeft > 0)) {
    alert(`Неверный пароль, у вас осталось ${attemptsLeft} попыток`);
  } else {
    alert('У Вас закончились попытки, аккаунт заблокирован!');
  }
}
