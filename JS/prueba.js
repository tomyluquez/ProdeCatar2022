// Variables generales //

const d = document;

// ELEMENTOS DEL DOM DEL MENU //

const menu = d.getElementById("menuGrupos")
const botonBurger = d.getElementById("btnMenu")
const titulos = d.getElementsByClassName("desplegar")

// EVENTOS DEL MENU HAMBURGUESA // 

botonBurger.addEventListener('click', (evento) => {

    if (evento.target.matches('.hamburger') || evento.target.matches('.hamburger-inner')) {
        botonBurger.classList.toggle("is-active")
        menu.classList.toggle("translate")
    }

    if (evento.target.matches('a')) { // lo que hacemos es que si el evento.target (elemento que ejecuta la accion) coincide con la etiqueta <a> que realice esa accion
        botonBurger.classList.remove("is-active")
        menu.classList.remove("translate")
    }

})


// EVENTOS DE LOS BOTONES DE LAS PREDICCIONES // 

const botonesPredicciones = d.querySelectorAll('.button') // toma todos los botones del html
    botonesPredicciones.forEach(boton => boton.addEventListener('click', () => { 
        const botonPrediccion = boton.id // hace un foreach guardando cada boton segun el ID
        tablaGrupos (botonPrediccion) // esa variable la pasa como parametro a la funcion tablaGrupos
    }))

function tablaGrupos (boton) {
    if (boton === 'enviarGA') return bonus("sga") // en esta funcion, dependiendo el boton que llegue como parametro es el parametro
    if (boton === 'enviarGB') return bonus("sgb") // le pasa a la funcion bonus
    if (boton === 'enviarGC') return bonus("sgc")
    if (boton === 'enviarGD') return bonus("sgd")
    if (boton === 'enviarGE') return bonus("sge")
    if (boton === 'enviarGF') return bonus("sgf")
    if (boton === 'enviarGG') return bonus("sgg")
    if (boton === 'enviarGH') return bonus("sgh")
}    

//EVENTO DEL LOCAL STORAGE // 

