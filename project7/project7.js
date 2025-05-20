// Angka acak antara 1 dan 100
const angkaBenar = Math.floor(Math.random() * 100) + 1;
let percobaan = 0;
const batasPercobaan = 5;

function tebakAngka() {
  const tebakan = document.getElementById('tebakan').value;
  const hasil = document.getElementById('hasil');
  const percobaanElem = document.getElementById('percobaan');

  if (tebakan === "" || isNaN(tebakan)) {
    hasil.textContent = "Masukkan angka yang valid!";
    return;
  }

  percobaan++;
  percobaanElem.textContent = `Percobaan ke: ${percobaan}`;

  if (percobaan > batasPercobaan) {
    hasil.textContent = "😞 Maaf, kamu kehabisan percobaan! nu bener nyaeta" + angkaBenar;
  } else if (tebakan == angkaBenar) {
    hasil.textContent = "🎉 Selamat! mantap pinter!";
  } else if (tebakan < angkaBenar) {
    hasil.textContent = "Tebakanmu terlalu rendah. seperti hidu!";
  } else if (tebakan > angkaBenar) {
    hasil.textContent = "Tebakanmu terlalu tinggi. Coba lagi!";
  }
}
