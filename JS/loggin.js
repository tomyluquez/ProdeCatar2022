// variables generales //
let userTomas = "tomas"
let passTomas = "tenista1"

// elementos del DOM en variables //

let d = document;
let buttonLoggin = d.getElementById("loggin")
let userIncorrect = d.getElementById("userIncorrect")
let passIncorrect = d.getElementById("passIncorrect")

//eventos //

buttonLoggin.addEventListener("click", ingresar)

// funciones //

function ingresar (e) {
    e.preventDefault()
    let inputUser = d.getElementById("userInput").value
    let inputPass = d.getElementById("passInput").value

    if (inputUser === userTomas && inputPass === passTomas) {
       d.location="tomas.html"
    } else if (inputUser !== userTomas && inputPass === passTomas) {
        userIncorrect.innerHTML="Usuario incorrecto"
    } else if (inputUser === userTomas && inputPass !== passTomas) {
        passIncorrect.innerHTML="Contraseña Incorrecta"
    } else userIncorrect.innerHTML="Usuario incorrecto", 
    passIncorrect.innerHTML="Contraseña Incorrecta"
}