document.addEventListener('DOMContentLoaded', (evento) => {

    // let arrCatar = JSON.parse(localStorage.getItem('qatar,,')) || ""
    // let arrEcuador = JSON.parse(localStorage.getItem('ecuador,,')) || ""
    // let arrSenegal = JSON.parse(localStorage.getItem('senegal,,')) || ""
    // let arrHolanda = JSON.parse(localStorage.getItem('paisesbajos,,')) || ""

    let grupoA = JSON.parse(localStorage.getItem('sga'))
    let bonusGrupoa = localStorage.getItem('bonussga')
    let nombreGrupoGA = localStorage.getItem('gruposga')
    let inputsGA = JSON.parse(localStorage.getItem('inputssga'))
    let puntajeP1GA = localStorage.getItem(`${nombreGrupoGA}1`)
    let puntajeP2GA = localStorage.getItem(`${nombreGrupoGA}2`)
    let puntajeP3GA = localStorage.getItem(`${nombreGrupoGA}3`)
    let puntajeP4GA = localStorage.getItem(`${nombreGrupoGA}4`)
    let puntajeP5GA = localStorage.getItem(`${nombreGrupoGA}5`)
    let puntajeP6GA = localStorage.getItem(`${nombreGrupoGA}6`)
    let puntajeGA = [+puntajeP1GA, +puntajeP2GA, +puntajeP3GA, +puntajeP4GA, +puntajeP5GA, +puntajeP6GA]
    
    let grupoB = JSON.parse(localStorage.getItem('sgb'))
    let bonusGrupob = localStorage.getItem('bonussgb')
    let nombreGrupoGB = localStorage.getItem('gruposgb')
    let inputsGB = JSON.parse(localStorage.getItem('inputssgb'))
    let puntajeP1GB = localStorage.getItem(`${nombreGrupoGB}1`)
    let puntajeP2GB = localStorage.getItem(`${nombreGrupoGB}2`)
    let puntajeP3GB = localStorage.getItem(`${nombreGrupoGB}3`)
    let puntajeP4GB = localStorage.getItem(`${nombreGrupoGB}4`)
    let puntajeP5GB = localStorage.getItem(`${nombreGrupoGB}5`)
    let puntajeP6GB = localStorage.getItem(`${nombreGrupoGB}6`)
    let puntajeGB = [+puntajeP1GB, +puntajeP2GB, +puntajeP3GB, +puntajeP4GB, +puntajeP5GB, +puntajeP6GB]

    let grupoC = JSON.parse(localStorage.getItem('sgc'))
    let bonusGrupoc = localStorage.getItem('bonussgc')
    let nombreGrupoGC = localStorage.getItem('gruposgc')
    let inputsGC = JSON.parse(localStorage.getItem('inputssgc'))
    let puntajeP1GC = localStorage.getItem(`${nombreGrupoGC}1`)
    let puntajeP2GC = localStorage.getItem(`${nombreGrupoGC}2`)
    let puntajeP3GC = localStorage.getItem(`${nombreGrupoGC}3`)
    let puntajeP4GC = localStorage.getItem(`${nombreGrupoGC}4`)
    let puntajeP5GC = localStorage.getItem(`${nombreGrupoGC}5`)
    let puntajeP6GC = localStorage.getItem(`${nombreGrupoGC}6`)
    let puntajeGC = [+puntajeP1GC, +puntajeP2GC, +puntajeP3GC, +puntajeP4GC, +puntajeP5GC, +puntajeP6GC]

    let grupoD = JSON.parse(localStorage.getItem('sgd'))
    let bonusGrupod = localStorage.getItem('bonussgd')
    let nombreGrupoGD = localStorage.getItem('gruposgd')
    let inputsGD = JSON.parse(localStorage.getItem('inputssgd'))
    let puntajeP1GD = localStorage.getItem(`${nombreGrupoGD}1`)
    let puntajeP2GD = localStorage.getItem(`${nombreGrupoGD}2`)
    let puntajeP3GD = localStorage.getItem(`${nombreGrupoGD}3`)
    let puntajeP4GD = localStorage.getItem(`${nombreGrupoGD}4`)
    let puntajeP5GD = localStorage.getItem(`${nombreGrupoGD}5`)
    let puntajeP6GD = localStorage.getItem(`${nombreGrupoGD}6`)
    let puntajeGD = [+puntajeP1GD, +puntajeP2GD, +puntajeP3GD, +puntajeP4GD, +puntajeP5GD, +puntajeP6GD]

    let grupoE = JSON.parse(localStorage.getItem('sge'))
    let bonusGrupoe = localStorage.getItem('bonussge')
    let nombreGrupoGE = localStorage.getItem('gruposge')
    let inputsGE = JSON.parse(localStorage.getItem('inputssge'))
    let puntajeP1GE = localStorage.getItem(`${nombreGrupoGE}1`)
    let puntajeP2GE = localStorage.getItem(`${nombreGrupoGE}2`)
    let puntajeP3GE = localStorage.getItem(`${nombreGrupoGE}3`)
    let puntajeP4GE = localStorage.getItem(`${nombreGrupoGE}4`)
    let puntajeP5GE = localStorage.getItem(`${nombreGrupoGE}5`)
    let puntajeP6GE = localStorage.getItem(`${nombreGrupoGE}6`)
    let puntajeGE = [+puntajeP1GE, +puntajeP2GE, +puntajeP3GE, +puntajeP4GE, +puntajeP5GE, +puntajeP6GE]

    let grupoF = JSON.parse(localStorage.getItem('sgf'))
    let bonusGrupof = localStorage.getItem('bonussgf')
    let nombreGrupoGF = localStorage.getItem('gruposgf')
    let inputsGF = JSON.parse(localStorage.getItem('inputssgf'))
    let puntajeP1GF = localStorage.getItem(`${nombreGrupoGF}1`)
    let puntajeP2GF = localStorage.getItem(`${nombreGrupoGF}2`)
    let puntajeP3GF = localStorage.getItem(`${nombreGrupoGF}3`)
    let puntajeP4GF = localStorage.getItem(`${nombreGrupoGF}4`)
    let puntajeP5GF = localStorage.getItem(`${nombreGrupoGF}5`)
    let puntajeP6GF = localStorage.getItem(`${nombreGrupoGF}6`)
    let puntajeGF = [+puntajeP1GF, +puntajeP2GF, +puntajeP3GF, +puntajeP4GF, +puntajeP5GF, +puntajeP6GF]

    let grupoG = JSON.parse(localStorage.getItem('sgg'))
    let bonusGrupog = localStorage.getItem('bonussgg')
    let nombreGrupoGG = localStorage.getItem('gruposgg')
    let inputsGG = JSON.parse(localStorage.getItem('inputssgg'))
    let puntajeP1GG = localStorage.getItem(`${nombreGrupoGG}1`)
    let puntajeP2GG = localStorage.getItem(`${nombreGrupoGG}2`)
    let puntajeP3GG = localStorage.getItem(`${nombreGrupoGG}3`)
    let puntajeP4GG = localStorage.getItem(`${nombreGrupoGG}4`)
    let puntajeP5GG = localStorage.getItem(`${nombreGrupoGG}5`)
    let puntajeP6GG = localStorage.getItem(`${nombreGrupoGG}6`)
    let puntajeGG = [+puntajeP1GG, +puntajeP2GG, +puntajeP3GG, +puntajeP4GG, +puntajeP5GG, +puntajeP6GG]

    let grupoH = JSON.parse(localStorage.getItem('sgh'))
    let bonusGrupoh = localStorage.getItem('bonussgh')
    let nombreGrupoGH = localStorage.getItem('gruposgh')
    let inputsGH = JSON.parse(localStorage.getItem('inputssgh'))
    let puntajeP1GH = localStorage.getItem(`${nombreGrupoGH}1`)
    let puntajeP2GH = localStorage.getItem(`${nombreGrupoGH}2`)
    let puntajeP3GH = localStorage.getItem(`${nombreGrupoGH}3`)
    let puntajeP4GH = localStorage.getItem(`${nombreGrupoGH}4`)
    let puntajeP5GH = localStorage.getItem(`${nombreGrupoGH}5`)
    let puntajeP6GH = localStorage.getItem(`${nombreGrupoGH}6`)
    let puntajeGH = [+puntajeP1GH, +puntajeP2GH, +puntajeP3GH, +puntajeP4GH, +puntajeP5GH, +puntajeP6GH]

    let inputGA = []
    let inputGB = []
    let inputGC = []
    let inputGD = []
    let inputGE = []
    let inputGF = []
    let inputGG = []
    let inputGH = []

    let inputsGrupo = d.querySelectorAll(`.contPredicciones .resultados`)
    inputsGrupo.forEach(element => {
        if (element.className === 'resultados sga') inputGA.push(element)
        if (element.className === 'resultados sgb') inputGB.push(element)
        if (element.className === 'resultados sgc') inputGC.push(element)
        if (element.className === 'resultados sgd') inputGD.push(element)
        if (element.className === 'resultados sge') inputGE.push(element)
        if (element.className === 'resultados sgf') inputGF.push(element)
        if (element.className === 'resultados sgg') inputGG.push(element)
        if (element.className === 'resultados sgh') inputGH.push(element)
    });

   bonusAlCargar(bonusGrupoa, nombreGrupoGA)
   bonusAlCargar(bonusGrupob, nombreGrupoGB)
   bonusAlCargar(bonusGrupoc, nombreGrupoGC)
   bonusAlCargar(bonusGrupod, nombreGrupoGD)
   bonusAlCargar(bonusGrupoe, nombreGrupoGE)
   bonusAlCargar(bonusGrupof, nombreGrupoGF)
   bonusAlCargar(bonusGrupog, nombreGrupoGG)
   bonusAlCargar(bonusGrupoh, nombreGrupoGH)

   inputsAlCargar(inputGA, inputsGA)
   inputsAlCargar(inputGB, inputsGB)
   inputsAlCargar(inputGC, inputsGC)
   inputsAlCargar(inputGD, inputsGD)
   inputsAlCargar(inputGE, inputsGE)
   inputsAlCargar(inputGF, inputsGF)
   inputsAlCargar(inputGG, inputsGG)
   inputsAlCargar(inputGH, inputsGH)

   tablaAlCargar(grupoA, nombreGrupoGA)
   tablaAlCargar(grupoB, nombreGrupoGB)
   tablaAlCargar(grupoC, nombreGrupoGC)
   tablaAlCargar(grupoD, nombreGrupoGD)
   tablaAlCargar(grupoE, nombreGrupoGE)
   tablaAlCargar(grupoF, nombreGrupoGF)
   tablaAlCargar(grupoG, nombreGrupoGG)
   tablaAlCargar(grupoH, nombreGrupoGH)
   
   calcularPts(nombreGrupoGA)
   calcularPts(nombreGrupoGB)
   calcularPts(nombreGrupoGC)
   calcularPts(nombreGrupoGD)
   calcularPts(nombreGrupoGE)
   calcularPts(nombreGrupoGF)
   calcularPts(nombreGrupoGG)
   calcularPts(nombreGrupoGH)

   puntajeTotal(puntajeGA, nombreGrupoGA)
   puntajeTotal(puntajeGB, nombreGrupoGB)
   puntajeTotal(puntajeGC, nombreGrupoGC)
   puntajeTotal(puntajeGD, nombreGrupoGD)
   puntajeTotal(puntajeGE, nombreGrupoGE)
   puntajeTotal(puntajeGF, nombreGrupoGF)
   puntajeTotal(puntajeGG, nombreGrupoGG)
   puntajeTotal(puntajeGH, nombreGrupoGH)

   separadosdeEquiposReales(nombreGrupoGA)
   separadosdeEquiposReales(nombreGrupoGB)
   separadosdeEquiposReales(nombreGrupoGC)
   separadosdeEquiposReales(nombreGrupoGD)
   separadosdeEquiposReales(nombreGrupoGE)
   separadosdeEquiposReales(nombreGrupoGF)
   separadosdeEquiposReales(nombreGrupoGG)
   separadosdeEquiposReales(nombreGrupoGH)
    
})

