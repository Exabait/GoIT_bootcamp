'use strict';
/*
 *  Метод reduce()
 */

// масив.reduce((previousValue, element, index, array) => {
// Тіло колбек-функції
// }, initialValue);

/*
? Порахуємо суму масива чисел
*/

// 1 ітерація
// acc = 1
// el = 2
// idx = 1
//
// 2 ітерація
// acc = 3
// el = 3
// idx = 2
//
// 3 ітерація
// acc = 6
// el = 4
// idx = 3
//
// 4 ітерація
// acc = 10
// el = 5
// idx = 4
//
// const numbers = [23, 2, 3, 4, 5];
//
// const total = numbers.reduce((acc, el, idx, arr) => {
//   return acc + el;
// });
//
// console.log(total);

/*
? Нехай функція getTotalAmount повертає загальну кількість автомобілів(значення властивості amount).
*/

// const cars = [
//   { make: 'Honda', model: 'CR-V', type: 'suv', amount: 14, price: 24045, onSale: true },
//   { make: 'Honda', model: 'Accord', type: 'sedan', amount: 2, price: 22455, onSale: true },
//   { make: 'Mazda', model: 'Mazda 6', type: 'sedan', amount: 8, price: 24195, onSale: false },
//   { make: 'Mazda', model: 'CX-9', type: 'suv', amount: 7, price: 31520, onSale: true },
//   { make: 'Toyota', model: '4Runner', type: 'suv', amount: 19, price: 34210, onSale: false },
//   { make: 'Toyota', model: 'Sequoia', type: 'suv', amount: 16, price: 45560, onSale: false },
//   { make: 'Toyota', model: 'Tacoma', type: 'truck', amount: 4, price: 24320, onSale: true },
//   { make: 'Ford', model: 'F-150', type: 'truck', amount: 11, price: 27110, onSale: true },
//   { make: 'Ford', model: 'Fusion', type: 'sedan', amount: 13, price: 22120, onSale: true },
//   { make: 'Ford', model: 'Explorer', type: 'suv', amount: 6, price: 31660, onSale: false },
// ];
//
// const balance = 1000;
//
// const getTotalAmount = cars => {
//   const totalAmount = cars.reduce((acc, el, idx, arr) => {
//     return acc + el.amount;
//   }, balance);
//
//   return totalAmount;
// };
//
// console.log(getTotalAmount(cars));

// const tweets = [
//   { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//   { id: '001', likes: 2, tags: ['html', 'css'] },
//   { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//   { id: '003', likes: 8, tags: ['css', 'react'] },
//   { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];

// Пройдемо по всіх елементах колекції і додамо значення властивості tags
// до акумулятора, початкове значення якого вкажемо порожнім масивом [].
// На кожній ітерації пушимо в акумулятор усі елементи tweet.tags і повертаємо його.
// const tags = tweets.reduce((allTags, tweet) => {
//   allTags.push(...tweet.tags);
//
//   return allTags;
// }, []);
//
// const tagsMap = tweets.flatMap(tweet => tweet.tags);
//
// console.log(tags); // ['js', 'nodejs', 'html', 'css', 'html', 'js', 'nodejs', 'css', 'react', 'js', 'nodejs', 'react']

// const getTagStats = (acc, tag) => {
//   if (!acc.hasOwnProperty(tag)) {
//     acc[tag] = 0;
//   }
//
//   acc[tag] += 1;
//
//   return acc;
// };

// const result = {js: 1, nodejs: 1, html: 2, css: 1};

// Початкове значення акумулятора - це порожній об'єкт {}
// const countTags = tags => tags.reduce(getTagStats, {js: 1});
//
// const tagCount = countTags(tags);
// console.log(tagCount);
