// Variables generales //

const d = document;

// elementos del DOM //

const menu = d.getElementById("menuGrupos")
const botonBurger = d.getElementById("btnMenu")

// eventos //

d.addEventListener("click", classBurgerMenu)

// funciones //

function classBurgerMenu (evento) {

    if (evento.target.matches('.hamburger') || evento.target.matches('span')){
        botonBurger.classList.toggle("is-active")
        menu.classList.toggle("translate")
    }

    if (evento.target.matches('a')) { // lo que hacemos es que si el evento.target (elemento que ejecuta la accion) coincide con la etiqueta <a> que realice esa accion
        botonBurger.classList.remove("is-active")
        menu.classList.remove("translate")
    }

}