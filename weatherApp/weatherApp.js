const API_KEY = "8cb3c41aa26c6026b316693bee2138be";
const API_URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");


async function checkWeather(city){
    const responce = await fetch(API_URL + city +`&appid=${API_KEY}`);
    var data = await responce.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) +"°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity +"%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    

}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})
