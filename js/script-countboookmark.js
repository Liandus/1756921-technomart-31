let addBookmarks = document.querySelectorAll('.catalog-button-bookmark');
let bookmarks = document.querySelector('.bookmark');
let counterB = document.querySelector('.bookmark-number');
let counter = 0;

for (let i = 0; i < addBookmarks.length; i++) {
  addBookmark = addBookmarks[i];
  addBookmark.addEventListener('click', function (evt) {
    evt.preventDefault();
    counter++;
    counterB.textContent = counter;
    if (counter > 0) {
      bookmarks.classList.add('full-bookmark')
    };
  })
};
