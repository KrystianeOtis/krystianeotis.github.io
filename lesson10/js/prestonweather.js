// Weather Summary
async function getWeather() {
    const apiURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=953894ad13f71540f4d4ee5b185b63d7&units=imperial'; // url for the weather data api
    fetch(apiURL)
        .then((response) => response.json())
        .then((jsObject) => {
            console.log(jsObject);

            document.getElementById('current-temp').textContent = jsObject.main.temp;

            const weather = jsonObject['weather']; //store the results of the converted response into an array

            let card = document.createElement('section');
            let currently = document.createElement('p');
            let temp_max = document.createElement('p');
            p2.id = 'temp';
            let windChill = document.createElement('p')
            windChill.id = 'windchill';
            let humidity = document.createElement('p');
            let windSpeed = document.createElement('p');
            p4.id = 'windspeed';



            currently.textContent = 'Currently: ' + main.temp;
            temp_max.textContent = 'High: ' + main.temp_max;
            windChill.textContent = 'Wind Chill: ' + ;
            humidity.textContent = 'Humidity: ' + main.humidity;
            windSpeed.textContent = 'Wind Speed: ' + wind.speed;

            // calculate Wind Chill

            const calcWindChill = (temperature, speed) => {
                if (temperature <= 50 && speed > 3) {
                    return Math.round(
                        35.74 + (0.6215 * temperature) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * (temperature *
                            Math.pow(speed, 0.16)))) + "°F"
                } else {
                    return "NA"
                }
            }

            const displayWindChill = () => {
                let temperature = parseInt(document.getElementById("temp").textContent);
                let wind = parseInt(document.getElementById("windSpeed").textContent);
                let result = calcWindChill(temperature, wind);
                document.getElementById("windChill").innerHTML = result;
            }
            displayWindChill();

            card.appendChild(currently);
            card.appendChild(temp_max);
            card.appendChild(windChill);
            card.appendChild(humidity);
            card.appendChild(windSpeed);
            card.appendChild(windChill);

            document.querySelector('div.cards').appendChild(card);

        });
}

window.addEventListener('load', (event) => {
    getWeatherSummary();
})

// window.addEventListener('load', () => {
//     const calcWindChill = (temperature, speed) => {
//         if (temperature <= 50 && speed > 3) {
//             return Math.round(
//                 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * (temperature *
//                     Math.pow(speed, 0.16)))) + "°F"
//         } else {
//             return "NA"
//         }
//     }

//     const displayWindChill = () => {
//         let temperature = parseInt(document.getElementById("temp").textContent);
//         let wind = parseInt(document.getElementById("windSpeed").textContent);
//         let result = calcWindChill(temperature, wind);
//         document.getElementById("windChill").innerHTML = result;
//     }
//     displayWindChill();
// })


// id code 5604473

// 5 day forecast
async function getWeather() {
    const apiURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=953894ad13f71540f4d4ee5b185b63d7&units=imperial'; // url for the weather data api
    fetch(apiURL)
        .then((response) => response.json())
        .then((jsObject) => {
            console.log(jsObject);

            document.getElementById('current-temp').textContent = jsObject.main.temp;

            const weather = jsonObject['weather']; //store the results of the converted response into an array

            let card = document.createElement('section');
            let fiveday = document.createElement('section');
            let h2 = document.createElement('h2');
            let p = document.createElement('p');
            let icon = document.createElement('p');

            h2.textContent = five.name;
            p.textContent = five.main.temp;
            icon.textContent = five.weather[0].icon;

            fiveday.appendChild(h2);
            fiveday.appendChild(p);
            fiveday.appendChild(icon);



            document.querySelector('div.cards').appendChild(card);

        });
}

window.addEventListener('load', (event) => {
    getForecast();
})