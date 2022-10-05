'use strict';
/*
 *  Масиви: літерал масива, елементи, індексація, довжина
 */

const array = [0, 1, 'str', true, false, [2, 3, 4]];

/*
? Створіть масив genres з елементами Jazz і Blues.
? Додайте "Рок-н-рол" в кінець.
? Виведіть у консоль перший елемент масиву.
? Виведіть у консоль останній елемент масиву. Код має працювати для масиву довільної довжини.
? Видаліть перший елемент та виведіть його в консоль.
? Вставте «Country» та «Reggy» на початок масиву.
 */

// const genres = ['Jazz', 'Blues'];
// genres.push('Rock-n-Roll');
// const firstElem = genres.shift();
// const arrLength = genres.unshift('Country', 'Reggy');
// console.log(firstElem, genres, arrLength);

/*
 * Присвоєння за посиланням і за значенням
 */

/*
? Створіть змінну a = 10.
? Створіть та привласніть змінній b -> змінну a
? Виведіть до консолі обидві ці змінні
? Змініть значення змінної a і ще раз виведіть у консоль
*/

// let a = 10;
// const b = a;
//
// console.log('a: ', a);
// console.log('b: ', b);
//
// a = 20;
//
// console.log('a: ', a);
// console.log('b: ', b);

/*
? Створіть масив arr1 = [1, 2, 3].
? Створіть та привласніть масиву arr2 -> масив arr1
? Виведіть до консолі обидва цих масива
? Додайте елемент в масив arr1 і ще раз виведете обидва масиви в консоль
*/

// const arr1 = [1, 2, 3, ];
// const arr2 = [].concat(arr1);
//
// console.log('arr1: ', arr1);
// console.log('arr2: ', arr2);
//
// arr1.push(4);
// arr2.push(5);
//
// console.log('arr1: ', arr1);
// console.log('arr2: ', arr2);

/*
 * Перебор масива циклами for та for...of
 */

/*
? Напиши скрипт для перебору масиву fruits циклом for.
? Для кожного елемента масиву виведіть у консоль рядок у форматі номер_елемента: значення_елемента.
? Нумерація елементів має починатися з першого.
*/

// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];
//
// for (let i = 0; i < fruits.length; i++) {
//   console.log(`${i}: ${fruits[i]}`);
// }

/*
? Напиши скрипт пошуку найменшого числа у масиві.
? Код має працювати для будь-якого масиву чисел.
? Використовуйте цикл для вирішення задачі.
*/

// const numbers = [2, 17, -94, 1, -20, -1, 23, -40, 37, -50];
// let min = numbers[0];

// for (let i = 0; i < 5; i++) {
//   if (i < min) {
//
//   }
// }

// for (const num of numbers) {
//   if (num < min) {
//     min = num;
//   }
// }

// console.log(min);


/*
? У нас є масив із зарплатами працівників, потрібно порахувати загальну суму зарплат
*/

// const salaries = [200, 450, 600, 150, 300];
// let sum = 0;

// for (let salary of salaries) {
//   salary += 100;
// }

// for (let i = 0; i < salaries.length; i++) {
//   sum += salaries[i];
// }

// console.log(sum);

/*
? У нас є кілька масивів із зарплатами працівників із різних відділів, потрібно порахувати загальну суму зарплат
*/

const managerSalaries = [100, 150, 250, 400, 500];
const developersSalaries = [800, 1500, 4000];

// const concatArray = managerSalaries.concat(developersSalaries);
// let sum = 0;

// let managerSalariesSum = 0;
// let developersSalariesSum = 0;
//
// for (let salary of managerSalaries) {
//   managerSalariesSum += salary;
// }
//
// for (let salary of developersSalaries) {
//   developersSalariesSum += salary;
// }
//
// for (let salary of concatArray) {
//   sum += salary;
// }
//
// console.log(sum);

/*
 * Базові методи: split та join, indexOf та includes, push, slice та splice
 */

/*
? Напиши скрипт для обчислення площі прямокутника зі сторонами,
? значення яких зберігаються в змінній values у вигляді рядка.
? Значення гарантовано розділені пробілом.
*/

