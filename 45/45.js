document.addEventListener('DOMContentLoaded', () => {
  const display = document.getElementById('display');
  let currentInput = '';
  let operator = '';
  let previousInput = '';

  // Menambahkan gaya CSS secara dinamis
  const style = document.createElement('style');
  style.innerHTML = `
    body {
      font-family: Arial, sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
      background: #f4f4f4;
    }

    .calculator {
      background: #fff;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      padding: 20px;
      width: 260px;
    }

    #display {
      width: 100%;
      height: 40px;
      text-align: right;
      font-size: 1.5em;
      margin-bottom: 20px;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }

    .buttons {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 10px;
    }

    button {
      padding: 15px;
      font-size: 1.2em;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      background: #f0f0f0;
      transition: background 0.3s;
    }

    button:hover {
      background: #ddd;
    }

    button.operator {
      background: #f9a825;
      color: white;
    }

    button.clear {
      background: #d32f2f;
      color: white;
    }
  `;
  document.head.appendChild(style);

  // Menambahkan event listener untuk tombol
  document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
      const value = button.getAttribute('data-value');

      if (value === 'C') {
        currentInput = '';
        previousInput = '';
        operator = '';
        display.value = '';
      } else if (value === '=') {
        if (currentInput && previousInput && operator) {
          currentInput = evaluate(previousInput, operator, currentInput);
          display.value = currentInput;
          previousInput = '';
          operator = '';
        }
      } else if (['+', '-', '*', '/'].includes(value)) {
        if (currentInput) {
          if (previousInput) {
            currentInput = evaluate(previousInput, operator, currentInput);
            display.value = currentInput;
          }
          operator = value;
          previousInput = currentInput;
          currentInput = '';
        }
      } else {
        currentInput += value;
        display.value = currentInput;
      }
    });
  });

  function evaluate(a, operator, b) {
    a = parseFloat(a);
    b = parseFloat(b);
    switch (operator) {
      case '+': return a + b;
      case '-': return a - b;
      case '*': return a * b;
      case '/': return a / b;
      default: return b;
    }
  }
});
