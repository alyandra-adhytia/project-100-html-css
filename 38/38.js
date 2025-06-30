const button = document.getElementById('flipBtn');

// Array warna
const colors = ['#3498db', '#e74c3c', '#2ecc71', '#9b59b6', '#f1c40f', '#1abc9c'];

function getRandomColor() {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

button.addEventListener('click', () => {
  const color = getRandomColor();
  document.body.style.backgroundColor = color;
  button.textContent = `Warna: ${color}`;
});

