async function getWeather() { // async function - The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains.
    const requestURL = 'https://api.openweathermap.org/data/2.5/weather?zip=83263&appid=953894ad13f71540f4d4ee5b185b63d7&units=imperial'; // url for the prophet api

    fetch(requestURL) //a basic fetch() method and feed it the required argument, the URL and use the .then() method that returns a Promise which response we will work with as an argument to an anonymous function.
        .then(function (response) {
            return response.json();
        })
        .then(function (jsonObject) {
            console.table(jsonObject); // temporary checking for valid response and data parsing

            const weather = jsonObject['weather']; //store the results of the converted response into an array
            for (let i = 0; i < prophets.length; i++) { // for loop to iterate through the prophets array
                let card = document.createElement('section'); // turning each card into a seaction
                let h2 = document.createElement('h2'); // giving each section a heading2
                let birthdate = document.createElement('p'); //paragraph elements
                let birthplace = document.createElement('p');
                let image = document.createElement('img'); // adds image elements

                h2.textContent = prophets[i].name + ' ' + prophets[i].lastname; //concats first name and last name
                birthdate.textContent = 'Currently: ' + prophets[i].birthdate; // concats the prophets DOB with given paragraph text
                birthplace.textContent = 'High: ' + prophets[i].birthplace; // concats the birth place with given paragraph text
                birthdate.textContent = 'Wind Chill: ' + prophets[i].birthdate; // concats the prophets DOB with given paragraph text
                birthdate.textContent = 'Humidity: ' + prophets[i].birthdate; // concats the prophets DOB with given paragraph text
                birthdate.textContent = 'Wind Speed: ' + prophets[i].birthdate; // concats the prophets DOB with given paragraph text
                image.setAttribute('src', prophets[i].imageurl); //adds the correct image with the matching prophet that is iterated
                image.setAttribute('alt', prophets[i].name + ' ' + prophets[i].lastname + ' - ' + prophets[i].order); // sets the alt attribute to be the prophets first and last name

                card.appendChild(h2); // appendChild - appends a node as the last child of a node
                card.appendChild(birthdate);
                card.appendChild(birthplace);
                card.appendChild(image);

                document.querySelector('div.cards').appendChild(card);
            }
        });
}

window.addEventListener('load', (event) => { //registers when page is loaded
    getProphets();
})