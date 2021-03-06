

var bannerWrap = document.getElementById('banner-wrap');
var btnToggleBannerClose = document.getElementById('btn-toggle-banner-close');
var doOpen = true;

var banner = banner(document.getElementById('banner'), './assets/bgm.mp3');

btnToggleBannerClose.addEventListener('click', function(){  
  doOpen = !doOpen;
  
  banner.toggleClose();
  bannerWrap.classList.toggle('close');
  btnToggleBannerClose.classList.toggle('close');

  if( doOpen ){
    btnToggleBannerClose.innerHTML = '배너 닫기';
  }else{
    btnToggleBannerClose.innerHTML = '배너 열기';
  }
})
