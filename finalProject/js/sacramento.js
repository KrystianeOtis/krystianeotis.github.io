// Weather Summary for Sacramento CA
async function getWeather() {
    const CITY_ZIP = "89110";
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?zip=${CITY_ZIP}&appid=$953894ad13f71540f4d4ee5b185b63d7&units=imperial`;

    // url for the weather data api
    fetch(apiURL)
        .then((response) => response.json())
        .then((jsObject) => {
            console.log(jsObject);

            document.getElementById('condition').textContent = jsObject.weather[0].main;
            document.getElementById('temp').textContent = Math.round(jsObject.main.temp_max);
            document.getElementById('windChill').textContent = calcWindChill(jsObject.main.temp_max, jsObject.wind.speed);
            document.getElementById('humidity').textContent = Math.round(jsObject.main.humidity);
            document.getElementById('windSpeed').textContent = Math.round(jsObject.wind.speed);



        })
}

const calcWindChill = (temperature, speed) => {

    return Math.round(
        35.74 + (0.6215 * temperature) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * (temperature *
            Math.pow(speed, 0.16)))) + "°F"

}