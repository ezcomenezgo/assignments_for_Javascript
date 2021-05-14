'user strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

// check guess number
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('No number!');
  } else if (guess === secretNumber) {
    displayNumber(secretNumber);
    displayMessage('You got a CORRECT NUMBER!');

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too High!' : 'Too Low!');
    }
    score--;
    displayScore(score);
    setTimeout(() => {
      document.querySelector('.guess').value = '';
    }, 1000);
  } else {
    displayMessage('You lost the game!');
    displayScore(0);
  }
});

// restart the game
document.querySelector('.again').addEventListener('click', function () {
  // reset new secret number
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  console.log(secretNumber);
  // reset message and secret space
  displayMessage('Start guessing...');
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayNumber('?');
  // reset score
  score = 20;
  displayScore(score);
  // reset guess value
  document.querySelector('.guess').value = '';
  // reset CSS
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
