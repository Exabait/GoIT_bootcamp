'use strict';
/*
 * Створення об'єкта (конструктор, литерал).
 * Властивості, ключі (ім'я) та значення
 */

// Фільм (назва, опис, рейтинг, акторський склад, вікове обмеження)
// const film = {
//   title: 'Venom',
//   description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, mollitia!',
//   rating: 8,
//   actors: ['Jason', 'Ollie', 'Mattie'],
//   adult: true,
// };

/*
 * Доступ до властивостей(obj.key, obj[key]).
 * Додавання та зміна властивостей
 */

// const test = 'title';
//
// console.log(film.actors);
// console.log(film[test]);


/*

 * Короткий запис властивостей
 */

/* <input type="text" name="username"> */
/* <input type="email" name="useremail"> */

// let firstName = prompt('Ваше ім`я');
// const lastName = prompt('Ваше прізвище');
//
// const user = {
//   firstName,
//   lastName,
// };
//
// console.log(user, firstName);

/*
 * Присвоєння за посиланням
 */

// const user = {
//   firstName: 'Brett',
//   lastName: 'Romero',
//   age: 20,
// };

// const user2 = {
//   firstName: 'Olya',
//   lastName: 'Orlova',
//   age: 23,
//   gender: 'male',
// };

// console.log('user: ', user);
// console.log('user2: ', user2);

// console.log({a: 1, b: 2} === {a: 1, b: 2});

// user2.firstName = 'Oleksii';
//
// console.log('user: ', user);
// console.log('user2: ', user2);
// console.log('resultObj: ', resultObj);
// console.log('resultObj.firstName: ', resultObj.test);

/*
 * Все у цьому світі об'єкти
 */
// const fn = function () {
//   console.log('Hello');
// };
//
// fn.test = 5;
//
// fn();
//
// console.dir(fn);
//
// console.log(fn.test);
