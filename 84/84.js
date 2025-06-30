function preview(e) {
    let file = e.target.files[0]
    let url = URL.createObjectURL(file)
    document.getElementById("img").src = url
  }
  