// // FUNCIONES //

function inputsAlCargar (grupoInputs, valoresInputs) {

    let sumaValores= 0

    if(valoresInputs !== null){
        for (let i=0; i<valoresInputs.length; i++){
            sumaValores+= valoresInputs[i].length
        }
    }

    if (sumaValores > 0 && sumaValores < 12){
        grupoInputs[0].value = valoresInputs[0]
        grupoInputs[1].value = valoresInputs[1]
        grupoInputs[2].value = valoresInputs[2]
        grupoInputs[3].value = valoresInputs[3]
        grupoInputs[4].value = valoresInputs[4]
        grupoInputs[5].value = valoresInputs[5]
        grupoInputs[6].value = valoresInputs[6]
        grupoInputs[7].value = valoresInputs[7]
        grupoInputs[8].value = valoresInputs[8]
        grupoInputs[9].value = valoresInputs[9]
        grupoInputs[10].value = valoresInputs[10]
        grupoInputs[11].value = valoresInputs[11]

        grupoInputs.forEach(element => {
            element.disabled = false
        })
    }

    if(sumaValores === 12){
        grupoInputs[0].value = valoresInputs[0]
        grupoInputs[1].value = valoresInputs[1]
        grupoInputs[2].value = valoresInputs[2]
        grupoInputs[3].value = valoresInputs[3]
        grupoInputs[4].value = valoresInputs[4]
        grupoInputs[5].value = valoresInputs[5]
        grupoInputs[6].value = valoresInputs[6]
        grupoInputs[7].value = valoresInputs[7]
        grupoInputs[8].value = valoresInputs[8]
        grupoInputs[9].value = valoresInputs[9]
        grupoInputs[10].value = valoresInputs[10]
        grupoInputs[11].value = valoresInputs[11]

        for (let i=0; i<grupoInputs; i++){
            grupoInputs[i].value = valoresInputs[i]
        }

        grupoInputs.forEach(element => {
            element.disabled = true
        })
    }
    
}

function convertirNodelist(grupo, grupoTabla, posicionesTabla){
    
    const posicionesObj = {
        primero: posicionesTabla[0].textContent,
        primeroPts: posicionesTabla[1].textContent,
        primeroPj: posicionesTabla[2].textContent,
        primeroGf: posicionesTabla[3].textContent,
        primeroGc: posicionesTabla[4].textContent,
        primeroDif: posicionesTabla[5].textContent,
        segundo: posicionesTabla[6].textContent,
        segundoPts: posicionesTabla[7].textContent,
        segundoPj: posicionesTabla[8].textContent,
        segundoGf: posicionesTabla[9].textContent,
        segundoGc: posicionesTabla[10].textContent,
        segundoDif: posicionesTabla[11].textContent,
        tercero: posicionesTabla[12].textContent,
        terceroPts: posicionesTabla[13].textContent,
        terceroPj: posicionesTabla[14].textContent,
        terceroGf: posicionesTabla[15].textContent,
        terceroGc: posicionesTabla[16].textContent,
        terceroDif: posicionesTabla[17].textContent,
        cuarto: posicionesTabla[18].textContent,
        cuartoPts: posicionesTabla[19].textContent,
        cuartoPj: posicionesTabla[20].textContent,
        cuartoGf: posicionesTabla[21].textContent,
        cuartoGc: posicionesTabla[22].textContent,
        cuartoDif: posicionesTabla[23].textContent,
    }

    // guardarDatos(grupo, arrEquipo1, arrEquipo2, arrEquipo3, arrEquipo4, nameEquipo1, nameEquipo2, nameEquipo3, nameEquipo4, posicionesObj)

    guardarDatos(grupo, grupoTabla, posicionesObj)
}

