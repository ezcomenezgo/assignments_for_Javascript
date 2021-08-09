/*
 * @Author: your name
 * @Date: 2021-07-30 10:53:44
 * @LastEditTime: 2021-08-09 17:48:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /assignments_for_Javascript/14-OOP/starter/script.js
 */
'use strict';

// const Person = function(firstName, birthYear) {
//   console.log(this)
//   this.firstName = firstName
//   this.birthYear = birthYear
// }

// const jonas = new Person('Jonas', 1991)
// console.log(jonas)

// // Prototypes

// console.log(Person.prototype)

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear)
// }

// console.log(jonas.__proto__)

// Person.prototype.species = 'Human'
// console.log(jonas.species)
// console.log(jonas)

// console.log(jonas.has)
// console.log(Person.prototype.constructor)

// // Classes
// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   // Instance methods
//   // Methods will be added to .prototype property
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hey ${this.fullName}`);
//   }

//   get age() {
//     return 2037 - this.birthYear;
//   }

//   // Set a property that already exists
//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name!`);
//   }

//   get fullName() {
//     return this._fullName;
//   }
// }

// const jessica = new PersonCl ('Jessica Davis', 1996)

// const Car = function (make, speed) {
//   this.make = make
//   this.speed = speed
// }

// Car.prototype.accelerate = function () {
//   this.speed += 10
//   console.log(`${this.speed} km/h`)
// }

// Car.prototype.brake = function () {
//   this.speed -= 5
//   console.log(`${this.speed} km/h`)
// }

// const BMW = new Car('BMW', 120)
// console.log(BMW)
// BMW.accelerate()
// BMW.brake()
// BMW.accelerate()
// BMW.brake()

// const Mercedes = new Car('Mercedes', 95)
// Mercedes.accelerate()
// Mercedes.brake()

// const account = {
//   movement: [2, 3, 56, 12, 46],

//   get latest () {
//     return this.movement.slice(-1).pop()
//   },

//   set latest (val) {
//     return this.movement.push(val)
//   }
// }

// console.log(account.latest)
// account.latest = 200
// console.log(account.movement)

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }
// }

// const steven = Object.create(PersonProto)
// console.log(steven)

// class Car {
//   constructor (make, speed) {
//     this.make = make
//     this.speed = speed
//     this.speedUS = speed
//   }

//   accelerate () {
//     console.log(this.speed += 10)
//   }

//   brake () {
//     this.speed -= 5
//   }

//   set speedUS (speed) {
//     console.log(speed)
//     this._speedUS = speed / 1.6
//   }

//   get speedUS () {
//     return this._speedUS
//   }
// }

// const carTest = new Car('Ford', 120)
// carTest.accelerate()
// console.log(carTest.speedUS)

const Person = function(firstName, birthYear) {
  this.firstName = firstName
  this.birthYear = birthYear
}

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear)
}

const Student = function (firstName, birthYear, course) {
  Person(firstName, birthYear)
  this.course = course
}

Student.prototype.introduce = function () {
  console.log(`My name is ${this.name} and I study ${this.course}`)
}

const mike = new Student('Mike', 2020, 'CS')
mike.introduce()