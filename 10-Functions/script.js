'use strict';

// // DEFAULT PARAMETERS
// const bookings = [];

// const createBooking = function (flightNum, numPassengers = 1, price = 199) {
//   // ES5
//   // numPassengers = numPassengers || 1
//   // price = price || 199
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   bookings.push(booking);
//   console.log(bookings);
// };
// console.log(bookings);

// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', undefined, 800);

// const flight = 'H234';
// const jonas = {
//   name: 'Jonas',
//   passport: 27857802,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr. ' + passenger.name;

//   if (passenger.passport === 27857802) {
//     alert('Check in');
//   } else {
//     alert('Wrong passport');
//   }
// };

// // checkIn(flight, jonas);
// // // because of primitive type and object type
// // console.log(flight); // still H234
// // console.log(jonas); // name changes to "Mr. Jonas"

// // Is the same as doing...
// // const flightNum = flight;
// // const passenger = jonas;

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 1000000000000);
// };

// newPassport(jonas);
// checkIn(flight, jonas);

// FUNCTION ACCEPTING CALLBACK FUNCTION
const oneWord = function (str) {
  return str.replaceAll(' ', '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...other] = str.split(' ');
  return [first.toUpperCase(), ...other].join(' ');
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

// JS uses callbacks all the time
// const high5 = function () {
//   console.log('😋');
// };
// document.body.addEventListener('click', high5);
// ['Claire', 'Jonas', 'Alice'].forEach(high5);

// FUNCTIONS RETURN FUNCTIONS
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey!');
greeterHey('Jonas');
greeterHey('Steven');

greet('Hello')('Jonas');

// challenge
const greet1 = greeting => name => console.log(`${greeting} ${name}`);

const greeterHey1 = greet1('Hey!');
greeterHey1('Jonas');
greeterHey1('Steven');

greet1('Hello')('Jonas');

// THE CALL AND APPLY METHODS
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function() {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Jonas');
lufthansa.book(345, 'Mike');

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// does NOT work because of 'this' key word, the book function now become a regular function, so 'this' will point to undefined
// book(23, 'Sarah Williams')

// Call method
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 46, 'Claire Li');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 77, 'Claire Li');

// Apply Method
const flightData = [235, 'George'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

// Bind method
// book.call(eurowings, 23, 'Sarah Williams');
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookSW = book.bind(swiss);

bookEW(23, 'Sarah Williams');
console.log(eurowings);

// partial application
const bookEW23 = book.bind(eurowings, 23);
bookEW23('Lucas');
bookEW23('Claire');

// with event listener
lufthansa.plane = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.plane++;
  console.log(this.plane);
};
// lufthansa.buyPlane();

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23

console.log(addVAT(100));
console.log(addVAT(23));

// the same with above
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));

// coding challenge #1
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const reply = Number(
      prompt([
        `${this.question} \n ${this.options[0]}\n${this.options[1]}\n${this.options[2]}\n${this.options[3]}\n`,
      ])
    );
    // const reply = Number(prompt([`${this.question} \n ${this.options}`]));
    // if (reply < 4) {
    //   console.log(reply);
    //   this.answers[reply] + 1;
    //   console.log(this.answers);
    // }
    // this.displayResults(this.answers);
  },
  displayResults(type) {
    console.log(typeof type);
    typeof type === 'Array'
      ? console.log(type)
      : console.log(`Poll result are ${type}`);
  },
};

// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section!
//   answers: new Array(4).fill(0),
// };

// IMMEDIATELY INVOKED FUNCTION EXPRESSION
// normal function
const runOnce = function () {
  console.log('This will never run again');
};
runOnce();

// IIFE
(function () {
  console.log('This will never run again');
})();

(() => console.log('This will never run again'))();
