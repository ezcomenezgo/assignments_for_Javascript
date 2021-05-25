'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

for (const flight of flights.split('+')) {
  console.log(flight.split(';'));
}
// for (const str of arr1) {
//   const str2 = str.replaceAll('_', ' ');
//   const str3 = str2.replaceAll(';', ' ');
// }
// // Data needed for first part of the section
// const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// const openingHours = {
//   [weekdays[3]]: {
//     open: 12,
//     close: 22,
//   },
//   [weekdays[5]]: {
//     open: 11,
//     close: 23,
//   },
//   [weekdays[2]]: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   // after ES6 enhanced object literals
//   openingHours,

//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   // orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
//   //   console.log(
//   //     `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
//   //   );
//   // },
//   // default values
//   orderDelivery: function ({
//     starterIndex = 1,
//     mainIndex = 0,
//     time = '22:00',
//     address,
//   }) {
//     console.log(
//       `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
//     );
//   },

//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(`Here's your pasta! Made by ${ing1}, ${ing2}, ${ing3}`);
//   },

//   orderPizza: function (mainIngredient, ...otherIng) {
//     console.log(mainIngredient);
//     console.log(otherIng);
//   },
// };

// // restaurant.orderDelivery({
// //   time: '22:30',
// //   address: 'Taipei',
// //   mainIndex: 2,
// //   starterIndex: 2,
// // });

// restaurant.orderDelivery({
//   address: 'Taipei',
//   starterIndex: 1,
// });
// // // ARRAY DESTRUCTURING
// // let [main, , secondary] = restaurant.categories;
// // console.log(main, secondary);

// // // // 如果想要交換兩者的值，不用解構賦值時得這樣做
// // // const temp = main; // 宣告一個變數暫存main的值
// // // main = secondary;
// // // secondary = temp;
// // // console.log(main, secondary);

// // // 用解構賦值
// // [main, secondary] = [secondary, main];
// // console.log(main, secondary);

// // // Receive 2 return value from a function
// // const [starter, mainCourse] = restaurant.order(0, 2);
// // console.log(starter, mainCourse);

// // // nested destructuring
// // const nested = [2, 4, [5, 6]];
// // // const [i, , j] = nested;
// // const [i, , [j, k]] = nested;
// // console.log(i, j, k);

// // // Default value
// // const [p = 1, q = 1, r = 1] = [8, 9];
// // console.log(p, q, r);

// // // OBJECT DESTRUCTURING
// // const { name, openingHours, categories } = restaurant;
// // console.log(name, openingHours, categories);

// // const {
// //   name: restaurantName,
// //   openingHours: opening_hours,
// //   categories: restaurantCategories,
// // } = restaurant;
// // console.log(restaurantName, opening_hours, restaurantCategories);

// // // default values
// // const { menu = [], starterMenu: starters = [] } = restaurant;
// // console.log(menu, starters);

// // // mutating variables
// // let a = 111;
// // let b = 999;
// // const obj = { a: 23, b: 7, c: 14 };

// // // {a, b} = obj // Uncaught SyntaxError: Unexpected token '='
// // // solution
// // ({ a, b } = obj);
// // console.log(a, b);

// // // nested object
// // const {
// //   fri: { open: o, close: c },
// // } = openingHours;
// // console.log(o, c);

// // // SPREAD OPERATOR
// // const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// // console.log(newMenu);

// // // copy array
// // const mainMenuCopy = [...restaurant.mainMenu];

// // // Join 2 array
// // const menuCombine = [...restaurant.mainMenu, ...restaurant.starterMenu];
// // console.log(menuCombine);

// // // iterable: arrays, strings, maps, sets, NOT objects
// // const str = 'Jonas';
// // const letters = [...str, '', 'S.'];
// // console.log(letters);

// // // real world example
// // // const ingredients = [
// // //   prompt("let's make pasta Ing1?"),
// // //   prompt("let's make pasta Ing2?"),
// // //   prompt("let's make pasta Ing3?"),
// // // ];
// // // console.log(ingredients);

// // // old methods send parameters
// // // restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// // // after ES6: spread operator
// // // restaurant.orderPasta(...ingredients);

// // // object (after ES2018)
// // const newRestaurant = { founding: '2020', ...restaurant, founder: 'Claire' };
// // console.log(newRestaurant);

// // // shallow copy
// // const restaurantCopy = { ...restaurant };
// // restaurantCopy.name = 'PIZZA';
// // console.log(restaurant.name); // Classico Italiano
// // console.log(restaurantCopy.name); // PIZZA

// // // REST PATTERN AND PARAMETERS

// // // 1. destructuring
// // // spread operator, because on RIGHT side of =
// // const arr = [1, 2, ...[3, 4]];
// // // rest, because on LEFT side of =
// // const [e, f, ...others] = [1, 2, 3, 4, 5];
// // console.log(e, f, others);

