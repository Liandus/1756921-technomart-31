let popupMap = document.querySelector('.modal-map');
let openMap = document.querySelector('.open-map-button');
let closeMap = popupMap.querySelector('.close-button');

openMap.addEventListener('click', function (evt) {
  evt.preventDefault();
  popupMap.classList.add('modal--show');
});

closeMap.addEventListener('click', function () {
  popupMap.classList.remove('modal--show')
});

window.addEventListener('keydown', function (evt) {
  if (evt.key == "Escape" || evt.key == "Esc") {
    popupMap.classList.remove('modal--show');
  }
});
