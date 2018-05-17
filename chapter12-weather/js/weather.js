// elements
var $icon = $('.icon img');
var $weathers = $('.weathers');

// values
var tgUrl = 'http://api.openweathermap.org/data/2.5/weather?';

// var query = 'lat=37.523290&lon=127.036219';
var query = getWeatherQuery('id', '1835848'); // seoul
// var query = getWeatherQuery('coord', '37.523290,127.036219');
var key = '&APPID=8d8ab1717d1d334ec2115059ce15fefd';

// init

getWeather();

function getWeather() {
  $.ajax({
    url: tgUrl + query + key + '&units=metric',
    // dataType: 'json',
    success: function (data) {
      console.dir(data);
      showWeather(data);
    },
    error: function () {
      // console.log('e');
    }
  });
}

// functions
function getWeatherQuery(type, stValue) {
  var query = '';
  switch (type) {
    case 'name':
      query = 'q=' + stValue;
      break;
    case 'id':
      query = 'id=' + stValue;
      break;
    case 'coord':
      var coords = stValue.split(',');
      query = 'lat=' + coords[0] + '&lon=' + coords[1];
      break;
  }
  return query;
}

function showWeather(data) {
  // name, 
  var contry = data.sys.country;
  var cityId = data.id;
  var cityName = data.name;
  var temp = {
    current: data.main.teamp,
    min: data.main.temp_min,
    max: data.main.temp_max
  };
  var weatherList = data.weather;
  console.log( weatherList.length );
  
  for (var i = 0; i < weatherList.length; i++) {    
    var weatherData = weatherList[i];    
    var iconUrl = 'http://openweathermap.org/img/w/' + weatherList[i].icon + '.png';    
    var str = `
    <li>
        <span class="desc">${weatherList[i].description}</span>
        <span class="icon"><img src=${iconUrl} alt=""></span>          
      </li>    
    `;      
    $weathers.append(str);
  }



  var iconUrl = 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png';
  $icon.attr('src', iconUrl); // weather img       
  console.dir(data);
  console.log(iconUrl);
}