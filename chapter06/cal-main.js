// eval? 
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/eval
// js calculator without eval

var cal = document.forms['cal']; // form의 name으로 접근
var result = cal['result'];
var inputs = cal.getElementsByTagName('input');
var btnClear = document.getElementById('btn-clear');
var btnResult = document.getElementById('btn-result');
var isFirst = true;

init();

function init(){
  for( var i=0; i<inputs.length; i++){
    var input = inputs[i];
    input.addEventListener('click', function(e){
      showValues(e.target.value);      
    });
  }
}
function showValues(val){
  if( val === '=' ) {
    showResult();
    return;
  }  
  if( val === 'clear'){
    clearValues();
    return;    
  }
  if( isFirst ){
    result.value = '';
    isFirst = false;
  } 
  result.value += val;
}
function clearValues(){
  result.value = 0;
}
function showResult(){
  result.value = eval( result.value );
  isFirst = true;
}


