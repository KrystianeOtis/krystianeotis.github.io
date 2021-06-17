async function getProphets() { // async function - The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains.
    const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json'; // url for the prophet api

    fetch(requestURL) //a basic fetch() method and feed it the required argument, the URL and use the .then() method that returns a Promise which response we will work with as an argument to an anonymous function.
        .then(function (response) {
            return response.json();
        })
        .then(function (jsonObject) {
            console.table(jsonObject); // temporary checking for valid response and data parsing

            const prophets = jsonObject['prophets']; //store the results of the converted response into an array
            for (let i = 0; i < prophets.length; i++) { // for loop to iterate through the prophets array
                let card = document.createElement('section'); // turning each card into a seaction
                let h2 = document.createElement('h2'); // giving each section a heading2
                let birthdate = document.createElement('p'); //paragraph elements
                let birthplace = document.createElement('p');
                let image = document.createElement('img'); // adds image elements

                h2.textContent = prophets[i].name + ' ' + prophets[i].lastname; //concats first name and last name
                birthdate.textContent = 'Date of birth: ' + prophets[i].birthdate; // concats the prophets DOB with given paragraph text
                birthplace.textContent = 'Place of birth: ' + prophets[i].birthplace; // concats the birth place with given paragraph text
                image.setAttribute('src', prophets[i].imageurl); //adds the correct image with the matching prophet that is iterated
                image.setAttribute('alt', prophets[i].name + ' ' + prophets[i].lastname + ' - ' + prophets[i].order);

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