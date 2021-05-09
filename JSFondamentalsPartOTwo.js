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

// Array

// Object
// Small Challenge!
// "Jonas has 3 friends, and his best friend is called Michael"
const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven']
};

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is ${jonas.friends[0]}`)