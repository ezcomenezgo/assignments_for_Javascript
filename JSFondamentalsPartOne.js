// Values & Variables
const country = 'Taiwan'
const continent = 'Asia'
let population = 2300

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

// Type Conversion and Coercion
console.log('9' - '5') // 4
console.log('19' - '13' + '17') // '617'
console.log('19' - '13' + 17) // 23
console.log('123' < 57) // false
console.log(5 + 6 + '4' + 9 - 4 - 2) // 1143

// Equality Operators: == v.s ===
/*
let numNeighbours = prompt('How many neighbour countries does your country have?')

// Later, This helps us prevent bugs
let numNeighbours = Number(prompt('How many neighbour countries does your country have?'))

if (numNeighbours === 1) {
  console.log('Only one border!')
} else if (numNeighbours > 1) {
  console.log('More than 1')
} else {
  console.log('No border')
}*/

// When use strict equality operator, then output will be 'No border!'. It's because prompt's value is string, but if/else condition is number! If I want to log 'Only one border!' successfully I have to convert numNeighbours' value type to number, use Number().

// Logical Operator
// Forgot to use Back-ticks
if (language === 'English' && population < 50 && !isIsland) {
  console.log(`You should live in ${country} :)!`)
} else {
  console.log(`${country} does not meet your criteria!:(`)
}

// Coding challenge #3
const teamDolphins = (97 + 112 + 81) / 3
const teamKoalas = (109 + 95 + 86) / 3

// Data 1
// if (teamDolphins > teamKoalas) {
//   console.log('The winner is Team Dolphins!')
// } else if (teamKoalas > teamDolphins) {
//   console.log('The winner is Team Koalas!')
// } else {
//   console.log('Draw!')
// }

// Data Bonus 1 & 2
if (teamDolphins > teamKoalas && teamDolphins >= 100) {
  console.log('The winner is Team Dolphins!')
} else if (teamKoalas > teamDolphins && teamKoalas >= 100) {
  console.log('The winner is Team Koalas!')
} else if (teamKoalas === teamDolphins && teamKoalas >= 100 && teamDolphins >= 100) {
  console.log('Both teams win the trophy!')
} else {
  console.log('No one wins the trophy!')
}

// The switch state
const day = 'monday'

if (day === 'monday') {
  console.log('Plan course structure.')
} else if (day === 'tuesday') {
  console.log('Prepare theory videos.')
} else if (day === 'wednesday' || day === 'thursday') {
  console.log('Write code example.')
} else if (day === 'friday') {
  console.log('Record videos')
} else if (day === 'saturday' || day === 'sunday') {
  console.log('Enjoy the weekend!')
} else {
  console.log("It's not a valid day!")
}

// const language = 'chinese'

switch (language) {
  case 'Chinese':
  case 'Mandarin':
    console.log('Most number of native speaker!')
    break
  case 'Spanish':
    console.log('2nd place in number of native speaker!')
    break
  case 'English':
    console.log('3rd place')
    break
  case 'Hindi':
    console.log('Number 4')
    break
  case 'Arabic':
    console.log('5th most spoken language')
    break
  default:
    console.log('Great language too :D')
}

// The conditional (ternary) Operator
// my answer
population > 33 ? console.log(`${country}'s population is above average!`) : console.log(`${country}'s population is below average!`)

// Jonas's
console.log(`${country}'s population is ${population > 33 ? 'above' : 'below'} the average! `)