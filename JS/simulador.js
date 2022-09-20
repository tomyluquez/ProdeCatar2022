// variable almacenando informacion del html //
let botonSimular = document.getElementById("boton")
let resultado = document.getElementById("resultado")
let explicacion = document.getElementById("explicacion")
let resultReal = document.getElementById("resultReal")
let puntos = document.getElementById("puntaje")
let argReal = document.getElementById("argReal")
let saudiReal = document.getElementById("saudiReal")
let buttonLoggin = document.getElementById("loggin")
let buttonSimulator = document.getElementById("simulator")
let buttonHome = document.getElementById("home")

// eventos //
botonSimular.addEventListener("click", simular)
buttonLoggin.addEventListener("click", goToLoggin)
buttonSimulator.addEventListener("click", goToSimulator)
buttonHome.addEventListener("click", goToHome)

// funciones //

function simular (evento){
    evento.preventDefault()

    let argReal = document.getElementById("argReal").value = Math.floor(Math.random() * 4) // genero un numero random para que se vaya modificando el resultado real cada vez que se simule un resultado
    let saudiReal = document.getElementById("saudiReal").value = Math.floor(Math.random() * 2)
    let argSimu = Number(document.getElementById("argSimu").value)
    let saudiSimu = Number(document.getElementById("saudiSimu").value)


   if (argSimu === argReal &&   // esta funcion compara los distintos tipos de resultados que se puedan dar y los puntos para cada caso
    saudiSimu === saudiReal) {
     resultado.innerHTML="3"
     explicacion.innerHTML="En este caso ganarias 3 pts, ya que acertaste exactamente el resultado. Crack"
    } 
    
    else if (argReal > saudiReal && 
                 argSimu > saudiSimu &&
                 argReal === argSimu &&
                 saudiReal !== saudiSimu) {
      resultado.innerHTML="2"           
      explicacion.innerHTML="En este caso ganarias 2 pts, ya que acertaste quien ganaba y adivinaste la cantidad de goles que hacia 1 de los 2 equipos"
  }
  
  else if (argReal > saudiReal &&
               argSimu > saudiSimu &&
               argReal !== argSimu &&
               saudiReal === saudiSimu) {
    resultado.innerHTML="2"           
    explicacion.innerHTML="En este caso ganarias 2 pts, ya que acertaste quien ganaba y adivinaste la cantidad de goles que hacia 1 de los 2 equipos"
  } 
  
  else if (argReal < saudiReal &&
                 argSimu < saudiSimu &&
                 argReal === argSimu &&
                 saudiReal !== saudiSimu ){
     resultado.innerHTML="2"                 
     explicacion.innerHTML="En este caso ganarias 2 pts, ya que acertaste quien ganaba y adivinaste la cantidad de goles que hizo 1 de los 2 equipos"
 } 
 
 else if (argReal < saudiReal &&
               argSimu < saudiSimu &&
               argReal !== argSimu &&
               saudiReal === saudiSimu) {
    resultado.innerHTML="2"                 
    explicacion.innerHTML="En este caso ganarias 2 pts, ya que acertaste quien ganaba y adivinaste la cantidad de goles que hizo 1 de los 2 equipos"
 } 
 
 else if (argReal > saudiReal &&
               argSimu < saudiSimu &&
               argReal === argSimu &&
               saudiReal !== saudiSimu ){
     resultado.innerHTML="1"
     explicacion.innerHTML="En este caso ganarias 1 pt, ya que solamente adivinaste la cantidad de goles que hizo 1 de los 2 equipos, pero no acertaste quien ganaba"
 } 

 else if (argReal > saudiReal &&
             argSimu < saudiSimu &&
             argReal !== argSimu &&
             saudiReal === saudiSimu) {
     resultado.innerHTML="1"
     explicacion.innerHTML="En este caso ganarias 1 pt, ya que solamente adivinaste la cantidad de goles que hizo 1 de los 2 equipos, pero no acertaste quien ganaba"
}
 
 else if (argReal < saudiReal &&
               argSimu > saudiSimu &&
               argReal === argSimu &&
               saudiReal !== saudiSimu) {
     resultado.innerHTML="1"
     explicacion.innerHTML="En este caso ganarias 1 pt, ya que solamente adivinaste la cantidad de goles que hizo 1 de los 2 equipos, pero no acertaste quien ganaba"
 } 

 else if (argReal < saudiReal &&
             argSimu > saudiSimu &&
            argReal !== argSimu &&
            saudiReal === saudiSimu){
    resultado.innerHTML="1"
    explicacion.innerHTML="En este caso ganarias 1 pt, ya que solamente adivinaste la cantidad de goles que hizo 1 de los 2 equipos, pero no acertaste quien ganaba"
 } 
 
 else if (argReal === saudiReal &&
               argSimu !== saudiSimu &&
               argReal === argSimu &&
               saudiReal !== saudiSimu ) {
     resultado.innerHTML="1"     
     explicacion.innerHTML="En este caso ganarias 1 pt, ya que solamente adivinaste la cantidad de goles que hizo 1 de los 2 equipos, pero no acertaste que empataban"
 } 

 else if (argReal === saudiReal &&
             argSimu !== saudiSimu &&
             argReal !== argSimu &&
             saudiReal === saudiSimu) {
    resultado.innerHTML="1"     
    explicacion.innerHTML="En este caso ganarias 1 pt, ya que solamente adivinaste la cantidad de goles que hizo 1 de los 2 equipos, pero no acertaste que empataban"
} 
             
 
 else if (argReal === saudiReal &&
                argSimu === saudiSimu &&
               argReal !== argSimu &&
               saudiReal !== saudiSimu) {
     resultado.innerHTML="1"    
     explicacion.innerHTML="En este caso ganarias 1 pt, ya que solamente adivinaste de que empataban, pero no acertaste la cantidad de goles de los equipo"
 }
 
 else if (argReal > saudiReal &&
               argSimu > saudiSimu &&
               argReal !== argSimu &&
               saudiReal !== saudiSimu) {
     resultado.innerHTML="1"
     explicacion.innerHTML="En este caso ganarias 1 pt, ya que solamente adivinaste de quien ganaba, pero no acertaste la cantidad de goles de los equipo"
 } 
 
 else if (argReal < saudiReal &&
               argSimu < saudiSimu &&
               argReal !== argSimu &&
              saudiReal !== saudiSimu) {
      resultado.innerHTML= "1"  
      explicacion.innerHTML="En este caso ganarias 1 pt, ya que solamente adivinaste de quien ganaba, pero no acertaste la cantidad de goles de los equipo"
 } 
 
 else if (argReal !== saudiReal &&
               argSimu === saudiSimu &&
               argReal === argSimu &&
               saudiReal !== saudiSimu ) {
     resultado.innerHTML="1"  
     explicacion.innerHTML="En este caso ganarias 1 pt, ya que pusiste empate y solamente adivinaste la cantidad de goles de 1 de los 2 equipos"
 } 

 else if (argReal !== saudiReal &&
             argSimu === saudiSimu &&
            argReal !== argSimu &&
            saudiReal === saudiSimu){
    resultado.innerHTML="1"  
    explicacion.innerHTML="En este caso ganarias 1 pt, ya que pusiste empate y solamente adivinaste la cantidad de goles de 1 de los 2 equipos"
} 
 
 else {
     resultado.innerHTML="0" 
     explicacion.innerHTML="En este caso no ganarias pts porque sos malisimo jugando, no adivinaste nada!!"
 }
}

function goToLoggin () {
        document.location="loggin.html"
}

function goToSimulator () {
    document.location="simulador.html"
}

function goToHome () {
    document.location="index.html"
}