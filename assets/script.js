dayjs.extend(window.dayjs_plugin_utc);
dayjs.extend(window.dayjs_plugin_timezone);



var button = document.querySelector("#search-btn");
var inputValue = document.querySelector("#text-box");
var cityname = document.querySelector("#city-name");
var date =document.querySelector("#city-date");
var temp =document.querySelector("#temp");
var wind =document.querySelector("#wind");
var humidity=document.querySelector("#humidity");



const history = [];
const weatherApiRootUrl = 'https://api.openweathermap.org';
const apiKey = '2b46033ff16894eac69e77041ef4caf7';

button.addEventListener("click",function(){
fetch("https://api.openweathermap.org/data/2.5/weather?q="+inputValue.value+"&appid="+apiKey+"&units=imperial")
.then(response => response.json())
.then(data => {
    var nameValue =data['name'];
    var tempValue = data['main']['temp'];
    var windValue = data['wind']['speed'];
    var humidityValue = data['main']['humidity'];
    var dayjs_plugin_timezoneValue= data['sys']['timezone'];
    

    cityname.innerHTML=nameValue;
    temp.innerHTML="Temp: "+tempValue+ "°F";
    wind.innerHTML="Wind: "+windValue;
    humidity.innerHTML="Humidity: "+humidityValue;
    timezone = dayjs_plugin_timezoneValue;
})


})
