async function getWeather() {
    const requestURL = 'https://api.openweathermap.org/data/2.5/weather?zip=83440,&appid=953894ad13f71540f4d4ee5b185b63d7'; // url for the weather data api

    fetch(requestURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (jsonObject) {
            console.table(jsonObject); // temporary checking for valid response and data parsing

            const weather = jsonObject['weather']; //store the results of the converted response into an array
            console.log(weather);

            for(let i=0; i< weather.length; i++){
                let container = document.createElement('section');
            }



        });
}

window.addEventListener('load', (event) => { //registers when page is loaded
    getWeather();
})