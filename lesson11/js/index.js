async function getTowns() { // async function - The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains.
    const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json'; // url for the town data api

    fetch(requestURL) //a basic fetch() method and feed it the required argument, the URL and use the .then() method that returns a Promise which response we will work with as an argument to an anonymous function.
        .then(function (response) {
            return response.json();
        })
        .then(function (jsonObject) {
            console.table(jsonObject); // temporary checking for valid response and data parsing

            const towns = jsonObject['towns']; //store the results of the converted response into an array
            for (let i = 0; i < towns.length; i++) { // for loop to iterate through the towns array
                if (towns[i].name == 'Preston' || towns[i].name == 'Fish Haven' || towns[i].name == 'Soda Springs') {
                    let card = document.createElement('section'); // turning each card into a section
                    let text = document.createElement('div'); // create a div
                    let h2 = document.createElement('h2'); // giving each section a heading2
                    let motto = document.createElement('h3'); // giving each section a heading3
                    let yearFounded = document.createElement('p'); //paragraph elements
                    let currentPopulation = document.createElement('p');
                    let averageRainfall = document.createElement('p');
                    let photoDiv = document.createElement('div')
                    let photo = document.createElement('img'); // adds image elements

                    h2.textContent = towns[i].name;
                    motto.textContent = towns[i].motto;
                    yearFounded.textContent = 'Year Founded: ' + towns[i].yearFounded;
                    currentPopulation.textContent = 'Population: ' + towns[i].currentPopulation;
                    averageRainfall.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall;

                    photo.setAttribute('src', 'images/' + towns[i]['photo']); //adds the correct image to match town from local file
                    photo.setAttribute('alt', towns[i].name); // sets the alt to town name

                    card.appendChild(text); //append div to section
                    text.appendChild(h2); // appendChild - appends a node as the last child of a node
                    text.appendChild(motto);
                    text.appendChild(yearFounded);
                    text.appendChild(currentPopulation);
                    text.appendChild(averageRainfall);

                    card.appendChild(photoDiv)
                    photoDiv.appendChild(photo);

                    document.querySelector('div.cards').appendChild(card);
                }
            }
        });
}

window.addEventListener('load', (event) => { //registers when page is loaded
    getTowns();
})