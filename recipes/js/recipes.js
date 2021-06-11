async function getRecipe(){
    const url = "https://www.themealdb.com/api/json/v1/1/random.php";

    const response = await fetch(url);
    if(response.status==200){
        return response.json();
    }
    else {
        throw new Error("No meals found "+response.status);
    }
}
function newRecipe(){
    const recipe_id = document.querySelector("#recipes");

    const r = getRecipe()
    .then(function(rec){
        console.log(rec);
        my_recipe = rec['meals'][0];
        let card = document.createElement("section");

        card.innerHTML = `<h2>${my_recipe.strMeal}</h2>
        `;
        recipe_id.appendChild(card);
    });
}