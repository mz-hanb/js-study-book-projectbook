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

/*
// get days in a month 
// https://www.w3resource.com/javascript-exercises/javascript-date-exercise-3.php

function getDaysInMonth(month, year){
  return new Date(year, month, 0).getDate();
}
*/

init();
var tds = document.querySelectorAll("tbody> tr > td");
var uiUserYear = document.getElementById('year');
var uiUserMonth = document.getElementById('month');
var btnPrevMonth = document.getElementById('btn-prev');
var btnNextMonth = document.getElementById('btn-next');
var userYear = uiUserYear.innerHTML;
var userMonth = uiUserMonth.innerHTML;

//=== button events
btnPrevMonth.addEventListener('click', function(){  
  setCalendar( userYear, --userMonth );
});
btnNextMonth.addEventListener('click', function(){
  setCalendar( userYear, ++userMonth );
});

//=== call first calendar view
setCalendar( userYear, userMonth );

//=== 동적으로 td 생성
function init(){  
  var tbody = document.querySelector('table tbody');  
  var stTd = '';
  // tr은 자동생성되네... ==)>
  for( i = 0; i < 5; i++){          
  stTd = '';
    for( k = 0; k<7; k++){
      stTd += '<td>&nbsp;</td>';
    }
    tbody.innerHTML+= stTd;        
  }
}


//=== year, month 자료를 넣고 관련 정보 object 를 얻는다. 
function getDateData(year, month) {  
  var d = new Date(month + "/1/" + year);
  return {
    year: d.getFullYear(),
    month: d.getMonth() + 1,
    startDay: d.getDay(),
    days: new Date(year, month, 0).getDate()
  };
}

// year, month 넣고 달력 셋팅~
function setCalendar(year, month) {  
  if( month === 0 ){
    month = 12;
    year -= 1;    
  } 
  if( month === 13 ){
    month = 1;    
    year += 1;    
  }   
  // setUserDate(year, month); 

  var dateData = getDateData(year, month);    
  var dateNum = 1;

  for (var i = 0; i < tds.length; i++) {    
    if( i >= dateData.startDay && dateNum <= dateData.days ) { // 이때부터 기록 시작하고 날수를 넘기면 적지 않게    
      tds[i].innerHTML = dateNum++;      
    }else{
      tds[i].innerHTML = "&nbsp;";
    }
  }
}

// 변경값 global 변수와 ui 에 set
function setUserDate(year, month){
  userYear =  year;
  userMonth = month;
  uiUserYear.innerHTML = year;
  uiUserMonth.innerHTML = month;
}

/*
var d = new Date("4/1/2018"); // 의도한 년 월 일로 셋팅가능   ( 4월을 원하고 4월을 입력함 )
var d2 = new Date(2018, 3, 1); // 원하는 월에 -1 을 해야한다. ( 4월을 원하므로 1을 뺀 3을 입력함 )
// console.log(d.getDate(), d2.getDate());
*/

