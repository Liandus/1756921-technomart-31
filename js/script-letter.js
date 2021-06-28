let popupLetter=document.querySelector('.modal-letter');
let openLetter=document.querySelector('.open-form-button');
let closeLetter=popupLetter.querySelector('.close-button');

openLetter.addEventListener('click', function(){
    popupLetter.classList.add('modal--show')
});

closeLetter.addEventListener('click', function(){
    popupLetter.classList.remove('modal--show')
});

window.addEventListener('keydown', function(evt){
    if (evt.key=="Escape" || evt.key=="Esc"){popupLetter.classList.remove('modal--show');}
});
