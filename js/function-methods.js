'use strict';
/*
 *  Методи функцій call та apply
 */

//* Функції це об'єкти зі своїми властивостями та методами

//* call та apply

//? Викличте функцію showFullName у контексті об'єкта user

// const showFullName = function (message, number) {
//   console.log(`
//   ${message}
//    ${this.firstName}
//     ${this.lastName}
//      ${number}`);
  /*
  ${message}
   ${{ firstName: 'Ernest', lastName: 'Vasquez', age: 30, }.firstName}
    ${{ firstName: 'Ernest', lastName: 'Vasquez', age: 30, }.lastName}
     ${number}*/
// };
//
// showFullName('test', 123);

// const user = {
//   firstName: 'Ernest',
//   lastName: 'Vasquez',
//   age: 30,
//   changeName(name) {
//     this.firstName = name;
//   }
//   // user.firstName = this.firstName
// };

// const newUser = {
//   firstName: 'Ernest',
//   lastName: 'Vasquez',
//   age: 30,
// };
//
// const updateName = (name) => {
//   this.firstName = name;
// }
//
// updateName.call(newUser, 'newName');
// console.log(newUser);
// console.log(firstName);
// console.log(window);

// user.changeName('newName');
// this = newUser
// user.changeName.call(newUser, 'newName');

// console.log(user);



// showFullName('Hello', 10);
// showFullName.call(user, 'Hello', 10);
// showFullName.apply(user, ['Hello', 10]);

//? Викличте функцію showFullName у контексті об'єкта anotherUser
// const anotherUser = {
//   firstName: 'Lottie',
//   lastName: 'Burgess',
//   age: 40,
// };
//
// showFullName.call(anotherUser, 'Hi', 20);
// showFullName.apply(anotherUser, ['Hi', 20]);

//* Позичання методу

// const createCurrentDate = function () {
//   // arguments = [22, 12, 21] (псевдомасив)
//   return [].join.call(arguments, '.');
// };
//
// console.log(createCurrentDate(22, 12, 21));

//* bind
// const showFullName = function () {
//   console.log(`${this.firstName} ${this.lastName}`);
// };
//
// const user = {
//   firstName: 'Ernest',
//   lastName: 'Vasquez',
//   age: 30,
// };
//
// const anotherUser = {
//   firstName: 'Lottie',
//   lastName: 'Burgess',
//   age: 40,
// };
//
// const showUserFullName = showFullName.bind(user);
//
// showUserFullName();

//* Метод об'єкта у ролі колбека

// const user = {
//   name: 'Luis',
//   age: 30,
//
//   showThis() {
//     console.log(`this ---->`, this);
//   },
//
//   showName() {
//     console.log(`this name is: ${this.name}`);
//   },
// };
//
// const someFunction = function (callback) {
//   // let callback = user.showName;
//   callback();
// };
//
// someFunction(user.showName.bind(user));



// const childElement = function() {
//   let name = 'ChildName'
//
//   if (click) {
//     this.playAgain();
//   }
//
// }
//
// const parentElement = {
//   name: 'ParentName',
//   playAgain() {
//     console.log('playAgain');
//   },
//   callChild() {
//     childElement.bind(parentElement);
//   },
// }

// parentElement.callChild();

/*
? Що виведе код?
*/

// const f = function () {
//   console.log(this.name);
// };

// const user = {
//   name: 'Вася',
// };

// const anotherUser = {
//   name: 'Петя',
// };

// const copyFunc = f.bind(user).bind(anotherUser);

// copyFunc();

/*
? Виклик checkPassword() у наведеному нижче коді повинен перевірити пароль та викликати user.loginOk/loginFail залежно від відповіді.
? Однак його виклик призводить до помилки. Чому?
 */

// const checkPassword = function (ok, fail) {
//   // let ok = user.loginOk;
//   // let fail = user.loginFail;

//   const password = 'rockstar';

//   if (password === 'rockstar') {
//     ok();
//   } else {
//     fail();
//   }
// };

// const user = {
//   name: 'Вася',

//   loginOk() {
//     console.log(`${this.name} logged in`);
//   },

//   loginFail() {
//     console.log(`${this.name} failed to log in`);
//   },
// };

// checkPassword(user.loginOk.bind(user), user.loginFail.bind(user));
