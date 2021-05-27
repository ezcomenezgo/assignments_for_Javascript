'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// Display movements
const displayMovement = function (movements) {
  // first step to empty the html container
  containerMovements.innerHTML = '';

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

// calculate the account's balance
const calcDisplayBalance = function (movements) {
  const balance = movements.reduce(function (acc, mov) {
    return acc + mov;
  }, 0);
  labelBalance.textContent = `${balance}€`;
};

const calcDisplaySummary = function (acc) {
  const income = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${income}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposits => (deposits * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int, i, arr) => {
      // console.log(arr);
      return acc + int; // remember to type RETURN !!!!
    }, 0);
  labelSumInterest.textContent = `${interest}€`;
};

// creat a user name
const createUserName = function (accs) {
  accs.forEach(function (acc) {
    acc.userName = acc.owner
      .toLocaleLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUserName(accounts);
console.log(accounts);

// Event handler
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // prevent form submit
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.userName === inputLoginUsername.value
  );

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI & welcome message
    console.log('LOGIN');
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;
    // Display movements
    displayMovement(currentAccount.movements);
    // Display balance
    calcDisplayBalance(currentAccount.movements);
    // Display summary
    calcDisplaySummary(currentAccount);
  }
  // clear input fields
  inputLoginUsername.value = inputLoginPin.value = ''; // = 是從右邊到左邊的
  inputLoginPin.blur();
  console.log(currentAccount);
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
// let arr = ['a', 'b', 'c', 'd', 'e'];

// // slice
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));
// console.log(arr.slice());

// // splice
// // console.log(arr.splice(2));
// console.log(arr.splice(-1));
// console.log(arr.splice(1, 2));
// console.log(arr);

// // reverse
// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];

// console.log(arr2.reverse());
// console.log(arr2);

// // concat
// const letter = arr.concat(arr2);
// console.log(letter);
// console.log([...arr, ...arr2]);

// // join
// console.log(letter.join('-'));

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // for (const movement of movements) {
// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`${i}. You deposited $${movement}`);
//   } else {
//     console.log(`${i}. You withdrew $${Math.abs(movement)}`);
//   }
// }
// console.log('-------forEach-------');
// movements.forEach(function (mov, i, arr) {
//   if (mov > 0) {
//     console.log(`${i}. You deposited $${mov}`);
//   } else {
//     console.log(`${i}. You withdrew $${Math.abs(mov)}`);
//   }
// });
// // 0: function(200)
// // 1: function(450)
// // 2: function(400)
// // ...

// // Map
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(key, value);
// });

// // Set
// const currenciesUnique = new Set(['NTD', 'NTD', 'USD', 'EUR', 'EUR', 'JYP']);
// console.log(currenciesUnique);

// currenciesUnique.forEach(function (value, _, set) {
//   console.log(value, value);
// });

// // coding challenge #1
// const dogsJulia = [3, 5, 2, 12, 7];
// const dogsKate = [4, 1, 15, 8, 3];
// const dogsJulia1 = [9, 16, 6, 8, 3];
// const dogsKate1 = [10, 5, 6, 1, 4];

// const checkDogs = function (agesJulia, agesKate) {
//   // Jonas's ans
//   // const agesJuliaCopy = agesJulia.slice(); // 不用展開運算子，直接用slice淺拷貝一個陣列
//   // agesJuliaCopy.splice(0, 1) // 再用splice方法切割原本的陣列
//   // agesJuliaCopy.splice(-2)
//   const agesJuliaCopy = [...agesJulia].slice(1, -2);
//   console.log(agesJuliaCopy);
//   // const agesCollection = agesJuliaCopy.concat(agesKate) // 用 arr.concat() 方法合併兩個陣列
//   const agesCollection = [...agesJuliaCopy, ...agesKate];
//   console.log(agesCollection);
//   agesCollection.forEach(function (age, i) {
//     if (age >= 3) {
//       console.log(`Dog number ${i + 1} is an adult and it's ${age} years old`);
//     } else {
//       console.log(
//         `Dog number ${i + 1} is still a puppy🐶 and it's ${age} years old`
//       );
//     }
//   });
// };

