# cities 

$(document).ready(function () {

var history =[]
history[0] = prompt("New member name?");
localStorage.setItem("history", JSON.stringify(history));

  $("#search").on("click", function () {
    console.log('it worked', $('#search-me').val())
    sortArray()
    getMainWeather($('#search-me').val())
    
  });



  function getMainWeather(city) {
    var apiUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=bd0834857d11c7c26292f5e1e8657635&units=imperial"
    $.ajax({
      url: apiUrl, success: function (result) {
        console.log(result)
        sortArray(result)
        $("#city").text("City: " + result.name)
        $("#temp").text("Temp: " + result.main.temp)
        $("#humd").text("Humidity: " + result.main.humidity)
        $("#ws").text("Wind Speed: " + result.wind.speed)
        $("#uv").text("UV Index: " + result.name)
        fiveDay(result.coord.lat, result.coord.lon)

      }
    })

  }
  function sortArray(city) {
var history = JSON.parse(localStorage.getItem("names"))
const {name} = result
const{temp,humidity}=result.main
const wind=result.wind.speed

history.push(`Name:${name} Temp:${temp} Humd:${humidity} WindSpeed: ${wind}`)
localStorage.setItem("history", JSON.stringify(history));



}





  function fiveDay(lat, lon) {
    console.log('Time tod o 5day!!')

    var fiveDayUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=current,minutely,hourly,alrets&appid=bd0834857d11c7c26292f5e1e8657635&units=imperial"
    $.ajax({
      url: fiveDayUrl, success: function (result) {
        console.log(result)

      }
    })
  }







})