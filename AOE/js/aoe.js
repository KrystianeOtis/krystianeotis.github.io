// const url = 'https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations';

// let results = null;
//   // takes a fetch response and checks to make sure it was OK.
//   // then returns the body of the response as a PROMISE to some JSON.
// function convertToJson(response) {
//     if (response.ok) {
//       return response.json();
//     } else {
//       console.log("error:", response);
//     }
//   }
//   // this is where we would do whatever we needed to do with the resulting data.
//   function doStuff(data) {
//     results = data;
//     console.log("first: ", results);
//   }
  
//   // read this as: make a request to URL, WHEN it finishes THEN run convertToJson
//   // WHEN it finishes THEN run doStuff
//   fetch(url).then(convertToJson).then(doStuff);
//   // meanwhile...continue with the rest of the program...
//   console.log("second: ", results);

  var civilization = {
    name: "Aztecs",
    army_type: "Infantry and Monk",
    team_bonus: "Relics generate +33% gold",
    full_name : function() {
       return this.name + " " + this.army_type + "" + this.team_bonus;
    }
};
