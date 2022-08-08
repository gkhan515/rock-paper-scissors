function getComputerChoice () {
  switch(Math.floor(Math.random() * 3)) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

let playerSelection = "rOcK"

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  if ((playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "scissors" && computerSelection === "paper")) {
    console.log(`You win! ${playerSelection} beats ${computerSelection}`)
  }

  else if ((playerSelection === "rock" && computerSelection === "paper") ||
      (playerSelection === "paper" && computerSelection === "scissors") ||
      (playerSelection === "scissors" && computerSelection === "rock")) {
    console.log(`You lose! ${computerSelection} beats ${playerSelection}`)
  }

  else if (playerSelection === computerSelection){
    console.log("It's a draw!")
  }

  else
    console.log("you have entered nonsense")
}

playRound(playerSelection, getComputerChoice());
