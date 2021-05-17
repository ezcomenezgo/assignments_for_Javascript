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

let playing = true; //set the boolean to control the state
let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
const switchPlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore; // change the current player's score to 0 then change the player
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Rolling Dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
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
      switchPlayer();
    }
  }
});

// Holding current score
btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. add score to current player score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    console.log(
      document.getElementById(`current--${activePlayer}`).textContent
    );
    // 2. check the score is >= 100
    if (scores[activePlayer] >= 15) {
      // current player wins and finish the game
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // switch player
      switchPlayer();
    }
  }
});

// Resetting the game (it can be collected to a function)
btnNew.addEventListener('click', function () {
  // let each players' score become 0
  score0El.textContent = 0;
  score1El.textContent = 0;
  // change the state to now is playing the game
  playing = true;
  // reset the array of store the players' score
  scores = [0, 0];
  // reset current score
  currentScore = 0;
  // reset current winner's current score and 'player--winner' class
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  // change player to player 1
  activePlayer = 0;
  // show the dice
  diceEl.classList.remove('hidden');
  // add 'player--active' class to player 1
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('player--active');
});
