// elements
var $area = $('.area');
// time
var $day = $('.time .day');
var $date = $('.time .date');
var $currentT = $('.time .current-time');

var $weatherImg = $('.weather img');
var $weatherDesc = $('.weather .desc');

var $temp = $('.temp .main');
var $tempMinMax = $('.temp .min-max');

var $preloader = $('.loading');

// values
var tgUrl = 'http://api.openweathermap.org/data/2.5/weather?';
var query = getWeatherQuery('id', '1835848'); // seoul
var key = '&APPID=8d8ab1717d1d334ec2115059ce15fefd';

// inits
getLocation();

function getLocation() {
  // console.log( navigator.geolocation ); 현재 지역정보
  if (navigator.geolocation) {
    navigator
      .geolocation
      .getCurrentPosition(function (pos) {
        query = getWeatherQuery('coord', pos.coords.latitude + ',' + pos.coords.longitude);
        getWeather();
      });

    // default
  } else {
    query = getWeatherQuery('id', '1835848'); // seoul
    getWeather();
  }
}

function getWeather() {
  $preloader.fadeIn();
  // console.log( query );
  $.ajax({
    url: tgUrl + query + key + '&units=metric',
    success: function (data) {
      // console.log( new Date( data.sys.sunrise*1000 ).toString() );
      $preloader.fadeOut();
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
  console.dir(data);
  //--- area
  $area.text(data.name + ', ' + data.sys.country);

  //--- date
  var times = new Date()
    .toString()
    .split(' ');
  $day.text(times[0] + 'Day');
  $date.text(', ' + times[1] + ' ' + times[2]);
  $currentT.text(', ' + times[4]);

  //--- weather description, image icon
  var weather = data.weather[0];
  $weatherImg.attr('src', './imgs/' + getIconUrl(weather.id) + '.svg');
  $weatherDesc.text(weather.description);
  // console.log( weather.id ); temperature
  var temps = data.main;
  $temp.text(temps.temp + ' ℃');
  $tempMinMax.text( '( ' + temps.temp_min + ' ℃ ~ ' + temps.temp_max + ' ℃ )');

}

function getIconUrl(weatherId) {
  var fileName = '';
  if (weatherId === 800) {
    return 'day';    
  }else if(weatherId === 701 ){
    return 'cloudy';
  }
  var tgId = (weatherId + '').substr(0, 1);
  switch (tgId) {
    case '2':
      fileName = 'thunder';
      break;
    case '3':
      fileName = 'rainy-4';
      break;
    case '5':
      fileName = 'rainy-2';
      break;
    case '6':
      fileName = 'snowy-6';
      break;
    case '8':
      fileName = 'cloudy';
      break;
  }
  return fileName;
}