function bonusAlCargar(bonus, grupo){
    const bonusCargado = d.querySelectorAll(`.bonus.${grupo}`)
    let arrChecked = []
    let arrNoChecked = []
    bonusCargado.forEach(element => {
        if (element.id === bonus){
            arrChecked.push(element)
                } else arrNoChecked.push(element)
         })
    
    if (arrChecked.length === 1){
        arrChecked[0].checked = true
            for (let element of arrNoChecked){
                element.disabled = true
        }
    }
    
}

function bonus(grupo){
    let checked = [];
    let noChecked = []

    const bonus = d.querySelectorAll(`.bonus.${grupo}`)
        bonus.forEach(element => {
            if (element.checked === true) checked.push(element)
            else noChecked.push(element)
        })

    if (noChecked.length === 6){
        alert(`Por favor selecciona un multiplicador para el ${grupo}`)
    } else {
        noChecked.forEach(element => element.disabled = true)            
        separadordeEquipos(grupo)
    }

    localStorage.setItem(`bonus${grupo}`, checked[0].id)
    

    // localStorage.setItem(`check${grupo}`, JSON.stringify(checked))
}

function separadordeEquipos(grupo) { // Esta funcion recibe el nombre del grupo como parametro segun el boton que hayamos apretado
    

    const predicciones = d.querySelectorAll(`.contPredicciones .resultados.${grupo}`)
    const posicionesTabla = d.querySelectorAll(`.posicion.${grupo}`)
    let arrEquipo1 = []
    let arrEquipo2 = []
    let arrEquipo3 = []
    let arrEquipo4 = []
    let nameEquipo1 = []
    let nameEquipo2 = []
    let nameEquipo3 = []
    let nameEquipo4 = []


    predicciones.forEach(element => {
        if (element.id.startsWith("1")) arrEquipo1.push(element.value), nameEquipo1.push(element.name)
        if (element.id.startsWith('2')) arrEquipo2.push(element.value), nameEquipo2.push(element.name)
        if (element.id.startsWith('3')) arrEquipo3.push(element.value), nameEquipo3.push(element.name)
        if (element.id.startsWith('4')) arrEquipo4.push(element.value), nameEquipo4.push(element.name)
    });


    congelarValoresInputs(grupo,arrEquipo1, arrEquipo2, arrEquipo3, arrEquipo4)
    calcularPtsTablaSimu(grupo, arrEquipo1, arrEquipo2, arrEquipo3, arrEquipo4, nameEquipo1, nameEquipo2, nameEquipo3, nameEquipo4, posicionesTabla)       
}

function separadosdeEquiposReales (grupo){

    const reales = d.querySelectorAll(`.contReal .resultados.real.${grupo}`)
    const posicionesTablaReal = d.querySelectorAll(`.posicion.real.${grupo}`)
    let arrEquipo1 = []
    let arrEquipo2 = []
    let arrEquipo3 = []
    let arrEquipo4 = []
    let nameEquipo1 = []
    let nameEquipo2 = []
    let nameEquipo3 = []
    let nameEquipo4 = []


    reales.forEach(element => {
        if (element.id.startsWith("1")) arrEquipo1.push(element.value), nameEquipo1.push(element.name)
        if (element.id.startsWith('2')) arrEquipo2.push(element.value), nameEquipo2.push(element.name)
        if (element.id.startsWith('3')) arrEquipo3.push(element.value), nameEquipo3.push(element.name)
        if (element.id.startsWith('4')) arrEquipo4.push(element.value), nameEquipo4.push(element.name)
    });

    calcularPtsTablaSimu(grupo, arrEquipo1, arrEquipo2, arrEquipo3, arrEquipo4, nameEquipo1, nameEquipo2, nameEquipo3, nameEquipo4, posicionesTablaReal)
}

function guardarDatos(grupo, grupoTabla, posicionesObj) {

    let inputsGrupo = []

    const inputs = d.querySelectorAll(`.contPredicciones .resultados.${grupo}`)
    inputs.forEach(element => {
        inputsGrupo.push(element.value)
    });


    localStorage.setItem(grupo, JSON.stringify(grupoTabla))
    localStorage.setItem(`posiciones${grupo}`, JSON.stringify(posicionesObj))
    localStorage.setItem(`grupo${grupo}`, grupo)
    localStorage.setItem(`inputs${grupo}`, JSON.stringify(inputsGrupo))


}

