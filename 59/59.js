const cityInput = document.getElementById('cityInput');
const getBtn = document.getElementById('getBtn');
const resultDiv = document.getElementById('result');
const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY'; // Ganti dengan API key Anda

async function getWeather() {
  const city = cityInput.value.trim();
  if (!city) {
    resultDiv.textContent = 'Masukkan nama kota yang valid!';
    return;
  }
  resultDiv.textContent = 'Memuat data...';
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    );
    const data = await res.json();
    if (data.cod === 200) {
      const { main, weather, wind, name } = data;
      resultDiv.innerHTML = `
        <h3>${name}</h3>
        <p>${weather[0].main} – ${weather[0].description}</p>
        <p>🌡️ Suhu: ${main.temp}°C (Minimal: ${main.temp_min}°C, Maks: ${main.temp_max}°C)</p>
        <p>💧 Kelembapan: ${main.humidity}%</p>
        <p>💨 Angin: ${wind.speed} m/s</p>
      `;
    } else {
      resultDiv.textContent = 'Kota tidak ditemukan. Coba lagi.';
    }
  } catch (e) {
    resultDiv.textContent = 'Terjadi kesalahan saat memuat cuaca.';
  }
}

getBtn.addEventListener('click', getWeather);
