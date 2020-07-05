$(document).ready(function(){

    function renderCurrent(searchCity) {

        var APIKey = "ca39045c73add718cdee665b1e7622de";

        var currentURL = "http://api.openweathermap.org/data/2.5/weather?q=" + searchCity + "&appid=" + APIKey;

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

            // I'm struggling to make my 5 day forecast appear.
            // The Call 16 day forecast requires a paid subscription,
            // and the 5 day forecast gives data for every 3 hours (which I'm using here).
            // This is why I am using "i + 8" to advance my loop 24 hours and loop 5 times (days) between i = 0 through 32 (i < 33).
            // ** BUT the issue seems to be it's endlessly looping--the progress wheel continues to spin and nothing happens.

            for (i = 0; i < 33; i + 8) {
                var a = $("<card class='forecastCard'>");
                $(a).append("<ol class='forecastItems'>");
                var unformattedDate = response.list[i].dt;
                var fiveDayTemp = (response.list[i].main.temp - 273.15) * 1.80 + 32;
                var fiveDayHumidity = response.list[i].main.humidity;
                $(".forecastItems").append("<li>" + unformattedDate + "</li>");
                $(".forecastItems").append("<li>Temp: " + fiveDayTemp + " F</li>");
                $(".forecastItems").append("<li>Humidity: " + fiveDayHumidity + "</li>");
                $("#fiveDayForecast").append(a);
            }
  
            
        })
    }

    $("#searchBtn").on("click", function(event) {
        event.preventDefault();
        var searchCity = $("#citySearch").val().trim();
        renderCurrent(searchCity);
        renderForecast(searchCity);
    });

});