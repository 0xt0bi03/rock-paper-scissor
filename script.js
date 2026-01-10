

const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");
const screens = document.querySelectorAll(".screen");
const moves = document.querySelectorAll(".move");

const playerScoreEl = document.getElementById("playerScore");
const cpuScoreEl = document.getElementById("cpuScore");
const resultText = document.getElementById("resultText");
const playerHand = document.getElementById("playerHand");
const cpuHand = document.getElementById("cpuHand");

const toggle1 = document.getElementById("themeToggle");
const toggle2 = document.getElementById("themeToggle2");

let playerScore = 0;
let cpuScore = 0;

startBtn.onclick = () => {
  screens[0].classList.remove("active");
  screens[1].classList.add("active");
};

resetBtn.onclick = () => {
  playerScore = 0;
  cpuScore = 0;
  updateScore();
  resultText.textContent = "Choose your move";
  playerHand.textContent = "❔";
  cpuHand.textContent = "❔";
};

moves.forEach(btn => {
  btn.onclick = () => playGame(btn.dataset.move);
});

function playGame(playerMove) {
  const cpuMove = getCpuMove();
  playerHand.textContent = getEmoji(playerMove);
  cpuHand.textContent = getEmoji(cpuMove);

  if (playerMove === cpuMove) {
    resultText.textContent = "It's a draw!";
    return;
  }

  const win =
    (playerMove === "rock" && cpuMove === "scissors") ||
    (playerMove === "paper" && cpuMove === "rock") ||
    (playerMove === "scissors" && cpuMove === "paper");

  if (win) {
    playerScore++;
    resultText.textContent = "YOU WIN 🎉";
  } else {
    cpuScore++;
    resultText.textContent = "CPU WINS 😈";
  }

  updateScore();
}

function getCpuMove() {
  const moves = ["rock", "paper", "scissors"];
  return moves[Math.floor(Math.random() * 3)];
}

function getEmoji(move) {
  return move === "rock" ? "🪨" : move === "paper" ? "📄" : "✂️";
}

function updateScore() {
  playerScoreEl.textContent = playerScore;
  cpuScoreEl.textContent = cpuScore;
}

toggle1.onclick = toggleTheme;
toggle2.onclick = toggleTheme;

function toggleTheme() {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
}
