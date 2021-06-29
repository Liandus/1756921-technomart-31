let goods=document.querySelectorAll('.goods-item');
let popupGoodsInCart=document.querySelector('.modal-goods');
let closeGoodsInCart=popupGoodsInCart.querySelector('.close-button');
let continueBuy=popupGoodsInCart.querySelector('.next');

for (let i = 0; i < goods.length; i++) {
  good=goods[i];

  let openGoodsInCart=good.querySelector('.catalog-button-buy');

openGoodsInCart.addEventListener('click', function(){
    popupGoodsInCart.classList.add('modal--show')
});

closeGoodsInCart.addEventListener('click', function(){
    popupGoodsInCart.classList.remove('modal--show')
});

continueBuy.addEventListener('click', function(){
    popupGoodsInCart.classList.remove('modal--show')
});

window.addEventListener('keydown', function(evt){
    if (evt.key=="Escape" || evt.key=="Esc"){popupGoodsInCart.classList.remove('modal--show');}
})};
