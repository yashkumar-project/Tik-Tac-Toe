const board = document.getElementById("board");
const statusText = document.getElementById("status");
const resetBtn = document.getElementById("reset");

let currentPlayer = "X";
let gameActive = true;
let gameState = Array(9).fill("");

const winPatterns = [
  [0,1,2], [3,4,5], [6,7,8],
  [0,3,6], [1,4,7], [2,5,8],
  [0,4,8], [2,4,6]
];

function createBoard() {
  board.innerHTML = "";
  gameState.forEach((value, index) => {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.textContent = value;
    cell.addEventListener("click", () => handleMove(index));
    board.appendChild(cell);
  });
}

function handleMove(index) {
  if (!gameActive || gameState[index] !== "") return;

  gameState[index] = currentPlayer;
  checkResult();
  currentPlayer = currentPlayer === "X" ? "O" : "X";
  statusText.textContent = `Player ${currentPlayer}'s turn`;
  createBoard();
}

function checkResult() {
  for (let pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (
      gameState[a] &&
      gameState[a] === gameState[b] &&
      gameState[a] === gameState[c]
    ) {
      statusText.textContent = `🎉 Player ${gameState[a]} wins!`;
      gameActive = false;
      return;
    }
  }

  if (!gameState.includes("")) {
    statusText.textContent = "🤝 It's a draw!";
    gameActive = false;
  }
}

resetBtn.addEventListener("click", () => {
  gameState = Array(9).fill("");
  currentPlayer = "X";
  gameActive = true;
  statusText.textContent = "Player X's turn";
  createBoard();
});

createBoard();
