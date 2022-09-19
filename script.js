let wins = 0;
let losses = 0;

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

const playerChoice = document.querySelector('.player-choice');
const computerChoice = document.querySelector('.computer-choice');

rock.addEventListener('click', () => {
  playerChoice.innerHTML = "✊";
  playRound("rock", getComputerChoice());
});
paper.addEventListener('click', () => {
  playerChoice.innerHTML = "✋";
  playRound("paper", getComputerChoice());
});
scissors.addEventListener('click', () => {
  playerChoice.innerHTML = "✌️";
  playRound("scissors", getComputerChoice());
});

const winCounter = document.querySelector('.win-counter');
const lossCounter = document.querySelector('.loss-counter');
const result = document.querySelector('.result');

function getComputerChoice () {
  switch(Math.floor(Math.random() * 3)) {
    case 0:
      computerChoice.innerHTML = "✊";
      return "rock";
    case 1:
      computerChoice.innerHTML = "✋";
      return "paper";
    case 2:
      computerChoice.innerHTML = "✌️";
      return "scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  if ((playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "scissors" && computerSelection === "paper")) {
    result.innerHTML = `You win! ${playerSelection} beats ${computerSelection}`;
    winCounter.innerHTML = `Player: ${++wins}`;
  } else

  if ((playerSelection === "rock" && computerSelection === "paper") ||
      (playerSelection === "paper" && computerSelection === "scissors") ||
      (playerSelection === "scissors" && computerSelection === "rock")) {
    result.innerHTML = `You lose! ${computerSelection} beats ${playerSelection}`;
    lossCounter.innerHTML = `CPU: ${++losses}`;
  } else

  if (playerSelection === computerSelection){
    result.innerHTML = "It's a draw!";
  }

  checkGameOver();
}

function checkGameOver () {
  if ((wins == 5) || (losses == 5)) {
    if (wins > losses) {
      result.innerHTML = "You won!"
    } else
      result.innerHTML = "You Lost!"

    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
  }
}

//game()
