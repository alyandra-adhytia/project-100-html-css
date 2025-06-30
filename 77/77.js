const board = document.getElementById("board");
let currentPlayer = "X";
let gameBoard = Array(9).fill(null);

function createBoard() {
  board.innerHTML = "";
  gameBoard.forEach((cell, index) => {
    const cellElement = document.createElement("div");
    cellElement.classList.add("cell");
    cellElement.textContent = cell;
    cellElement.onclick = () => makeMove(index);
    board.appendChild(cellElement);
  });
}

function makeMove(index) {
  if (gameBoard[index] || checkWinner()) return;
  gameBoard[index] = currentPlayer;
  currentPlayer = currentPlayer === "X" ? "O" : "X";
  createBoard();
  if (checkWinner()) {
    setTimeout(() => alert(`${gameBoard[checkWinner()]} menang!`), 100);
  }
}

function checkWinner() {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (const [a, b, c] of winningCombinations) {
    if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
      return a;
    }
  }
  return gameBoard.includes(null) ? null : "draw";
}

function resetBoard() {
  gameBoard = Array(9).fill(null);
  currentPlayer = "X";
  createBoard();
}

createBoard();
