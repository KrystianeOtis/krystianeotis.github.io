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

                    let openingdiv = document.getElementById('templeEvent')
                    let photoDiv = document.createElement('div')
                    let imageurl = document.createElement('img');
                    let name = document.createElement('h1');
                    let summary = document.createElement('p');
                    let address = document.createElement('p');
                    let phone = document.createElement('p');
                    name.textContent = temples[i].name;
                    phone.textContent = temples[i].phone;
                    summary.textContent = temples[i].summary;
                    address.textContent = temples[i].address + ". " + temples[i].city + ", " + temples[i].state;

                    imageurl.setAttribute('src', temples[i]['imageurl']);
                    imageurl.setAttribute('alt', temples[i].name); // sets the alt to temple name
                    imageurl.setAttribute('id', 'templeImg');
                    phone.setAttribute('id', 'templePhone');
                    address.setAttribute('id', 'templeAddress');
                    summary.setAttribute('id', 'templeSummary');


                    openingdiv.appendChild(photoDiv)
                    photoDiv.appendChild(imageurl);
                    openingdiv.appendChild(name);
                    openingdiv.appendChild(address);
                    openingdiv.appendChild(phone);
                    openingdiv.appendChild(summary);



                }
            }
        })
};