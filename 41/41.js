const tempInput = document.getElementById('tempInput');
const unitSelect = document.getElementById('unitSelect');
const convertBtn = document.getElementById('convertBtn');
const resultEl = document.getElementById('result');

function convertTemp(value, type) {
  return type === 'CtoF'
    ? (value * 9/5) + 32
    : (value - 32) * 5/9;
}

convertBtn.addEventListener('click', () => {
  const value = parseFloat(tempInput.value);
  const type = unitSelect.value;
  if (isNaN(value)) {
    resultEl.textContent = 'Hasil: Masukkan angka yang valid!';
    return;
  }
  const converted = convertTemp(value, type);
  const unit = type === 'CtoF' ? '°F' : '°C';
  resultEl.textContent = `Hasil: ${converted.toFixed(2)} ${unit}`;
});
