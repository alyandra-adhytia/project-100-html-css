async function getWeather() {
  const city = document.getElementById("city").value;
  if (!city) {
    document.getElementById("weather").textContent = "Masukkan nama kota.";
    return;
  }

  const apiKey = "API_KEY_ANDA"; // Ganti dengan API key Anda
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=id`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.cod === "404") {
      document.getElementById("weather").textContent = "Kota tidak ditemukan.";
    } else {
      const { main, weather } = data;
      document.getElementById("weather").textContent = `Cuaca di ${city}: ${weather[0].description}, Suhu: ${main.temp}°C`;
    }
  } catch (error) {
    document.getElementById("weather").textContent = "Terjadi kesalahan. Coba lagi nanti.";
  }
}
