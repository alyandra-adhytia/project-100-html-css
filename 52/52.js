const numSquares = 6;
let colors = [];
let pickedColor;

const squaresContainer = document.getElementById("container");
const colorDisplay = document.getElementById("colorDisplay");
const messageDisplay = document.getElementById("message");
const resetButton = document.getElementById("resetBtn");


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


function pickColor() {
  const random = Math.floor(Math.random() * colors.length);
  return colors[random];
}


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


function changeColors(color) {
  const squares = document.querySelectorAll(".square");
  squares.forEach(sq => sq.style.backgroundColor = color);
}


function reset() {
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor.toUpperCase();
  messageDisplay.textContent = "";
  resetButton.textContent = "New Colors";
  setupSquares();
}


resetButton.addEventListener("click", reset);


reset();
