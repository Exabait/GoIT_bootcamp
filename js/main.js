'use strict';
/*
 * Функціональний вираз та оголошення функції.
 * Параметри, аргументи, повернення.
 */

// function назва_функції(параметр_1, параметр_2...) {
// тіло функції
// }

// showMessage('Oleksii');
//
// function showMessage(userFirstName, userLastName = '') {
//   const message = `Hello ${userFirstName} ${userLastName}`;
//
//   console.log(message);
// }

// showMessage('Oleksii');
//
// showMessage('Craig', 'Morris');

// const showMessage = function (userFirstName, userLastName = '') {
//   const message = `Hello ${userFirstName} ${userLastName}`;
//
//   console.log(message);
// };

// showMessage('Oleksii');
//
// showMessage('Craig', 'Morris');

// function fn(number) {
  // if (number > 10) {
  //   return 'Число більше 10';
  // }
  //
  // return 'Число менше 10';
// }

// const result = fn(0); // 'Число менше 10'
//
// console.log(result);

/*
? Напиши функцію calcBMI(weight, height) яка розраховує і повертає індекс маси тіла людини.
? Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини в метрах.
? Вага і висота будуть спеціально передані як рядки. Нецілі числа можуть бути задані у вигляді 24.7 або 24,7,
? тобто як роздільник дробової частини може бути кома.
? Індекс маси тіла необхідно округлити до однієї цифри після коми;
*
 */

// function calcBMI(weight, height) {
//   weight = Number.parseFloat(weight.replace(',', '.'));
//   height = Number.parseFloat(height.replace(',', '.'));
//
//   const result = weight / (height ** 2);
//   return result.toFixed(1);
// }
//
// console.log(calcBMI('88,3', '1.75'));

/*
? Напишіть функцію min(a, b), яка повертає менше з чисел a і b.
*/

// const min = function(a, b) {
//   return a < b ? a : b;
// }
//
// console.log(min(1, 4));
// console.log(min(12, 4));

/*
? Напишіть функцію getRectArea(dimensions) для обчислення площі прямокутника зі сторонами,
? значення яких буде передано до параметра dimensions у вигляді рядка.
? Значення гарантовано розділені пробілом.
*/

// function getRectArea(dimensions) {
//   const sideArr = dimensions.split(' ');
//   return Number(sideArr[0]) * Number(sideArr[1]);
// }
// console.log(4 * getRectArea('2 2'));
//
// console.log(getRectArea('2 4'));
// console.log(getRectArea('3 2'));
// console.log(getRectArea('2 '));

/*
? Напиши функцію logItems(items), яка отримує масив і використовує цикл for,
? який для кожного елемента масиву буде виводити до консолі повідомлення
? у форматі < номер елемента > - < значення елемента >. Нумерація елементів повинна починатися з 1.
? Наприклад, для першого елемента масиву ['Mango','Poly','Ajax'] з індексом 0 буде виведено 1 - Mango,
? а для індексу 2 виведе 3 - Ajax.
*/

// const logItems = function(items = []) {
//   for (let i = 0; i < items.length; i++) {
//     console.log(`${i + 1} - ${items[i]}`);
//   }
// }
//
// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

/*
? Напишіть функцію someFunction(arg1, arg2), яка виводить у консоль ім'я і телефонний номер користувача.
? Параметри names і phones будуть передані рядками, розділені комами.
? Порядковий номер імен і телефонів у рядках вказують на відповідність.
? Кількість імен і телефонів гарантовано однакова.
*/

// function showPersonContacts(names, phoneNumbers) {
//   names = names.split(',');
//   phoneNumbers = phoneNumbers.split(',');
//
//   for (let i = 0; i < names.length; i++) {
//     console.log(`${names[i]}: ${phoneNumbers[i]}`);
//   }
// }
//
// const someValue = showPersonContacts(
//   'Jacob,William,Solomon,Artemis',
//   '89001234567,89001112233,890055566377,890055566300'
// );
// console.log(someValue);
//
// showPersonContacts('Vera,Carr,Violet,Sherman', '89001234567,89001112233,890055566377,890055566300');

/*
? Напишіть функцію SomeFunction(arg1) яка шукає найбільше число в масиві.
*/

// const findLargestNumber = function(numberArray) {
//   let max = numberArray[0];
//
//   for (const num of numberArray) {
//     if (max < num) {
//       max = num;
//     }
//   }
//
//   return max;
// }

// console.log(findLargestNumber([2, 17, 94, 1, 23, 37])); // 94
// console.log(findLargestNumber([49, 4, 7, 83, 12])); // 83

/*
? Напишіть функцію calcAverage() яка приймає довільну кількість аргументів і повертає їх середнє значення.
? Всі аругменти будуть тільки числами.
*/

function calcAverage() {
  let total = 0;

  for (let num of arguments) {
    total += num;
  }

  return total / arguments.length;
}

console.log(calcAverage(1, 2, 3, 4)); // 2.5
console.log(calcAverage(14, 8, 2)); // 8
console.log(calcAverage(27, 43, 2, 8, 36)); // 23.2

/*
? Напишіть функції для роботи з колекцією навчальних курсів courses:
? SomeFunction(arg1) - додає курс в кінець колекції
? SomeFunction(arg1) - видаляє курс з колекції
? SomeFunction(arg1, arg2) - змінює назву курса
*/

// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];
//
// function addCourse(courseName) {
//   if (courses.includes(courseName)) {
//     console.log('У вас вже є такий курс');
//     return;
//   }
//
//   courses.push(courseName);
// }
//
// function removeCourse(courseName) {
//   if (!courses.includes(courseName)) {
//     console.log('Курс за такою назвою не знайдено');
//     return;
//   }
//
//   const courseIndex = courses.indexOf(courseName);
//   courses.splice(courseIndex, 1);
// }
//
// function renameCourse(currentName, newName) {
//   if (!courses.includes(currentName)) {
//     console.log('Курс за такою назвою не знайдено');
//     return;
//   }
//
//   const currentCourseIndex = courses.indexOf(currentName);
//   courses.splice(currentCourseIndex, 1, newName);
// }


// addCourse('Express');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// addCourse('CSS'); // 'У вас вже є такий курс'
//
// removeCourse('React');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// removeCourse('Vue'); // 'Курс за такою назвою не знайдено'

// renameCourse('PostgreSQL', 'NestJS');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']
// renameCourse('С++', 'PHP'); // 'Курса за такою назвою не знайдено'



// const fn1 = function () {
//   console.log('fn1');
//
//   fn2();
//
//   console.log('final');
// };
//
// const fn2 = function () {
//   console.log('fn2');
//
//   fn3();
//
//   console.log('After fn2');
// };
//
// const fn3 = function () {
//   console.log('fn3');
// };
//
// fn1();

// const findLargestNumberFromString = function(value) {
//   const valueArr = value.split(', ');
//   return findLargestNumber(valueArr);
// }
//
// function findLargestNumber(numberArray) {
//   let maximum = numberArray[0];
//
//   for (const number of numberArray) {
//     if (maximum < number) {
//       maximum = number;
//     }
//   }
//
//   return maximum;
// }
// //                                             0  1   2   3  4
// console.log(findLargestNumberFromString([2, 17, 23, 5, 37]));
