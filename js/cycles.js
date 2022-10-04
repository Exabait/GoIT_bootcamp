'use strict';
/*
 * Циклы (while, do while, for)
 */

/*
 * While
 */

// while (condition) {
// код, тіло цикла (statement)
// }

/*
? Виведіть числа від 1 до 50
*/
// let number = 1;

// while (number <= 50) {
  // console.log(++number);
  // number = number + 1;
  // number++
// }

/*
? Знайдіть суму чисел від 1 до 100
 */

/*
1 ітерація

iterator = 2;
result = 1;

2 ітерація

iterator = 3;
result = 3;

3 ітерація

iterator = 4;
result = 6;
*/

/*
? Дано число n = 1000.
? Ділить його на 2 стільки разів, поки результат поділу не стане менше 50.
? Яке число вийде?
? Порахуйте кількість ітерацій, необхідних для цього, та запишіть його в змінну num.
*/
// let number = 1000;
// let iterator = 1;

// console.log(++iterator);

// while (number >= 50 && iterator <= 4) {
//   console.log(number, iterator);
//   number /= 2;
//   iterator++;
// }

/*
 * Do While
 */
// do {
// statement
// } while (condition);

/*
? Напишіть цикл, який пропонує prompt ввести число більше 100.
? Якщо відвідувач ввів інше число – попросити ввести ще раз.
? Цикл повинен запитувати число, поки відвідувач не введе число, більше 100.
? Передбачається, що відвідувач вводить лише числа;
*/

// let number;
//
// do {
//   number = +prompt('Введіть якесь число');
// } while (number < 100);

/*
 * For
 */
// for (initialization; condition; post - expression) {
//   statements
// }

// const test = 'За допомогою циклу for виведіть парні числа від 2 до 10.';
//
// for (let i = 0; i < test.length; i++) {
//   console.log(test[i]);
// }

/*
? За допомогою циклу for виведіть парні числа від 2 до 10.
*/

// for (let i = 2; i <= 10; i += 1) {
//   // if (i % 2 === 0) {
//   //   console.log(i);
//   // }
//
//   if (!(i % 2)) {
//     console.log(i);
//   }
// }

// for (let i = 2; i <= 10; i += 1) {
//   if (i % 2 !== 0) {
//     continue;
//   }
//
//   console.log(i);
// }

/*
? Напишіть цикл на 10 ітерацій, який завершується, щойно лічильник циклу досягне значення 5
*/

// for (let i = 1; i <= 10; i += 1) {
//   if (i === 5) {
//     break;
//   }
//
//   console.log(i);
// }

/*
? Напишіть програму, яка виводить через console.log усі числа від 1 до 100, з двома винятками.
? Для чисел, що націло діляться на 3, вона повинна виводити 'Fizz',
? а для чисел, що діляться на 5 – 'Buzz'.
? Для чисел які кратні 3 та 5 = 'FizzBuzz'
*/

// перебрати всі числа від 1 до 100
// перевірити, чи ділить на 3

// Option 1
// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log('FizzBuzz');
//   } else if (i % 3 === 0) {
//     console.log('Fizz');
//   } else if (i % 5 === 0) {
//     console.log('Buzz');
//   } else {
//     console.log(i);
//   }
// }

// Option 2
// for (let i = 1; i <= 100; i++) {
//   let str = '';
//
//   if (i % 3 === 0) {
//     str = 'Fizz';
//   }
//
//   if (i % 5 === 0) {
//     str += 'Buzz';
//   }
//
//   console.log(str || i);
// }

// for (let i = 1; i <= 100; i++) {
//   let str = '';

  // switch (true) {
  //   case i % 3 === 0: {
  //     str = 'Fizz';
  //     if (i % 5 === 0) {
  //       str += 'Buzz';
  //     }
  //     break;
  //   }
  //   case i % 5 === 0: {
  //     str += 'Buzz';
  //     break;
  //   }
  //   default: {
  //
  //   }
  // }

  // if (i % 3 === 0) {
  //   str = 'Fizz';
  // }
  //
  // if (i % 5 === 0) {
  //   str += 'Buzz';
  // }

//   console.log(str || i);
// }

/*
 ? Виведіть методом console.log() зірочки від 1 до 7 штук у вигляді трикутника таким чином:
 ? *
 ? **
 ? ***
 ? ****
 ? *****
 ? ******
 ? *******
 */

// let stars = '*';
//
// for (let i = 1; i <= 7; i++) {
//   console.log(stars);
//   stars += '*';
// }

// if (i / i === 1 && i / 1 === i) {
//   console.log(i);
// }


// Виведіть прості числа в діапазоні від 1 до 100;
for (let i = 1; i <= 100; i++) {
  for (let j = 1; j <= i; j++) {
    if (j === i) {
      console.log(i);
    } else if (i % j !== 0) {
      continue;
    } else {
      break;
    }
  }
}