// const values = '8 11';
// const rectArr = values.split(' ');
// const result = rectArr[0] * rectArr[1];
// console.log(result);

/*
? Напиши скрипт, який виводить в консоль ім'я та телефонний номер користувача.
? У змінних names і phones зберігаються рядки імен та телефонних номерів, розділені комами.
? Порядковий номер імен та телефонів у рядках вказують на відповідність.
? Кількість імен та телефонів гарантовано однакова.
*/

// const names = 'Jacob,William,Solomon,Artemis';
// const phones = '89001234567,89001112233,890055566377,890055566300';
//
// const namesArray = names.split(',');
// const phonesArray = phones.split(',');
//
// for (let i = 0; i < namesArray.length; i++) {
//   console.log(`${namesArray[i]}: ${phonesArray[i]}`);
// }

// console.log(`${namesArray[0]}: ${phonesArray[0]}`);

// console.log(namesArray, phonesArray);

/*
? Напиши скрипт, який «розгортає» рядок (зворотний порядок букв)
? та виводить її в консоль.
*/

const string = 'Welcome to the future';

// Option 1
//
// const stringArray = string.split('');
// const reverseStringArray = [];
//
// for (let i = stringArray.length - 1; i >= 0; i--) {
//   reverseStringArray.push(stringArray[i]);
// }
//
// const reverseString = reverseStringArray.join();
//
// console.log(reverseString);

// Option 2
// let reverseString = '';
//
// for (let i = string.length - 1; i >= 0; i--) {
//   reverseString += string[i];
// }
//
// console.log(reverseString);

// Option 3
// const reverseString = string.split('').reverse().join('');
// console.log(reverseString);

// Option 4
// const reverseStringArray = string.split('');
// let result = [];
//
// for (let char of reverseStringArray) {
//   result.unshift(char);
// }
//
// result = result.join('');
// console.log(result);

/*
? У нас є масив співробітників, відсортуйте його, щоб співробітники не повторювалися
*/

/*
1 Ітерація
0 === 0

2 Ітерація
1 === 0

3 Ітерація
2 === 2

4 Ітерація
3 === 3

5 Ітерація
4 === 4

6 Ітерація
5 === 2

7 Ітерація
6 === 3
*/

// перебираємо масив (кожне значення);

// 0
// ітератор = 0
// порядковий номер масиву (0) = ітератор (0)
// employees[0] = 'Dennis'

// перевіряємо з попередніми значеннями
// шукаємо перше співпадіння з значенням масив[0] в масиві
// оскільки це перше значення в масиві, то це і буде перше співпадіння

// перед цим значенням схожих рядків немає, бо це перше значення
// додаємо це значення до масиву з результатом (filteredEmployees)

// 1
// ітератор = 0
// порядковий номер масиву (0) = ітератор (0)
// employees[0] = 'Dennis'

// перевіряємо з попередніми значеннями
// шукаємо перше співпадіння з значенням масив[0] в масиві
// оскільки це перше значення в масиві, то це і буде перше співпадіння

// перед цим значенням схожих рядків немає, бо це перше значення
// додаємо це значення до масиву з результатом (filteredEmployees)

//                    0          1        2         3      4        5        6
const employees = ['Dennis', 'Dennis', 'Shaw', 'Watkins', 'Ray', 'Shaw', 'Watkins'];
const filteredEmployees = [];

for (let i = 0; i < employees.length; i++) {
  if (i === employees.indexOf(employees[i])) {
    filteredEmployees.push(employees[i]);
  }
}

//? Співробітник Shaw звільнився, видаліть його з масиву

// alert('Test')
const indexOfShow = filteredEmployees.indexOf('Shaw');
const shaw = filteredEmployees.splice(indexOfShow, 1);

console.log(filteredEmployees, shaw);

//? Додати нового співробітника Thornton, перед Watkins;
// const indexOfWatkins = filteredEmployees.indexOf('Watkins');
// filteredEmployees.splice(indexOfWatkins, 0, 'Thornton');
//
// console.log(filteredEmployees);
