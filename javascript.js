
    // var APIKey = "ca39045c73add718cdee665b1e7622de";

    // var mainCity = "austin";

    // var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + mainCity + "&appid=" + APIKey;

    // $.ajax({
    //     url: queryURL,
    //     method: "GET"
    // }).then(function(response) {
    //     console.log(response);
    //     $(".city").html("<h1>" + response.name + "</h1>");
    //     $(".wind").text("Wind Speed: " + response.wind.speed + "MPH");
    //     $(".humidity").text("Humidity: " + response.main.humidity + "%");

    //     var tempF = (response.main.temp - 273.15) * 1.80 + 32;
    //     $(".temp").text("Temperature: " + tempF.toFixed(2) + " F");

    // });

$(document).ready(function(){

function renderForecast(searchCity) {
    console.log("inside renderForecast");
    
    var APIKey = "ca39045c73add718cdee665b1e7622de";

    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + searchCity + "&appid=" + APIKey;

    $.ajax({
        url: queryURL,
        method: "GET"
    })
    
    
    
    .then(function(response) {
        console.log(response);
        $(".city").html("<h1>" + response.name + "</h1>");
        $(".wind").text("Wind Speed: " + response.wind.speed + "MPH");
        $(".humidity").text("Humidity: " + response.main.humidity + "%");

        var tempF = (response.main.temp - 273.15) * 1.80 + 32;
        $(".temp").text("Temperature: " + tempF.toFixed(2) + " F");


       
    });
}

$("#searchBtn").on("click", function(event) {
    event.preventDefault();
    var searchCity = $("#citySearch").val().trim();
    renderForecast(searchCity);
});

});