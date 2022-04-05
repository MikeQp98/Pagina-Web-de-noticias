
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
const GENERAL_NEWS = "https://newsapi.org/v2/top-headlines?country=ve&category=general&apiKey=79d30bd83c1347bd90ca5fd369393324";
const BUSSINESS__NEWS = "https://newsapi.org/v2/top-headlines?country=ve&category=business&apiKey=79d30bd83c1347bd90ca5fd369393324";
const SPORTS__NEWS = "https://newsapi.org/v2/top-headlines?country=ve&category=sports&apiKey=79d30bd83c1347bd90ca5fd369393324";
const TECHNOLOGY__NEWS = "https://newsapi.org/v2/top-headlines?country=ve&category=technologys&apiKey=79d30bd83c1347bd90ca5fd369393324";
const ENTERTAINMENT__NEWS = "https://newsapi.org/v2/top-headlines?country=ve&category=entertainment&apiKey=79d30bd83c1347bd90ca5fd369393324";
const SEARCH_NEWS = "https://newsapi.org/v2/everything?q="

window.onload = function() {
    newsType.innerHTML="<h4>Headlines</h4>";
    fetchHeadlines();
};



generalbtn.addEventListener("click", function(){
    newsType.innerHTML="<h4>Lo más destacado</h4>";
    fetchGeneralNews();
})

sportsBtn.addEventListener("click", function(){
    newsType.innerHTML="<h4>Las noticias deportivas más destacado</h4>";
    fetchSportsNews();
})

businessBtn.addEventListener("click", function(){
    newsType.innerHTML="<h4>Las noticias económicas más destacado</h4>";
    fetchBusinessNews();
})

technologyBtn.addEventListener("click", function(){
    newsType.innerHTML="<h4>Las noticias tecnológicas más destacado</h4>";
    fetchTechnologyNews();
})

entertainmentBtn.addEventListener("click", function(){
    newsType.innerHTML="<h4>Las noticias del espectaculo más destacado</h4>";
    fetchEntertainmentNews();
})

searchBtn.addEventListener("click", function(){
    newsType.innerHTML="<h4>Search : "+newsQuery.value+"</h4>";
    fetchQueryNews();
})

const fetchHeadlines = async () => {
    const response = await fetch(HEADLINES_NEWS);
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

const fetchGeneralNews = async () => {
    const response = await fetch(GENERAL_NEWS);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
        console.log(myJson);
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
        console.log(myJson);
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
        console.log(myJson);
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
        console.log(myJson);
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
        console.log(myJson);
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }
    displayNews();
}

const fetchQueryNews = async () => {
    if (newsQuery.value == null) {
        return
    }
    const response = await fetch(SEARCH_NEWS+encodeURIComponent(newsQuery.value)+"&apikey="+API_KEY)
    newsDataArr = [];
    if (response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
        console.log(myJson);
    }else {
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews();
}


function displayNews() {

   newsDetails.innerHTML = "";
   
    if (newsDataArr == 0) {
        newsDetails.innerHTML = "<h5>No se encontraron Resultados</h5>";
        return;
    }

    newsDataArr.forEach(news => {
      
        const date = news.publishedAt.split("T");

        const col = document.createElement('div')
        col.className="col-sm-12 col-md-4 col-lg-3 p-2"

        const card = document.createElement('div');
        card.className="p-2"

        const image = document.createElement('img');
        image.setAttribute("height","matchparent");
        image.setAttribute("width","100%");
        image.src=news.urlToImage;

        const cardBody = document.createElement('div');
        
        const newsHeading = document.createElement('h5');
        newsHeading.className = "card-title";
        newsHeading.innerHTML = news.title;

        const dateHeading = document.createElement('h6');
        dateHeading.className = "text-primary";
        dateHeading.innerHTML = date[0];

        const discription = document.createElement('p');
        discription.className="text-muted";
        discription.innerHTML = news.description;

        const link = document.createElement('a');
        link.className="btn btn-dark";
        link.setAttribute("target", "_blank");
        link.href = news.url;
        link.innerHTML="Leer Más";

        cardBody.appendChild(newsHeading);
        cardBody.appendChild(dateHeading);
        cardBody.appendChild(discription);
        cardBody.appendChild(link);

        card.appendChild(image);
        card.appendChild(cardBody);

        col.appendChild(card);

        newsdetails.appendChild(col);
    });
}