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
  console.log(num);
  let count = 10;

  function ask(count) {
    console.log("ask function");
    if (count > 0) {
      let input = prompt("Угадай число от 1 до 100");
      console.log(count);
      if (isNumber(input)) {
        if (+input > num) {
          count--;
          alert(`Загаданное число меньше, осталось попыток ${count}`);
          ask(count);
        } else if (+input < num) {
          alert(`Загаданное число больше, осталось попыток ${count}`);
          count--;
          ask(count);
        } else {
          if (confirm("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?")) {
            count = 10;
            ask(count);
          }
        }
      } else {
        if (isNull(input)) {
          alert("Игра окончена!");
        } else {
          alert("Введите число!");
          ask(count);
        }
      }
    } else {
      if (confirm("Попытки закончились, хотите сыграть еще?")) {
        count = 10;
        ask(count);
      }
    }
  }

  ask(count);
}

guessNumber();
