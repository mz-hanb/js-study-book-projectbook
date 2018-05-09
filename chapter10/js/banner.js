/*
기능
- 배너 열기/닫기( toggle )
- bgm on/off( toggle )
- add balloon( setInterval )
  Math.random()      
- balloon click event
  
*/

var banner = function(bannerEle, bgm){
  var banner = bannerEle;
  var bannerContents = banner.querySelector('.banner-contents');
  var btnToggleBgm = banner.querySelector('.btn-toggle-bgm');
  var onBanner = true;
  var onBgm = true;  

  startBgm();  
  setInterval( addBalloon, 700 );

  banner.addEventListener( 'click', function(e){    
    var tgName = e.target.className;
    // console.log( tgName );
    switch( e.target.className ){
      case 'btn-close-banner': 
        toggleBannerShow();
        break;
      case 'btn-toggle-bgm': 
        toggleBgm();
        break;
      case 'balloon':         
        gotoDest();        
        break;
    }    
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
      bannerContents.classList.remove('close');           

    }else{
      banner.classList.add('close');
      bannerContents.classList.add('close');   
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

  function addBalloon(){
    // 1~5
    var num = Math.floor( Math.random()*5 + 1 );

    // console.log( num );
    var balloon =  document.createElement('img');
    balloon.classList.add('balloon');    
    balloon.src = './imgs/balloon'+ num + '.png';     
    
    var tgLeft = Math.floor( Math.random()*480 );    
    var falldownTime = Math.floor( Math.random() *10 ) + 7; // 애니메이션 시간
    var rotateTime = Math.floor( Math.random() *10 ) + 7; // 애니메이션 시간
    
    balloon.style.left = tgLeft + 'px';    
    balloon.style.animationDuration = falldownTime + 's, ' + rotateTime + 's';          
    bannerContents.appendChild( balloon );  

    //--- 애니메이션이 끝난 개체는 지운다.
    setTimeout(() => {
      bannerContents.removeChild( balloon );      
    }, falldownTime * 1000 + 100 );
  }  

  // balloon click event
  function gotoDest(){
    window.open('http://www.naver.com', '_blank');    
  }

}(document.getElementById('banner'), document.getElementById('banner-bgm'));