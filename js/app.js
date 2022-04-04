
//Establecemos las varibles de nuestro proyecto
const generalbtn = document.getElementById("inicio");
const sportsBtn = document.getElementById("deportes");
const businessBtn = document.getElementById("economia");
const technologyBtn  = document.getElementById("tecnologia");
const entertainmentBtn = document.getElementById("espectaculo");
const searchBtn = document.getElementById("buscar");
const newsQuery = document.getElementById("newsQuery")
const newsType = document.getElementById("newsType")
const newsDetails = document.getElementById("newsdetails")

let newDataArr= []; /*Guardaremos los datos recolectados en este arreglo*/


//Apis de nuestro proyecto para obtener informacion
const API_KEY = "79d30bd83c1347bd90ca5fd369393324"
const HEADLINES_NEWS = "https://newsapi.org/v2/top-headlines?country=ve&apiKey=79d30bd83c1347bd90ca5fd369393324";
const GENERAL_NEWS = "https://newsapi.org/v2/top-headlines?country=Ve&category=general&apiKey=79d30bd83c1347bd90ca5fd369393324";
const BUSSINESS__NEWS = "https://newsapi.org/v2/top-headlines?country=Ve&category=business&apiKey=79d30bd83c1347bd90ca5fd369393324";
const SPORTS__NEWS = "https://newsapi.org/v2/top-headlines?country=Ve&category=sports&apiKey=79d30bd83c1347bd90ca5fd369393324";
const TECHNOLOGY__NEWS = "https://newsapi.org/v2/top-headlines?country=Ve&category=technologys&apiKey=79d30bd83c1347bd90ca5fd369393324";
const ENTERTAINMENT__NEWS = "https://newsapi.org/v2/top-headlines?country=Ve&category=entertainment&apiKey=79d30bd83c1347bd90ca5fd369393324";




generalbtn.addEventListener("click", function(){

    fetchGeneralNews();

})

sportsBtn.addEventListener("click", function(){
    
    fetchSportsNews();
})

businessBtn.addEventListener("click", function(){
    
    fetchBusinessNews();
})

technologyBtn.addEventListener("click", function(){
    fetchTechnologyNews();
})

entertainmentBtn.addEventListener("click", function(){
    fetchEntertainmentNews();
})

searchBtn.addEventListener("click", function(){
    fetchQueryNews();
})

const fetchGeneralNews = async () => {
    const response = await fetch(GENERAL_NEWS);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }
    displayNews();
}

const fetchSportsNews = async () => {
    const response = await fetch(SPORTS__NEWS);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }
    displayNews();
}

const fetchBusinessNews = async () => {
    const response = await fetch(BUSSINESS__NEWS);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }
    displayNews();
}

const fetchTechnologyNews = async () => {
    const response = await fetch(TECHNOLOGY__NEWS);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }
    displayNews();
}

const fetchEntertainmentNews = async () => {
    const response = await fetch(ENTERTAINMENT__NEWS);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }
    displayNews();
}
