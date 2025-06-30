function calculateBMI() {
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value) / 100;
  if (isNaN(weight) || isNaN(height) || height <= 0) {
    document.getElementById("result").textContent = "Masukkan nilai yang valid.";
    return;
  }
  const bmi = weight / (height * height);
  let status = "";
  if (bmi < 18.5) {
    status = "Kekurangan berat badan";
  } else if (bmi < 24.9) {
    status = "Berat badan normal";
  } else if (bmi < 29.9) {
    status = "Kelebihan berat badan";
  } else {
    status = "Obesitas";
  }
  document.getElementById("result").textContent = `BMI Anda: ${bmi.toFixed(2)} - ${status}`;
}
