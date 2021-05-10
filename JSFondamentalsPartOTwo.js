'use strict'
// Function
function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}.`
}

const desTaiwan = describeCountry('Taiwan', 2300, 'Taipei')
const desSpain = describeCountry('Spain', 10000, 'Barcelona')
const desJapan = describeCountry('Japan', 15000, 'Tokyo')
console.log(desTaiwan, desSpain, desJapan)

// Function Declarations vs. Expressions
const worldPopulation = 7900

function percentageOfWorld1(country, population) {
  return `${country} has ${population} million people, so it's about ${Math.ceil((population / worldPopulation) * 100)}% of the world population.`
} // Math.ceil 四捨五入

const taiwanPopulation = percentageOfWorld1('Taiwan', 2300)
const spainPopulation = percentageOfWorld1('Spain', 1200)
const japanPopulation = percentageOfWorld1('Japan', 3900)
console.log(percentageOfWorld1('Taiwan', 2300))
console.log(spainPopulation)
console.log(japanPopulation)

const percentageOfWorld2 = function (country, population) {
  return `${country} has ${population} million people, so it's about ${Math.ceil((population / worldPopulation) * 100)}% of the world population.`
}
console.log(percentageOfWorld2('Taiwan', 2300))

// Arrow Functions
const percentageOfWorld3 = (country, population) => `${country} has ${population} million people, so it's about ${Math.ceil((population / worldPopulation) * 100)}% of the world population.`
console.log(percentageOfWorld3('USA', 6500))

// Functions calling other Functions
function percentage(population) {
  return Math.ceil((population / worldPopulation) * 100)
}

function describePopulation(country, population) {
  const percentageOfWorld = percentage(population)
  return `${country} has ${population} people, which is about ${percentageOfWorld}% of the world`
}

// function describePopulation(country, population) {
//   const percentage = percentage(population)
//   return `${country} has ${population} people, which is about ${percentage}% of the world`
// }

// function percentage(population) {
//   return Math.ceil((population / worldPopulation) * 100)
// }
/* Uncaught ReferenceError: Cannot access 'percentage' before initialization
at describePopulation(JSFondamentalsPartOTwo.js: 46)
at JSFondamentalsPartOTwo.js: 50*/
// 這邊造成了hoisting，但是有點不知道為甚麼，猜測是在定義變數的同時也使用了跟變數同名的function，所以導致hoisting

console.log(describePopulation('UK', 3700))

// coding challenge #1
const clacAverage = (score1, score2, score3) => Math.ceil((score1 + score2 + score3) / 3)
console.log(clacAverage(3, 4, 5))

