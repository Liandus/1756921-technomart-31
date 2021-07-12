let popupLetter = document.querySelector('.modal-letter');
let openLetter = document.querySelector('.open-form-button');
let closeLetter = popupLetter.querySelector('.close-button');
let form = popupLetter.querySelector('.letter-form');
let userName = popupLetter.querySelector('.letter-login');
let userEmail = popupLetter.querySelector('.letter-email');
let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

openLetter.addEventListener('click', function (evt) {
  evt.preventDefault();
  popupLetter.classList.add('modal--show-letter')
  if (storage) {
    userEmail.value = storage;
  }
  userName.focus();
});

closeLetter.addEventListener('click', function () {
  popupLetter.classList.remove('modal--show-letter')
  popupLetter.classList.remove('modal--error');
});

window.addEventListener('keydown', function (evt) {
  if (evt.key == "Escape" || evt.key == "Esc") {
    popupLetter.classList.remove('modal--show-letter');
    popupLetter.classList.remove('modal--error');
  }
});

form.addEventListener("submit", function (evt) {
  if (!userName.value || !userEmail.value) {
    evt.preventDefault();
    popupLetter.classList.remove('modal--error');
    popupLetter.offsetWidth = popupLetter.offsetWidth;
    popupLetter.classList.add('modal--error');
  } else {
    if (isStorageSupport) {
      localStorage.setItem("email", userEmail.value);
    }
  }
});
