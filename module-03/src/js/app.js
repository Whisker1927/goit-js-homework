'use strict';
const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];
const isLoginValid = function(login) {
  if (login.length >= 4 && login.length <= 16) {
    return true;
  } else {
    alert('Ошибка! Логин должен быть от 4 до 16 символов');
  }
};

const isLoginUnique = function(logins, login) {
  for (const item of logins) {
    if (item === login) {
      alert('Такой логин уже используется!');
      return false;
    }
  }

  return true;
};

const addLogin = function(logins, login) {
  if (isLoginUnique(logins, login) === true && isLoginValid(login) === true) {
    logins.push(login);
  }

  return logins;
};
addLogin(logins, 'Pol');
console.log(logins);
