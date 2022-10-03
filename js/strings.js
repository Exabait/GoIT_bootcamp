'use strict';
/*
 * Конкатенація рядків, шаблонні рядки
 */

// const strA = 'Hello';
// const strB = 'world!';
//

//
// console.log(result);

/*
  ? Запросіть у користувача ім'я з віком та виведіть у консоль повідомлення:
  ? Hello ім'я_користувача, your age is вік_користувача.
*/

// const name = prompt('Enter your name');
// const age = prompt('Enter your age');
// console.log('Hello ' + name + ' your age is' + age);

//? Виконайте завдання вище, використовуючи шаблонні рядки

/*
*
*
*
* */

/*
 * Властивості і методи рядків
 */

//? Запитайте у користувача ім'я та дізнайтеся, зі скількох символів, воно складається.

// const name = prompt('Enter your name');
// console.log(name.length);

//? Попросіть користувача ввести email і переведіть у нижній регістр.

// const email = prompt('Enter your email');
// console.log(email.toLowerCase());

//? Попросіть користувача ввести email і переведіть у верхній регістр

// const email = prompt('Enter your email');
// console.log(email.toUpperCase());


/*
  ? Є рядок 'HTML, CSS, JS, PHP, React, Vue, Node.js, C, C++'.
  ? Дізнайтеся, чи є в цьому рядку мова: 'JavaScript', або 'JS'?
  ? Якщо є, дізнайтесь позицію на якій перебуває цей підрядок
*/

// const languages = 'HTML, CSS, JS, PHP, React, Vue, Node.js, C, C++';
// console.log(languages[102]);
// console.log(languages.indexOf('JavaScript'));


//? У нас є рядок '24px', дізнайтеся на що закінчується цей рядок, на: %, rem, em або px;

// const test = '24px';
// const result = test.endsWith('24px');
// console.log(result);

//? У нас є рядок '23,4', замініть кому на крапку

// const test = '23,4px';
// const result = test.replace(',', '.');
// console.log(result);
// Number.parseFloat(test)
/*
  ? У нас є рядок:
  ? 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?'.
  ? Замініть усі входження dog на monkey.
*/

// const test = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
// const result = test.replaceAll('dog', 'monkey');
// console.log(result);

//? У нас є дата у форматі '12:05:21', замініть (:) на (.)

// const test = '12:05:21';
// const result = test.replaceAll(':', '.');
// console.log(result);

/*
  ? Дано рядок 'Vasyl Pupkin is 24 years old'.
  ? Скопіюйте з цього рядка окремо ім'я з прізвищем та окремо вік.
*/
//
// const test = 'Vasyl Pupkin is 24 years old';
// const name = test.slice(-1);
// const age = test.slice(16, 19);
// console.log(name);
// console.log(age);
