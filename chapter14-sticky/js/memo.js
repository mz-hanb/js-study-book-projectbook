function Memo($containerEle, pos, thisId) {
  // console.log('memo> ', pos.x, pos.y);
  this.$memo = $(`
  <div class="memo" id=${thisId} data-id=${thisId}>
      <nav>
        <p class="btn-wrap-left">          
          <button class="btn btn-add"><i class="fas fa-plus"></i></button><button class="btn btn-save"><i class="far fa-save"></i></button>
        </p>
        <p class="btn-wrap-right">
        <button class="btn btn-show-list"><i class="fas fa-list"></i></button><button class="btn btn-remove"><i class="fas fa-times"></i></button>        
        </p>          
      </nav>
      <form action="">
          <textarea name="" id="txt" class="txt"  cols="30" rows="10"></textarea>
      </form>      
      <ul class="sidebar hide">
      </ul>    
    </div>`); 

  this.id = thisId;  
  this.$container = $containerEle;  
  this.$nav = this.$memo.find('nav');
  this.$txt = this.$memo.find('.txt');
  this.$sidebar = this.$memo.find('.sidebar');
  this.openSidebar = false;  

  this.addMemo(pos);
  this.setEvent();
}

Memo.prototype = {
  setEvent: function () {
    var self = this;   
    
    this.$memo.on('mouseover', 'nav', function(e){
      $(this).parent().draggable();
    });

    this.$nav.on('click', '.btn', function (e) {
      var tgBtnName = e.currentTarget.className.split(' ')[1];                      
      self.applyBtnEvent( tgBtnName );  
    });

  },
  applyBtnEvent: function(btnName){
    // console.log( btnName );
    switch (btnName) {
      case 'btn-add':
        this.trigger('add');
        break;
      case 'btn-save':            
      this.saveContents();
        break;
      case 'btn-show-list':            
        this.toggleSidebar();
        this.loadContentsList();
        break;
      case 'btn-remove':
        // this.$memo.remove();      
        this.trigger('remove-memo');
        break;
    }
  },
  startDrag: function(){
    var self = this;
    this.$nav.on('mousemove', function(e){
      // console.log( e );
      self.$memo.css({
        left: e.clientX-125,
        top: e.clientY-20
      });
    });
  },
  stopDrag: function(){
    this.$nav.off('mousemove');    
  },
  addMemo: function (pos) {        
    // console.log( 'memoId> ' + this.id);
    this.$container.append(this.$memo);
    this.$memo.css({left: pos.x, top: pos.y});
  },
  trigger: function (eType) {
    // this.$memo.trigger(eType, {id: this.id});
    this.$memo.trigger({
      type: eType, 
      id: this.id
    });
  },
  saveContents: function(){
    if( this.$txt.val().length === 0 ){
      alert( '내용을 입력해 주세요.');
    }else{
      var fileName = prompt('저장할 파일이름을 입력하세요');    
      if( fileName ){
        localStorage.setItem( fileName, this.$txt.val() );   
      } else {
        alert( '파일이름을 입력해주세요.');
      }
    }    
  }, 
  loadContentsList: function(){
    var files = localStorage.length;
    var self = this;    
    var stFiles = '';
    var currentFileName = '';
    for( var i = 0; i < files; i++ ){
      currentFileName = localStorage.key(i);      
      if( currentFileName.substr(0, 1) != '_'){        
        stFiles += '<li class="file">'+ localStorage.key(i) + '<a class="icon-trash"><i class="fas fa-trash-alt"></i></a></li>';
      }     
    }
    this.$sidebar.html(stFiles); 
    
  }, 
  openSidebar: function(){
    this.openSidebar = true;
    this.$sidebar.addClass('show');
  }, 
  closeSidebar: function(){
    this.openSidebar = false;
    this.$sidebar.removeClass('show');
  },
  toggleSidebar: function(){
    this.openSidebar = !this.openSidebar;
    if( this.openSidebar ){
      this.$sidebar.addClass('show');
    }else{
      this.$sidebar.removeClass('show');
    }
  }, 
  removeFile: function(st, idx){
    localStorage.removeItem(st);
    $('.file').eq(idx).remove();
  }
}