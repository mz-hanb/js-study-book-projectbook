function cubePage(sceneEle){
  var scene = sceneEle;
  var pageCube = scene.querySelector('.pages');
  var pages = scene.querySelectorAll('.page');
  var tgW = 0 + 'px';
  var tgH = 0 + 'px';
  var tgMov = 0 + 'px';

  resize();

  function showPage( pageNum ){  
    var tgDeg = (pageNum-1) * -90;    
    var cubeMovZ = '-' + tgMov;
    var tgPerspective = ( parseInt(tgW) ) + 'px';        
    // console.log( 'page> ' + pageNum , cubeMovZ, tgDeg );        
    pageCube.style.transform = `translateZ(${cubeMovZ}) rotateY(${tgDeg}deg)`;    
  }

  function resize(){
    tgW = window.innerWidth + 'px';
    tgH = ( window.innerHeight - 80 ) + 'px';    
    tgMov = Math.round( ( parseInt( tgW ) / 2 ) ) + 'px';    

    var page = null;
    var tgDeg = 0;
    for( var i=0; i<pages.length; i++){
      page = pages[i];
      page.style.width = tgW;
      page.style.height = tgH;
      tgDeg = i*90;
      if(i === 2) tgDeg *= -1;
      page.style.transform = `rotateY(${tgDeg}deg) translateZ(${tgMov})`;     
    }   
    pageCube.style.width = tgW;
    pageCube.style.height = tgH;
    pageCube.style.transform = `translateZ(${'-'+tgMov}) rotate(0deg) `; 
  }

  return{
    showPage: showPage, 
    resize: resize, 
    getPageLength: function(){
      return pages.length;
    }
  }
}