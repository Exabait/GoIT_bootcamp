'use strict';
/*
 * Розгалуження if
 */

// if (умова) {
// тіло if
// }

// const number = 0;
//
// if (true) {
//   console.log('Ми потрапили до if');
// }

/*
? Дано рядок, що складається із символів, наприклад, 'abcde'.
? Перевірте, що першим символом цього рядка є буква 'a'.
? Якщо це так - виведіть 'так', інакше виведіть 'ні'.
*/

// const str = 'abcde';
//
// if (str[0] === 'b') {
//   console.log('yes');
// } else {
//   console.log('no');
// }


/*
? Запросіть у користувача число, якщо число дорівнює 10,
? то виведіть 'Вірно', інакше виведіть 'Невірно'.
*/

// const number = Number.parseInt(prompt('Enter some number'));
//
// if (number === 10) {
//   console.log('yes');
// } else {
//   console.log('no');
// }


/*
? У змінній min лежить число від 0 до 59.
? Визначте, в яку чверть години потрапляє це число (у першу, другу, третю чи четверту).
? [0 до 15) - перша чверть години
? [15 до 30) - друга чверть години
? [30 до 45) - третя чверть години
? [45 до 60) - четверта чверть години
*/

// const min = 32;
//
// if (min >= 0 && min < 15) {
//   console.log('перша чверть години');
// } else if (min >= 15 && min < 30) {
//   console.log('друга чверть години');
// } else if (min >= 30 && min < 45) {
//   console.log('третя чверть години');
// } else if (min >= 45 && min < 60) {
//   console.log('четверта чверть години');
// } else {
//   console.log('Number is invalid');
// }

// switch (true) {
//   case min >= 0 && min < 15: {
//     console.log('перша чверть години');
//     break;
//   }
//   case min >= 15 && min < 30: {
//     console.log('перша чверть години');
//     break;
//   }
//   case min >= 30 && min < 45: {
//     console.log('перша чверть години');
//     break;
//   }
//   case min >= 45 && min < 60: {
//     console.log('перша чверть години');
//     break;
//   }
//   default: {
//     console.log('Number is invalid');
//   }
// }

/*
? Напишіть код, який запитуватиме:
? 'Яка «офіційна» назва JavaScript?'
? Якщо користувач вводить ECMAScript,
? то показати: «Вірно!», інакше – відобразити: «Не знаєте? ECMAScript!»
*/

// const answer = prompt('Яка «офіційна» назва JavaScript?', 'Test').toLowerCase();
//
// if (answer === 'ECMAScript'.toLowerCase()) {
//   console.log('ECMAScript');
// } else {
//   console.log('Не знаєте? ECMAScript!');
// }


/*
? Напишіть код, який отримує число через prompt, а потім виводить у console.log:
? 1, якщо значення більше нуля,
? -1, якщо значення менше нуля,
? 0, якщо значення дорівнює нулю.
? Передбачається, що користувач вводить лише цифри.
*/

// const number = Number.parseInt(prompt('Enter some number'));
//
// if (number > 0) {
//   console.log('1');
// } else if (number < 0) {
//   console.log('-1');
// } else if (number === 0) {
//   console.log('0')
// } else {
//   console.log('Number is invalid');
// }

/*
 * Switch case
 */

// switch (значення) {
//   case значення:
//     інструкції;
//     break;

//   case значення:
//     інструкції;
//     break;

//   default:
//     інструкції;
// }

// const number = 20;
//
// switch (number) {
//   case 20: {
//     console.log('Число 20');
//     break;
//   }
//
//   case 10: {
//     console.log('Число 10');
//     break;
//   }
//
//   case 40: {
//     console.log('Число 40');
//     break;
//   }
//
//   default: {
//     console.log('Такого числа немає');
//   }
// }

/*
?  Перепишіть код за допомогою однієї конструкції switch:
*/

// const number = Number.parseFloat(prompt('Введіть число між 0 та 3'));

// if (number === 0) {
//   alert('Ви ввели число 0');
// } else if (number === 1) {
//   alert('Ви ввели число 1');
// } else if (number === 2 || number === 3) {
//   alert('Ви ввели число 2, а може і 3');
// } else {
//   alert('Ви ввели якесь інше число');
// }

// switch (number) {
//   case 0: {
//     alert('Ви ввели число 0');
//     break;
//   }
//   case 1: {
//     alert('Ви ввели число 1');
//     break;
//   }
//   case 2: {
//     alert('Ви ввели число 2, а може і 3');
//     break;
//   }
//   case 3: {
//     alert('Ви ввели число 2, а може і 3');
//     break;
//   }
//   default: {
//     alert('Ви ввели якесь інше число');
//   }
// }

/*
 * Тернарний оператор
 */

// <умова> ? <вираз_якщо_умова_правдива> : <вираз_якщо_умова_хибна>

/*
? Перепишіть конструкцію if з використанням умовного оператора '?':
*/
// const a = 2;
// const b = 5;

// let result = a + b < 4 ? 'Мало' : 'Багато';

// a + b < 4 || console.log('Багато');

// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Багато';
// }

// console.log(result);

/*
?  Перепишіть if..else за допомогою декількох операторів '?'.
*/

// const login = 'Директор';
// let message = login === 'Співробітник' ? 'Привіт' :
//   login === 'Директор' ? 'Вітаю' :
//   login === '' ? 'Немає логіну' :
//   '';

// if (login === 'Співробітник') {
//   message = 'Привіт';
// } else if (login === 'Директор') {
//   message = 'Вітаю';
// } else if (login === '') {
//   message = 'Немає логіну';
// } else {
//   message = '';
// }

// console.log(message);