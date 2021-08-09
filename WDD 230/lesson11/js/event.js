async function getEvent(city) {
    const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
    fetch(requestURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (jsonObject) {
            console.table(jsonObject);

            const towns = jsonObject['towns'];

            for (let i = 0; i < towns.length; i++) {
                if (towns[i].name == city) {

                    for (let x = 0; x < towns[i].events.length; x++) {
                        let p = document.createElement('p');
                        p.textContent = towns[i].events[x];

                        let openingdiv = document.getElementById('events')

                        openingdiv.appendChild(p);
                    }

                }
            }
        });
}