// checkDogs(dogsJulia, dogsKate);
// checkDogs(dogsJulia1, dogsKate1);

// // coding challenge #2
// const calcAverageHumanAge = function (ages) {
//   const humanAges = ages.map(age => {
//     // Jonas's ans
//     // age <= 2 ? 2 * age : 16 + age * 4
//     if (age <= 2) {
//       return 2 * age;
//     } else {
//       return 16 + age * 4;
//     }
//   });
//   console.log(humanAges);
//   const adults = humanAges.filter(humanAge => humanAge >= 18);
//   console.log(adults);
//   // const AverageHumanAge =
//   //   adults.reduce((acc, cur) => acc + cur, 0) / adults.length;
//   const AverageHumanAge = adults.reduce(
//     (acc, cur, i, arr) => acc + cur / arr.length,
//     0
//   );
//   return AverageHumanAge;
// };

// // coding challenge #3
// const calcAverageHumanAge1 = ages =>
//   ages
//     .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
//     .filter(age => age >= 18)
//     .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
// console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));

// MAP, FILTER, REDUCE
// MAP
// const eurToUsd = 1.1;

// const movementsUSD = movements.map(function (mov) {
//   return mov * eurToUsd;
// });

// const movementsUSDArrow = movements.map(mov => mov * eurToUsd);
// console.log(movements);
// console.log(movementsUSD);
// console.log(movementsUSDArrow);

// // 這邊是手動創造一個新的陣列，跟上面用 map 方法會自動創造一個新的陣列的概念不同
// const movementsUSDFor = [];
// for (const mov of movements) {
//   movementsUSDFor.push(mov * eurToUsd);
// }
// console.log(movementsUSDFor);

// const movementsDescriptions = movements.map(
//   (mov, i) => `${i + 1}. You ${mov > 0 ? 'deposited' : 'withdrew'} $${mov}`
//   // if (mov > 0) {
//   //   return `${i}. You deposited $${mov}`;
//   // } else {
//   //   return `${i}. You withdrew $${Math.abs(mov)}`;
//   // }
// );

// console.log(movementsDescriptions);

// // FILTER
// const deposits = movements.filter(function (mov, i, arr) {
//   return mov > 0;
// });

// console.log(deposits);

// const withdrawals = movements.filter(mov => mov < 0);
// console.log(withdrawals);

// const depositsFor = [];
// for (const mov of movements) {
//   if (mov > 0) depositsFor.push(mov);
// }
// console.log(depositsFor);

// // REDUCE
// // accumulator is like a snowball
// // const balance = movements.reduce(function (acc, cur, i, arr) {
// //   console.log(`iteration ${i}: ${acc}`);
// //   return acc + cur;
// // }, 0);
// console.log(movements);

// const balance = movements.reduce((acc, cur) => acc + cur, 0);
// console.log(balance);

// let balance2 = 0;
// for (const mov of movements) {
//   balance2 += mov;
// }
// console.log(balance2);

// // Maximum value
// const max = movements.reduce(function (arr, cur) {
//   if (arr > cur) return arr;
//   else return cur;
// }, movements[0]);

// console.log(max);

// // MAGIC OF CHAINING ALL METHODS
// // like pipeline
// const eurToUsd = 1.1;
// const totalDepositUSD = movements
//   .filter(mov => mov > 0)
//   // .map((mov, i, arr) {
//   //   console.log(arr);
//   //   return mov * eurToUsd
//   // })
//   .map(mov => mov * eurToUsd)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(totalDepositUSD);

// // FIND
// const firstWithdrawal = movements.find(mov => mov < 0);
// // console.log(firstWithdrawal);

// console.log(accounts);

// const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// // console.log(account);

// for (const [i, acc] of accounts.entries()) {
//   if (acc.owner === 'Jessica Davis') console.log(i, acc);
// }
