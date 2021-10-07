"use strict";

const isNull = function (num) {
  if (num === null) {
    return true;
  } else return false;
};

const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num) && !isNull(num);
};

function guessNumber(number, attempts) {
  let attemptsLeft = attempts ? attempts : 10;
  console.log(number);
  let guess = prompt("Угадай число от 1 до 100");
  isNumber(guess) ? null : guessNumber(number, attemptsLeft);
  if (guess > number) {
    attemptsLeft--;
    alert(`Загаданное число меньше, осталось попыток ${attemptsLeft}`);
    guessNumber(number, attemptsLeft);
  } else if (guess < number) {
    alert(`Загаданное число больше, осталось попыток ${attemptsLeft}`);
    attemptsLeft--;
    guessNumber(number, attemptsLeft);
  } else {

    let check = confirm("Поздравляю, Вы угадали!!! Хотели бы сыграть еще? ");
    if (check) {
      return;
    } else {
      console.log("Конец игры");
      return;
    }
  }
}

guessNumber(Math.floor(Math.random() * (100 - 1) + 1));

