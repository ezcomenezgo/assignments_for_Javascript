'use strict';

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   function printAge() {
//     let output = `${firstName}, you are ${age}, born in ${birthYear}`; // Here's still Jonas because of Jonas is still on the top of scope chain
//     console.log(output);
//     if (birthYear >= 1981 && birthYear <= 1996) {
//       // Creating NEW variable with same name as outer scope's variable
//       const firstName = 'Steven';

//       // Reassigning outer scope's variable
//       output = 'New Output!';
//       const str = `Oh, you are a millenial, ${firstName}`; // it will find the variable in the current scope first, so it's Steven
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//     }
//     // add(2, 3);
//     console.log(output);
//   }
//   printAge();

//   return age;
// }

// const firstName = 'Jonas';
// calcAge(1991);

// hoisting for Variable
// console.log(me);
// console.log(job);
// console.log(year);
// var me = 'Jonas';
// let job = 'teacher';
// const year = 1991;

// hoisting for function
// console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// var addArrow = (a, b) => a + b; // it's still doesn't work because it will assign undefined to addArrow, so it'll become calling undefined(), and the Error will be Uncaught typeError: undefined is not a function

// The this keyword in practice
// // point to window object
// console.log(this);

// // this function has its own 'this' keyword, but it doesn't have any owner call this function, it will point at undefined
// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };

// calcAge(1991);

// // because arrow function doesn't have it own 'this' keyword, so it will go to find parent function or scope, it will point at window object
// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   console.log(this);
// };

// calcAgeArrow(1980);

// // now this function has its owner, and this owner 'called' the function, so 'this' keyword will point at the test object
// const test = {
//   year: 2037,
//   age: function (birthYear) {
//     console.log(this);
//     console.log(this.year - birthYear);
//   },
// };

// test.age(1993);

// const test2 = {
//   year: 2021,
// };

// // method borrowing
// test2.age = test.age;
// // 'this' keyword now will point at test2, even though age function write inside the test object, it still point test2, because test2 called the function
// test2.age(1999);

// // because it's just a regular call, this method doesn't attach any object, so 'this' keyword will point at undefined and this.year will become undefined.year then cannot be read
// const f = test.age;
// f();

// const test = {
//   year: 2037,
//   age: function (birthYear) {
//     console.log(this);
//     console.log(this.year - birthYear);

//     // solution 1: declare a variable to store 'this' keyword then use the variable in the isMillenial function
//     // const self = this; // this or that
//     // const isMillenial = function () {
//     //   console.log(this); // undefined
//     //   console.log(this.year <= 1981 && this.year >= 1996); // Uncaught TypeError
//     // };

//     // solution 2: use arrow function, because it doesn't have 'this' keyword so it will find out in parent function which is 'age'
//     const isMillenial = () => {
//       console.log(this);
//       console.log(this.year <= 1981 && this.year >= 1996);
//     };
//     isMillenial();
//   },

//   greet: () => console.log(`Hey ${this.year}`),
// };

// // // because arrow function doesn't have it own 'this' keyword, so it will go to find parent function or scope, it will point at window object, and window doesn't have year property
// // test.greet(); // Hey undefined

// test.age(1993);

// // argument keyword
// const addExpr = function (a, b) {
//   return a + b;
// };

// primitive & object (primitive types and reference type)

// Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName); // Davis
console.log(oldLastName); // Williams

// Reference type
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: '27',
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before:', jessica);
console.log('After:', marriedJessica); // console the same jessica object

// Copying object
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: '27',
  family: ['Alice', 'Bob', 'Claire'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';
console.log('Before:', jessica2); // lastName will show Williams
console.log('After:', jessicaCopy); // lastName will show Davis

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

// that is because Object.assign doesn't work on inner object, so it didn't copy it to the jessicaCopy object
console.log('Before:', jessica2); // Family members all be 5
console.log('After:', jessicaCopy); // Family members all be 5
