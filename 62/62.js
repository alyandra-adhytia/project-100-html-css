const images = [
  'https://picsum.photos/seed/1/800/400',
  'https://picsum.photos/seed/2/800/400',
  'https://picsum.photos/seed/3/800/400',
  'https://picsum.photos/seed/4/800/400',
  'https://picsum.photos/seed/5/800/400'
];

const slides = document.getElementById('slides');
let currentIndex = 0;

// Buat elemen img untuk setiap gambar
images.forEach(src => {
  const img = document.createElement('img');
  img.src = src;
  slides.appendChild(img);
});

// Fungsi update posisi slides
function updateCarousel() {
  const width = slides.clientWidth;
  slides.style.transform = `translateX(-${currentIndex * width}px)`;
}

// Tombol navigasi
document.getElementById('next').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateCarousel();
});
document.getElementById('prev').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateCarousel();
});

// Auto-play setiap 3 detik
setInterval(() => {
  currentIndex = (currentIndex + 1) % images.length;
  updateCarousel();
}, 3000);

// Jalankan sekali untuk inisialisasi
window.addEventListener('resize', updateCarousel);
updateCarousel();
