// Weather Summary
async function getWeather() {

    const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=953894ad13f71540f4d4ee5b185b63d7&units=imperial'; // url for the weather data api
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

    const apiURL2 = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=953894ad13f71540f4d4ee5b185b63d7'; // url for the weather data api
    fetch(apiURL2)
        .then((response) => response.json())
        .then((jsObject) => {
            console.log(jsObject);

            let forecastData = jsObject.list

            let filteredList = forecastData.filter(day => day.dt_txt.includes("18:00:00"))
            let days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];


            for (let i = 0; i < filteredList.length; i++) {
                console.log(i);

                console.log(filteredList[i]);

                let imgspan = document.getElementById('weatherImg' + (i + 1))
                let weatherimg = document.createElement('img');
                weatherimg.setAttribute('src', 'https://openweathermap.org/img/wn/' + filteredList[i].weather[0].icon + '@2x.png');
                imgspan.appendChild(weatherimg)

                document.getElementById('dayTemp' + (i + 1)).textContent = Math.round(filteredList[i].main.temp) + "°F";


                let day = new Date(filteredList[i].dt);
                let dayofweek = day.getDay();
                document.getElementById('dayName' + (i + 1)).textContent = dayofweek;
                console.log(filteredList.dt);
                console.log(day);
                console.log(dayofweek);
            }


        });


}

const calcWindChill = (temperature, speed) => {

    return Math.round(
        35.74 + (0.6215 * temperature) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * (temperature *
            Math.pow(speed, 0.16)))) + "°F"

}

