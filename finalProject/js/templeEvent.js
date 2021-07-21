async function getTempleEvent(temple) {
    const requestURL = 'https://krystianeotis.github.io/finalProject/js/temple.json';
    fetch(requestURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (jsonObject) {
            console.table(jsonObject);

            const temples = jsonObject['temples'];

            for (let i = 0; i < temples.length; i++) {
                if (temples[i].name == temple) {

                    let imgurl = document
                    let p = document.createElement('p');
                    let address = document.createElement('p');
                    p.textContent = temples[i].summary;
                    address.textContent = temples[i].address + ". " + temples[i].city + ", " + temples[i].state;



                    let openingdiv = document.getElementById('templeEvent')
                    openingdiv.appendChild(address);
                    openingdiv.appendChild(p);



                }
            }
        })
};