function konversiKeFahrenheit() {
  const celsius = document.getElementById('celsius').value;
  const fahrenheit = (celsius * 9/5) + 32;

  document.getElementById('hasil').textContent = `${celsius}°C = ${fahrenheit.toFixed(2)}°F`;
}

function konversiKeCelsius() {
  const fahrenheit = document.getElementById('fahrenheit').value;
  const celsius = (fahrenheit - 32) * 5/9;

  document.getElementById('hasil').textContent = `${fahrenheit}°F = ${celsius.toFixed(2)}°C`;
}
