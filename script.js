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

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  if ((playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "scissors" && computerSelection === "paper")) {
    console.log(`You win! ${playerSelection} beats ${computerSelection}`)
    return 1;
  }

  if ((playerSelection === "rock" && computerSelection === "paper") ||
      (playerSelection === "paper" && computerSelection === "scissors") ||
      (playerSelection === "scissors" && computerSelection === "rock")) {
    console.log(`You lose! ${computerSelection} beats ${playerSelection}`)
    return 0;
  }

  if (playerSelection === computerSelection){
    console.log("It's a draw!")
    return 0;
  }

  console.log("you have entered nonsense");
  return 0;
}

function game () {
  let wins = 0;
  let losses = 0;
  for(let i = 0;i < 5;i++) {
    let playerSelection = prompt("Rock, paper, or scissors?")
    if (playRound(playerSelection, getComputerChoice()))
      wins++;
    else
      losses++;
  }
  console.log(`Player: ${wins}`);
  console.log(`Computer: ${losses}`);
  console.log(wins > losses ? "You win!":"You lose!");
}

game()
