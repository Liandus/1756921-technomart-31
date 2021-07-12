let slides = document.querySelectorAll('.offers-slide');
let changes = document.querySelectorAll('.control-button');
let dotButtons = document.querySelectorAll('.slide-control-button');

for (let i = 0; i < changes.length; i++) {
  change = changes[i];
  change.addEventListener('click', function () {
    slides[1].classList.toggle('curent-offers-slide');
    slides[0].classList.toggle('curent-offers-slide');
  })
};

for (let j = 0; j < dotButtons.length; j++) {
  dotButton = dotButtons[j];
  dotButton.addEventListener('click', function () {
    console.log('sadad');
    slides[0].classList.toggle('curent-offers-slide');
    slides[1].classList.toggle('curent-offers-slide');
  })
};
