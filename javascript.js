var APIKey = "ca39045c73add718cdee665b1e7622de";

var cityName = "austin"

var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + APIKey;

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {
    var temp = resopnse.main.temp
});

var cities = [];

function renderForecast() {
    $("#searchHistory").empty();

   // for (var i = 0; i < cities.length; i++) {
      //  var a = 

    //}
    
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + APIKey;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);
    });
}

$("#searchBtn").on("click", function(event) {
    event.preventDefault();
    var citySearchVal = $("#citySearch").val().trim();
    cities.push(citySearchVal);
    console.log(cities);
    renderForecast();
});