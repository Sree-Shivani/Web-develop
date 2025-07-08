const choices = ["rock", "paper", "scissors"];
const playerScoreSpan = document.getElementById("player-score");
const computerScoreSpan = document.getElementById("computer-score");
const resultDiv = document.getElementById("result");
const winSound = document.getElementById("win-sound");
const loseSound = document.getElementById("lose-sound");

let playerScore = 0;
let computerScore = 0;

document.querySelectorAll(".choice").forEach(button => {
  button.addEventListener("click", () => {
    const playerChoice = button.getAttribute("data-choice");
    playRound(playerChoice);
  });
});

function playRound(playerChoice) {
  const computerChoice = getComputerChoice();
  const winner = getWinner(playerChoice, computerChoice);

  if (winner === "player") {
    playerScore++;
    playerScoreSpan.textContent = playerScore;
    resultDiv.textContent = `You Win! ${playerChoice} beats ${computerChoice}`;
    winSound.play();
  } else if (winner === "computer") {
    computerScore++;
    computerScoreSpan.textContent = computerScore;
    resultDiv.textContent = `You Lose! ${computerChoice} beats ${playerChoice}`;
    loseSound.play();
  } else {
    resultDiv.textContent = `It's a Draw! You both chose ${playerChoice}`;
  }
}

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getWinner(player, computer) {
  if (player === computer) return "draw";

  if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    return "player";
  } else {
    return "computer";
  }
}
