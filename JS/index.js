// elementos del DOM en variables //
let d = document;
let buttonLoggin = d.getElementById("loggin")
let buttonSimulator = d.getElementById("simulator")
let buttonInstructions = d.getElementById("intructions")
let buttonHome = d.getElementById("home")

// eventos //
buttonLoggin.addEventListener("click", () => {
    d.location="loggin.html"
})

buttonSimulator.addEventListener("click", () => {
    d.location="simulador.html"
})

buttonInstructions.addEventListener("click", () => {
    d.location="instrucciones.html"
})

buttonHome.addEventListener("click", () => {
    d.location="index.html"
})