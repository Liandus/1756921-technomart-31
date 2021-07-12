let addCarts = document.querySelectorAll('.catalog-button-buy');
let carts = document.querySelector('.cart');
let counterC = document.querySelector('.cart-number')
let count = counterC.textContent;
count = Number(count);

for (let i = 0; i < addCarts.length; i++) {
  addCart = addCarts[i];
  addCart.addEventListener('click', function (evt) {
    evt.preventDefault();
    count++;
    counterC.textContent = count;
    if (count > 0) {
      carts.classList.add('full-cart')
    };
  })
};