// // // using real example (left side is REST pattern and right side is spread operator mixes two arrays)
// // const [pizza, , risotto, ...otherFood] = [
// //   ...restaurant.mainMenu,
// //   restaurant.starterMenu,
// // ];
// // console.log(pizza, risotto, otherFood);

// // // object
// // // when we want to separate the weekdays and weekend
// // const { sat, ...weekdays } = openingHours;
// // console.log(weekdays);

// // // 2. function
// // const add = function (...numbers) {
// //   let sum = 0;
// //   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
// //   console.log(sum);
// // };

// // add(2, 3);
// // add(2, 3, 4, 5);
// // add(2, 3, 4, 5, 6);

// // // using spread operator to spread th3 x array, but use rest operator to collect the argument for the add function
// // const x = [23, 5, 6];
// // add(...x);

// // // orderPizza function also can use REST to collect the rest argument
// // restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');

// // // SHORT CIRCUITING (&& and ||)

// // // use ANY data type, return ANY data type, short=circuiting
// // console.log('======OR=======');
// // console.log(3 || 'Jonas');
// // console.log('' || 'Jonas');
// // console.log(true || 0);
// // console.log(undefined || null);
// // console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// // // restaurant.numGuests = 23; // if set 0, because it's a falsy value, it'll still return 10 not 23
// // const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
// // console.log(guest1);
// // // above one is equal to down one
// // const guest2 = restaurant.numGuests || 10;
// // console.log(guest2);

// // console.log('======AND=======');
// // console.log(0 && 'Jonas');
// // console.log(7 && 'Jonas');

// // console.log('Hello' && 23 && null && 2);

// // // practical example
// // if (restaurant.orderPizza) {
// //   restaurant.orderPizza('mushrooms', 'spinach');
// // }
// // // above one is equal to down one
// // restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

// // // The Nullish Coalescing operator
// // restaurant.numGuests = 0;
// // const guest3 = restaurant.numGuests || 10;
// // console.log(guest2);

// // // after ES2020, the new operator solution of set the correct 0 value to the variable, but JS thinks it a falsy value
// // // nullish: null and undefined (not include 0 or '')
// // const guestCorrect = restaurant.numGuests ?? 10;
// // console.log(guestCorrect);

// //Coding challenge #1
// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },

//   printGoals: function (...names) {
//     for (let i = 0; i < names.length; i++) console.log(names[i]);
//   },
// };

// // // 1.
// // // const players1 = game.players[0];
// // // const players2 = game.players[1];
// // const [players1, players2] = game.players;
// // console.log(players1);
// // console.log(players2);

// // // 2.
// // const [gk, ...fieldPlayers] = players1;
// // console.log(gk, fieldPlayers);

// // // 3.
// // const allPlayers = [...players1, ...players2];
// // console.log(allPlayers);

// // // 4.
// // const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// // console.log(players1Final);

// // // 5.
// // const { team1, x: draw, team2 } = game.odds;
// // console.log(team1, team2, draw);

// // // 6.
// // game.printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// // game.printGoals(...game.scored);

// // // 7.
// // console.log(team1 < team2 && team1);
// // console.log(team1 > team2 && team2);

// // LOOPING ARRAY: THE FOR-OF ARRAY
// const menu1 = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for (const item of menu1) console.log(item);

// for (const item of menu1.entries()) {
//   console.log(item);
// }

// // OPTIONAL CHAINING

// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open);

// // 因為前面的不存在所以會是undefined，undefined.open當然會報錯
// // console.log(restaurant.openingHours.mon.open);

// // with optional chaining
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

// // Example
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   // 用 nullish 幫忙判斷open設成0的
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`Open on ${day} at ${open}`);
// }

// // methods
// console.log(restaurant.order?.(0, 1) ?? "Methods doesn't exist"); // successfully call the function
// console.log(restaurant.orderRisotto?.(0, 1) ?? "Methods doesn't exist"); // Methods doesn't exist

// // arrays
// // const users = [{ name: 'Jonas', email: 'hello@jonas' }];
// const users = [];

// console.log(users[0]?.name ?? 'user array empty');
// if (users.length > 0) console.log(users[0].name);
// else console.log('user array empty');

// //LOOPING OBJECTS: OBJECT KEYS, VALUES, AND ENTIRES
// // Property Names
// const properties = Object.keys(openingHours);
// console.log(properties);

// // Property VALUES
// const values = Object.values(openingHours);
// console.log(values);

// // Entries object
// const entries = Object.entries(openingHours);

// // 這樣就能用解構賦值的方式來運用了
// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} close at ${close}`);
// }

