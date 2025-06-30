const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const gridSize = 20;
const cols = canvas.width / gridSize;
const rows = canvas.height / gridSize;

let snake = [{ x: 10, y: 10 }];
let direction = { x: 1, y: 0 };
let food = getRandomFood();
let score = 0;

function getRandomFood() {
  return {
    x: Math.floor(Math.random() * cols),
    y: Math.floor(Math.random() * rows)
  };
}

function gameLoop() {
  // Hitung posisi kepala baru
  const head = { x: snake[0].x + direction.x, y: snake[0].y + direction.y };

  // Cek tabrakan dinding atau tubuh sendiri
  if (
    head.x < 0 || head.x >= cols ||
    head.y < 0 || head.y >= rows ||
    snake.some(seg => seg.x === head.x && seg.y === head.y)
  ) {
    return alert(`Game Over! Skormu: ${score}`), window.location.reload();
  }

  snake.unshift(head);

  // Cek makan makanan
  if (head.x === food.x && head.y === food.y) {
    score++;
    food = getRandomFood();
  } else {
    snake.pop(); // Hapus ekor
  }

  // Gambar game
  ctx.fillStyle = '#fff';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'red';
  ctx.fillRect(food.x * gridSize, food.y * gridSize, gridSize, gridSize);
  ctx.fillStyle = 'green';
  snake.forEach(seg => {
    ctx.fillRect(seg.x * gridSize, seg.y * gridSize, gridSize - 1, gridSize - 1);
  });
}

window.addEventListener('keydown', e => {
  const key = e.key;
  if (key === 'ArrowUp' && direction.y === 0) direction = { x: 0, y: -1 };
  if (key === 'ArrowDown' && direction.y === 0) direction = { x: 0, y: 1 };
  if (key === 'ArrowLeft' && direction.x === 0) direction = { x: -1, y: 0 };
  if (key === 'ArrowRight' && direction.x === 0) direction = { x: 1, y: 0 };
});

// Mulai game loop tiap 100ms
setInterval(gameLoop, 100);
