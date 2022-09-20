// variables generales //
let passTomas = "tenista1"

// elementos del DOM en variables //

let d = document;
let buttonLoggin = d.getElementById("loggin")
let passIncorrect = d.getElementById("passIncorrect")
let buttonHome = d.getElementById("home")

//eventos //

buttonLoggin.addEventListener("click", ingresar)
buttonHome.addEventListener("click", goToHome)

// funciones //

function ingresar (e) {
    e.preventDefault()
    let inputPass = d.getElementById("passInput").value

    if (inputPass === passTomas) {
       d.location="tomas.html"
    } else passIncorrect.innerHTML="Contraseña Incorrecta"
}

function goToHome () {
    d.location="index.html"
}