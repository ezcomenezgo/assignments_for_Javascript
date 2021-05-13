'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

// First step: select the button and set event listener
// Second step: store the input value in a variable
// Third step: change input value(string) to number for comparing with the random number
// Forth step: check the thing that user type in is truly a number value
// Fifth step: declare a random secret number
// Sixth step: start comparing the number that user type and the secret number
// Seventh step: if user got a wrong number then the score will minus one

let secretNumber = Math.trunc(Math.random() * 20 + 1);
// it's better that declare score in a variable not manipulate DOM directly
let score = 20;
let highScore = 0;
console.log(secretNumber);

// refactoring
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  // why guess must be here? Why can't it just like score outside this function?
  // Ans: if guess is outside, when user click the check button then this function can't capture document.querySelector('.guess').value
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  //The logic of (!guess) is we want to remind user that always types number, so it will happen something when user type a value that is not a number. When the guess's value is not a number then it will become "false"(because <input type="number">), but we have to invert the "false" to "true" that we can use if state to do something.
  if (!guess) {
    displayMessage('No number!');
    // document.querySelector('.message').textContent = 'No number!';
    // when user is right
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    displayMessage('You got a CORRECT NUMBER!');
    // document.querySelector('.message').textContent =
    //   'You got a CORRECT NUMBER!';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // refactoring
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too High!' : 'Too Low!');
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? 'Too High!' : 'Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
      setTimeout(() => {
        document.querySelector('.guess').value = '';
      }, 1000);
    } else {
      displayMessage('You lost the game!');
      // document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
  // when user guesses too high
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too High!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //     setTimeout(() => {
  //       document.querySelector('.guess').value = '';
  //     }, 1000);
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }

  //   // when user guesses too low
  // } else {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too Low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //     setTimeout(() => {
  //       document.querySelector('.guess').value = '';
  //     }, 1000);
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

// reset game
document.querySelector('.again').addEventListener('click', function () {
  // reset new secret number
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  console.log(secretNumber);
  // reset message and secret space
  displayMessage('Start guessing...');
  // document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  // reset score
  score = 20;
  document.querySelector('.score').textContent = score;
  // reset guess value
  document.querySelector('.guess').value = '';
  // reset CSS
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

// My understanding about score > 0 changes score > 1
// When you click, first time the score is 20, so 20 is greater than 0 indeed, then second time after 20 - 1, 19 is also greater than 0.... let me show a table for you

// 1st click: 20 is greater than 0

// 2nd click: 19 is greater than 0

// 3rd click: 18 is greater than 0

// 4th click: 17 is greater than 0

// 5th click: 16 is greater than 0

// 6th click: 15 is greater than 0

// 7th click: 14 is greater than 0

// 8th click: 13 is greater than 0

// 9th click: 12 is greater than 0

// 10th click: 11 is greater than 0

// 11th click: 10 is greater than 0

// 12th click: 9 is greater than 0

// 13th click: 8 is greater than 0

// 14th click: 7 is greater than 0

// 15th click: 6 is greater than 0

// 16th click: 5 is greater than 0

// 17th click: 4 is greater than 0

// 18th click: 3 is greater than 0

// 19th click: 2 is greater than 0

// Then the 20th click we use 1 to compare to 0, it's still greater than 0, so goes into if block. After comparison it will minus one, so it shows 0 on page but still 'too high' or 'too low' because of the if block.

// then the 21st click we finally use 0 to compare to 0, and the process goes into else block shows 'you lost the game'!
