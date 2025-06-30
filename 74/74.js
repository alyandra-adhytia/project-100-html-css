const rates = {
  USD: { USD: 1, EUR: 0.91, IDR: 15000 },
  EUR: { USD: 1.1, EUR: 1, IDR: 16500 },
  IDR: { USD: 0.000067, EUR: 0.000061, IDR: 1 }
};

function convertCurrency() {
  const amount = parseFloat(document.getElementById("amount").value);
  const fromCurrency = document.getElementById("fromCurrency").value;
  const toCurrency = document.getElementById("toCurrency").value;

  if (isNaN(amount) || amount <= 0) {
    document.getElementById("result").textContent = "Masukkan jumlah yang valid.";
    return;
  }

  const conversionRate = rates[fromCurrency][toCurrency];
  const convertedAmount = amount * conversionRate;
  document.getElementById("result").textContent = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
}
