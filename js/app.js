const botonheader = document.querySelector ('.navegacion__ham-btn');
const botoncerrarheader = document.querySelector('.navegacion__times-btn');
const navBar = document.getElementById('nav-bar');

// funcion para mostrar el menu 
botonheader.addEventListener('click', function(){
    if (botonheader.className !== "") {
            botonheader.style.display = "none";
            botoncerrarheader.style.display = "block";
            navBar.classList.add("navegacion__barra-mostrar")
    }
})

// funcion para cerrar el menu 
botoncerrarheader.addEventListener('click', function (){
    if (botonheader.className !== "") {
            this.style.display = "none";
            botonheader.style.display = "block";
            navBar.classList.remove("navegacion__barra-mostrar")
    }
})

