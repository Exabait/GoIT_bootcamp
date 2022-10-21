// let globalValue = 'globalValue';
//
// for (let i = 0; i < 5; i++) {
//   console.log(globalValue);
// }

// console.log(i);


// const counter = {
//   counter: 0,
//   myFunction(myCounter = counter) {
//     this.counter = this.counter + 1;
//     return counter;
//   }
// }
//
// const myFunction = {
//   myCounter: 0
// }

// const myFunction = function() {
//   0 = 0 + 1;
//   return counter;
// };

// function createCounter(startFrom) {
//   let counter = startFrom;
//   const myFunction = function() {
//     counter--;
//     return counter;
//   };
//   return myFunction;
// }
//
// const increment = createCounter(100);// myFunction (функція, а не її результат)
// const c1 = increment(); // myFunction() // counter = 0 --> counter += counter + 1 = 1
// const c2 = increment(); // myFunction() // counter = 1 --> counter += counter + 1 = 2
// // const c3 = increment();
// const c4 = increment();
// console.log('example increment', c1, c2, c4);
// //
// const increment2 = createCounter();
// console.log('createCounter: ', increment2());

// let a = 'a';
// const b = 'b';
//
// console.log(c);
//
// const someFn = function() {
//   console.log(c);
// }
//
// someFn();
// f();
// console.log(c);
//
// var c = 1;
//
// function f() {
//   var c = 2;
// }
//
// var c = 3;
//
// console.log(c);

// var c = 'aqwre';

// const newParams = {};
//
// if (newParams) {
//   Object.keys(newParams).forEach(function(key) {
//     this.loadingParams_[key] = newParams[key];
//   }.bind(this));
// }
//
// const someFunction = function(key) {
//   this.loadingParams_[key] = newParams[key];
// }.bind(this)
//
//   [].forEach(function(key) {this.loadingParams_[key] = newParams[key]})
//
// const forEach = (callback) {
//   callback();
// }

const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const resultButton = document.getElementById('resultButton');

const user1 = {
  count: 0,
}

const user2 = {
  count: 0,
  increase() {
    [1, 2, 3].forEach(() => {this.count++})
  }
}

user2.increase();
console.log(user2);

const increase = () => {
  console.log(this);
  this.count++;
}

button1.addEventListener('click', increase)

button2.addEventListener('click', increase)

resultButton.addEventListener('click', () => {
  console.log({user1, user2})
})