// 少判斷到一個條件：一對的均分需大於另一隊的均分*2，因為有三個條件要判斷所以不適合用三元運算子
// function checkWinner(avgDolphins, avgKoalas) {
//   const winnerScore = avgDolphins >= avgKoalas * 2
//   console.log(winnerScore)
//   console.log(false * 2)
//   console.log(`${winnerScore ? 'Dolphins' : 'Koala'} win (${winnerScore ? avgDolphins : avgKoalas} vs ${winnerScore ? avgKoalas : avgDolphins})`)
// }

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`)
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(`Koala win (${avgKoalas} vs. ${avgDolphins})`)
  } else {
    console.log('No one win :(')
  }
}

// data 1
let dolphinsAverage = clacAverage(44, 23, 71)
let koalaAverage = clacAverage(65, 54, 49)
console.log(dolphinsAverage, koalaAverage)
checkWinner(dolphinsAverage, koalaAverage)

// data 2
dolphinsAverage = clacAverage(85, 54, 41)
koalaAverage = clacAverage(23, 34, 27)
console.log(dolphinsAverage, koalaAverage)
checkWinner(dolphinsAverage, koalaAverage)

// Introduction to Arrays
const populations = [2300, 1700, 33, 65]
// 上面因為懶得重改percentageOfWorld1的函式所以多寫了一個percentage()
const percentages = [
  percentage(populations[0]),
  percentage(populations[1]),
  percentage(populations[2]),
  percentage(populations[3])
]
console.log(populations.length === 4)
console.log(percentages)

// Basic Array Methods
const neighbours = ['China', 'Japan', 'Philippines']

neighbours.push('Utopia')
console.log(neighbours)

neighbours.pop()
console.log(neighbours)

if (!neighbours.includes('Germany')) {
  console.log('Probably not a central European country.')
} else {
  console.log('nothing!')
}

// My answer
// console.log(neighbours.indexOf('China'))
// neighbours[0] = 'Republic Of China'
// console.log(neighbours)
// Jonas's answer(Better than mine)
neighbours[neighbours.indexOf('China')] = 'Republic Of China'
console.log(neighbours)

// Coding Challenge #2
// my answer
function calcTip(bill) {
  if (bill >= 50 && bill <= 300) {
    return bill * 0.15
  } else {
    return bill * 0.2
  }
}
console.log(calcTip(100))
// Jonas's answer (much cleaner!)
// const calcTip = function(bill) {
//   return bill >= 50 && bill <= 100 ? bill * 0.15 : bill * 0.2
// }
// or
// const calcTip = bill => bill >= 50 && bill <= 100 ? bill * 0.15 : bill * 0.2

const bills = [125, 555, 44]

const tips = [
  calcTip(bills[0]),
  calcTip(bills[1]),
  calcTip(bills[2])
]
console.log('tips:', tips)

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]
console.log('total:', total)

// Object
// Small Challenge on course!
// "Jonas has 3 friends, and his best friend is called Michael"
const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  birthYear: 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriversLicense: true,

  calcAge: function () {
    this.age = 2037 - this.birthYear
    return this.age
  },
  // jonas's answer
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${jonas.job}, and he has ${jonas.hasDriversLicense ? 'a' : 'no'} driver's licence.`
  }
};

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is ${jonas.friends[0]}`)

// small challenge on course again
// "Jonas is a 46-year old teacher, and he has a driver's license"
// my answer (Jonas's answer is above)
console.log(`${jonas.firstName} is a ${jonas.calcAge(jonas.birthYear)}-year old ${jonas.job}, and he has ${jonas.hasDriversLicense ? 'a' : 'no'} driver's licence.`)

console.log(jonas.getSummary())

// Introduction to Objects
const myCountry = {
  country: 'Taiwan',
  capital: 'Taipei',
  language: 'Chinese',
  population: 2300,
  neighbours: ['China', 'Japan', 'Philippines'],
  descirbe: function () {
    return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and capital calls ${this.capital}`
  },
  // my answer, will have an error Uncaught ReferenceError: Cannot access 'myCountry' before initialization
  // checkIsIsland: myCountry.neighbours.length === 0 ? true : false
  // my second ans, forgot how to create a new property called isIsland for this object...
  // checkIsIsland: function () {
  //   return this.neighbours.length === 0 ? true : false
  // }
  // Jonas's answer
  checkIsIsland: function () {
    return this.isIsland = this.neighbours.length === 0 ? true : false
  }
}

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and capital calls ${myCountry.capital}`)

// Dot vs Bracket Notation
// my ans
// myCountry.population = 2100
// Jonas's ans
myCountry.population += 200
console.log(myCountry.population)
// my ans
// forgot to use string
// myCountry['population'] = 2300
// Jonas's ans
myCountry['population'] -= 200
console.log(myCountry.population)

// Object Methods
console.log(myCountry.descirbe())
console.log(myCountry.checkIsIsland())
console.log(myCountry)

// Coding Challenge #3
const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    return this.BMIValue = this.mass / this.height ** 2
  }
}

const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    return this.BMIValue = this.mass / this.height ** 2
  }
}

console.log('Mark:', mark.calcBMI())
console.log('John:', john.calcBMI())
console.log(mark.calcBMI() > john.calcBMI() ? `${mark.fullName}'s BMI (${mark.BMIValue}) is higher than ${john.fullName}'s (${john.BMIValue})!` : `${john.fullName}'s BMI (${john.BMIValue}) is higher than ${mark.fullName}'s (${mark.BMIValue})!`)
console.log(john.BMIValue)
console.log(mark.BMIValue)