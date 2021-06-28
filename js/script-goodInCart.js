let openGoodsInCart=document.querySelector('.catalog-button-buy');
let popupGoodsInCart=document.querySelector('.modal-goods');
let closeGoodsInCart=popupGoodsInCart.querySelector('.close-button');
let continueBuy=popupGoodsInCart.querySelector('.next');

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
});
