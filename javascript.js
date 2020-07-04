$(document).ready(function(){

    function renderCurrent(searchCity) {
        console.log("inside renderForecast");
        
        var APIKey = "ca39045c73add718cdee665b1e7622de";

        var currentURL = "http://api.openweathermap.org/data/2.5/weather?q=" + searchCity + "&appid=" + APIKey;

        var forecastURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + searchCity + "&appid=" + APIKey;

        $.ajax({
            url: currentURL,
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


    function renderForecast(searchCity) {
        var APIKey = "ca39045c73add718cdee665b1e7622de";

        var forecastURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + searchCity + "&appid=" + APIKey;

        $.ajax({
            url: forecastURL,
            method: "GET"
        })
        
        .then(function(response) {
            console.log(response);
            var forecastCard = $("<card class='forecast'>");
            var ufDate = response.list[0].dt
            console.log(ufDate);
            var date = ufDate;
        })
    }

    $("#searchBtn").on("click", function(event) {
        event.preventDefault();
        var searchCity = $("#citySearch").val().trim();
        // renderCurrent(searchCity);
        renderForecast(searchCity);
    });

});