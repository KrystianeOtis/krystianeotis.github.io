const apiURL = " https://api.openweathermap.org/data/2.5/weather?zip=83263&appid=953894ad13f71540f4d4ee5b185b63d7&units=imperial";


fetch(apiURL).then((response) => response.json()).then((jsObject) => {
        console.log(jsObject);


        let d = new Date();
        let day = d.getDay();
        let currentDay = getDay(day);
        let nextDay;
        let nextNextDay;

        switch (currentDay) {
            case "Friday":
                nextDay = getDay(6);
                nextNextDay = getDay(0);
                break;
            case "Saturday":
                nextDay = getDay(0);
                nextNextDay = getDay(1);
                break;
        }



        document.querySelector("#currentTemp").innerHTML = Math.round(jsObject.list[day].main.temp) + "&#176;F";
        document.querySelector("#currentDayHeader").innerHTML = currentDay;
        document.querySelector("#weatherCondition").innerHTML = jsObject.list[day].weather[0].main;

        document.querySelector("#currentDayName").textContent = currentDay;
        document.querySelector("#currentDayTemp").innerHTML = Math.round(jsObject.list[day].main.temp) + "&#176;F";

        document.querySelector("#nextDayName").textContent = nextDay;
        document.querySelector("#nextDayTemp").innerHTML = Math.round(jsObject.list[day + 1].main.temp) + "&#176;F";

        document.querySelector("#nextNextDayName").textContent = nextNextDay;
        document.querySelector("#nextNextDayTemp").innerHTML = Math.round(jsObject.list[day + 2].main.temp) + "&#176;F";


    }

);

function getDay(day) {
    switch (day) {
        case 0:
            return "Sunday";
            break;
        case 1:
            return "Monday";
            break;
        case 2:
            return "Tuesday";
            break;
        case 3:
            return "Wednesday";
            break;
        case 4:
            return "Thursday";
            break;
        case 5:
            return "Friday";
            break;
        case 6:
            return "Saturday";
            break;
    }
}