'use strict';

/*
 * Математичні оператори (+, -, *, /, %, **)
 */

/*
 ? Дано два числа 10 та 20.
 ? Проведіть над цими числами математичні операції (+ - / *).
*/

// const num1 = 23;
// const num2 = 10;
// console.log(2 ** 4);

//? Перевірте чи парні числа 15, 20, 45, 30.
// const num = 30;
//
// console.log(num % 2);

/*
  ? Дано 90 хвилин, дізнайтеся скільки в цьому числі міститься годин і хвилин.
  ? Результат виведіть у консоль.
*/

// const totalMinutes = 90;
//
// let hours = Math.floor(90 / 60);
//
// let minutes = totalMinutes % 60;
// console.log(hours + ':' + minutes);

/*
 * Number, Number.parseInt(), Number.parseFloat()
 */

/* 
  ? Попросіть користувача ввести число.
  ? Виведіть результат у консоль.
  ? Приведіть рядок до числа.
*/

// let number = Number();
// console.log(number);

//? Даний рядок '24px', дістаньте з цього рядка ціле число.

// const width = '24.5px';
//
// console.log(Number.parseInt(width));

//? Даний рядок '25.5%', дістаньте з цього рядка дробове число.

// const width = '24.5456456%';
//
// console.log(Number.parseFloat(width));

//? Спробуйте призвести до числа, строку 'abc'.

// const width = 'abc';
//
// console.log(Number(width));

//? Запросіть у користувача ввести два числа, складіть їх та виведіть результат у консоль.

// const num1 = prompt('Number 1');
// const num2 = prompt('Number 2');
// console.log(+num1 + Number.parseFloat(num2));

/*
 * Math.floor, Math.ceil, Math.round, Math.max, Math.min, Math.pow(), Math.random().
 */

/*
  ? Дано число 23.5, застосуйте до нього різноманітні методи заокруглення.
  ? Протестуйте на числах, 23.3, 23.9
*/

// let number = 23.5;
// console.log(Math.round(number));

/*
  ? Попросіть користувача ввести число та ступінь.
  ? Зведіть число до ступеня і виведіть результат у консоль.
*/

// const numberStr = Number(prompt('Number'));
// const powerStr = prompt('Power');
// const result = Math.pow(numberStr, powerStr);
// console.log(result);

/*
  ? Згенеруйте рандомне число:
  ? від 0 до 1;
*/

// const randomNumber = Math.random();
// const min = 1;
// const max = 10;
// const randomNum = Math.round(min - 0.5 + Math.random() * (max - min + 1));
// console.log(randomNum);
