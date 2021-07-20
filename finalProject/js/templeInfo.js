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


                    let h2 = document.getElementById('templeName'); // giving each section a heading2

                    let covidPhase = document.getElementById('covidPhase'); //paragraph elements
                    let architectural = document.getElementById('p');
                    let summary = document.getElementById('p');
                    let photo = document.getElementById('img'); // adds image elements

                    for (let x = 0; x < temples[i].history.length; x++) {
                        let p = document.createElement('p');
                        p.textContent = temples[i].history[x];

                        let openingdiv = document.getElementById('history')

                        openingdiv.appendChild(p);
                    }
                     for (let x = 0; x < temples[i].services.length; x++) {
                         let p = document.createElement('p');
                         p.textContent = temples[i].services[x];

                         let openingdiv = document.getElementById('services')

                         openingdiv.appendChild(p);
                     }

                    h2.textContent = temples[i].name;
                    history.textContent = temples[i].history;
                    covidPhase.textContent = temples[i].covidPhase;
                    architectural.textContent = temples[i].architectural;
                    summary.textContent = temples[i].summary;

                    photo.setAttribute('src', temples[i]['imageurl']); //adds the correct image to match town from local file
                    photo.setAttribute('alt', temples[i].name); // sets the alt to town name


                    text.appendChild(h2); // appendChild - appends a node as the last child of a node
                    text.appendChild(history);
                    text.appendChild(covidPhase);
                    text.appendChild(architectural);
                    text.appendChild(summary);

                    card.appendChild(photoDiv)
                    photoDiv.appendChild(photo);

                    // document.querySelector('div.cards').appendChild(card);
                }
            }
        });
}

function cardnav() {

}

window.addEventListener('load', (event) => { //registers when page is loaded
    getTemples();
})