function nav(navEle) {
  var navEle = navEle;
  var event = null;
  var navs = navEle.querySelectorAll('button');  

  navEle.addEventListener('click', function (e) {      
      if (e.target.nodeName != 'BUTTON') return;
      // console.log(e.target.nodeName);
      //--- custom Event
      event = new CustomEvent('select', {
          detail: {
            selectNum: e.target.innerHTML
          },
          bubbles: true,
		      cancelable: true
      });
      navEle.dispatchEvent(event);      
  });

  function active(num){  
    var tgBtn = navs[num-1];
    navs.forEach(function(btn){
      if( btn === tgBtn ){
        btn.classList.add('active');
      }else{
        btn.classList.remove('active');
      }
    });
  }
    // console.log( this );
    return {
      active: active
    }  
  }