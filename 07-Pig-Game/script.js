'use strict';

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const currentScore0El = document.getElementById('current--0');
const currentScore1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// start condition
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;
let activePlayer = 0;

// Rolling Dice functionality
btnRoll.addEventListener('click', function () {
  // 1. generate dice randomly
  const dice = Math.trunc(Math.random() * 6 + 1);
  console.log(dice);
  // 2.display the dice on page(remember to remove the 'hidden' class to show the dice roll picture)
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  // 3. check the dice number is 1 or not
  if (dice !== 1) {
    // add to current score
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    // switch player
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore; // change the current player's score to 0 then change the player
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
});
