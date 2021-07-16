const API_KEY = '953894ad13f71540f4d4ee5b185b63d7';
const CITY_ZIP = "99516";
const apiURL = `api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}`;

class App {

    constructor() {
        this.cities = []
    }
    addCity(c) {
        this.cities.push(c);
    }
    removeCity(c){
        //way 1
        const index = this.cities.findIndex(city => city.name == c.name);
        this.cities.splice(index,1);

        // //way 2
        // this.cities = this.cities.filter(city => city.name !== c.name);
    }
}

class City{
    constructor(name){
        this.name = name;
    }
    getWeather() {
        fetch(`api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}`)
    }
}