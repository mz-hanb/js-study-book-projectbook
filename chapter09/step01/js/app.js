// console.log( 'app' )

var currentNum = 0;
var currentPage = null;
var pages = document.querySelectorAll('.pages .page');

// console.log( pages );
initNav();
setCurrent(0);


//=== setting nav event
function initNav(){
  var nav = document.getElementById('page-nav');
  nav.addEventListener('click', function(e){
    // console.log( e.target.nodeName );
    // console.log( e.target.innerHTML );
    if( e.target.nodeName === "UL") return;
    var tgId = e.target.innerHTML * 1 -1;
    // console.log( tgId );
    setCurrent(tgId);
  })
}

//=== setting current view
function setCurrent(idx){
  currentNum = idx;
  currentPage = pages[idx];
  
  for( var i = 0; i < pages.length; i++ ){
    var page = pages[i];
    if( page === currentPage ){
      page.classList.remove('hide');      
    }else if( !page.classList.contains('hide') ){
      page.classList.add('hide');      
    }    
  }
}