function congelarValoresInputs(grupo,arrEquipo1, arrEquipo2, arrEquipo3, arrEquipo4){

    let inputEquipo1 = []
    let inputEquipo2 = []
    let inputEquipo3 = []
    let inputEquipo4 = []

    const inputs = d.querySelectorAll(`.contPredicciones .resultados.${grupo}`)
    inputs.forEach(element => {
        if (element.id.startsWith("1")) inputEquipo1.push(element)
        if (element.id.startsWith('2')) inputEquipo2.push(element)
        if (element.id.startsWith('3')) inputEquipo3.push(element)
        if (element.id.startsWith('4')) inputEquipo4.push(element)
    });



    inputEquipo1[0].innerHTML = arrEquipo1[0]
    inputEquipo1[1].innerHTML = arrEquipo1[1]
    inputEquipo1[2].innerHTML = arrEquipo1[2]

    inputEquipo2[0].innerHTML = arrEquipo2[0]
    inputEquipo2[1].innerHTML = arrEquipo2[1]
    inputEquipo2[2].innerHTML = arrEquipo2[2]

    inputEquipo3[0].innerHTML = arrEquipo3[0]
    inputEquipo3[1].innerHTML = arrEquipo3[1]
    inputEquipo3[2].innerHTML = arrEquipo3[2]

    inputEquipo4[0].innerHTML = arrEquipo4[0]
    inputEquipo4[1].innerHTML = arrEquipo4[1]
    inputEquipo4[2].innerHTML = arrEquipo4[2]

    let sumarArrEquipo1 = arrEquipo1[0].length + arrEquipo1[1].length + arrEquipo1[2].length
    let sumarArrEquipo2 = arrEquipo2[0].length + arrEquipo2[1].length + arrEquipo2[2].length
    let sumarArrEquipo3 = arrEquipo3[0].length + arrEquipo3[1].length + arrEquipo3[2].length
    let sumarArrEquipo4 = arrEquipo4[0].length + arrEquipo4[1].length + arrEquipo4[2].length
    

    if (sumarArrEquipo1 + sumarArrEquipo2 + sumarArrEquipo3 + sumarArrEquipo4 === 12) {
        let inputsGrupo = [inputEquipo1, inputEquipo2, inputEquipo3, inputEquipo4].flat(1) 
            inputsGrupo.forEach(element => {
                element.disabled = true
        })
    } 

}

function calcularPtsTablaSimu(grupo, arrEquipo1, arrEquipo2, arrEquipo3, arrEquipo4, nameEquipo1, nameEquipo2, nameEquipo3, nameEquipo4, posicionesTabla){


    let arrGFEquipo1 = [+arrEquipo1[0], +arrEquipo1[1], +arrEquipo1[2]].reduce((a,b) => a + b)
    let arrGFEquipo2 = [+arrEquipo2[0], +arrEquipo2[1], +arrEquipo2[2]].reduce((a,b) => a + b)
    let arrGFEquipo3 = [+arrEquipo3[0], +arrEquipo3[1], +arrEquipo3[2]].reduce((a,b) => a + b)
    let arrGFEquipo4 = [+arrEquipo4[0], +arrEquipo4[1], +arrEquipo4[2]].reduce((a,b) => a + b)
    let golesF = [arrGFEquipo1, arrGFEquipo2, arrGFEquipo3, arrGFEquipo4]

    let arrGCEquipo1 = [+arrEquipo2[0], +arrEquipo3[1], +arrEquipo4[2]].reduce((a,b) => a + b)
    let arrGCEquipo2 = [+arrEquipo1[0], +arrEquipo4[1], +arrEquipo3[2]].reduce((a,b) => a + b)
    let arrGCEquipo3 = [+arrEquipo4[0], +arrEquipo1[1], +arrEquipo2[2]].reduce((a,b) => a + b)
    let arrGCEquipo4 = [+arrEquipo3[0], +arrEquipo2[1], +arrEquipo1[2]].reduce((a,b) => a + b)
    let golesC = [arrGCEquipo1, arrGCEquipo2, arrGCEquipo3, arrGCEquipo4]

    let PJEquipo1 = arrEquipo1[0].length + arrEquipo1[1].length +arrEquipo1[2].length
    let PJEquipo2 = arrEquipo2[0].length + arrEquipo2[1].length +arrEquipo2[2].length
    let PJEquipo3 = arrEquipo3[0].length + arrEquipo3[1].length +arrEquipo3[2].length
    let PJEquipo4 = arrEquipo4[0].length + arrEquipo4[1].length +arrEquipo4[2].length
    let partidosJ = [PJEquipo1, PJEquipo2, PJEquipo3, PJEquipo4]

    let DifEquipo1 = arrGFEquipo1 - arrGCEquipo1
    let DifEquipo2 = arrGFEquipo2 - arrGCEquipo2
    let DifEquipo3 = arrGFEquipo3 - arrGCEquipo3
    let DifEquipo4 = arrGFEquipo4 - arrGCEquipo4
    let diferenciaGoles = [DifEquipo1, DifEquipo2, DifEquipo3, DifEquipo4]

    let ptsEquipo1 = 0
    let ptsEquipo2 = 0
    let ptsEquipo3 = 0
    let ptsEquipo4 = 0
   
        if (arrEquipo1[0].length === 0 && arrEquipo2[0].length === 0) ptsEquipo1 += 0, ptsEquipo2+=0
            else if (+arrEquipo1[0] > +arrEquipo2[0]) ptsEquipo1 += 3
            else if (+arrEquipo1[0] === +arrEquipo2[0]) ptsEquipo1 +=1, ptsEquipo2 +=1
            else ptsEquipo2 +=3
            
        if (arrEquipo3[0].length === 0 && arrEquipo4[0].length === 0) ptsEquipo3+=0, ptsEquipo4+=0
            else if (+arrEquipo3[0] > +arrEquipo4[0]) ptsEquipo3+=3
            else if (+arrEquipo3[0] === +arrEquipo4[0]) ptsEquipo3+=1, ptsEquipo4+=1
            else ptsEquipo4+=3             
           
        if (arrEquipo1[1].length === 0 && arrEquipo3[1].length === 0) ptsEquipo1 +=0, ptsEquipo3 +=0
            else if (+arrEquipo1[1] > +arrEquipo3[1]) ptsEquipo1+= 3
            else if (+arrEquipo1[1] === +arrEquipo3[1]) ptsEquipo1+= 1, ptsEquipo3+= 1
            else ptsEquipo3 += 3
            
        
        if (arrEquipo2[1].length === 0 && arrEquipo4[1].length === 0) ptsEquipo2 +=0, ptsEquipo4 +=0
            else if (+arrEquipo2[1] > +arrEquipo4[1]) ptsEquipo2+=3
            else if (+arrEquipo2[1] === +arrEquipo4[1]) ptsEquipo2+=1, ptsEquipo4+=1
            else ptsEquipo4+=3     

        if (arrEquipo1[2].length === 0 && arrEquipo4[2].length === 0) ptsEquipo1 += 0, ptsEquipo4 +=0
            else if (+arrEquipo1[2] > +arrEquipo4[2]) ptsEquipo1+=3
            else if (+arrEquipo1[2] === +arrEquipo4[2]) ptsEquipo1+=1, ptsEquipo4+=1
            else ptsEquipo4+=3
        
        if (arrEquipo2[2].length === 0 && arrEquipo3[2].length === 0) ptsEquipo2+=0, ptsEquipo3+=0
            else if (+arrEquipo2[2] > +arrEquipo3[2]) ptsEquipo2+=3
            else if (+arrEquipo2[2] === +arrEquipo3[2]) ptsEquipo2+=1, ptsEquipo3+=1
            else ptsEquipo3+=3
            


            
        
        let puntosEquipos = [ptsEquipo1, ptsEquipo2, ptsEquipo3, ptsEquipo4]

    tablaSmulador(grupo, golesF, golesC, partidosJ, diferenciaGoles, puntosEquipos, nameEquipo1, nameEquipo2, nameEquipo3, nameEquipo4,posicionesTabla)    


}

