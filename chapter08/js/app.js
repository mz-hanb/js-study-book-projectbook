/*

>> mdn
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date/prototype

>> msn 
https://docs.microsoft.com/ko-kr/scripting/javascript/calculating-dates-and-times-javascript
날짜 및 시간 계산
https://msdn.microsoft.com/ko-kr/library/ee532932(v=vs.94).aspx

>> w3shools
https://www.w3schools.com/jsref/jsref_obj_date.asp

>> lib: moment
https://momentjs.com/


> 년도: getFullYear() 
> 달: getMonth() 
  - 0 ~ 11

> 한달에 몇일? getDate()
  - 1 ~ 31

> 무슨 요일? getDay()
  - 0: 일, 1: 월, 2: 화, 3: 수, 4: 목, 5: 금, 6: 토
*/





var tds = document.querySelectorAll('tbody> tr > td');

var dateData = getDateData('4/1/2018');
var dateNum = 1;
// console.log( dateData );

for( var i = 0; i < tds.length; i++ ){
  tds[i].innerHTML = '';        
  if( i >= dateData.startDay ){        
    // console.log( i, dateData.startDay, dateData.days );    
    tds[i].innerHTML = dateNum++;        
    if( dateNum > dateData.days ) break;
  }
}

// https://www.w3resource.com/javascript-exercises/javascript-date-exercise-3.php
function getDaysInMonth(month, year){
  return new Date(year, month, 0).getDate();
}

function getDateData(tgDateString){
  var d = new Date(tgDateString);    
  var list = tgDateString.split('/');
  var month = list[0]; 
  var year = list[list.length-1];
  return {year: d.getFullYear(), month: d.getMonth()+1, startDay: d.getDay(), days: new Date(year, month, 0).getDate() }
}








