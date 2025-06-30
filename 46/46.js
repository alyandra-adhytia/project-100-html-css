const palette = document.getElementById('palette');
const btn = document.getElementById('generateBtn');

// buat satu warna acak HEX
function generateRandomColor() {
  const hex = Math.floor(Math.random() * 0xFFFFFF)
    .toString(16)
    .padStart(6, '0');
  return `#${hex}`;
}

// buat palet baru
function generatePalette(size = 5) {
  palette.innerHTML = '';
  for (let i = 0; i < size; i++) {
    const color = generateRandomColor();
    const card = document.createElement('div');
    card.className = 'color-card';
    card.style.background = color;

    const code = document.createElement('span');
    code.className = 'color-code';
    code.textContent = color;

    card.appendChild(code);
    card.addEventListener('click', () => {
      navigator.clipboard.writeText(color)
        .then(() => alert(`${color} disalin!`))
        .catch(() => alert('Gagal menyalin!'));
    });

    palette.appendChild(card);
  }
}

// event tombol
btn.addEventListener('click', () => generatePalette(6));

// generate palet awal
generatePalette();
