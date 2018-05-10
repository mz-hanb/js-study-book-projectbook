function banner(bannerEle, bgmUrl) {
  var banner = bannerEle;
  var bgm = banner.querySelector('#banner-bgm'); // bgm  
  var btnToggleBgm = null;
  var bannerHeight = parseInt(window.getComputedStyle(banner).height); // ie9~ 
  var onBgm = false;
  var posList = [];
  var balloons = null;

  init();     

  function init(){    

    // add balloons
    initBalloons();

    // balloon animation    
    animateBalloons();    

    // load bgm
    btnToggleBgm = banner.querySelector('.btn-toggle-bgm'); // btn toggle 
    loadBgm(bgmUrl, false);      
    
    btnToggleBgm.addEventListener( 'click', function(e){      
      toggleBgm(!onBgm);
    });

    // balloon click event
    banner.addEventListener('click', function(e){      
      if(e.target.nodeName === 'IMG'){
        window.open('https://www.naver.com', '_blank');
      }
    });
  }

  function initBalloons() {    
    for (var i = 0; i < 2; i++) {
      for (var k = 1; k <= 5; k++) {
        banner.innerHTML += `<img class="balloon" src="./imgs/balloon${k}.png">`;        
      }
    }    
    balloons = banner.querySelectorAll('.balloon');
    setInitPosList();
  }


  function setInitPosList() {
    // set range> Math.random()*( max-min ) + min;    
    var balloon = null;
    for (var i = 0; i < balloons.length; i++) {
      posList.push({});
      setInitPos(i);
    }
  }

  function animateBalloons() {
    requestAnimationFrame(animateBalloons);
    var balloon = null;
    var pos = null;

    for (var i = 0; i < balloons.length; i++) {
      balloon = balloons[i];
      pos = posList[i];

      // 화면밖이면~ 자리 다시 셋팅
      if ( parseInt( pos.y ) > 200 ) {               
        setInitPos(i);

      // 화면 안이면 애니메이션 계속
      } else {        
        pos.y += 1 + pos.speed;
        pos.angle += pos.speed;
        // balloon.style.left = pos.x + 'px';
        balloon.style.top = pos.y + 'px';
        balloon.style.transform = `rotate(${pos.angle}deg)`;
      }
    }
  }

  function setInitPos(idx) {    
    var x = Math.floor(Math.random() * (600-50) - 50 );    
    var y = Math.floor(Math.random() * (-400-(-120)) - 120 );
    var angle = Math.floor(Math.random() * (360 - 0) + 0);
    var speed = Math.random() * (2 - 0) + 0;
    // es6: 비구조화 할당    
    var pos = {
      x,
      y,
      angle,
      speed
    };

    posList[idx] = pos;
    var balloon = balloons[idx];
    balloon.style.top = pos.y + 'px';    
    balloon.style.left = pos.x + 'px';        
  }

  // bgm 
  function toggleBgm(bool) {
    onBgm = bool;   

    if (bool) {
      bgm.play();      
    } else {
      bgm.pause();      
    }    
    btnToggleBgm.style.background = 'url( ./imgs/sound_' + bool + '.png)';       
  }

  function loadBgm(url, autoPlay) {
    bgm.src = url;
    bgm.load();
    toggleBgm(autoPlay);
  }

  return {
    // public func
    toggleClose: function () {
      banner.classList.toggle('close');
    }
  };
}