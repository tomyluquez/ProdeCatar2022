// variables generales //
let userTomas = "tomas"
let passTomas = "tenista1"

// elementos del DOM en variables //

let d = document;
let buttonLoggin = d.getElementById("loggin")

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
        alert("Usuario incorrecto")
    } else if (inputUser === userTomas && inputPass !== passTomas) {
        alert("contraseña Incorrecta")
    } else alert("El usuario y la Contraseña son incorrectos")
}