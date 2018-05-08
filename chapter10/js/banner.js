/*
기능
- 배너닫기
- bgm on/off( toggle )
- random baloon ( click link url )
      https://www.w3schools.com/js/js_random.asp

- css animation
*/

var banner = function(bannerEle, bgm){
  var banner = bannerEle;
  var btnToggleBgm = banner.querySelector('.btn-toggle-bgm');
  var onBanner = true;
  var onBgm = true;

  // startBgm();  
  setInterval( addBallon, 700);

  banner.addEventListener( 'click', function(e){    
    var tgName = e.target.className;

    switch( e.target.className ){
      case 'btn-close-banner': 
        toggleBannerShow();
        break;
      case 'btn-toggle-bgm': 
        toggleBannerShow();
        break;
      case 'balloon': 
        // console.log( 'balloon');
        gotoDest();        
        break;

    }
    // console.log( tgName );
    // if( tgName === 'btn-close-banner' ){
    //   toggleBannerShow();

    // }else if(  tgName === 'btn-toggle-bgm' ){
    //   toggleBgm();
    // }
  });
  


  // bgm> init
  function startBgm(){
    bgm.src = './assets/bgm.mp3';
    bgm.load();
    bgm.play();    
  }

  // banner> toggle: close, open
  function toggleBannerShow(){
    onBanner = !onBanner;
    if( onBanner ){
      banner.classList.remove('close');     

    }else{
      banner.classList.add('close');
    }
  }

  // toggle bgm
  function toggleBgm(){
    var imgUrl = '';
    onBgm = !onBgm;
    if( onBgm ){
      bgm.play();
      imgUrl = 'on';     
      
    }else{
      bgm.pause();
      imgUrl = 'off';      
    } 
    btnToggleBgm.style.backgroundImage  = 'url("./imgs/sound_'+ imgUrl  +'.png")';   
  }

  function addBallon(){
    // 1~5
    var num = Math.floor( Math.random()*5 + 1 );
    
    // console.log( num );
    var balloon =  document.createElement('img');
    balloon.classList.add('balloon');
    balloon.src = './imgs/balloon'+ num + '.png';     
    var tgTop = -120;
    var tgLeft = Math.floor( Math.random()*480 );    

    balloon.style.top = tgTop + 'px';
    balloon.style.left = tgLeft + 'px';
    balloon.style.animationName = 'falldown';
    balloon.style.animationDuration = Math.floor( Math.random() *10 ) + 7 + 's';          

    banner.appendChild( balloon );  
  }  

  function gotoDest(){
    window.open('http://www.naver.com', '_blank');    
  }



}(document.getElementById('banner'), document.getElementById('banner-bgm'));