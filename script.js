'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

const currentScr = scr => {
  document.querySelector('.score').textContent = scr;
};

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  //   console.log(guess);

  if (!guess) {
    displayMessage('⛔NO NUMBER');
  }
  //If player wins
  else if (guess === secretNumber) {
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    document.querySelector('.number').textContent = secretNumber;
    displayMessage('Correct Number🎉🎉');
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    //When we have to change the style we always specify the value in string.
  }

  //If the number is different
  else if (guess !== secretNumber && guess <= 20) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber ? 'Number is higher' : 'Number is lower'
      );
      score--;
      currentScr(score);
    } else {
      displayMessage('☹️☹️you lost the game');
      currentScr(0);
    }
  } else if (guess > 20) {
    displayMessage('Please provide number between 1 and 20');
  }
});

//Resetting the game:
const reset = document.querySelector('.again');
document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  currentScr(score);
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  displayMessage(' Start guessing...');
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
});
