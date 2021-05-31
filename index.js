$(document).ready(function() {
var cityList = JSON.parse(localStorage.getItem("cityList"))||[] 
console.log(cityList)

  function displayHistory() {
    $(".cityList").html("");
    for (var i = 0; i< cityList.length; i++ ){
      var li = $("<li>").text(cityList[i])
      $(".cityList").append(li)
    } 
  }
  displayHistory()

    $("#search").on("click", function(){
        var cityName = $('#search-me').val()
        console.log('it worked', cityName)
        if (cityList.indexOf(cityName)===-1){
          cityList.push(cityName)
          localStorage.setItem("cityList", JSON.stringify(cityList))
        }
        getMainWeather(cityName)
      });



      function getMainWeather(city) {
        var apiUrl = "http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=bd0834857d11c7c26292f5e1e8657635&units=imperial"
        $.ajax({url: apiUrl, success: function(result) {
            console.log(result)
            $("#city").text("City: " + result.name)
            $("#temp").text("Temp: " + result.main.temp)
            $("#humd").text("Humidity: " + result.main.humidity)
            $("#ws").text("Wind Speed: " + result.wind.speed)
            $("#uv").text("UV Index: " + result.name)
            fiveDay(result.coord.lat, result.coord.lon)
        }})
      
      }  


      function fiveDay(lat,lon) {
          console.log('Time tod o 5day!!')

          var fiveDayUrl= "https://api.openweathermap.org/data/2.5/onecall?lat=" +lat+"&lon="+lon+"&exclude=current,minutely,hourly,alrets&appid=bd0834857d11c7c26292f5e1e8657635&units=imperial"
          $.ajax({url: fiveDayUrl, success: function(result) {
            console.log(result)
           
        }})
        }

}) 


