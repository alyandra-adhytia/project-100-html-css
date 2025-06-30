const menu = [
  { title: 'Nasi Goreng', category: 'breakfast', price: 20000 },
  { title: 'Ayam Bakar', category: 'lunch',    price: 30000 },
  { title: 'Soto Ayam',  category: 'dinner',   price: 25000 },
  { title: 'Roti Bakar', category: 'breakfast', price: 15000 },
  { title: 'Steak',      category: 'dinner',   price: 50000 },
  { title: 'Burger',     category: 'lunch',    price: 35000 },
];

const menuContainer = document.getElementById('menu');
const filterBtns = document.querySelectorAll('.filter-btns button');

function displayMenu(items) {
  menuContainer.innerHTML = '';
  items.forEach(item => {
    const div = document.createElement('div');
    div.className = 'menu-item';
    div.innerHTML = `<span>${item.title}</span><span>Rp ${item.price.toLocaleString()}</span>`;
    menuContainer.appendChild(div);
  });
}

// Inisialisasi: tampilkan semua menu
displayMenu(menu);

filterBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    const category = e.currentTarget.dataset.filter;
    if (category === 'all') {
      displayMenu(menu);
    } else {
      const filtered = menu.filter(item => item.category === category);
      displayMenu(filtered);
    }
  });
});