// // Code challenge #2
// // 1.
// // I forgot to plus 1 for goal[0]
// for (const goal of game.scored.entries())
//   console.log(`goal ${goal[0]}: ${goal[1]}`);

// // Jonas's ans
// for (const [i, player] of game.scored.entries())
//   console.log(`goal ${i + 1}: ${player}`);

// // 2.
// const odds = Object.values(game.odds);
// console.log(odds);
// let oddSum = 0;
// for (const odd of odds) {
//   oddSum += odd;
// }
// console.log(oddSum / odds.length);

// // 3.
// console.log(`Odd of victory ${game.team1} : ${game.odds.team1}`);
// console.log(`Odd of draw : ${game.odds.x}`);
// console.log(`Odd of victory ${game.team2} : ${game.odds.team2}`);

// // Jonas's ans
// for (const [team, odd] of Object.entries(game.odds)) {
//   // 用三元運算子先做判斷
//   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
//   console.log(`Odd of ${teamStr} : ${odd}`);
// }
// // 4.
// const scorers = {
//   name: game.scored,
// };

// // // SET DATA STRUCTURE
// // const orderSet = new Set(['pasta', 'pizza', 'pizza', 'risotto', 'pasta']);
// // console.log(orderSet);

// // console.log(orderSet.size);
// // console.log(orderSet.has('pizza'));
// // console.log(orderSet.has('bread'));

// // orderSet.add('garlic bread');
// // console.log(orderSet);

// // orderSet.delete('pizza');
// // console.log(orderSet);

// // for (const order of orderSet) console.log(order);

// // // example
// // const staff = ['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter'];
// // const staffUnique = [...new Set(staff)];
// // console.log(staffUnique);
// // console.log(
// //   new Set(['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter']).size
// // );

// // // MAP DATA STRUCTURE
// // const rest = new Map();
// // rest.set('name', 'Clasico');
// // rest.set(1, 'Italy');
// // console.log(rest.set(2, 'Protugal'));

// // rest
// //   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
// //   .set('open', 11)
// //   .set('close', 23)
// //   .set(true, 'We are open :D')
// //   .set(false, 'We are close :(');

// // console.log(rest.get('name'));
// // console.log(rest.get(true));
// // console.log(rest.get(1));

// // const time = 8;
// // console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// // console.log(rest.has('categories'));
// // rest.delete(2);
// // // rest.clear();
// // const arr = [1, 2];
// // rest.set(arr, 'Test');
// // rest.set(document.querySelector('h1'), 'Heading');
// // console.log(rest);
// // console.log(rest.size);

// // console.log(rest.get(arr));

// // // MAP ITERATION
// // const question = new Map([
// //   ['question', 'What is the best programming language?'],
// //   [1, 'C'],
// //   [2, 'Java'],
// //   [3, 'JavaScript'],
// //   ['correct', 3],
// //   [true, 'Correct!'],
// //   [false, 'Try again'],
// // ]);
// // console.log(question);

// // // convert object to map
// // console.log(Object.entries(openingHours));
// // const hoursMap = new Map(Object.entries(openingHours));
// // console.log(hoursMap);

// // // Quiz app
// // console.log(question.get('question'));
// // for (const [key, value] of question) {
// //   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// // }

// // const answer = 3;
// // console.log(answer);
// // // check the right ans or not
// // // my ans
// // console.log(question.get(answer === 3));
// // // Jonas's ans
// // console.log(question.get(question.get('correct') === answer));

// // // convert map to array
// // console.log([...question]);
// // console.log([...question.keys()]);
// // console.log([...question.values()]);

// // // coding challenge #3
// // const gameEvents = new Map([
// //   [17, '⚽ GOAL'],
// //   [36, '� Substitution'],
// //   [47, '⚽ GOAL'],
// //   [61, '� Substitution'],
// //   [64, '� Yellow card'],
// //   [69, '� Red card'],
// //   [70, '� Substitution'],
// //   [72, '� Substitution'],
// //   [76, '⚽ GOAL'],
// //   [80, '⚽ GOAL'],
// //   [92, '� Yellow card'],
// // ]);
// // // 1.
// // const events = [...new Set(gameEvents.values())];
// // console.log(events);

// // // 2.
// // gameEvents.delete(64);
// // console.log(gameEvents);

// // // 3.
// // const str = new Set('An event happened, on average, every 9 minutes');
// // console.log(
// //   `An event happened, on average, every ${90 / gameEvents.size} minutes`
// // );

// // // 4.
// // // my ans
// // for (const [min, value] of gameEvents) {
// //   min <= 45
// //     ? console.log(`[FIRST HALF] ${min}}, ${value}`)
// //     : console.log(`[SECOND HALF] ${min}}, ${value}`);
// // }

