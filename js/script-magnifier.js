let searchInput=document.querySelector('.search');
let searchPicture=document.querySelector('.search-form svg path');
let searchPic=document.querySelector('.search-form .search-picture')

searchInput.onfocus=function() {
  searchPic.style.opacity=1;
searchPicture.setAttribute('fill','#ee3643')

  }


searchInput.onblur=function() {
  searchPic.style.opacity=0.3;
  searchPicture.setAttribute('fill','#fff')

}