function tablaSmulador (grupo, golesF, golesC, partidosJ, diferenciaGoles, puntosEquipos, nameEquipo1, nameEquipo2, nameEquipo3, nameEquipo4, posicionesTabla) {

    let banderaEquipo1S = new Image();
    banderaEquipo1S.src = `https://www.promiedos.com.ar/images/ps/${nameEquipo1[0]}.gif`

    let banderaEquipo2S = new Image();
    banderaEquipo2S.src = `https://www.promiedos.com.ar/images/ps/${nameEquipo2[0]}.gif`    
    
    let banderaEquipo3S = new Image();
    banderaEquipo3S.src = `https://www.promiedos.com.ar/images/ps/${nameEquipo3[0]}.gif`

    let banderaEquipo4S = new Image();
    banderaEquipo4S.src = `https://www.promiedos.com.ar/images/ps/${nameEquipo4[0]}.gif`

    let grupoTabla = [
                { equipo: nameEquipo1, bandera: banderaEquipo1S, pts: puntosEquipos[0], pj: partidosJ[0], gf: golesF[0], gc: golesC[0],dif:  diferenciaGoles[0]},
                { equipo: nameEquipo2, bandera: banderaEquipo2S, pts: puntosEquipos[1], pj: partidosJ[1], gf: golesF[1], gc: golesC[1], dif: diferenciaGoles[1]},
                {equipo: nameEquipo3, bandera: banderaEquipo3S, pts: puntosEquipos[2], pj: partidosJ[2], gf: golesF[2], gc: golesC[2], dif: diferenciaGoles[2]},
                {equipo: nameEquipo4, bandera: banderaEquipo4S, pts: puntosEquipos[3], pj: partidosJ[3], gf: golesF[3], gc: golesC[3], dif: diferenciaGoles[3]}
            ]

            grupoTabla.sort((a, b) => b.dif - a.dif) // y despues por diferencia de goles
            grupoTabla.sort((a, b) => b.pts - a.pts) // ordenamos los objetos primero por pts
          

    posicionesTabla[0].textContent = grupoTabla[0].equipo[0] + " "
    posicionesTabla[0].appendChild(grupoTabla[0].bandera)
    posicionesTabla[1].textContent = grupoTabla[0].pts
    posicionesTabla[2].innerHTML = grupoTabla[0].pj
    posicionesTabla[3].innerHTML = grupoTabla[0].gf
    posicionesTabla[4].innerHTML = grupoTabla[0].gc
    posicionesTabla[5].innerHTML = grupoTabla[0].dif
    
    posicionesTabla[6].innerHTML = grupoTabla[1].equipo[0] + " "
    posicionesTabla[6].appendChild(grupoTabla[1].bandera)
    posicionesTabla[7].innerHTML = grupoTabla[1].pts
    posicionesTabla[8].innerHTML = grupoTabla[1].pj
    posicionesTabla[9].innerHTML = grupoTabla[1].gf
    posicionesTabla[10].innerHTML = grupoTabla[1].gc
    posicionesTabla[11].innerHTML = grupoTabla[1].dif
    
    posicionesTabla[12].innerHTML = grupoTabla[2].equipo[0] + " "
    posicionesTabla[12].appendChild(grupoTabla[2].bandera)
    posicionesTabla[13].innerHTML = grupoTabla[2].pts
    posicionesTabla[14].innerHTML = grupoTabla[2].pj
    posicionesTabla[15].innerHTML = grupoTabla[2].gf
    posicionesTabla[16].innerHTML = grupoTabla[2].gc
    posicionesTabla[17].innerHTML = grupoTabla[2].dif
    
    posicionesTabla[18].innerHTML = grupoTabla[3].equipo[0] + " "
    posicionesTabla[18].appendChild(grupoTabla[3].bandera)
    posicionesTabla[19].innerHTML = grupoTabla[3].pts
    posicionesTabla[20].innerHTML = grupoTabla[3].pj
    posicionesTabla[21].innerHTML = grupoTabla[3].gf
    posicionesTabla[22].innerHTML = grupoTabla[3].gc
    posicionesTabla[23].innerHTML = grupoTabla[3].dif

    convertirNodelist(grupo, grupoTabla, posicionesTabla)
}

