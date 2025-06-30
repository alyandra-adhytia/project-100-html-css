function getRandomHexColor() {
    const hex = Math.floor(Math.random() * 0xffffff).toString(16);
    return `#${hex.padStart(6, '0')}`;
  }
  
  function changeBackgroundColor() {
    const color = getRandomHexColor();
    document.body.style.backgroundColor = color;
    document.getElementById("colorCode").textContent = color;
  }
  