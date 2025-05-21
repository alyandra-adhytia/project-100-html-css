document.addEventListener('DOMContentLoaded', function () {
    const nameInput = document.getElementById('nameInput');
    const greetButton = document.getElementById('greetButton');
    const result = document.getElementById('result');

    greetButton.addEventListener('click', function () {
        const name = nameInput.value.trim();
        if (name) {
            result.textContent = `Halo, ${name}! Selamat datang di dunia JavaScript!`;
        } else {
            result.textContent = 'Silakan masukkan nama terlebih dahulu.';
        }
    });
});