function tablaAlCargar(grupo, nombreGrupo) {

    
    let banderaEquipo1S = new Image();
    banderaEquipo1S.src = `https://www.promiedos.com.ar/images/ps/${grupo[0].equipo[0]}.gif`

    let banderaEquipo2S = new Image();
    banderaEquipo2S.src = `https://www.promiedos.com.ar/images/ps/${grupo[1].equipo[0]}.gif`    
    
    let banderaEquipo3S = new Image();
    banderaEquipo3S.src = `https://www.promiedos.com.ar/images/ps/${grupo[2].equipo[0]}.gif`

    let banderaEquipo4S = new Image();
    banderaEquipo4S.src = `https://www.promiedos.com.ar/images/ps/${grupo[3].equipo[0]}.gif`

    const posicionesTablaCargada = d.querySelectorAll(`.posicion.${nombreGrupo}`)

    posicionesTablaCargada[0].textContent = grupo[0].equipo[0] + " "
    posicionesTablaCargada[0].appendChild(banderaEquipo1S)
    posicionesTablaCargada[1].textContent = grupo[0].pts
    posicionesTablaCargada[2].innerHTML = grupo[0].pj
    posicionesTablaCargada[3].innerHTML = grupo[0].gf
    posicionesTablaCargada[4].innerHTML = grupo[0].gc
    posicionesTablaCargada[5].innerHTML = grupo[0].dif
    
    posicionesTablaCargada[6].innerHTML = grupo[1].equipo[0] + " "
    posicionesTablaCargada[6].appendChild(banderaEquipo2S)
    posicionesTablaCargada[7].innerHTML = grupo[1].pts
    posicionesTablaCargada[8].innerHTML = grupo[1].pj
    posicionesTablaCargada[9].innerHTML = grupo[1].gf
    posicionesTablaCargada[10].innerHTML = grupo[1].gc
    posicionesTablaCargada[11].innerHTML = grupo[1].dif
    
    posicionesTablaCargada[12].innerHTML = grupo[2].equipo[0] + " "
    posicionesTablaCargada[12].appendChild(banderaEquipo3S)
    posicionesTablaCargada[13].innerHTML = grupo[2].pts
    posicionesTablaCargada[14].innerHTML = grupo[2].pj
    posicionesTablaCargada[15].innerHTML = grupo[2].gf
    posicionesTablaCargada[16].innerHTML = grupo[2].gc
    posicionesTablaCargada[17].innerHTML = grupo[2].dif
    
    posicionesTablaCargada[18].innerHTML = grupo[3].equipo[0] + " "
    posicionesTablaCargada[18].appendChild(banderaEquipo4S)
    posicionesTablaCargada[19].innerHTML = grupo[3].pts
    posicionesTablaCargada[20].innerHTML = grupo[3].pj
    posicionesTablaCargada[21].innerHTML = grupo[3].gf
    posicionesTablaCargada[22].innerHTML = grupo[3].gc
    posicionesTablaCargada[23].innerHTML = grupo[3].dif
    
}

function calcularPts(grupo){

    const prediccionesGuardadas = d.querySelectorAll(`.contPredicciones .resultados.${grupo}`)
    const resultadosReales = d.querySelectorAll(`.contReal .resultados.real.${grupo}`)
    const spanes = d.querySelectorAll(`.pp.${grupo}`)
    const bonusPuntos = d.querySelectorAll(`.bonus.${grupo}`)
    let arrEquipo1 = []
    let arrEquipo2 = []
    let arrEquipo3 = []
    let arrEquipo4 = []
    let arrEquipo1Real = []
    let arrEquipo2Real = []
    let arrEquipo3Real = []
    let arrEquipo4Real = []
    let arrSpanGrupo = []
    let bonusPts = []

    prediccionesGuardadas.forEach(element => {
        if (element.id.startsWith("1")) arrEquipo1.push(element.value)
        if (element.id.startsWith('2')) arrEquipo2.push(element.value)
        if (element.id.startsWith('3')) arrEquipo3.push(element.value)
        if (element.id.startsWith('4')) arrEquipo4.push(element.value)
    });

    resultadosReales.forEach(element => {
        if (element.id.startsWith("1")) arrEquipo1Real.push(element.value)
        if (element.id.startsWith('2')) arrEquipo2Real.push(element.value)
        if (element.id.startsWith('3')) arrEquipo3Real.push(element.value)
        if (element.id.startsWith('4')) arrEquipo4Real.push(element.value)
    });

    spanes.forEach(element => {
        arrSpanGrupo.push(element)
    });

    bonusPuntos.forEach(element => {
        bonusPts.push(element)
    });

    

    puntosSpan(arrEquipo1[0], arrEquipo2[0], arrEquipo1Real[0], arrEquipo2Real[0], arrSpanGrupo[0], bonusPts[0].checked, grupo, 1)
    puntosSpan(arrEquipo3[0], arrEquipo4[0], arrEquipo3Real[0], arrEquipo4Real[0], arrSpanGrupo[1], bonusPts[1].checked, grupo, 2)
    puntosSpan(arrEquipo1[1], arrEquipo3[1], arrEquipo1Real[1], arrEquipo3Real[1], arrSpanGrupo[2], bonusPts[2].checked, grupo, 3)
    puntosSpan(arrEquipo4[1], arrEquipo2[1], arrEquipo4Real[1], arrEquipo2Real[1], arrSpanGrupo[3], bonusPts[3].checked, grupo, 4)
    puntosSpan(arrEquipo1[2], arrEquipo4[2], arrEquipo1Real[2], arrEquipo4Real[2], arrSpanGrupo[4], bonusPts[4].checked, grupo, 5)
    puntosSpan(arrEquipo3[2], arrEquipo2[2], arrEquipo3Real[2], arrEquipo2Real[2], arrSpanGrupo[5], bonusPts[5].checked, grupo, 6)
}

