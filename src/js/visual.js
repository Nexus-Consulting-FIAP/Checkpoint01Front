//==========HEADER SECTION==========//

//Hide|Show Nav ======
var isUp = true;
var isOver;
function onMouseOverNav(isOver_) {  
    isOver = isOver_;
    if (isOver) document.getElementById("nav").style.opacity = "1";
    else if (!isOver && !isUp) document.getElementById("nav").style.opacity = "0";
}
window.onscroll = function() {
    currentScrollPos = window.pageYOffset;
    if (50 > currentScrollPos) {
      document.getElementById("nav").style.opacity = "1";
      isUp = true;
    } else if (50 <= currentScrollPos && !isOver) {
      document.getElementById("nav").style.opacity = "0";
      isUp = false;
    }
}
//Background image
document.querySelectorAll('.product').forEach(product => {
    const img = product.querySelector('img');
    const src = img.getAttribute('src');
    product.style.backgroundImage = `url(${src})`;
    product.style.backgroundSize = 'cover';
    product.style.backgroundPosition = 'center';
    img.style.display = 'none'; // esconde o img
});

//Filtros
const nameInput = document.getElementById('filter-name');
const typeSelect = document.getElementById('filter-type');
const safraSelect = document.getElementById('filter-safra');
const priceRange = document.getElementById('filter-price');
const products = document.querySelectorAll('.product');
let priceValue = document.getElementById('price-value');

function filterProducts() {
  const name = nameInput.value.toLowerCase();
  const type = typeSelect.value;
  const safra = safraSelect.value;
  const maxPrice = parseFloat(priceRange.value);

  products.forEach(product => {
    const productName = product.dataset.nome.toLowerCase();
    const productType = product.dataset.tipo;
    const productSafra = product.dataset.safra;
    const productPrice = parseFloat(product.dataset.preco);

    const matchName = productName.includes(name);
    const matchType = type === "" || productType === type;
    const matchSafra = safra === "" || productSafra === safra;
    const matchPrice = productPrice <= maxPrice;

    if (matchName && matchType && matchSafra && matchPrice) {
      product.style.display = "flex";
    } else {
      product.style.display = "none";
    }
  });
}

// Event listeners
nameInput.addEventListener('input', filterProducts);
typeSelect.addEventListener('change', filterProducts);
safraSelect.addEventListener('change', filterProducts);
priceRange.addEventListener('input', () => {
  priceValue.textContent = `R$${priceRange.value}`;
  filterProducts();
});