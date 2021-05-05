// Values & Variables
const country = 'Taichung'
const continent = 'Asia'
let population = 12

console.log(country)
console.log(continent)
console.log(population)

//  Data Types
const isIsland = true
let language
console.log(typeof isIsland)
console.log(typeof population)
console.log(typeof country)
console.log(typeof language)

// let, const and var
language = 'Chinese'
// country = 'Taipei'  //Error: JSFondamentals.js:20 Uncaught TypeError: Assignment to constant variable.

//  Basic Operator
let halfCountry = population / 2 // 1150

population++
console.log(population) // 2301

let finlandPopulation = 600
console.log(population > finlandPopulation) // true

let averagePopulation = 33
console.log(population < averagePopulation) // false

let description = country + ' is in ' + continent + ', and its ' + population + ' million people speak ' + language + '.'
console.log(description)

// Coding challenge #1
const massMark = 78
const massJohn = 92
const heightMark = 1.69
const heightJohn = 1.95

let BMIMark = massMark / heightMark ** 2
let BMIJohn = massJohn / heightJohn ** 2
console.log(BMIMark, BMIJohn)

const markHigherBMI = BMIMark > BMIJohn
console.log(markHigherBMI)

// Strings and template literals
description = `${country} is in ${continent}, and its ${population} million people speak ${language}.`
console.log(description)

// Taking decisions:if/else statement
if (population > averagePopulation) {
  console.log(`${country}'s population is above average`)
} else {
  console.log(`${country}'s population is ${averagePopulation - population} million below average.`)
}

// Coding challenge #2
if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI ${BMIMark} is higher than John's ${BMIJohn}!`)
} else {
  console.log(`John's BMI ${BMIJohn} is higner than Mark's ${BMIMark}!`)
}