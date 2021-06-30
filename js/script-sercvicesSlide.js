
window.onload=function () {
tabContent=document.getElementsByClassName('slide-wraper');
tab=document.getElementsByClassName('services-button');
hideTabsContent(1)
}

document.getElementById('tabs').onclick= function (event) {
  let target=event.target;
  if (target.className=='services-button') {
     for (let i=0; i<tab.length; i++) {
         if (target == tab[i]) {
             showTabsContent(i);
             break;
         }
     }
  }
}

function hideTabsContent(a) {
  for (let i=a; i<tabContent.length; i++) {
      tabContent[i].classList.remove('show');
      tab[i].classList.remove('services-button-active');
  }
}
function showTabsContent(b){
  if (!tabContent[b].classList.contains('show')) {
      hideTabsContent(0);
      tab[b].classList.add('services-button-active');
      tabContent[b].classList.add('show');
  }
}
