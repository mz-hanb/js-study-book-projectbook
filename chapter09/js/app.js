// cube
var cubePageEle = document.getElementById('pages');
var cubePage = cubePage(document.getElementById('page-wrap') );  

// nav
var navEle = document.getElementById('page-nav');
var nav = nav( navEle );

// swipe event
var swipeE = new Hammer( cubePageEle );

// etc vars
var currentPateNum = -1;
var isFirst = true;
var pageTotal = cubePage.getPageLength();

//=== init
setCurrentPage(1);

// navigation event
navEle.addEventListener('select', function(e, data){ // this is ok
// window.addEventListener('select', function(e, data){ // this is ok, too  
  setCurrentPage(e.detail.selectNum);
});

// resize event
window.addEventListener( 'resize', function(){
  cubePage.resize();
});

// swipe event
swipeE.on('swipeleft swiperight', function(e){
  /// console.log( e.type, onMoving );  
  switch( e.type ){
    case 'swipeleft':     
      setCurrentPage( currentPateNum+1 );      
      break;

    case 'swiperight':             
      setCurrentPage( currentPateNum-1 );      
      break;
  }
});

//=== functions
function setCurrentPage(pageNum){  
  if( !isFirst ) onMoving = true;
  if( isFirst ) isFirst = true;

  if( pageNum < 1 ) pageNum = 1;
  if( pageNum > pageTotal ) pageNum = 4;
  if( currentPateNum === pageNum ) return;  
  
  currentPateNum = pageNum; 
  cubePage.showPage( currentPateNum );
  nav.active( currentPateNum );
}
