function hitung() {
    let t = document.getElementById("teks").value.toLowerCase()
    let vokal = t.match(/[aiueo]/g)
    document.getElementById("hasil").innerText = (vokal || []).length
  }
  