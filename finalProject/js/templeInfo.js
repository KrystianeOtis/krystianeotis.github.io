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
                    let city = document.createElement('p');
                    let state = document.createElement('p');
                    let zip = document.createElement('p');
                    let history = document.createElement('p'); //paragraph elements
                    let services = document.createElement('p');
                    let architectural = document.createElement('p');
                    let covidPhase = document.createElement('p');
                    let closures = document.createElement('p');
                    let photoDiv = document.createElement('div')
                    let imageurl = document.createElement('img'); // adds image elements

                    h2.textContent = temples[i].name;
                    address.textContent = temples[i].address;
                    city.textContent = temples[i].city;
                    state.textContent = temples[i].state;
                    zip.textContent = temples[i].zip;
                    history.textContent = 'Milestones: ' + temples[i].history;
                    services.textContent = 'Services: ' + temples[i].services;
                    covidPhase.textContent = temples[i].covidPhase;
                    closures.textContent = temples[i].closures;
                    architectural.textContent = 'Architectural Features: ' + temples[i].architectural;

                    imageurl.setAttribute('src', temples[i]['imageurl']); //adds the correct image to match town from local file
                    imageurl.setAttribute('alt', temples[i].name); // sets the alt to town name

                    card.appendChild(text); //append div to section
                    text.appendChild(h2); // appendChild - appends a node as the last child of a node
                    text.appendChild(address);
                    text.appendChild(city);
                    text.appendChild(state);
                    text.appendChild(zip);
                    text.appendChild(history);
                    text.appendChild(services);
                    text.appendChild(architectural);
                    text.appendChild(covidPhase);
                    text.appendChild(closures);
                    card.appendChild(photoDiv)
                    photoDiv.appendChild(imageurl);

                    document.querySelector('div.cards').appendChild(card);
                }
            }
        });
}

function cardnav() {

}

window.addEventListener('load', (event) => { //registers when page is loaded
    getTemples();
})