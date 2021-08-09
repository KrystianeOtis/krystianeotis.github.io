async function getPerson() {
    const url = "https://www.ahfx.com/person.php";

    const response = await fetch(url);
    if (response.status == 200) {
        return response.json();
    } else {
        throw new Error("No person found " + response.status);
    }
}

function newPerson() {
    const person_id = document.querySelector("#people");

    const p = getPerson()
        .then(function (per) {
            console.log(per);
            my_person = per['person'];
            let card = document.createElement("section");

            let ul = document.createElement("ul");





        card.innerHTML = `<h2>${my_person.personal.last_name}</h2>

        <h2>${my_person.name}</h2>`;





            card.appendChild(ul);
            person_id.appendChild(card);
        });
}
window.addEventListener('load', (event) => {
    newPerson();
})