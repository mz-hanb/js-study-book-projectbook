// eval? 
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/eval
// js calculator without eval

var cal = document.forms['cal']; // form의 name으로 접근
var result = cal['result'];
var inputs = cal.getElementsByTagName('input');
var btnClear = document.getElementById('btn-clear');
var btnResult = document.getElementById('btn-result');
var isFirst = true;


for( var i=0; i<inputs.length; i++){
  var input =inputs[i];
  input.addEventListener('click', function(e){
    // console.log( e.target.value );

  showValuse( e.target.value); 


  })
}


function showValuse( val ){
  if(isFirst) {
    result.value = '';
    isFirst = false;
  }
if( val == '=' ){
  showResult();
  return;
}
if( val == 'clear'){
  clearCal();
  return;
}

  result.value += val;
}
function showResult(){
  result.value = eval(result.value);
}
function clearCal(){
  console.log('clear');
  result.value = '0';
} 