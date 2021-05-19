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
console.log(addDecl(2, 3));
console.log(addExpr(2, 3));
console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b; // it's still doesn't work because it will assign undefined to addArrow, so it'll become calling undefined(), and the Error will be Uncaught typeError: undefined is not a function
