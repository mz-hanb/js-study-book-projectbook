// console.log( 'main');
//--- gallery
var uiGallery = document.getElementById('gallery');

//--- modal
var modal = document.getElementById('modal-gallery');
var btnCloseModal = modal.getElementsByClassName('btn-close-modal')[0];
var _btnCloseModal = modal.getElementsByClassName('btn-close-modal');
var modalImg = document.querySelectorAll('#modal-gallery .img img')[0];

var imgData = [
  {title: 'title1', desc: 'desc1'},
  {title: 'title2', desc: 'desc2'},
  {title: 'title3', desc: 'desc3'}
]

// console.log(btnCloseModal);
// console.log(_btnCloseModal);
btnCloseModal.addEventListener('click', closeModal);

// ui gallery
uiGallery.addEventListener('click', function(e){  
  showImg( ( e.target).getAttribute('src') );
})

// indigator
document.getElementById('indigator').addEventListener('click', function(e){    
  changeImgUrl( 'images/img0' + (e.target.textContent) + '.jpg')
})

function showImg(tgUrl){  
  showModal(tgUrl);      
}
function showModal(url){
  changeImgUrl(url);
  modal.classList.remove('hide');
}
function closeModal(){
  modal.classList.add('hide');
}
function changeImgUrl(url){
  modalImg.setAttribute('src', url);
}
