async function getTemples() {
    const requestURL = 'https://krystianeotis.github.io/finalProject/js/temple.json';
    fetch(requestURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (jsonObject) {
            console.table(jsonObject); // temporary checking for valid response and data parsing

            const temples = jsonObject['temples']; //store the results of the converted response into an array
            for (let i = 0; i < temples.length; i++) { // for loop to iterate through the temples array
                if (temples[i].name == 'Cedar City Utah Temple' || temples[i].name == 'Anchorage Alaska Temple' || temples[i].name == 'Winter Quarters Nebraska Temple' || temples[i].name == 'Sacramento California Temple' || temples[i].name == 'Raleigh North Carolina Temple' || temples[i].name == 'Las Vegas Nevada Temple') {
                    let card = document.createElement('section'); // turning each card into a section

                    let text = document.createElement('div'); // create a div
                    let h2 = document.createElement('h2'); // giving each section a heading2
                    let address = document.createElement('p');
                    let milestones = document.createElement('h3');
                    let milestonelist = document.createElement('ul');
                    let services = document.createElement('h3');
                    let serviceslist = document.createElement('ul');
                    let architectural = document.createElement('p');
                    let covidPhase = document.createElement('p');
                    let closures = document.createElement('p');
                    let photoDiv = document.createElement('div')
                    let imageurl = document.createElement('img');

                    let weatherDiv = document.createElement('div')
                    let condition = document.createElement('p');
                    let temp = document.createElement('p');
                    let windChill = document.createElement('p');
                    let humidity = document.createElement('p');
                    let windSpeed = document.createElement('p');

                    h2.textContent = temples[i].name;
                    address.textContent = temples[i].address + temples[i].city + temples[i].state + temples[i].zip;

                    milestones.textContent = "Milestones: "
                    // console.log(temples[i].history.length)
                    for (let x = 0; x < temples[i].history.length; x++) {
                        let historylist = document.createElement('li')
                        historylist.textContent = temples[i].history[x];
                        milestonelist.appendChild(historylist);
                    }

                    services.textContent = "Services: "
                    console.log(temples[i].services.length)
                    for (let s = 0; s < temples[i].services.length; s++) {
                        let serviceli = document.createElement('li')
                        serviceli.textContent = temples[i].services[s];
                        serviceslist.appendChild(serviceli);
                    }

                    covidPhase.textContent = temples[i].covidPhase;
                    closures.textContent = temples[i].closures;
                    architectural.textContent = 'Architectural Features: ' + temples[i].architectural;

                    milestones.setAttribute('id', 'milestones')
                    services.setAttribute('id', 'services')
                    imageurl.setAttribute('src', temples[i]['imageurl']); //adds the correct image to match town from local file
                    imageurl.setAttribute('alt', temples[i].name); // sets the alt to town name

                    condition.setAttribute('id', 'condition' + i)
                    temp.setAttribute('id', 'temp' + i)
                    windChill.setAttribute('id', 'windChill' + i)
                    humidity.setAttribute('id', 'humidity' + i)
                    windSpeed.setAttribute('id', 'windSpeed' + i)

                    card.appendChild(text); //append div to section
                    text.appendChild(h2); // appendChild - appends a node as the last child of a node
                    text.appendChild(address);
                    text.appendChild(milestones);
                    text.appendChild(milestonelist);
                    text.appendChild(services);
                    text.appendChild(serviceslist);
                    // text.appendChild(history);
                    text.appendChild(architectural);
                    text.appendChild(covidPhase);
                    text.appendChild(closures);
                    card.appendChild(photoDiv)
                    photoDiv.appendChild(imageurl);

                    text.appendChild(weatherDiv);
                    weatherDiv.appendChild(condition);
                    weatherDiv.appendChild(temp)
                    weatherDiv.appendChild(windChill)
                    weatherDiv.appendChild(humidity)
                    weatherDiv.appendChild(windSpeed)
                    getWeather(temples[i].zip, i)


                    document.querySelector('div.cards').appendChild(card);
                }
            }
        });
}

function getWeather(zip, num) {

    const CITY_ZIP = zip;
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?zip=`+CITY_ZIP+`&appid=953894ad13f71540f4d4ee5b185b63d7&units=imperial`;

    fetch(apiURL)
        .then((response) => response.json())
        .then((jsObject) => {
            console.log(jsObject);

            document.getElementById('condition' + num).textContent = jsObject.weather[0].main;
            document.getElementById('temp' + num).textContent = Math.round(jsObject.main.temp_max);
            document.getElementById('windChill' + num).textContent = calcWindChill(jsObject.main.temp_max, jsObject.wind.speed);
            document.getElementById('humidity' + num).textContent = Math.round(jsObject.main.humidity);
            document.getElementById('windSpeed' + num).textContent = Math.round(jsObject.wind.speed);

        })
}

const calcWindChill = (temperature, speed) => {

    return Math.round(
        35.74 + (0.6215 * temperature) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * (temperature *
            Math.pow(speed, 0.16)))) + "°F"

}

window.addEventListener('load', (event) => { //registers when page is loaded
    getTemples();
})