// // // Jonas's ans
// // for (const [min, event] of gameEvents) {
// //   const half = min <= 45 ? 'FIRST' : 'SECOND';
// //   console.log(`[${half} HALF] ${min}}, ${event}`);
// // }

// // WORK WITH STRING
// const airline = 'EVA airline Taipei';
// const plane = 'A320';

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log('B345'[0]);

// console.log(airline.length);
// console.log('B345'.length);

// // string methods
// console.log(airline.indexOf('a'));
// console.log(airline.lastIndexOf('e'));
// console.log(airline.indexOf('EVA'));

// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));

// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// console.log(airline.slice(-2)); // give negative will find value from the end
// console.log(airline.slice(1, -1));

// const checkMiddleSeat = function (seat) {
//   // B & E are the middle seat
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') console.log('You got the middle seat');
//   else console.log('You are lucky');
// };

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// // fix capitalization in name
// const passenger = 'jOnAs'; // Jonas
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// const email = 'hello@jonas.io';
// const loginEmail = '   Hello@Jonas.Io \n';
// // const lowerEmail = loginEmail.toLowerCase();
// // const correctEmail = lowerEmail.trim();

// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);
// console.log(email === normalizedEmail);

// // replacing
// const GB = '288.91%';
// const US = GB.replace('%', '$').replace('.', ',');
// console.log(US);

// const announcement =
//   'All the passenger cone to boarding door 23, boarding door 23!';

// console.log(announcement.replace('door', 'gate'));
// console.log(announcement.replaceAll('door', 'gate'));
// console.log(announcement.replaceAll(/door/g, 'gate')); // same with replaceAll.()

// // Boolean
// const plane1 = 'Airbus A320neo';
// console.log(plane1.includes('A320'));
// console.log(plane1.includes('Boeing'));
// console.log(plane1.startsWith('Air'));

// if (plane1.startsWith('Air') && plane1.endsWith('neo'))
//   console.log('Part of the NEW Airbus family');

// // Practice exercise
// const checkBaggage = function (item) {
//   const baggage = item.toLowerCase();
//   if (baggage.includes('knife') || baggage.includes('gun'))
//     console.log('You are not allowed on board');
//   else console.log('Welcome aboard');
// };

// checkBaggage('I have a laptop, some Food and a pocket Knife');
// checkBaggage('Socks and Camera');
// checkBaggage('Got some snack and a gun for protection');

// // split
// console.log('a+very+nice+string'.split('+'));
// console.log('Jonas Schmedtmann'.split(' '));
// const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');
// const newName = ['Mr.', firstName, lastName.toLocaleUpperCase()].join(' ');
// console.log(newName);

// const capitalizedName = function (name) {
//   const names = name.split(' ');
//   let correctName = [];

//   for (const n of names) {
//     // 2 ways to achieve solution
//     // correctName.push(n[0].toUpperCase() + n.slice(1));
//     correctName.push(n.replace(n[0], n[0].toUpperCase()));
//   }
//   console.log(correctName.join(' '));
// };

// capitalizedName('claire li');

// // padding
// const message = 'Go to gate 23!';
// console.log(message.padStart(20, '=').padEnd('30', '='));

// const maskCreditCard = function (number) {
//   const str = number + ''; // also can use String(), but with + operator, if one side is string then + will change both to string
//   return str.slice(-4).padStart(str.length, '*');
// };

// console.log(maskCreditCard(1242352));
// console.log(maskCreditCard(13858989230780));
// console.log(maskCreditCard('178378936013903213'));

// // repeat
// const message2 = 'Bad weather... All Departures Delayed...';
// console.log(message2.repeat(3));

// // coding challenge #4
// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// const btn = document.querySelector('button');
// const text = document.querySelector('textarea');

// // my ans, always forgot data destructuring
// btn.addEventListener('click', function () {
//   // 先拿到test data的陣列
//   const strArr = text.value.split('\n');
//   // 表情符號的起始值
//   let n = 1;
//   // 開始跑迴圈
//   for (const str of strArr) {
//     // console.log(str);
//     const str2 = str.toLowerCase().trim().split('_');
//     // console.log(str2);
//     const newStr = [
//       str2[0] + str2[1][0].toUpperCase() + str2[1].slice(1),
//     ].join();
//     console.log(newStr.padEnd(20, ' ') + '🧡'.repeat(n++));
//   }
// });

// // Jonas's answer
// // btn.addEventListener('click', function () {
// //   const strArr = text.value.split('\n');

// //   for(const [i, str] of strArr.entries()) {
// //     const [first, second] = str.toLowerCase().trim().split('_');
// //     const newStr = `${first}${second.replace(
// //       second[0],
// //       second[0].toUpperCase()
// //     )}`;
// //     console.log(`${newStr.padEnd(20)}${'🧡'.repeat(i)}`);
// //   }
// // }
