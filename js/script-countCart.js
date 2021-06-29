let addCarts=document.querySelectorAll('.catalog-button-buy');
let carts=document.querySelector('.cart');
let counterC=document.querySelector('.cart-number')
let count=0;
for (let i = 0; i< addCarts.length; i++) {
  addCart= addCarts[i];
addCart.addEventListener('click', function () {
  count++;
  counterC.textContent=count;
  if (count>0)
  {carts.classList.add('full-cart')};

})};
