"use strict";

const isNull = function (num) {
  if (num === null) {
    return true;
  } else return false;
};

const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num) && !isNull(num);
};

function guessNumber() {
  const num = Math.floor(Math.random() * (100 - 1) + 1);

  function ask() {
    let input = prompt("Угадай число от 1 до 100");
    if (isNumber(input)) {
      if (+input > num) {
        alert("Загаданное число меньше");
        ask();
      } else if (+input < num) {
        alert("Загаданное число больше");
        ask();
      } else {
        alert("Поздравляю, Вы угадали!!!");
      }
    } else {
      if (isNull(input)) {
        alert("Игра окончена");
      } else {
        alert("Введите число!" + +input);
        ask();
      }
    }
  }

  ask();
}

guessNumber();