function puntosSpan(arrEquipo1Simu, arrEquipo2Simu, arrEquipo1Real, arrEquipo2Real,span, bonusPts, grupo, index){
    let tresPTs = 3
    let dosPts = 2
    let unPts = 1

    if (bonusPts){
        tresPTs=6
        dosPts=4
        unPts=2
    }
 
    if (arrEquipo1Real.length === 0) { // hacemos esta comparacion para que cuando este vacio el input no lo tome como si fuese 0-0 y te tome como empate
        span.innerHTML = ""
        } else if (arrEquipo1Simu === arrEquipo1Real && 
        arrEquipo2Simu === arrEquipo2Real) {
         span.innerHTML= tresPTs
        } else if (arrEquipo1Real > arrEquipo2Real && 
                     arrEquipo1Simu > arrEquipo2Simu &&
                     arrEquipo1Real === arrEquipo1Simu &&
                     arrEquipo2Real !== arrEquipo2Simu) {
          span.innerHTML=dosPts
        } else if (arrEquipo1Real > arrEquipo2Real &&
                   arrEquipo1Simu > arrEquipo2Simu &&
                   arrEquipo1Real !== arrEquipo1Simu &&
                   arrEquipo2Real === arrEquipo2Simu) {
        span.innerHTML=dosPts
        } else if (arrEquipo1Real < arrEquipo2Real &&
                       arrEquipo1Simu < arrEquipo2Simu &&
                       arrEquipo1Real === arrEquipo1Simu &&
                       arrEquipo2Real !== arrEquipo2Simu ){
           span.innerHTML=dosPts
        } else if (arrEquipo1Real < arrEquipo2Real &&
                      arrEquipo1Simu < arrEquipo2Simu &&
                      arrEquipo1Real !== arrEquipo1Simu &&
                      arrEquipo2Real === arrEquipo2Simu) {
           span.innerHTML=dosPts
        } else if (arrEquipo1Real > arrEquipo2Real &&
                      arrEquipo1Simu < arrEquipo2Simu &&
                      arrEquipo1Real === arrEquipo1Simu &&
                      arrEquipo2Real !== arrEquipo2Simu ){
            span.innerHTML=unPts
        } else if (arrEquipo1Real > arrEquipo2Real &&
                    arrEquipo1Simu < arrEquipo2Simu &&
                    arrEquipo1Real !== arrEquipo1Simu &&
                    arrEquipo2Real === arrEquipo2Simu) {
            span.innerHTML=unPts
        } else if (arrEquipo1Real < arrEquipo2Real &&
                      arrEquipo1Simu > arrEquipo2Simu &&
                      arrEquipo1Real === arrEquipo1Simu &&
                      arrEquipo2Real !== arrEquipo2Simu) {
            span.innerHTML=unPts
        } else if (arrEquipo1Real < arrEquipo2Real &&
                    arrEquipo1Simu > arrEquipo2Simu &&
                   arrEquipo1Real !== arrEquipo1Simu &&
                   arrEquipo2Real === arrEquipo2Simu){
           span.innerHTML=unPts
        } else if (arrEquipo1Real === arrEquipo2Real &&
                      arrEquipo1Simu !== arrEquipo2Simu &&
                      arrEquipo1Real === arrEquipo1Simu &&
                      arrEquipo2Real !== arrEquipo2Simu ) {
            span.innerHTML=unPts
        } else if (arrEquipo1Real === arrEquipo2Real &&
                    arrEquipo1Simu !== arrEquipo2Simu &&
                    arrEquipo1Real !== arrEquipo1Simu &&
                    arrEquipo2Real === arrEquipo2Simu) {
           span.innerHTML=unPts
        } else if (arrEquipo1Real === arrEquipo2Real &&
                       arrEquipo1Simu === arrEquipo2Simu &&
                      arrEquipo1Real !== arrEquipo1Simu &&
                      arrEquipo2Real !== arrEquipo2Simu) {
            span.innerHTML=unPts
        } else if (arrEquipo1Real > arrEquipo2Real &&
                      arrEquipo1Simu > arrEquipo2Simu &&
                      arrEquipo1Real !== arrEquipo1Simu &&
                      arrEquipo2Real !== arrEquipo2Simu) {
            span.innerHTML=unPts
        } else if (arrEquipo1Real < arrEquipo2Real &&
                      arrEquipo1Simu < arrEquipo2Simu &&
                      arrEquipo1Real !== arrEquipo1Simu &&
                     arrEquipo2Real !== arrEquipo2Simu) {
             span.innerHTML= unPts
        } else if (arrEquipo1Real !== arrEquipo2Real &&
                      arrEquipo1Simu === arrEquipo2Simu &&
                      arrEquipo1Real === arrEquipo1Simu &&
                      arrEquipo2Real !== arrEquipo2Simu ) {
            span.innerHTML=unPts
        } else if (arrEquipo1Real !== arrEquipo2Real &&
                    arrEquipo1Simu === arrEquipo2Simu &&
                   arrEquipo1Real !== arrEquipo1Simu &&
                   arrEquipo2Real === arrEquipo2Simu){
           span.innerHTML=unPts  
        } else span.innerHTML=0

        localStorage.setItem(`${grupo}${index}`, +span.innerHTML)
}

function puntajeTotal(puntajeG, grupo) {
    const spanesGrupo = d.querySelectorAll(`.pp.${grupo}`)
    let totalPts = puntajeG.reduce((a,b) => a+b)
    spanesGrupo[6].innerHTML = totalPts
    localStorage.setItem(`puntaje${grupo}`,totalPts)
}