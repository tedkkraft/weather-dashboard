var APIKey = "ca39045c73add718cdee665b1e7622de";

var queryURL = "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=" + APIKey;

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
  });