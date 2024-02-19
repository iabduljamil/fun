$(".search button").on("click", function () {
    var place = $("#placeName").val();
    weatherUpdates(place);
    $(".weather").css("display", "block");
});



$(".search #placeName").keypress(function (e) {
    var city = $("#placeName").val();
    key = e.which
    if (key == 13) {
        weatherUpdates(city);
        console.log(city);
        $(".weather").css("display", "block");
    }

});

const api = "";
const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

var weatherStatus = $(".weather-update");

async function weatherUpdates(place) {
    const response = await fetch(url + place + '&appid=' + api);
    var data = await response.json();
    console.log(data);

    $(".townName").html(data.name);
    $(".temperature").text(Math.round(data.main.temp) + "°C");
    $(".humidity").text(data.main.humidity + "%");
    $(".wind").text(Math.round(data.wind.speed) + "km/h");



    if (data.weather[0].main == "Rain") {
        weatherStatus.attr("src", "images/rain.png");
    }
    else if (data.weather[0].main == "Clouds") {
        weatherStatus.attr("src", "images/clouds.png");
    }
    else if (data.weather[0].main == "clear.png") {
        weatherStatus.attr("src", "images/clear.png");
    }
    else if (data.weather[0].main == "Snow") {
        weatherStatus.attr("src", "snow.png");
    }
}
