'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[5]]: {
    open: 11,
    close: 23,
  },
  [weekdays[2]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // after ES6 enhanced object literals
  openingHours,

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
  //   console.log(
  //     `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
  //   );
  // },
  // default values
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '22:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here's your pasta! Made by ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIng) {
    console.log(mainIngredient);
    console.log(otherIng);
  },
};

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Taipei',
//   mainIndex: 2,
//   starterIndex: 2,
// });

restaurant.orderDelivery({
  address: 'Taipei',
  starterIndex: 1,
});
// // ARRAY DESTRUCTURING
// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// // // 如果想要交換兩者的值，不用解構賦值時得這樣做
// // const temp = main; // 宣告一個變數暫存main的值
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary);

// // 用解構賦值
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// // Receive 2 return value from a function
// const [starter, mainCourse] = restaurant.order(0, 2);
// console.log(starter, mainCourse);

// // nested destructuring
// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // Default value
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

// // OBJECT DESTRUCTURING
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: opening_hours,
//   categories: restaurantCategories,
// } = restaurant;
// console.log(restaurantName, opening_hours, restaurantCategories);

// // default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// // {a, b} = obj // Uncaught SyntaxError: Unexpected token '='
// // solution
// ({ a, b } = obj);
// console.log(a, b);

// // nested object
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// // SPREAD OPERATOR
// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// // copy array
// const mainMenuCopy = [...restaurant.mainMenu];

// // Join 2 array
// const menuCombine = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menuCombine);

// // iterable: arrays, strings, maps, sets, NOT objects
// const str = 'Jonas';
// const letters = [...str, '', 'S.'];
// console.log(letters);

// // real world example
// // const ingredients = [
// //   prompt("let's make pasta Ing1?"),
// //   prompt("let's make pasta Ing2?"),
// //   prompt("let's make pasta Ing3?"),
// // ];
// // console.log(ingredients);

// // old methods send parameters
// // restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// // after ES6: spread operator
// // restaurant.orderPasta(...ingredients);

// // object (after ES2018)
// const newRestaurant = { founding: '2020', ...restaurant, founder: 'Claire' };
// console.log(newRestaurant);

// // shallow copy
// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'PIZZA';
// console.log(restaurant.name); // Classico Italiano
// console.log(restaurantCopy.name); // PIZZA

// // REST PATTERN AND PARAMETERS

// // 1. destructuring
// // spread operator, because on RIGHT side of =
// const arr = [1, 2, ...[3, 4]];
// // rest, because on LEFT side of =
// const [e, f, ...others] = [1, 2, 3, 4, 5];
// console.log(e, f, others);

// // using real example (left side is REST pattern and right side is spread operator mixes two arrays)
// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// // object
// // when we want to separate the weekdays and weekend
// const { sat, ...weekdays } = openingHours;
// console.log(weekdays);

// // 2. function
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };

// add(2, 3);
// add(2, 3, 4, 5);
// add(2, 3, 4, 5, 6);

// // using spread operator to spread th3 x array, but use rest operator to collect the argument for the add function
// const x = [23, 5, 6];
// add(...x);

// // orderPizza function also can use REST to collect the rest argument
// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');

// // SHORT CIRCUITING (&& and ||)

// // use ANY data type, return ANY data type, short=circuiting
// console.log('======OR=======');
// console.log(3 || 'Jonas');
// console.log('' || 'Jonas');
// console.log(true || 0);
// console.log(undefined || null);
// console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// // restaurant.numGuests = 23; // if set 0, because it's a falsy value, it'll still return 10 not 23
// const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guest1);
// // above one is equal to down one
// const guest2 = restaurant.numGuests || 10;
// console.log(guest2);

// console.log('======AND=======');
// console.log(0 && 'Jonas');
// console.log(7 && 'Jonas');

// console.log('Hello' && 23 && null && 2);

// // practical example
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }
// // above one is equal to down one
// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

// // The Nullish Coalescing operator
// restaurant.numGuests = 0;
// const guest3 = restaurant.numGuests || 10;
// console.log(guest2);

// // after ES2020, the new operator solution of set the correct 0 value to the variable, but JS thinks it a falsy value
// // nullish: null and undefined (not include 0 or '')
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

//Coding challenge #1
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },

  printGoals: function (...names) {
    for (let i = 0; i < names.length; i++) console.log(names[i]);
  },
};

// // 1.
// // const players1 = game.players[0];
// // const players2 = game.players[1];
// const [players1, players2] = game.players;
// console.log(players1);
// console.log(players2);

// // 2.
// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// // 3.
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// // 4.
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

// // 5.
// const { team1, x: draw, team2 } = game.odds;
// console.log(team1, team2, draw);

// // 6.
// game.printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// game.printGoals(...game.scored);

// // 7.
// console.log(team1 < team2 && team1);
// console.log(team1 > team2 && team2);

// LOOPING ARRAY: THE FOR-OF ARRAY
const menu1 = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu1) console.log(item);

for (const item of menu1.entries()) {
  console.log(item);
}

// OPTIONAL CHAINING

if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// 因為前面的不存在所以會是undefined，undefined.open當然會報錯
// console.log(restaurant.openingHours.mon.open);

// with optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

// Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  // 用 nullish 幫忙判斷open設成0的
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`Open on ${day} at ${open}`);
}

// methods
console.log(restaurant.order?.(0, 1) ?? "Methods doesn't exist"); // successfully call the function
console.log(restaurant.orderRisotto?.(0, 1) ?? "Methods doesn't exist"); // Methods doesn't exist

// arrays
// const users = [{ name: 'Jonas', email: 'hello@jonas' }];
const users = [];

console.log(users[0]?.name ?? 'user array empty');
if (users.length > 0) console.log(users[0].name);
else console.log('user array empty');

//LOOPING OBJECTS: OBJECT KEYS, VALUES, AND ENTIRES
// Property Names
const properties = Object.keys(openingHours);
console.log(properties);

// Property VALUES
const values = Object.values(openingHours);
console.log(values);

// Entries object
const entries = Object.entries(openingHours);

// 這樣就能用解構賦值的方式來運用了
for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} close at ${close}`);
}

// Code challenge #2
// 1.
// I forgot to plus 1 for goal[0]
for (const goal of game.scored.entries())
  console.log(`goal ${goal[0]}: ${goal[1]}`);

// Jonas's ans
for (const [i, player] of game.scored.entries())
  console.log(`goal ${i + 1}: ${player}`);

// 2.
const odds = Object.values(game.odds);
console.log(odds);
let oddSum = 0;
for (const odd of odds) {
  oddSum += odd;
}
console.log(oddSum / odds.length);

// 3.
console.log(`Odd of victory ${game.team1} : ${game.odds.team1}`);
console.log(`Odd of draw : ${game.odds.x}`);
console.log(`Odd of victory ${game.team2} : ${game.odds.team2}`);

// Jonas's ans
for (const [team, odd] of Object.entries(game.odds)) {
  // 用三元運算子先做判斷
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} : ${odd}`);
}
// 4.
const scorers = {
  name: game.scored,
};
