const songs = [
  { title: "Song One",   artist: "Artist A", src: "songs/song1.mp3", cover: "img/cover1.jpg" },
  { title: "Song Two",   artist: "Artist B", src: "songs/song2.mp3", cover: "img/cover2.jpg" },
  { title: "Song Three", artist: "Artist C", src: "songs/song3.mp3", cover: "img/cover3.jpg" }
];

const coverEl = document.getElementById('cover');
const titleEl = document.getElementById('title');
const artistEl = document.getElementById('artist');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const seek = document.getElementById('seek');
const volume = document.getElementById('volume');

let currentTrack = 0;
const audio = new Audio();
audio.src = songs[currentTrack].src;

function loadTrack(index) {
  const track = songs[index];
  audio.src = track.src;
  coverEl.src = track.cover;
  titleEl.textContent = track.title;
  artistEl.textContent = track.artist;
  seek.value = 0;
}

function playPauseTrack() {
  if (audio.paused) {
    audio.play();
    playBtn.textContent = '⏸️';
  } else {
    audio.pause();
    playBtn.textContent = '▶️';
  }
}

function prevTrack() {
  currentTrack = (currentTrack - 1 + songs.length) % songs.length;
  loadTrack(currentTrack);
  audio.play();
  playBtn.textContent = '⏸️';
}

function nextTrack() {
  currentTrack = (currentTrack + 1) % songs.length;
  loadTrack(currentTrack);
  audio.play();
  playBtn.textContent = '⏸️';
}

playBtn.addEventListener('click', playPauseTrack);
prevBtn.addEventListener('click', prevTrack);
nextBtn.addEventListener('click', nextTrack);

audio.addEventListener('timeupdate', () => {
  const progress = (audio.currentTime / audio.duration) * 100;
  seek.value = progress || 0;
});

seek.addEventListener('input', () => {
  audio.currentTime = (seek.value / 100) * audio.duration;
});

volume.addEventListener('input', () => {
  audio.volume = volume.value;
});

audio.addEventListener('ended', nextTrack);

// Inisialisasi
loadTrack(currentTrack);
