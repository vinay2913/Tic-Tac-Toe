const cells = [...document.querySelectorAll(".cell")];
const statusText = document.querySelector("#status");
const restartButton = document.querySelector("#restart");

const winningLines = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
];

let board = Array(9).fill("");
let currentPlayer = "X";
let gameOver = false;

function checkWinner() {
  return winningLines.some(([a, b, c]) =>
    board[a] && board[a] === board[b] && board[a] === board[c]
  );
}

function handleMove(event) {
  const index = Number(event.currentTarget.dataset.index);
  if (gameOver || board[index]) return;

  board[index] = currentPlayer;
  event.currentTarget.textContent = currentPlayer;
  event.currentTarget.disabled = true;

  if (checkWinner()) {
    statusText.textContent = `Player ${currentPlayer} wins!`;
    gameOver = true;
    cells.forEach(cell => cell.disabled = true);
  } else if (board.every(Boolean)) {
    statusText.textContent = "It's a draw!";
    gameOver = true;
  } else {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusText.textContent = `Player ${currentPlayer}'s turn`;
  }
}

function restartGame() {
  board = Array(9).fill("");
  currentPlayer = "X";
  gameOver = false;
  cells.forEach(cell => {
    cell.textContent = "";
    cell.disabled = false;
  });
  statusText.textContent = "Player X's turn";
}

cells.forEach(cell => cell.addEventListener("click", handleMove));
restartButton.addEventListener("click", restartGame);
