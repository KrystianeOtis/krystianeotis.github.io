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

                    for (let x = 0; x < temples[i].summary.length; x++) {
                        let p = document.createElement('p');
                        p.textContent = temples[i].summary;

                        let openingdiv = document.getElementById('templeEvent')

                        openingdiv.appendChild(p);
                    }

                }
            }
        });
}