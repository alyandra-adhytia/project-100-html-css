const amountEl = document.getElementById('amount');
const fromEl = document.getElementById('from');
const toEl = document.getElementById('to');
const btn = document.getElementById('convertBtn');
const resultEl = document.getElementById('result');

async function convertCurrency() {
  const amount = parseFloat(amountEl.value);
  const from = fromEl.value;
  const to = toEl.value;
  if (isNaN(amount) || amount <= 0) {
    resultEl.textContent = 'Masukkan jumlah yang valid!';
    return;
  }

  resultEl.textContent = 'Memuat kurs...';

  try {
    const res = await fetch(`https://api.exchangerate.host/convert?from=${from}&to=${to}&amount=${amount}`);
    const data = await res.json();
    if (data.result) {
      resultEl.textContent = `${amount} ${from} = ${data.result.toFixed(2)} ${to}`;
    } else {
      resultEl.textContent = 'Gagal mendapatkan kurs.';
    }
  } catch (e) {
    resultEl.textContent = 'Terjadi kesalahan saat memuat.';
  }
}

btn.addEventListener('click', convertCurrency);
