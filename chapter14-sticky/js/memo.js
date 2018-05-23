function Memo($containerEle, pos) {
  console.log(pos.x, pos.y);
  this.$memo = $(`
  <div class="memo">
      <nav>
        <span class="ui-left">                 
          <i class="btn-add fas fa-plus"></i>
          <i class="btn-save far fa-save"></i>
        </span>
        <span class="ui-right">
            <i class="btn-show-list fas fa-list"></i>
            <i class="btn-remove fas fa-times"></i>        
        </span>          
      </nav>
      <form action="">
          <textarea name="" id="txt" class="txt"  cols="30" rows="10"></textarea>
      </form>      
      <div class="sidebar">

      </div>    
    </div>`);

  var $thisMemo = this.$memo;

  $containerEle.append(this.$memo);
  this.$memo.css({
    top: pos.y,
    left: pos.x
  });  

  // console.log(this.$memo);


  this.$memo.on('click', 'i', function (e) {
    var btnName = e.currentTarget.className.split(' ')[0];
    // $.trigger( btnName );
    switch (btnName) {
      case 'btn-add':
        trigger( 'add' );
        // $thisMemo.trigger('add');
        break;
      case 'btn-save':
        // $thisMemo.trigger('save');
        trigger( 'save' );
        break;
      case 'btn-show-list':
        // $thisMemo.trigger('showList');
        trigger( 'showList' );
        break;
      case 'btn-remove':
        // $thisMemo.trigger('remove');
        trigger( 'remove' );
        break;
    }
  });
  // this.$memo.
  // this.$memo = $containerEle.find('.memo');

}

Memo.prototype = {
  trigger: function( eType ){
    console.log( eType );
    // thisMemo.trigger( eType );
  }
}