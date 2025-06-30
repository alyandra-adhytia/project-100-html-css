const numSquares = 6;
let colors = [];
let pickedColor;

const squaresContainer = document.getElementById("container");
const colorDisplay = document.getElementById("colorDisplay");
const messageDisplay = document.getElementById("message");
const resetButton = document.getElementById("resetBtn");

// generate array warna
function generateRandomColors(num) {
  const arr = [];
  for (let i = 0; i < num; i++) {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    arr.push(`rgb(${r}, ${g}, ${b})`);
  }
  return arr;
}

// pilih warna target
function pickColor() {
  const random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

// setup squares dan event
function setupSquares() {
  squaresContainer.innerHTML = "";
  colors.forEach(color => {
    const div = document.createElement("div");
    div.classList.add("square");
    div.style.backgroundColor = color;
    div.addEventListener("click", function () {
      if (this.style.backgroundColor === pickedColor) {
        messageDisplay.textContent = "Correct!";
        resetButton.textContent = "Play Again?";
        changeColors(color);
      } else {
        this.style.backgroundColor = "#eee";
        messageDisplay.textContent = "Try Again";
      }
    });
    squaresContainer.appendChild(div);
  });
}

// ubah semua kotak menjadi warna benar
function changeColors(color) {
  const squares = document.querySelectorAll(".square");
  squares.forEach(sq => sq.style.backgroundColor = color);
}

// reset permainan
function reset() {
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor.toUpperCase();
  messageDisplay.textContent = "";
  resetButton.textContent = "New Colors";
  setupSquares();
}

// event reset
resetButton.addEventListener("click", reset);

// mulai
reset();
