// Variables generales //

const d = document;

// ELEMENTOS DEL DOM DEL MENU //

const menu = d.getElementById("menuGrupos")
const botonBurger = d.getElementById("btnMenu")
const titulos = d.getElementsByClassName("desplegar")

// seleccionamos todos las filas de las tablas y lase colocamos en el arrray correspondiente //
const tablaReal = d.querySelectorAll('.posicion')
const grupoA=[]
const grupoB=[]
const grupoC=[]
const grupoD=[]
const grupoE=[]
const grupoF=[]
const grupoG=[]
const grupoH=[]
const grupoAS=[]
const grupoBS=[]
const grupoCS=[]
const grupoDS=[]
const grupoES=[]
const grupoFS=[]
const grupoGS=[]
const grupoHS=[]

for (let i=0; i<tablaReal.length; i++){
    if (tablaReal[i].classList[1] === 'gA'){
        grupoA.push(tablaReal[i])
    } else if (tablaReal[i].classList[1] === 'gB'){
        grupoB.push(tablaReal[i])
    } else if (tablaReal[i].classList[1] === 'gC'){
        grupoC.push(tablaReal[i])
    } else if (tablaReal[i].classList[1] === 'gD'){
        grupoD.push(tablaReal[i])
    } else if (tablaReal[i].classList[1] === 'gE'){
        grupoE.push(tablaReal[i])
    } else if (tablaReal[i].classList[1] === 'gF'){
        grupoF.push(tablaReal[i])
    } else if (tablaReal[i].classList[1] === 'gG'){
        grupoG.push(tablaReal[i])
    } else if (tablaReal[i].classList[1] === 'gH'){
        grupoH.push(tablaReal[i])
    } else if (tablaReal[i].classList[1] === 'gAS'){
        grupoAS.push(tablaReal[i])
    } else if (tablaReal[i].classList[1] === 'gBS'){
        grupoBS.push(tablaReal[i])
    } else if (tablaReal[i].classList[1] === 'gCS'){
        grupoCS.push(tablaReal[i])
    } else if (tablaReal[i].classList[1] === 'gDS'){
        grupoDS.push(tablaReal[i])
    } else if (tablaReal[i].classList[1] === 'gES'){
        grupoES.push(tablaReal[i])
    } else if (tablaReal[i].classList[1] === 'gFS'){
        grupoFS.push(tablaReal[i])
    } else if (tablaReal[i].classList[1] === 'gGS'){
        grupoGS.push(tablaReal[i])
    } else if (tablaReal[i].classList[1] === 'gHS'){
        grupoHS.push(tablaReal[i])
    }
}
// SPAN DE PUNTOS //

const spanPuntos = d.querySelectorAll('.pp')
const spanPuntosA = []
const spanPuntosB = []
const spanPuntosC = []
const spanPuntosD = []
const spanPuntosE = []
const spanPuntosF = []
const spanPuntosG = []
const spanPuntosH = []

for (let i=0; i<spanPuntos.length; i++){
    if (spanPuntos[i].classList[1] === "gA"){
        spanPuntosA.push(spanPuntos[i])
    } else if (spanPuntos[i].classList[1] === "gB"){
        spanPuntosB.push(spanPuntos[i])
    } else if (spanPuntos[i].classList[1] === "gC"){
        spanPuntosC.push(spanPuntos[i])
    } else if (spanPuntos[i].classList[1] === "gD"){
        spanPuntosD.push(spanPuntos[i])
    } else if (spanPuntos[i].classList[1] === "gE"){
        spanPuntosE.push(spanPuntos[i])
    } else if (spanPuntos[i].classList[1] === "gF"){
        spanPuntosF.push(spanPuntos[i]) 
    } else if (spanPuntos[i].classList[1] === "gG"){
        spanPuntosG.push(spanPuntos[i])
    } else if (spanPuntos[i].classList[1] === "gH"){
        spanPuntosH.push(spanPuntos[i])
    }
}

// GOLES PAISES REALES//

// CATAR //

const catarRealP1 = d.getElementById("qp1r").value
const catarRealP2 = d.getElementById("qp2r").value
const catarRealP3 = d.getElementById("qp3r").value


// ECUADOR //

const ecuadorRealP1 = d.getElementById("ep1r").value
const ecuadorRealP2 = d.getElementById("ep2r").value
const ecuadorRealP3 = d.getElementById("ep3r").value


// SENEGAL //

const senegalRealP1 = d.getElementById("sp1r").value
const senegalRealP2 = d.getElementById("sp2r").value
const senegalRealP3 = d.getElementById("sp3r").value


// HOLANDA //

const holandaRealP1 = d.getElementById("hp1r").value
const holandaRealP2 = d.getElementById("hp2r").value
const holandaRealP3 = d.getElementById("hp3r").value

// INGLATERRA // 

const inglaterraRealP1 = d.getElementById("ip1r").value
const inglaterraRealP2 = d.getElementById("ip2r").value
const inglaterraRealP3 = d.getElementById("ip3r").value

// IRAN // 

const iranRealP1 = d.getElementById("irp1r").value
const iranRealP2 = d.getElementById("irp2r").value
const iranRealP3 = d.getElementById("irp3r").value

// USA // 

const usaRealP1 = d.getElementById("up1r").value
const usaRealP2 = d.getElementById("up2r").value
const usaRealP3 = d.getElementById("up3r").value

// GALES // 

const galesRealP1 = d.getElementById("gp1r").value
const galesRealP2 = d.getElementById("gp2r").value
const galesRealP3 = d.getElementById("gp3r").value

// ARGENTINA // 

const argentinaRealP1 = d.getElementById("ap1r").value
const argentinaRealP2 = d.getElementById("ap2r").value
const argentinaRealP3 = d.getElementById("ap3r").value

// ARABIA SAUDITA // 

const arabiaRealP1 = d.getElementById("asp1r").value
const arabiaRealP2 = d.getElementById("asp2r").value
const arabiaRealP3 = d.getElementById("asp3r").value

// MEXICO // 

const mexicoRealP1 = d.getElementById("mp1r").value
const mexicoRealP2 = d.getElementById("mp2r").value
const mexicoRealP3 = d.getElementById("mp3r").value

// POLONIA // 

const poloniaRealP1 = d.getElementById("pp1r").value
const poloniaRealP2 = d.getElementById("pp2r").value
const poloniaRealP3 = d.getElementById("pp3r").value

// FRANCIA//

const franciaRealP1 = d.getElementById("fp1r").value
const franciaRealP2 = d.getElementById("fp2r").value
const franciaRealP3 = d.getElementById("fp3r").value

// AUSTRALIA //

const australiaRealP1 = d.getElementById("aup1r").value
const australiaRealP2 = d.getElementById("aup2r").value
const australiaRealP3 = d.getElementById("aup3r").value

// DINAMARCA //

const dinamarcaRealP1 = d.getElementById("dp1r").value
const dinamarcaRealP2 = d.getElementById("dp2r").value
const dinamarcaRealP3 = d.getElementById("dp3r").value

// TUNEZ //

const tunezRealP1 = d.getElementById("tp1r").value
const tunezRealP2 = d.getElementById("tp2r").value
const tunezRealP3 = d.getElementById("tp3r").value

// funciones //

function classBurgerMenu(evento) {

    if (evento.target.matches('.hamburger') || evento.target.matches('.hamburger-inner')) {
        botonBurger.classList.toggle("is-active")
        menu.classList.toggle("translate")
    }

    if (evento.target.matches('a')) { // lo que hacemos es que si el evento.target (elemento que ejecuta la accion) coincide con la etiqueta <a> que realice esa accion
        botonBurger.classList.remove("is-active")
        menu.classList.remove("translate")
    }

}

function predicciones (evento) {

    if(evento.target.matches('#enviarGA')){ //CUANDO HACEMOS CLICK, TOMA LOS VALORES INGRESADOR Y ARMA LA TABLA

        const catarSimuP1 = d.getElementById("qp1s").value
        const catarSimuP2 = d.getElementById("qp2s").value
        const catarSimuP3 = d.getElementById("qp3s").value
        const ecuadorSimuP1 = d.getElementById("ep1s").value
        const ecuadorSimuP2 = d.getElementById("ep2s").value
        const ecuadorSimuP3 = d.getElementById("ep3s").value
        const senegalSimuP1 = d.getElementById("sp1s").value
        const senegalSimuP2 = d.getElementById("sp2s").value
        const senegalSimuP3 = d.getElementById("sp3s").value
        const holandaSimuP1 = d.getElementById("hp1s").value
        const holandaSimuP2 = d.getElementById("hp2s").value
        const holandaSimuP3 = d.getElementById("hp3s").value

        

            // GRUPO A SIMULADOR //

            // CATAR TABLA SIMULADOR//

            let arrCatarGFS = [+catarSimuP1, +catarSimuP2, +catarSimuP3] // armamos array con los valores de los inputs
            let arrCatarGCS = [+ecuadorSimuP1, +senegalSimuP2, +holandaSimuP3] // armamos array donde van a estar todos los goles que recibe


            let catarPjS = catarSimuP1.length + catarSimuP2.length + catarSimuP3.length
            let catarGolesFS = arrCatarGFS.reduce((a, b) => a + b) // sumamos todos los goles a favor
            let catarGolesCS = arrCatarGCS.reduce((a, b) => a + b) // sumamos todos los goles en contra
            let catarDiferenciaS = catarGolesFS - catarGolesCS // restamos para sacar la difrencia de goles

            let catarPtsS = 0
            if (catarSimuP1.length === 0) { //usamos el lengt para comprobar de que no este vacio
                catarPtsS += 0
            } else if (catarSimuP1 > ecuadorSimuP1) {
                catarPtsS += 3
            } else if (catarSimuP1 === ecuadorSimuP1) {
                catarPtsS += 1
            } else if (catarSimuP3 < ecuadorSimuP1) {
                catarPtsS += 0
            }

            if (catarSimuP2.length === 0) {
                catarPtsS += 0
            } else if (catarSimuP2 > senegalSimuP2) {
                catarPtsS += 3
            } else if (catarSimuP2 === senegalSimuP2) {
                catarPtsS += 1
            } else if (catarSimuP3 < senegalSimuP2) {
                catarPtsS += 0
            }

            if (catarSimuP3.length === 0) {
                catarPtsS += 0
            } else if (catarSimuP3 > holandaSimuP3) {
                catarPtsS += 3
            } else if (catarSimuP3 === holandaSimuP3) {
                catarPtsS += 1
            } else if (catarSimuP3 < holandaSimuP3) {
                catarPtsS += 0
            }

            // ECUADOR TABLA //

            let arrEcuadorGFS = [+ecuadorSimuP1, +ecuadorSimuP2, +ecuadorSimuP3]
            let arrEcuadorGCS = [+catarSimuP1, +holandaSimuP2, +senegalSimuP3]

            let ecuadorPjS = ecuadorSimuP1.length + ecuadorSimuP2.length + ecuadorSimuP3.length
            let ecuadorGolesFS = arrEcuadorGFS.reduce((a, b) => a + b)
            let ecuadorGolesCS = arrEcuadorGCS.reduce((a, b) => a + b)
            let ecuadorDiferenciaS = ecuadorGolesFS - ecuadorGolesCS

            let ecuadorPtsS = 0
            if (ecuadorSimuP1.length === 0) {
                ecuadorPtsS += 0
            } else if (ecuadorSimuP1 > catarSimuP1) {
                ecuadorPtsS += 3
            } else if (ecuadorSimuP1 === catarSimuP1) {
                ecuadorPtsS += 1
            } else if (ecuadorSimuP1 < catarSimuP1) {
                ecuadorPtsS += 0
            }

            if (ecuadorSimuP2.length === 0) {
                ecuadorPtsS += 0
            } else if (ecuadorSimuP2 > holandaSimuP2) {
                ecuadorPtsS += 3
            } else if (ecuadorSimuP2 === holandaSimuP2) {
                ecuadorPtsS += 1
            } else if (ecuadorSimuP1 < holandaSimuP2) {
                ecuadorPtsS += 0
            }

            if (ecuadorSimuP3.length === 0) {
                ecuadorPtsS += 0
            } else if (ecuadorSimuP3 > senegalSimuP3) {
                ecuadorPtsS += 3
            } else if (ecuadorSimuP3 === senegalSimuP3) {
                ecuadorPtsS += 1
            } else if (ecuadorSimuP1 < senegalSimuP3) {
                ecuadorPtsS += 0
            }


            // SENEGAL TABLA //

            let arrSenegalGFS = [+senegalSimuP1, +senegalSimuP2, +senegalSimuP3] 
            let arrSenegalGCS = [+holandaSimuP1, +catarSimuP2, +ecuadorSimuP3]

            let senegalPjS = senegalSimuP1.length + senegalSimuP2.length + senegalSimuP3.length
            let senegalGolesFS = arrSenegalGFS.reduce((a, b) => a + b)
            let senegalGolesCS = arrSenegalGCS.reduce((a, b) => a + b)
            let senegalDiferenciaS = senegalGolesFS - senegalGolesCS

            let senegalPtsS = 0
            if (senegalSimuP1.length === 0) {
                senegalPtsS += 0
            } else if (senegalSimuP1 > holandaSimuP1) {
                senegalPtsS += 3
            } else if (senegalSimuP1 === holandaSimuP1) {
                senegalPtsS += 1
            } else if (senegalSimuP1 < holandaSimuP1) {
                senegalPtsS += 0
            }

            if (senegalSimuP2.length === 0) {
                senegalPtsS += 0
            } else if (senegalSimuP2 > catarSimuP2) {
                senegalPtsS += 3
            } else if (senegalSimuP2 === catarSimuP2) {
                senegalPtsS += 1
            } else if (senegalSimuP1 < catarSimuP2) {
                senegalPtsS += 0
            }

            if (senegalSimuP3.length === 0) {
                senegalPtsS += 0
            } else if (senegalSimuP3 > ecuadorSimuP3) {
                senegalPtsS += 3
            } else if (senegalSimuP3 === ecuadorSimuP3) {
                senegalPtsS += 1
            } else if (senegalSimuP1 < ecuadorSimuP3) {
                senegalPtsS += 0
            }


            // HOLANDA TABLA //

            let arrHolandaGFS = [+holandaSimuP1, +holandaSimuP2, +holandaSimuP3] 
            let arrHolandaGCS = [+senegalSimuP1, +ecuadorSimuP2, +catarSimuP3]

            let holandaPjS = holandaSimuP1.length + holandaSimuP2.length + holandaSimuP3.length
            let holandaGolesFS = arrHolandaGFS.reduce((a, b) => a + b)
            let holandaGolesCS = arrHolandaGCS.reduce((a, b) => a + b)
            let holandaDiferenciaS = holandaGolesFS - holandaGolesCS


            let holandaPtsS = 0
            if (holandaSimuP1.length === 0) {
                holandaPtsS += 0
            } else if (holandaSimuP1 > senegalSimuP1) {
                holandaPtsS += 3
            } else if (holandaSimuP1 === senegalSimuP1) {
                holandaPtsS += 1
            } else if (holandaSimuP1 < senegalSimuP1) {
                holandaPtsS += 0
            }

            if (holandaSimuP2.length === 0) {
                holandaPtsS += 0
            } else if (holandaSimuP2 > ecuadorSimuP2) {
                holandaPtsS += 3
            } else if (holandaSimuP2 === ecuadorSimuP2) {
                holandaPtsS += 1
            } else if (holandaSimuP1 < ecuadorSimuP2) {
                holandaPtsS += 0
            }

            if (holandaSimuP3.length === 0) {
                holandaPtsS += 0
            } else if (holandaSimuP3 > catarSimuP3) {
                holandaPtsS += 3
            } else if (holandaSimuP3 === catarSimuP3) {
                holandaPtsS += 1
            } else if (holandaSimuP1 < catarSimuP3) {
                holandaPtsS += 0
            }

            // TABLA GRUPO A //
            let banderaCatarS = new Image();
            banderaCatarS.src = "https://www.promiedos.com.ar/images/ps/qatar.gif"

            let banderaEcuadorS = new Image()
            banderaEcuadorS.src = "https://www.promiedos.com.ar/images/ps/ecuador.gif"

            let banderaSenegalS = new Image()
            banderaSenegalS.src = "https://www.promiedos.com.ar/images/ps/senegal.gif"

            let banderaHolandaS = new Image()
            banderaHolandaS.src = "https://www.promiedos.com.ar/images/ps/paisesbajos.gif"

            let gAS = [{ equipo: "catar", bandera: banderaCatarS, pts: catarPtsS, pj: catarPjS, gf: catarGolesFS, gc: catarGolesCS, dif: catarDiferenciaS },
            { equipo: "ecuador", bandera: banderaEcuadorS, pts: ecuadorPtsS, pj: ecuadorPjS, gf: ecuadorGolesFS, gc: ecuadorGolesCS, dif: ecuadorDiferenciaS },
            { equipo: "holanda", bandera: banderaHolandaS, pts: holandaPtsS, pj: holandaPjS, gf: holandaGolesFS, gc: holandaGolesCS, dif: holandaDiferenciaS },
            { equipo: "senegal", bandera: banderaSenegalS, pts: senegalPtsS, pj: senegalPjS, gf: senegalGolesFS, gc: senegalGolesCS, dif: senegalDiferenciaS }] // armamos un array donde guardamos toda la informacion de la tabla de grupos //

            gAS.sort((a, b) => b.dif - a.dif) // y despues por diferencia de goles
            gAS.sort((a, b) => b.pts - a.pts) // ordenamos los objetos primero por pts

            grupoAS[0].innerHTML = gAS[0].equipo
            grupoAS[0].appendChild(gAS[0].bandera)
            grupoAS[1].innerHTML = gAS[0].pts
            grupoAS[2].innerHTML = gAS[0].pj
            grupoAS[3].innerHTML = gAS[0].gf
            grupoAS[4].innerHTML = gAS[0].gc
            grupoAS[5].innerHTML = gAS[0].dif
            
            grupoAS[6].innerHTML = gAS[1].equipo
            grupoAS[6].appendChild(gAS[1].bandera)
            grupoAS[7].innerHTML = gAS[1].pts
            grupoAS[8].innerHTML = gAS[1].pj
            grupoAS[9].innerHTML = gAS[1].gf
            grupoAS[10].innerHTML = gAS[1].gc
            grupoAS[11].innerHTML = gAS[1].dif
            
            grupoAS[12].innerHTML = gAS[2].equipo
            grupoAS[12].appendChild(gAS[2].bandera)
            grupoAS[13].innerHTML = gAS[2].pts
            grupoAS[14].innerHTML = gAS[2].pj
            grupoAS[15].innerHTML = gAS[2].gf
            grupoAS[16].innerHTML = gAS[2].gc
            grupoAS[17].innerHTML = gAS[2].dif
            
            grupoAS[18].innerHTML = gAS[3].equipo
            grupoAS[18].appendChild(gAS[3].bandera)
            grupoAS[19].innerHTML = gAS[3].pts
            grupoAS[20].innerHTML = gAS[3].pj
            grupoAS[21].innerHTML = gAS[3].gf
            grupoAS[22].innerHTML = gAS[3].gc
            grupoAS[23].innerHTML = gAS[3].dif

  
    }

    if(evento.target.matches('#enviarGB')){ //CUANDO HACEMOS CLICK, TOMA LOS VALORES INGRESADOR Y ARMA LA TABLA

            const inglaterraSimuP1 = d.getElementById("ip1s").value
            const inglaterraSimuP2 = d.getElementById("ip2s").value
            const inglaterraSimuP3 = d.getElementById("ip3s").value
            const iranSimuP1 = d.getElementById("irp1s").value
            const iranSimuP2 = d.getElementById("irp2s").value
            const iranSimuP3 = d.getElementById("irp3s").value
            const usaSimuP1 = d.getElementById("up1s").value
            const usaSimuP2 = d.getElementById("up2s").value
            const usaSimuP3 = d.getElementById("up3s").value
            const galesSimuP1 = d.getElementById("gp1s").value
            const galesSimuP2 = d.getElementById("gp2s").value
            const galesSimuP3 = d.getElementById("gp3s").value
    
                // INGLATERRA TABLA SIMULADOR//
    
                let arrInglaterraGFS = [+inglaterraSimuP1, +inglaterraSimuP2, +inglaterraSimuP3] // armamos array con los valores de los inputs
                let arrInglaterraGCS = [+iranSimuP1, +usaSimuP2, +galesSimuP3] // armamos array donde van a estar todos los goles que recibe
    
                let inglaterraPjS = inglaterraSimuP1.length + inglaterraSimuP2.length + inglaterraSimuP3.length
                let inglaterraGolesFS = arrInglaterraGFS.reduce((a, b) => a + b) // sumamos todos los goles a favor
                let inglaterraGolesCS = arrInglaterraGCS.reduce((a, b) => a + b) // sumamos todos los goles en contra
                let inglaterraDiferenciaS = inglaterraGolesFS - inglaterraGolesCS // restamos para sacar la difrencia de goles
    
                let inglaterraPtsS = 0
                if (inglaterraSimuP1.length === 0) { //usamos el lengt para comprobar de que no este vacio
                    inglaterraPtsS += 0
                } else if (inglaterraSimuP1 > iranSimuP1) {
                    inglaterraPtsS += 3
                } else if (inglaterraSimuP1 === iranSimuP1) {
                    inglaterraPtsS += 1
                } else if (inglaterraSimuP3 < iranSimuP1) {
                    inglaterraPtsS += 0
                }
    
                if (inglaterraSimuP2.length === 0) {
                    inglaterraPtsS += 0
                } else if (inglaterraSimuP2 > usaSimuP2) {
                    inglaterraPtsS += 3
                } else if (inglaterraSimuP2 === usaSimuP2) {
                    inglaterraPtsS += 1
                } else if (inglaterraSimuP3 < usaSimuP2) {
                    inglaterraPtsS += 0
                }
    
                if (inglaterraSimuP3.length === 0) {
                    inglaterraPtsS += 0
                } else if (inglaterraSimuP3 > galesSimuP3) {
                    inglaterraPtsS += 3
                } else if (inglaterraSimuP3 === galesSimuP3) {
                    inglaterraPtsS += 1
                } else if (inglaterraSimuP3 < galesSimuP3) {
                    inglaterraPtsS += 0
                }
    
                // IRAN TABLA //
    
                let arrIranGFS = [+iranSimuP1, +iranSimuP2, +iranSimuP3]
                let arrIranGCS = [+inglaterraSimuP1, +galesSimuP2, +usaSimuP3]
    
                let iranPjS = iranSimuP1.length + iranSimuP2.length + iranSimuP3.length
                let iranGolesFS = arrIranGFS.reduce((a, b) => a + b)
                let iranGolesCS = arrIranGCS.reduce((a, b) => a + b)
                let iranDiferenciaS = iranGolesFS - iranGolesCS
    
                let iranPtsS = 0
                if (iranSimuP1.length === 0) {
                    iranPtsS += 0
                } else if (iranSimuP1 > inglaterraSimuP1) {
                    iranPtsS += 3
                } else if (iranSimuP1 === inglaterraSimuP1) {
                    iranPtsS += 1
                } else if (iranSimuP1 < inglaterraSimuP1) {
                    iranPtsS += 0
                }
    
                if (iranSimuP2.length === 0) {
                    iranPtsS += 0
                } else if (iranSimuP2 > galesSimuP2) {
                    iranPtsS += 3
                } else if (iranSimuP2 === galesSimuP2) {
                    iranPtsS += 1
                } else if (iranSimuP1 < galesSimuP2) {
                    iranPtsS += 0
                }
    
                if (iranSimuP3.length === 0) {
                    iranPtsS += 0
                } else if (iranSimuP3 > usaSimuP3) {
                    iranPtsS += 3
                } else if (iranSimuP3 === usaSimuP3) {
                    iranPtsS += 1
                } else if (iranSimuP1 < usaSimuP3) {
                    iranPtsS += 0
                }
    
    
                // USA TABLA //
    
                let arrUsaGFS = [+usaSimuP1, +usaSimuP2, +usaSimuP3] 
                let arrUsaGCS = [+galesSimuP1, +inglaterraSimuP2, +iranSimuP3]
    
                let usaPjS = usaSimuP1.length + usaSimuP2.length + usaSimuP3.length
                let usaGolesFS = arrUsaGFS.reduce((a, b) => a + b)
                let usaGolesCS = arrUsaGCS.reduce((a, b) => a + b)
                let usaDiferenciaS = usaGolesFS - usaGolesCS
    
                let usaPtsS = 0
                if (usaSimuP1.length === 0) {
                    usaPtsS += 0
                } else if (usaSimuP1 > galesSimuP1) {
                    usaPtsS += 3
                } else if (usaSimuP1 === galesSimuP1) {
                    usaPtsS += 1
                } else if (usaSimuP1 < galesSimuP1) {
                    usaPtsS += 0
                }
    
                if (usaSimuP2.length === 0) {
                    usaPtsS += 0
                } else if (usaSimuP2 > inglaterraSimuP2) {
                    usaPtsS += 3
                } else if (usaSimuP2 === inglaterraSimuP2) {
                    usaPtsS += 1
                } else if (usaSimuP1 < inglaterraSimuP2) {
                    usaPtsS += 0
                }
    
                if (usaSimuP3.length === 0) {
                    usaPtsS += 0
                } else if (usaSimuP3 > iranSimuP3) {
                    usaPtsS += 3
                } else if (usaSimuP3 === iranSimuP3) {
                    usaPtsS += 1
                } else if (usaSimuP1 < iranSimuP3) {
                    usaPtsS += 0
                }
    
    
                // GALES TABLA //
    
                let arrGalesGFS = [+galesSimuP1, +galesSimuP2, +galesSimuP3] 
                let arrGalesGCS = [+usaSimuP1, +iranSimuP2, +inglaterraSimuP3]
    
                let galesPjS = galesSimuP1.length + galesSimuP2.length + galesSimuP3.length
                let galesGolesFS = arrGalesGFS.reduce((a, b) => a + b)
                let galesGolesCS = arrGalesGCS.reduce((a, b) => a + b)
                let galesDiferenciaS = galesGolesFS - galesGolesCS
    
    
                let galesPtsS = 0
                if (galesSimuP1.length === 0) {
                    galesPtsS += 0
                } else if (galesSimuP1 > usaSimuP1) {
                    galesPtsS += 3
                } else if (galesSimuP1 === usaSimuP1) {
                    galesPtsS += 1
                } else if (galesSimuP1 < usaSimuP1) {
                    galesPtsS += 0
                }
    
                if (galesSimuP2.length === 0) {
                    galesPtsS += 0
                } else if (galesSimuP2 > iranSimuP2) {
                    galesPtsS += 3
                } else if (galesSimuP2 === iranSimuP2) {
                    galesPtsS += 1
                } else if (galesSimuP1 < iranSimuP2) {
                    galesPtsS += 0
                }
    
                if (galesSimuP3.length === 0) {
                    galesPtsS += 0
                } else if (galesSimuP3 > inglaterraSimuP3) {
                    galesPtsS += 3
                } else if (galesSimuP3 === inglaterraSimuP3) {
                    galesPtsS += 1
                } else if (galesSimuP1 < inglaterraSimuP3) {
                    galesPtsS += 0
                }
    
    
                // TABLA GRUPO A //
                let banderaInglaterraS = new Image();
                banderaInglaterraS.src = "https://www.promiedos.com.ar/images/ps/inglaterra.gif"
    
                let banderaIranS = new Image()
                banderaIranS.src = "https://www.promiedos.com.ar/images/ps/iran.gif"
    
                let banderaUsaS = new Image()
                banderaUsaS.src = "https://www.promiedos.com.ar/images/ps/usa.gif"
    
                let banderaGalesS = new Image()
                banderaGalesS.src = "https://www.promiedos.com.ar/images/ps/gales.gif"
    
                let gBS = [{ equipo: "Inglaterra", bandera: banderaInglaterraS, pts: inglaterraPtsS, pj: inglaterraPjS, gf: inglaterraGolesFS, gc: inglaterraGolesCS, dif: inglaterraDiferenciaS },
                { equipo: "Iran", bandera: banderaIranS, pts: iranPtsS, pj: iranPjS, gf: iranGolesFS, gc: iranGolesCS, dif: iranDiferenciaS },
                { equipo: "Usa", bandera: banderaUsaS, pts: usaPtsS, pj: usaPjS, gf: usaGolesFS, gc: usaGolesCS, dif: usaDiferenciaS },
                { equipo: "Gales", bandera: banderaGalesS, pts: galesPtsS, pj: galesPjS, gf: galesGolesFS, gc: galesGolesCS, dif: galesDiferenciaS }] // armamos un array donde guardamos toda la informacion de la tabla de grupos //
    
                gBS.sort((a, b) => b.dif - a.dif) // y despues por diferencia de goles
                gBS.sort((a, b) => b.pts - a.pts) // ordenamos los objetos primero por pts
    
    
                grupoBS[0].innerHTML = gBS[0].equipo
                grupoBS[0].appendChild(gBS[0].bandera)
                grupoBS[1].innerHTML = gBS[0].pts
                grupoBS[2].innerHTML = gBS[0].pj
                grupoBS[3].innerHTML = gBS[0].gf
                grupoBS[4].innerHTML = gBS[0].gc
                grupoBS[5].innerHTML = gBS[0].dif
                
                grupoBS[6].innerHTML = gBS[1].equipo
                grupoBS[6].appendChild(gBS[1].bandera)
                grupoBS[7].innerHTML = gBS[1].pts
                grupoBS[8].innerHTML = gBS[1].pj
                grupoBS[9].innerHTML = gBS[1].gf
                grupoBS[10].innerHTML = gBS[1].gc
                grupoBS[11].innerHTML = gBS[1].dif
                
                grupoBS[12].innerHTML = gBS[2].equipo
                grupoBS[12].appendChild(gBS[2].bandera)
                grupoBS[13].innerHTML = gBS[2].pts
                grupoBS[14].innerHTML = gBS[2].pj
                grupoBS[15].innerHTML = gBS[2].gf
                grupoBS[16].innerHTML = gBS[2].gc
                grupoBS[17].innerHTML = gBS[2].dif
                
                grupoBS[18].innerHTML = gBS[3].equipo
                grupoBS[18].appendChild(gBS[3].bandera)
                grupoBS[19].innerHTML = gBS[3].pts
                grupoBS[20].innerHTML = gBS[3].pj
                grupoBS[21].innerHTML = gBS[3].gf
                grupoBS[22].innerHTML = gBS[3].gc
                grupoBS[23].innerHTML = gBS[3].dif
    
    }
    

    if(evento.target.matches('#enviarGC')){
        const argentinaSimuP1 = d.getElementById("ap1s").value
        const argentinaSimuP2 = d.getElementById("ap2s").value
        const argentinaSimuP3 = d.getElementById("ap3s").value
        const arabiaSimuP1 = d.getElementById("asp1s").value
        const arabiaSimuP2 = d.getElementById("asp2s").value
        const arabiaSimuP3 = d.getElementById("asp3s").value
        const mexicoSimuP1 = d.getElementById("mp1s").value
        const mexicoSimuP2 = d.getElementById("mp2s").value
        const mexicoSimuP3 = d.getElementById("mp3s").value
        const poloniaSimuP1 = d.getElementById("polp1s").value
        const poloniaSimuP2 = d.getElementById("polp2s").value
        const poloniaSimuP3 = d.getElementById("polp3s").value
        

            // GRUPO C SIMULADOR //

            // ARGENTINA TABLA SIMULADOR//

            let arrArgentinaGFS = [+argentinaSimuP1, +argentinaSimuP2, +argentinaSimuP3] // armamos array con los valores de los inputs
            let arrArgentinaGCS = [+arabiaSimuP1, +mexicoSimuP2, +poloniaSimuP3] // armamos array donde van a estar todos los goles que recibe


            let argentinaPjS = argentinaSimuP1.length + argentinaSimuP2.length + argentinaSimuP3.length
            let argentinaGolesFS = arrArgentinaGFS.reduce((a, b) => a + b) // sumamos todos los goles a favor
            let argentinaGolesCS = arrArgentinaGCS.reduce((a, b) => a + b) // sumamos todos los goles en contra
            let argentinaDiferenciaS = argentinaGolesFS - argentinaGolesCS // restamos para sacar la difrencia de goles

            let argentinaPtsS = 0
            if (argentinaSimuP1.length === 0) { //usamos el lengt para comprobar de que no este vacio
                argentinaPtsS += 0
            } else if (argentinaSimuP1 > arabiaSimuP1) {
                argentinaPtsS += 3
            } else if (argentinaSimuP1 === arabiaSimuP1) {
                argentinaPtsS += 1
            } else if (argentinaSimuP3 < arabiaSimuP1) {
                argentinaPtsS += 0
            }

            if (argentinaSimuP2.length === 0) {
                argentinaPtsS += 0
            } else if (argentinaSimuP2 > mexicoSimuP2) {
                argentinaPtsS += 3
            } else if (argentinaSimuP2 === mexicoSimuP2) {
                argentinaPtsS += 1
            } else if (argentinaSimuP3 < mexicoSimuP2) {
                argentinaPtsS += 0
            }

            if (argentinaSimuP3.length === 0) {
                argentinaPtsS += 0
            } else if (argentinaSimuP3 > poloniaSimuP3) {
                argentinaPtsS += 3
            } else if (argentinaSimuP3 === poloniaSimuP3) {
                argentinaPtsS += 1
            } else if (argentinaSimuP3 < poloniaSimuP3) {
                argentinaPtsS += 0
            }

            // ARABIA TABLA //

            let arrArabiaGFS = [+arabiaSimuP1, +arabiaSimuP2, +arabiaSimuP3]
            let arrArabiaGCS = [+argentinaSimuP1, +poloniaSimuP2, +mexicoSimuP3]

            let arabiaPjS = arabiaSimuP1.length + arabiaSimuP2.length + arabiaSimuP3.length
            let arabiaGolesFS = arrArabiaGFS.reduce((a, b) => a + b)
            let arabiaGolesCS = arrArabiaGCS.reduce((a, b) => a + b)
            let arabiaDiferenciaS = arabiaGolesFS - arabiaGolesCS

            let arabiaPtsS = 0
            if (arabiaSimuP1.length === 0) {
                arabiaPtsS += 0
            } else if (arabiaSimuP1 > argentinaSimuP1) {
                arabiaPtsS += 3
            } else if (arabiaSimuP1 === argentinaSimuP1) {
                arabiaPtsS += 1
            } else if (arabiaSimuP1 < argentinaSimuP1) {
                arabiaPtsS += 0
            }

            if (arabiaSimuP2.length === 0) {
                arabiaPtsS += 0
            } else if (arabiaSimuP2 > poloniaSimuP2) {
                arabiaPtsS += 3
            } else if (arabiaSimuP2 === poloniaSimuP2) {
                arabiaPtsS += 1
            } else if (arabiaSimuP1 < poloniaSimuP2) {
                arabiaPtsS += 0
            }

            if (arabiaSimuP3.length === 0) {
                arabiaPtsS += 0
            } else if (arabiaSimuP3 > mexicoSimuP3) {
                arabiaPtsS += 3
            } else if (arabiaSimuP3 === mexicoSimuP3) {
                arabiaPtsS += 1
            } else if (arabiaSimuP1 < mexicoSimuP3) {
                arabiaPtsS += 0
            }


            // MEXICO TABLA //

            let arrMexicoGFS = [+mexicoSimuP1, +mexicoSimuP2, +mexicoSimuP3] 
            let arrMexicoGCS = [+poloniaSimuP1, +argentinaSimuP2, +arabiaSimuP3]

            let mexicoPjS = mexicoSimuP1.length + mexicoSimuP2.length + mexicoSimuP3.length
            let mexicoGolesFS = arrMexicoGFS.reduce((a, b) => a + b)
            let mexicoGolesCS = arrMexicoGCS.reduce((a, b) => a + b)
            let mexicoDiferenciaS = mexicoGolesFS - mexicoGolesCS

            let mexicoPtsS = 0
            if (mexicoSimuP1.length === 0) {
                mexicoPtsS += 0
            } else if (mexicoSimuP1 > poloniaSimuP1) {
                mexicoPtsS += 3
            } else if (mexicoSimuP1 === poloniaSimuP1) {
                mexicoPtsS += 1
            } else if (mexicoSimuP1 < poloniaSimuP1) {
                mexicoPtsS += 0
            }

            if (mexicoSimuP2.length === 0) {
                mexicoPtsS += 0
            } else if (mexicoSimuP2 > argentinaSimuP2) {
                mexicoPtsS += 3
            } else if (mexicoSimuP2 === argentinaSimuP2) {
                mexicoPtsS += 1
            } else if (mexicoSimuP1 < argentinaSimuP2) {
                mexicoPtsS += 0
            }

            if (mexicoSimuP3.length === 0) {
                mexicoPtsS += 0
            } else if (mexicoSimuP3 > arabiaSimuP3) {
                mexicoPtsS += 3
            } else if (mexicoSimuP3 === arabiaSimuP3) {
                mexicoPtsS += 1
            } else if (mexicoSimuP1 < arabiaSimuP3) {
                mexicoPtsS += 0
            }


            // POLONIA TABLA //

            let arrPoloniaGFS = [+poloniaSimuP1, +poloniaSimuP2, +poloniaSimuP3] 
            let arrPoloniaGCS = [+mexicoSimuP1, +arabiaSimuP2, +argentinaSimuP3]

            let poloniaPjS = poloniaSimuP1.length + poloniaSimuP2.length + poloniaSimuP3.length
            let poloniaGolesFS = arrPoloniaGFS.reduce((a, b) => a + b)
            let poloniaGolesCS = arrPoloniaGCS.reduce((a, b) => a + b)
            let poloniaDiferenciaS = poloniaGolesFS - poloniaGolesCS


            let poloniaPtsS = 0
            if (poloniaSimuP1.length === 0) {
                poloniaPtsS += 0
            } else if (poloniaSimuP1 > mexicoSimuP1) {
                poloniaPtsS += 3
            } else if (poloniaSimuP1 === mexicoSimuP1) {
                poloniaPtsS += 1
            } else if (poloniaSimuP1 < mexicoSimuP1) {
                poloniaPtsS += 0
            }

            if (poloniaSimuP2.length === 0) {
                poloniaPtsS += 0
            } else if (poloniaSimuP2 > arabiaSimuP2) {
                poloniaPtsS += 3
            } else if (poloniaSimuP2 === arabiaSimuP2) {
                poloniaPtsS += 1
            } else if (poloniaSimuP1 < arabiaSimuP2) {
                poloniaPtsS += 0
            }

            if (poloniaSimuP3.length === 0) {
                poloniaPtsS += 0
            } else if (poloniaSimuP3 > argentinaSimuP3) {
                poloniaPtsS += 3
            } else if (poloniaSimuP3 === argentinaSimuP3) {
                poloniaPtsS += 1
            } else if (poloniaSimuP1 < argentinaSimuP3) {
                poloniaPtsS += 0
            }

            // TABLA GRUPO C //
            let banderaArgentinaS = new Image();
            banderaArgentinaS.src = "https://www.promiedos.com.ar/images/ps/argentina.gif"

            let banderaArabiaS = new Image()
            banderaArabiaS.src = "https://www.promiedos.com.ar/images/ps/arabiasaudita.gif"

            let banderaMexicoS = new Image()
            banderaMexicoS.src = "https://www.promiedos.com.ar/images/ps/mexico.gif"

            let banderaPoloniaS = new Image()
            banderaPoloniaS.src = "https://www.promiedos.com.ar/images/ps/polonia.gif"

            let gCS = [{ equipo: "argentina", bandera: banderaArgentinaS, pts: argentinaPtsS, pj: argentinaPjS, gf: argentinaGolesFS, gc: argentinaGolesCS, dif: argentinaDiferenciaS },
            { equipo: "arabia", bandera: banderaArabiaS, pts: arabiaPtsS, pj: arabiaPjS, gf: arabiaGolesFS, gc: arabiaGolesCS, dif: arabiaDiferenciaS },
            { equipo: "polonia", bandera: banderaPoloniaS, pts: poloniaPtsS, pj: poloniaPjS, gf: poloniaGolesFS, gc: poloniaGolesCS, dif: poloniaDiferenciaS },
            { equipo: "mexico", bandera: banderaMexicoS, pts: mexicoPtsS, pj: mexicoPjS, gf: mexicoGolesFS, gc: mexicoGolesCS, dif: mexicoDiferenciaS }] // armamos un array donde guardamos toda la informacion de la tabla de grupos //

            gCS.sort((a, b) => b.dif - a.dif) // y despues por diferencia de goles
            gCS.sort((a, b) => b.pts - a.pts) // ordenamos los objetos primero por pts

            grupoCS[0].innerHTML = gCS[0].equipo
            grupoCS[0].appendChild(gCS[0].bandera)
            grupoCS[1].innerHTML = gCS[0].pts
            grupoCS[2].innerHTML = gCS[0].pj
            grupoCS[3].innerHTML = gCS[0].gf
            grupoCS[4].innerHTML = gCS[0].gc
            grupoCS[5].innerHTML = gCS[0].dif
            
            grupoCS[6].innerHTML = gCS[1].equipo
            grupoCS[6].appendChild(gCS[1].bandera)
            grupoCS[7].innerHTML = gCS[1].pts
            grupoCS[8].innerHTML = gCS[1].pj
            grupoCS[9].innerHTML = gCS[1].gf
            grupoCS[10].innerHTML = gCS[1].gc
            grupoCS[11].innerHTML = gCS[1].dif
            
            grupoCS[12].innerHTML = gCS[2].equipo
            grupoCS[12].appendChild(gCS[2].bandera)
            grupoCS[13].innerHTML = gCS[2].pts
            grupoCS[14].innerHTML = gCS[2].pj
            grupoCS[15].innerHTML = gCS[2].gf
            grupoCS[16].innerHTML = gCS[2].gc
            grupoCS[17].innerHTML = gCS[2].dif
            
            grupoCS[18].innerHTML = gCS[3].equipo
            grupoCS[18].appendChild(gCS[3].bandera)
            grupoCS[19].innerHTML = gCS[3].pts
            grupoCS[20].innerHTML = gCS[3].pj
            grupoCS[21].innerHTML = gCS[3].gf
            grupoCS[22].innerHTML = gCS[3].gc
            grupoCS[23].innerHTML = gCS[3].dif
    }
    

    if(evento.target.matches('#enviarGD')){
        const franciaSimuP1 = d.getElementById("fp1s").value
        const franciaSimuP2 = d.getElementById("fp2s").value
        const franciaSimuP3 = d.getElementById("fp3s").value
        const australiaSimuP1 = d.getElementById("aup1s").value
        const australiaSimuP2 = d.getElementById("aup2s").value
        const australiaSimuP3 = d.getElementById("aup3s").value
        const dinamarcaSimuP1 = d.getElementById("dp1s").value
        const dinamarcaSimuP2 = d.getElementById("dp2s").value
        const dinamarcaSimuP3 = d.getElementById("dp3s").value
        const tunezSimuP1 = d.getElementById("tp1s").value
        const tunezSimuP2 = d.getElementById("tp2s").value
        const tunezSimuP3 = d.getElementById("tp3s").value
        

            // GRUPO C SIMULADOR //

            // FRANCIA TABLA SIMULADOR//

            let arrFranciaGFS = [+franciaSimuP1, +franciaSimuP2, +franciaSimuP3] // armamos array con los valores de los inputs
            let arrFranciaGCS = [+australiaSimuP1, +dinamarcaSimuP2, +tunezSimuP3] // armamos array donde van a estar todos los goles que recibe


            let franciaPjS = franciaSimuP1.length + franciaSimuP2.length + franciaSimuP3.length
            let franciaGolesFS = arrFranciaGFS.reduce((a, b) => a + b) // sumamos todos los goles a favor
            let franciaGolesCS = arrFranciaGCS.reduce((a, b) => a + b) // sumamos todos los goles en contra
            let franciaDiferenciaS = franciaGolesFS - franciaGolesCS // restamos para sacar la difrencia de goles

            let franciaPtsS = 0
            if (franciaSimuP1.length === 0) { //usamos el lengt para comprobar de que no este vacio
                franciaPtsS += 0
            } else if (franciaSimuP1 > australiaSimuP1) {
                franciaPtsS += 3
            } else if (franciaSimuP1 === australiaSimuP1) {
                franciaPtsS += 1
            } else if (franciaSimuP3 < australiaSimuP1) {
                franciaPtsS += 0
            }

            if (franciaSimuP2.length === 0) {
                franciaPtsS += 0
            } else if (franciaSimuP2 > dinamarcaSimuP2) {
                franciaPtsS += 3
            } else if (franciaSimuP2 === dinamarcaSimuP2) {
                franciaPtsS += 1
            } else if (franciaSimuP3 < dinamarcaSimuP2) {
                franciaPtsS += 0
            }

            if (franciaSimuP3.length === 0) {
                franciaPtsS += 0
            } else if (franciaSimuP3 > tunezSimuP3) {
                franciaPtsS += 3
            } else if (franciaSimuP3 === tunezSimuP3) {
                franciaPtsS += 1
            } else if (franciaSimuP3 < tunezSimuP3) {
                franciaPtsS += 0
            }

            // AUSTRALIA TABLA //

            let arrAustraliaGFS = [+australiaSimuP1, +australiaSimuP2, +australiaSimuP3]
            let arrAustraliaGCS = [+franciaSimuP1, +tunezSimuP2, +dinamarcaSimuP3]

            let australiaPjS = australiaSimuP1.length + australiaSimuP2.length + australiaSimuP3.length
            let australiaGolesFS = arrAustraliaGFS.reduce((a, b) => a + b)
            let australiaGolesCS = arrAustraliaGCS.reduce((a, b) => a + b)
            let australiaDiferenciaS = australiaGolesFS - australiaGolesCS

            let australiaPtsS = 0
            if (australiaSimuP1.length === 0) {
                australiaPtsS += 0
            } else if (australiaSimuP1 > franciaSimuP1) {
                australiaPtsS += 3
            } else if (australiaSimuP1 === franciaSimuP1) {
                australiaPtsS += 1
            } else if (australiaSimuP1 < franciaSimuP1) {
                australiaPtsS += 0
            }

            if (australiaSimuP2.length === 0) {
                australiaPtsS += 0
            } else if (australiaSimuP2 > tunezSimuP2) {
                australiaPtsS += 3
            } else if (australiaSimuP2 === tunezSimuP2) {
                australiaPtsS += 1
            } else if (australiaSimuP1 < tunezSimuP2) {
                australiaPtsS += 0
            }

            if (australiaSimuP3.length === 0) {
                australiaPtsS += 0
            } else if (australiaSimuP3 > dinamarcaSimuP3) {
                australiaPtsS += 3
            } else if (australiaSimuP3 === dinamarcaSimuP3) {
                australiaPtsS += 1
            } else if (australiaSimuP1 < dinamarcaSimuP3) {
                australiaPtsS += 0
            }


            // DINAMARCA TABLA //

            let arrDinamarcaGFS = [+dinamarcaSimuP1, +dinamarcaSimuP2, +dinamarcaSimuP3] 
            let arrDinamarcaGCS = [+tunezSimuP1, +franciaSimuP2, +australiaSimuP3]

            let dinamarcaPjS = dinamarcaSimuP1.length + dinamarcaSimuP2.length + dinamarcaSimuP3.length
            let dinamarcaGolesFS = arrDinamarcaGFS.reduce((a, b) => a + b)
            let dinamarcaGolesCS = arrDinamarcaGCS.reduce((a, b) => a + b)
            let dinamarcaDiferenciaS = dinamarcaGolesFS - dinamarcaGolesCS

            let dinamarcaPtsS = 0
            if (dinamarcaSimuP1.length === 0) {
                dinamarcaPtsS += 0
            } else if (dinamarcaSimuP1 > tunezSimuP1) {
                dinamarcaPtsS += 3
            } else if (dinamarcaSimuP1 === tunezSimuP1) {
                dinamarcaPtsS += 1
            } else if (dinamarcaSimuP1 < tunezSimuP1) {
                dinamarcaPtsS += 0
            }

            if (dinamarcaSimuP2.length === 0) {
                dinamarcaPtsS += 0
            } else if (dinamarcaSimuP2 > franciaSimuP2) {
                dinamarcaPtsS += 3
            } else if (dinamarcaSimuP2 === franciaSimuP2) {
                dinamarcaPtsS += 1
            } else if (dinamarcaSimuP1 < franciaSimuP2) {
                dinamarcaPtsS += 0
            }

            if (dinamarcaSimuP3.length === 0) {
                dinamarcaPtsS += 0
            } else if (dinamarcaSimuP3 > australiaSimuP3) {
                dinamarcaPtsS += 3
            } else if (dinamarcaSimuP3 === australiaSimuP3) {
                dinamarcaPtsS += 1
            } else if (dinamarcaSimuP1 < australiaSimuP3) {
                dinamarcaPtsS += 0
            }


            // POLONIA TABLA //

            let arrTunezGFS = [+tunezSimuP1, +tunezSimuP2, +tunezSimuP3] 
            let arrTunezGCS = [+dinamarcaSimuP1, +australiaSimuP2, +franciaSimuP3]

            let tunezPjS = tunezSimuP1.length + tunezSimuP2.length + tunezSimuP3.length
            let tunezGolesFS = arrTunezGFS.reduce((a, b) => a + b)
            let tunezGolesCS = arrTunezGCS.reduce((a, b) => a + b)
            let tunezDiferenciaS = tunezGolesFS - tunezGolesCS


            let tunezPtsS = 0
            if (tunezSimuP1.length === 0) {
                tunezPtsS += 0
            } else if (tunezSimuP1 > dinamarcaSimuP1) {
                tunezPtsS += 3
            } else if (tunezSimuP1 === dinamarcaSimuP1) {
                tunezPtsS += 1
            } else if (tunezSimuP1 < dinamarcaSimuP1) {
                tunezPtsS += 0
            }

            if (tunezSimuP2.length === 0) {
                tunezPtsS += 0
            } else if (tunezSimuP2 > australiaSimuP2) {
                tunezPtsS += 3
            } else if (tunezSimuP2 === australiaSimuP2) {
                tunezPtsS += 1
            } else if (tunezSimuP1 < australiaSimuP2) {
                tunezPtsS += 0
            }

            if (tunezSimuP3.length === 0) {
                tunezPtsS += 0
            } else if (tunezSimuP3 > franciaSimuP3) {
                tunezPtsS += 3
            } else if (tunezSimuP3 === franciaSimuP3) {
                tunezPtsS += 1
            } else if (tunezSimuP1 < franciaSimuP3) {
                tunezPtsS += 0
            }

            // TABLA GRUPO C //
            let banderaFranciaS = new Image();
            banderaFranciaS.src = "https://www.promiedos.com.ar/images/ps/francia.gif"

            let banderaAustraliaS = new Image()
            banderaAustraliaS.src = "https://www.promiedos.com.ar/images/ps/australia.gif"

            let banderaDinamarcaS = new Image()
            banderaDinamarcaS.src = "https://www.promiedos.com.ar/images/ps/dinamarca.gif"

            let banderaTunezS = new Image()
            banderaTunezS.src = "https://www.promiedos.com.ar/images/ps/tunez.gif"

            let gDS = [{ equipo: "francia", bandera: banderaFranciaS, pts: franciaPtsS, pj: franciaPjS, gf: franciaGolesFS, gc: franciaGolesCS, dif: franciaDiferenciaS },
            { equipo: "australia", bandera: banderaAustraliaS, pts: australiaPtsS, pj: australiaPjS, gf: australiaGolesFS, gc: australiaGolesCS, dif: australiaDiferenciaS },
            { equipo: "tunez", bandera: banderaTunezS, pts: tunezPtsS, pj: tunezPjS, gf: tunezGolesFS, gc: tunezGolesCS, dif: tunezDiferenciaS },
            { equipo: "dinamarca", bandera: banderaDinamarcaS, pts: dinamarcaPtsS, pj: dinamarcaPjS, gf: dinamarcaGolesFS, gc: dinamarcaGolesCS, dif: dinamarcaDiferenciaS }] // armamos un array donde guardamos toda la informacion de la tabla de grupos //

            gDS.sort((a, b) => b.dif - a.dif) // y despues por diferencia de goles
            gDS.sort((a, b) => b.pts - a.pts) // ordenamos los objetos primero por pts

            grupoDS[0].innerHTML = gDS[0].equipo
            grupoDS[0].appendChild(gDS[0].bandera)
            grupoDS[1].innerHTML = gDS[0].pts
            grupoDS[2].innerHTML = gDS[0].pj
            grupoDS[3].innerHTML = gDS[0].gf
            grupoDS[4].innerHTML = gDS[0].gc
            grupoDS[5].innerHTML = gDS[0].dif
            
            grupoDS[6].innerHTML = gDS[1].equipo
            grupoDS[6].appendChild(gDS[1].bandera)
            grupoDS[7].innerHTML = gDS[1].pts
            grupoDS[8].innerHTML = gDS[1].pj
            grupoDS[9].innerHTML = gDS[1].gf
            grupoDS[10].innerHTML = gDS[1].gc
            grupoDS[11].innerHTML = gDS[1].dif
            
            grupoDS[12].innerHTML = gDS[2].equipo
            grupoDS[12].appendChild(gDS[2].bandera)
            grupoDS[13].innerHTML = gDS[2].pts
            grupoDS[14].innerHTML = gDS[2].pj
            grupoDS[15].innerHTML = gDS[2].gf
            grupoDS[16].innerHTML = gDS[2].gc
            grupoDS[17].innerHTML = gDS[2].dif
            
            grupoDS[18].innerHTML = gDS[3].equipo
            grupoDS[18].appendChild(gDS[3].bandera)
            grupoDS[19].innerHTML = gDS[3].pts
            grupoDS[20].innerHTML = gDS[3].pj
            grupoDS[21].innerHTML = gDS[3].gf
            grupoDS[22].innerHTML = gDS[3].gc
            grupoDS[23].innerHTML = gDS[3].dif
    }

    if(evento.target.matches('#enviarGE')){
        
    }

    if(evento.target.matches('#enviarGF')){
        
    }

    if(evento.target.matches('#enviarGG')){
        
    }

    if(evento.target.matches('#enviarGH')){
        
    }
}
// CONTADOR DE PUNTOS GRUPO A //
// tomamos los valores de los simulados, que luego deberiamos traerlos del local storage
        const catarSimuP1 = d.getElementById("qp1s").value
        const catarSimuP2 = d.getElementById("qp2s").value
        const catarSimuP3 = d.getElementById("qp3s").value
        const ecuadorSimuP1 = d.getElementById("ep1s").value
        const ecuadorSimuP2 = d.getElementById("ep2s").value
        const ecuadorSimuP3 = d.getElementById("ep3s").value
        const senegalSimuP1 = d.getElementById("sp1s").value
        const senegalSimuP2 = d.getElementById("sp2s").value
        const senegalSimuP3 = d.getElementById("sp3s").value
        const holandaSimuP1 = d.getElementById("hp1s").value
        const holandaSimuP2 = d.getElementById("hp2s").value
        const holandaSimuP3 = d.getElementById("hp3s").value    


// COMPARACION DE PUNTOS //

    if (catarRealP1.length === 0) { // hacemos esta comparacion para que cuando este vacio el input no lo tome como si fuese 0-0 y te tome como empate
    spanPuntosA[0].innerHTML = ""
    } else if (catarSimuP1 === catarRealP1 && // CATAR VS ECUADOR //
    ecuadorSimuP1 === ecuadorRealP1) {
     spanPuntosA[0].innerHTML=3
    } else if (catarRealP1 > ecuadorRealP1 && 
                 catarSimuP1 > ecuadorSimuP1 &&
                 catarRealP1 === catarSimuP1 &&
                 ecuadorRealP1 !== ecuadorSimuP1) {
      spanPuntosA[0].innerHTML=2
    } else if (catarRealP1 > ecuadorRealP1 &&
               catarSimuP1 > ecuadorSimuP1 &&
               catarRealP1 !== catarSimuP1 &&
               ecuadorRealP1 === ecuadorSimuP1) {
    spanPuntosA[0].innerHTML=2
    } else if (catarRealP1 < ecuadorRealP1 &&
                   catarSimuP1 < ecuadorSimuP1 &&
                   catarRealP1 === catarSimuP1 &&
                   ecuadorRealP1 !== ecuadorSimuP1 ){
       spanPuntosA[0].innerHTML=2
    } else if (catarRealP1 < ecuadorRealP1 &&
                  catarSimuP1 < ecuadorSimuP1 &&
                  catarRealP1 !== catarSimuP1 &&
                  ecuadorRealP1 === ecuadorSimuP1) {
       spanPuntosA[0].innerHTML=2
    } else if (catarRealP1 > ecuadorRealP1 &&
                  catarSimuP1 < ecuadorSimuP1 &&
                  catarRealP1 === catarSimuP1 &&
                  ecuadorRealP1 !== ecuadorSimuP1 ){
        spanPuntosA[0].innerHTML=1
    } else if (catarRealP1 > ecuadorRealP1 &&
                catarSimuP1 < ecuadorSimuP1 &&
                catarRealP1 !== catarSimuP1 &&
                ecuadorRealP1 === ecuadorSimuP1) {
        spanPuntosA[0].innerHTML=1
    } else if (catarRealP1 < ecuadorRealP1 &&
                  catarSimuP1 > ecuadorSimuP1 &&
                  catarRealP1 === catarSimuP1 &&
                  ecuadorRealP1 !== ecuadorSimuP1) {
        spanPuntosA[0].innerHTML=1
    } else if (catarRealP1 < ecuadorRealP1 &&
                catarSimuP1 > ecuadorSimuP1 &&
               catarRealP1 !== catarSimuP1 &&
               ecuadorRealP1 === ecuadorSimuP1){
       spanPuntosA[0].innerHTML=1
    } else if (catarRealP1 === ecuadorRealP1 &&
                  catarSimuP1 !== ecuadorSimuP1 &&
                  catarRealP1 === catarSimuP1 &&
                  ecuadorRealP1 !== ecuadorSimuP1 ) {
        spanPuntosA[0].innerHTML=1
    } else if (catarRealP1 === ecuadorRealP1 &&
                catarSimuP1 !== ecuadorSimuP1 &&
                catarRealP1 !== catarSimuP1 &&
                ecuadorRealP1 === ecuadorSimuP1) {
       spanPuntosA[0].innerHTML=1
    } else if (catarRealP1 === ecuadorRealP1 &&
                   catarSimuP1 === ecuadorSimuP1 &&
                  catarRealP1 !== catarSimuP1 &&
                  ecuadorRealP1 !== ecuadorSimuP1) {
        spanPuntosA[0].innerHTML=1
    } else if (catarRealP1 > ecuadorRealP1 &&
                  catarSimuP1 > ecuadorSimuP1 &&
                  catarRealP1 !== catarSimuP1 &&
                  ecuadorRealP1 !== ecuadorSimuP1) {
        spanPuntosA[0].innerHTML=1
    } else if (catarRealP1 < ecuadorRealP1 &&
                  catarSimuP1 < ecuadorSimuP1 &&
                  catarRealP1 !== catarSimuP1 &&
                 ecuadorRealP1 !== ecuadorSimuP1) {
         spanPuntosA[0].innerHTML= 1
    } else if (catarRealP1 !== ecuadorRealP1 &&
                  catarSimuP1 === ecuadorSimuP1 &&
                  catarRealP1 === catarSimuP1 &&
                  ecuadorRealP1 !== ecuadorSimuP1 ) {
        spanPuntosA[0].innerHTML=1
    } else if (catarRealP1 !== ecuadorRealP1 &&
                catarSimuP1 === ecuadorSimuP1 &&
               catarRealP1 !== catarSimuP1 &&
               ecuadorRealP1 === ecuadorSimuP1){
       spanPuntosA[0].innerHTML=1  
    } else spanPuntosA[0].innerHTML=0
    
    
    //SENEGAL VS HOLANDA
    if (senegalRealP1.length === 0) {
        spanPuntosA[1].innerHTML = ""
    }else if (senegalSimuP1 === senegalRealP1 && 
    holandaSimuP1 === holandaRealP1) {
     spanPuntosA[1].innerHTML=3
    } else if (senegalRealP1 > holandaRealP1 && 
                 senegalSimuP1 > holandaSimuP1 &&
                 senegalRealP1 === senegalSimuP1 &&
                 holandaRealP1 !== holandaSimuP1) {
      spanPuntosA[1].innerHTML=2
    } else if (senegalRealP1 > holandaRealP1 &&
               senegalSimuP1 > holandaSimuP1 &&
               senegalRealP1 !== senegalSimuP1 &&
               holandaRealP1 === holandaSimuP1) {
    spanPuntosA[1].innerHTML=2
    } else if (senegalRealP1 < holandaRealP1 &&
                   senegalSimuP1 < holandaSimuP1 &&
                   senegalRealP1 === senegalSimuP1 &&
                   holandaRealP1 !== holandaSimuP1 ){
       spanPuntosA[1].innerHTML=2
    } else if (senegalRealP1 < holandaRealP1 &&
                  senegalSimuP1 < holandaSimuP1 &&
                  senegalRealP1 !== senegalSimuP1 &&
                  holandaRealP1 === holandaSimuP1) {
       spanPuntosA[1].innerHTML=2
    } else if (senegalRealP1 > holandaRealP1 &&
                  senegalSimuP1 < holandaSimuP1 &&
                  senegalRealP1 === senegalSimuP1 &&
                  holandaRealP1 !== holandaSimuP1 ){
        spanPuntosA[1].innerHTML=1
    } else if (senegalRealP1 > holandaRealP1 &&
                senegalSimuP1 < holandaSimuP1 &&
                senegalRealP1 !== senegalSimuP1 &&
                holandaRealP1 === holandaSimuP1) {
        spanPuntosA[1].innerHTML=1
    } else if (senegalRealP1 < holandaRealP1 &&
                  senegalSimuP1 > holandaSimuP1 &&
                  senegalRealP1 === senegalSimuP1 &&
                  holandaRealP1 !== holandaSimuP1) {
        spanPuntosA[1].innerHTML=1
    } else if (senegalRealP1 < holandaRealP1 &&
                senegalSimuP1 > holandaSimuP1 &&
               senegalRealP1 !== senegalSimuP1 &&
               holandaRealP1 === holandaSimuP1){
       spanPuntosA[1].innerHTML=1
    } else if (senegalRealP1 === holandaRealP1 &&
                  senegalSimuP1 !== holandaSimuP1 &&
                  senegalRealP1 === senegalSimuP1 &&
                  holandaRealP1 !== holandaSimuP1 ) {
        spanPuntosA[1].innerHTML=1
    } else if (senegalRealP1 === holandaRealP1 &&
                senegalSimuP1 !== holandaSimuP1 &&
                senegalRealP1 !== senegalSimuP1 &&
                holandaRealP1 === holandaSimuP1) {
       spanPuntosA[1].innerHTML=1
    } else if (senegalRealP1 === holandaRealP1 &&
                   senegalSimuP1 === holandaSimuP1 &&
                  senegalRealP1 !== senegalSimuP1 &&
                  holandaRealP1 !== holandaSimuP1) {
        spanPuntosA[1].innerHTML=1
    } else if (senegalRealP1 > holandaRealP1 &&
                  senegalSimuP1 > holandaSimuP1 &&
                  senegalRealP1 !== senegalSimuP1 &&
                  holandaRealP1 !== holandaSimuP1) {
        spanPuntosA[1].innerHTML=1
    } else if (senegalRealP1 < holandaRealP1 &&
                  senegalSimuP1 < holandaSimuP1 &&
                  senegalRealP1 !== senegalSimuP1 &&
                 holandaRealP1 !== holandaSimuP1) {
         spanPuntosA[1].innerHTML= 1
    } else if (senegalRealP1 !== holandaRealP1 &&
                  senegalSimuP1 === holandaSimuP1 &&
                  senegalRealP1 === senegalSimuP1 &&
                  holandaRealP1 !== holandaSimuP1 ) {
        spanPuntosA[1].innerHTML=1
    } else if (senegalRealP1 !== holandaRealP1 &&
                senegalSimuP1 === holandaSimuP1 &&
               senegalRealP1 !== senegalSimuP1 &&
               holandaRealP1 === holandaSimuP1){
       spanPuntosA[1].innerHTML=1  
    } else spanPuntosA[1].innerHTML=0
    
    
    //CATAR VS SENEGAL
    if (catarRealP2.length === 0) {
        spanPuntosA[2].innerHTML = ""
    } else if (catarSimuP2 === catarRealP2 && 
    senegalSimuP2 === senegalRealP2) {
     spanPuntosA[2].innerHTML=3
    } else if (catarRealP2 > senegalRealP2 && 
                 catarSimuP2 > senegalSimuP2 &&
                 catarRealP2 === catarSimuP2 &&
                 senegalRealP2 !== senegalSimuP2) {
      spanPuntosA[2].innerHTML=2
    } else if (catarRealP2 > senegalRealP2 &&
               catarSimuP2 > senegalSimuP2 &&
               catarRealP2 !== catarSimuP2 &&
               senegalRealP2 === senegalSimuP2) {
    spanPuntosA[2].innerHTML=2
    } else if (catarRealP2 < senegalRealP2 &&
                   catarSimuP2 < senegalSimuP2 &&
                   catarRealP2 === catarSimuP2 &&
                   senegalRealP2 !== senegalSimuP2 ){
       spanPuntosA[2].innerHTML=2
    } else if (catarRealP2 < senegalRealP2 &&
                  catarSimuP2 < senegalSimuP2 &&
                  catarRealP2 !== catarSimuP2 &&
                  senegalRealP2 === senegalSimuP2) {
       spanPuntosA[2].innerHTML=2
    } else if (catarRealP2 > senegalRealP2 &&
                  catarSimuP2 < senegalSimuP2 &&
                  catarRealP2 === catarSimuP2 &&
                  senegalRealP2 !== senegalSimuP2 ){
        spanPuntosA[2].innerHTML=1
    } else if (catarRealP2 > senegalRealP2 &&
                catarSimuP2 < senegalSimuP2 &&
                catarRealP2 !== catarSimuP2 &&
                senegalRealP2 === senegalSimuP2) {
        spanPuntosA[2].innerHTML=1
    } else if (catarRealP2 < senegalRealP2 &&
                  catarSimuP2 > senegalSimuP2 &&
                  catarRealP2 === catarSimuP2 &&
                  senegalRealP2 !== senegalSimuP2) {
        spanPuntosA[2].innerHTML=1
    } else if (catarRealP2 < senegalRealP2 &&
                catarSimuP2 > senegalSimuP2 &&
               catarRealP2 !== catarSimuP2 &&
               senegalRealP2 === senegalSimuP2){
       spanPuntosA[2].innerHTML=1
    } else if (catarRealP2 === senegalRealP2 &&
                  catarSimuP2 !== senegalSimuP2 &&
                  catarRealP2 === catarSimuP2 &&
                  senegalRealP2 !== senegalSimuP2 ) {
        spanPuntosA[2].innerHTML=1
    } else if (catarRealP2 === senegalRealP2 &&
                catarSimuP2 !== senegalSimuP2 &&
                catarRealP2 !== catarSimuP2 &&
                senegalRealP2 === senegalSimuP2) {
       spanPuntosA[2].innerHTML=1
    } else if (catarRealP2 === senegalRealP2 &&
                   catarSimuP2 === senegalSimuP2 &&
                  catarRealP2 !== catarSimuP2 &&
                  senegalRealP2 !== senegalSimuP2) {
        spanPuntosA[2].innerHTML=1
    } else if (catarRealP2 > senegalRealP2 &&
                  catarSimuP2 > senegalSimuP2 &&
                  catarRealP2 !== catarSimuP2 &&
                  senegalRealP2 !== senegalSimuP2) {
        spanPuntosA[2].innerHTML=1
    } else if (catarRealP2 < senegalRealP2 &&
                  catarSimuP2 < senegalSimuP2 &&
                  catarRealP2 !== catarSimuP2 &&
                 senegalRealP2 !== senegalSimuP2) {
         spanPuntosA[2].innerHTML= 1
    } else if (catarRealP2 !== senegalRealP2 &&
                  catarSimuP2 === senegalSimuP2 &&
                  catarRealP2 === catarSimuP2 &&
                  senegalRealP2 !== senegalSimuP2 ) {
        spanPuntosA[2].innerHTML=1
    } else if (catarRealP2 !== senegalRealP2 &&
                catarSimuP2 === senegalSimuP2 &&
               catarRealP2 !== catarSimuP2 &&
               senegalRealP2 === senegalSimuP2){
       spanPuntosA[2].innerHTML=1  
    } else spanPuntosA[2].innerHTML=0
    
    
    //HOLANDA VS ECUADOR
    if (holandaRealP2.length === 0){
        spanPuntosA[3].innerHTML = ""
    }else if (holandaSimuP2 === holandaRealP2 && 
    ecuadorSimuP2 === ecuadorRealP2) {
     spanPuntosA[3].innerHTML=3
    } else if (holandaRealP2 > ecuadorRealP2 && 
                 holandaSimuP2 > ecuadorSimuP2 &&
                 holandaRealP2 === holandaSimuP2 &&
                 ecuadorRealP2 !== ecuadorSimuP2) {
      spanPuntosA[3].innerHTML=2
    } else if (holandaRealP2 > ecuadorRealP2 &&
               holandaSimuP2 > ecuadorSimuP2 &&
               holandaRealP2 !== holandaSimuP2 &&
               ecuadorRealP2 === ecuadorSimuP2) {
    spanPuntosA[3].innerHTML=2
    } else if (holandaRealP2 < ecuadorRealP2 &&
                   holandaSimuP2 < ecuadorSimuP2 &&
                   holandaRealP2 === holandaSimuP2 &&
                   ecuadorRealP2 !== ecuadorSimuP2 ){
       spanPuntosA[3].innerHTML=2
    } else if (holandaRealP2 < ecuadorRealP2 &&
                  holandaSimuP2 < ecuadorSimuP2 &&
                  holandaRealP2 !== holandaSimuP2 &&
                  ecuadorRealP2 === ecuadorSimuP2) {
       spanPuntosA[3].innerHTML=2
    } else if (holandaRealP2 > ecuadorRealP2 &&
                  holandaSimuP2 < ecuadorSimuP2 &&
                  holandaRealP2 === holandaSimuP2 &&
                  ecuadorRealP2 !== ecuadorSimuP2 ){
        spanPuntosA[3].innerHTML=1
    } else if (holandaRealP2 > ecuadorRealP2 &&
                holandaSimuP2 < ecuadorSimuP2 &&
                holandaRealP2 !== holandaSimuP2 &&
                ecuadorRealP2 === ecuadorSimuP2) {
        spanPuntosA[3].innerHTML=1
    } else if (holandaRealP2 < ecuadorRealP2 &&
                  holandaSimuP2 > ecuadorSimuP2 &&
                  holandaRealP2 === holandaSimuP2 &&
                  ecuadorRealP2 !== ecuadorSimuP2) {
        spanPuntosA[3].innerHTML=1
    } else if (holandaRealP2 < ecuadorRealP2 &&
                holandaSimuP2 > ecuadorSimuP2 &&
               holandaRealP2 !== holandaSimuP2 &&
               ecuadorRealP2 === ecuadorSimuP2){
       spanPuntosA[3].innerHTML=1
    } else if (holandaRealP2 === ecuadorRealP2 &&
                  holandaSimuP2 !== ecuadorSimuP2 &&
                  holandaRealP2 === holandaSimuP2 &&
                  ecuadorRealP2 !== ecuadorSimuP2 ) {
        spanPuntosA[3].innerHTML=1
    } else if (holandaRealP2 === ecuadorRealP2 &&
                holandaSimuP2 !== ecuadorSimuP2 &&
                holandaRealP2 !== holandaSimuP2 &&
                ecuadorRealP2 === ecuadorSimuP2) {
       spanPuntosA[3].innerHTML=1
    } else if (holandaRealP2 === ecuadorRealP2 &&
                   holandaSimuP2 === ecuadorSimuP2 &&
                  holandaRealP2 !== holandaSimuP2 &&
                  ecuadorRealP2 !== ecuadorSimuP2) {
        spanPuntosA[3].innerHTML=1
    } else if (holandaRealP2 > ecuadorRealP2 &&
                  holandaSimuP2 > ecuadorSimuP2 &&
                  holandaRealP2 !== holandaSimuP2 &&
                  ecuadorRealP2 !== ecuadorSimuP2) {
        spanPuntosA[3].innerHTML=1
    } else if (holandaRealP2 < ecuadorRealP2 &&
                  holandaSimuP2 < ecuadorSimuP2 &&
                  holandaRealP2 !== holandaSimuP2 &&
                 ecuadorRealP2 !== ecuadorSimuP2) {
         spanPuntosA[3].innerHTML= 1
    } else if (holandaRealP2 !== ecuadorRealP2 &&
                  holandaSimuP2 === ecuadorSimuP2 &&
                  holandaRealP2 === holandaSimuP2 &&
                  ecuadorRealP2 !== ecuadorSimuP2 ) {
        spanPuntosA[3].innerHTML=1
    } else if (holandaRealP2 !== ecuadorRealP2 &&
                holandaSimuP2 === ecuadorSimuP2 &&
               holandaRealP2 !== holandaSimuP2 &&
               ecuadorRealP2 === ecuadorSimuP2){
       spanPuntosA[3].innerHTML=1  
    } else spanPuntosA[3].innerHTML=0
    
    
    //HOLANDA VS CATAR
    if (holandaRealP3.length === 0) {
        spanPuntosA[4].innerHTML = ""
    }else if (holandaSimuP3 === holandaRealP3 && 
    catarSimuP3 === catarRealP3) {
     spanPuntosA[4].innerHTML=3
    } else if (holandaRealP3 > catarRealP3 && 
                 holandaSimuP3 > catarSimuP3 &&
                 holandaRealP3 === holandaSimuP3 &&
                 catarRealP3 !== catarSimuP3) {
      spanPuntosA[4].innerHTML=2
    } else if (holandaRealP3 > catarRealP3 &&
               holandaSimuP3 > catarSimuP3 &&
               holandaRealP3 !== holandaSimuP3 &&
               catarRealP3 === catarSimuP3) {
    spanPuntosA[4].innerHTML=2
    } else if (holandaRealP3 < catarRealP3 &&
                   holandaSimuP3 < catarSimuP3 &&
                   holandaRealP3 === holandaSimuP3 &&
                   catarRealP3 !== catarSimuP3 ){
       spanPuntosA[4].innerHTML=2
    } else if (holandaRealP3 < catarRealP3 &&
                  holandaSimuP3 < catarSimuP3 &&
                  holandaRealP3 !== holandaSimuP3 &&
                  catarRealP3 === catarSimuP3) {
       spanPuntosA[4].innerHTML=2
    } else if (holandaRealP3 > catarRealP3 &&
                  holandaSimuP3 < catarSimuP3 &&
                  holandaRealP3 === holandaSimuP3 &&
                  catarRealP3 !== catarSimuP3 ){
        spanPuntosA[4].innerHTML=1
    } else if (holandaRealP3 > catarRealP3 &&
                holandaSimuP3 < catarSimuP3 &&
                holandaRealP3 !== holandaSimuP3 &&
                catarRealP3 === catarSimuP3) {
        spanPuntosA[4].innerHTML=1
    } else if (holandaRealP3 < catarRealP3 &&
                  holandaSimuP3 > catarSimuP3 &&
                  holandaRealP3 === holandaSimuP3 &&
                  catarRealP3 !== catarSimuP3) {
        spanPuntosA[4].innerHTML=1
    } else if (holandaRealP3 < catarRealP3 &&
                holandaSimuP3 > catarSimuP3 &&
               holandaRealP3 !== holandaSimuP3 &&
               catarRealP3 === catarSimuP3){
       spanPuntosA[4].innerHTML=1
    } else if (holandaRealP3 === catarRealP3 &&
                  holandaSimuP3 !== catarSimuP3 &&
                  holandaRealP3 === holandaSimuP3 &&
                  catarRealP3 !== catarSimuP3 ) {
        spanPuntosA[4].innerHTML=1
    } else if (holandaRealP3 === catarRealP3 &&
                holandaSimuP3 !== catarSimuP3 &&
                holandaRealP3 !== holandaSimuP3 &&
                catarRealP3 === catarSimuP3) {
       spanPuntosA[4].innerHTML=1
    } else if (holandaRealP3 === catarRealP3 &&
                   holandaSimuP3 === catarSimuP3 &&
                  holandaRealP3 !== holandaSimuP3 &&
                  catarRealP3 !== catarSimuP3) {
        spanPuntosA[4].innerHTML=1
    } else if (holandaRealP3 > catarRealP3 &&
                  holandaSimuP3 > catarSimuP3 &&
                  holandaRealP3 !== holandaSimuP3 &&
                  catarRealP3 !== catarSimuP3) {
        spanPuntosA[4].innerHTML=1
    } else if (holandaRealP3 < catarRealP3 &&
                  holandaSimuP3 < catarSimuP3 &&
                  holandaRealP3 !== holandaSimuP3 &&
                 catarRealP3 !== catarSimuP3) {
         spanPuntosA[4].innerHTML= 1
    } else if (holandaRealP3 !== catarRealP3 &&
                  holandaSimuP3 === catarSimuP3 &&
                  holandaRealP3 === holandaSimuP3 &&
                  catarRealP3 !== catarSimuP3 ) {
        spanPuntosA[4].innerHTML=1
    } else if (holandaRealP3 !== catarRealP3 &&
                holandaSimuP3 === catarSimuP3 &&
               holandaRealP3 !== holandaSimuP3 &&
               catarRealP3 === catarSimuP3){
       spanPuntosA[4].innerHTML=1  
    } else spanPuntosA[4].innerHTML=0

    
    //ECAUDOR VS SENEGAL
    if (ecuadorRealP3.length === 0){
        spanPuntosA[5].innerHTML = ""
    }  else  if (ecuadorSimuP3 === ecuadorRealP3 && 
            senegalSimuP3 === senegalRealP3) {
             spanPuntosA[5].innerHTML=3
    } else if (ecuadorRealP3 > senegalRealP3 && 
                         ecuadorSimuP3 > senegalSimuP3 &&
                         ecuadorRealP3 === ecuadorSimuP3 &&
                         senegalRealP3 !== senegalSimuP3) {
              spanPuntosA[5].innerHTML=2
    } else if (ecuadorRealP3 > senegalRealP3 &&
                       ecuadorSimuP3 > senegalSimuP3 &&
                       ecuadorRealP3 !== ecuadorSimuP3 &&
                       senegalRealP3 === senegalSimuP3) {
            spanPuntosA[5].innerHTML=2
    } else if (ecuadorRealP3 < senegalRealP3 &&
                           ecuadorSimuP3 < senegalSimuP3 &&
                           ecuadorRealP3 === ecuadorSimuP3 &&
                           senegalRealP3 !== senegalSimuP3 ){
               spanPuntosA[5].innerHTML=2
    } else if (ecuadorRealP3 < senegalRealP3 &&
                          ecuadorSimuP3 < senegalSimuP3 &&
                          ecuadorRealP3 !== ecuadorSimuP3 &&
                          senegalRealP3 === senegalSimuP3) {
               spanPuntosA[5].innerHTML=2
    } else if (ecuadorRealP3 > senegalRealP3 &&
                          ecuadorSimuP3 < senegalSimuP3 &&
                          ecuadorRealP3 === ecuadorSimuP3 &&
                          senegalRealP3 !== senegalSimuP3 ){
                spanPuntosA[5].innerHTML=1
    } else if (ecuadorRealP3 > senegalRealP3 &&
                        ecuadorSimuP3 < senegalSimuP3 &&
                        ecuadorRealP3 !== ecuadorSimuP3 &&
                        senegalRealP3 === senegalSimuP3) {
                spanPuntosA[5].innerHTML=1
    } else if (ecuadorRealP3 < senegalRealP3 &&
                          ecuadorSimuP3 > senegalSimuP3 &&
                          ecuadorRealP3 === ecuadorSimuP3 &&
                          senegalRealP3 !== senegalSimuP3) {
                spanPuntosA[5].innerHTML=1
    } else if (ecuadorRealP3 < senegalRealP3 &&
                        ecuadorSimuP3 > senegalSimuP3 &&
                       ecuadorRealP3 !== ecuadorSimuP3 &&
                       senegalRealP3 === senegalSimuP3){
               spanPuntosA[5].innerHTML=1
    } else if (ecuadorRealP3 === senegalRealP3 &&
                          ecuadorSimuP3 !== senegalSimuP3 &&
                          ecuadorRealP3 === ecuadorSimuP3 &&
                          senegalRealP3 !== senegalSimuP3 ) {
                spanPuntosA[5].innerHTML=1
    } else if (ecuadorRealP3 === senegalRealP3 &&
                        ecuadorSimuP3 !== senegalSimuP3 &&
                        ecuadorRealP3 !== ecuadorSimuP3 &&
                        senegalRealP3 === senegalSimuP3) {
               spanPuntosA[5].innerHTML=1
    } else if (ecuadorRealP3 === senegalRealP3 &&
                           ecuadorSimuP3 === senegalSimuP3 &&
                          ecuadorRealP3 !== ecuadorSimuP3 &&
                          senegalRealP3 !== senegalSimuP3) {
                spanPuntosA[5].innerHTML=1
    } else if (ecuadorRealP3 > senegalRealP3 &&
                          ecuadorSimuP3 > senegalSimuP3 &&
                          ecuadorRealP3 !== ecuadorSimuP3 &&
                          senegalRealP3 !== senegalSimuP3) {
                spanPuntosA[5].innerHTML=1
    } else if (ecuadorRealP3 < senegalRealP3 &&
                          ecuadorSimuP3 < senegalSimuP3 &&
                          ecuadorRealP3 !== ecuadorSimuP3 &&
                         senegalRealP3 !== senegalSimuP3) {
                 spanPuntosA[5].innerHTML= 1
    } else if (ecuadorRealP3 !== senegalRealP3 &&
                          ecuadorSimuP3 === senegalSimuP3 &&
                          ecuadorRealP3 === ecuadorSimuP3 &&
                          senegalRealP3 !== senegalSimuP3 ) {
                spanPuntosA[5].innerHTML=1
    } else if (ecuadorRealP3 !== senegalRealP3 &&
                        ecuadorSimuP3 === senegalSimuP3 &&
                       ecuadorRealP3 !== ecuadorSimuP3 &&
                       senegalRealP3 === senegalSimuP3){
               spanPuntosA[5].innerHTML=1  
    } else spanPuntosA[5].innerHTML=0


    // CATAR TABLA REAL//

let arrCatarGF = [+catarRealP1, +catarRealP2, +catarRealP3] // armamos array con los valores de los inputs
let arrCatarGC = [+ecuadorRealP1, +senegalRealP2, +holandaRealP3]

let catarPj = catarRealP1.length + catarRealP2.length + catarRealP3.length
let catarGolesF = arrCatarGF.reduce((a, b) => a + b)
let catarGolesC = arrCatarGC.reduce((a, b) => a + b)
let catarDiferencia = catarGolesF - catarGolesC

let catarPts = 0
if (catarRealP1.length === 0) { //usamos el lengt para comprobar de que no este vacio
    catarPts += 0
} else if (catarRealP1 > ecuadorRealP1) {
    catarPts += 3
} else if (catarRealP1 === ecuadorRealP1) {
    catarPts += 1
} else if (catarRealP3 < ecuadorRealP1) {
    catarPts += 0
}

if (catarRealP2.length === 0) {
    catarPts += 0
} else if (catarRealP2 > senegalRealP2) {
    catarPts += 3
} else if (catarRealP2 === senegalRealP2) {
    catarPts += 1
} else if (catarRealP3 < senegalRealP2) {
    catarPts += 0
}

if (catarRealP3.length === 0) {
    catarPts += 0
} else if (catarRealP3 > holandaRealP3) {
    catarPts += 3
} else if (catarRealP3 === holandaRealP3) {
    catarPts += 1
} else if (catarRealP3 < holandaRealP3) {
    catarPts += 0
}

// ECUADOR TABLA //

let arrEcuadorGF = [+ecuadorRealP1, +ecuadorRealP2, +ecuadorRealP3] // armamos array con los valores de los inputs
let arrEcuadorGC = [+catarRealP1, +holandaRealP2, +senegalRealP3]

let ecuadorPj = ecuadorRealP1.length + ecuadorRealP2.length + ecuadorRealP3.length
let ecuadorGolesF = arrEcuadorGF.reduce((a, b) => a + b)
let ecuadorGolesC = arrEcuadorGC.reduce((a, b) => a + b)
let ecuadorDiferencia = ecuadorGolesF - ecuadorGolesC

let ecuadorPts = 0
if (ecuadorRealP1.length === 0) { //usamos el lengt para comprobar de que no este vacio
    ecuadorPts += 0
} else if (ecuadorRealP1 > catarRealP1) {
    ecuadorPts += 3
} else if (ecuadorRealP1 === catarRealP1) {
    ecuadorPts += 1
} else if (ecuadorRealP1 < catarRealP1) {
    ecuadorPts += 0
}

if (ecuadorRealP2.length === 0) {
    ecuadorPts += 0
} else if (ecuadorRealP2 > holandaRealP2) {
    ecuadorPts += 3
} else if (ecuadorRealP2 === holandaRealP2) {
    ecuadorPts += 1
} else if (ecuadorRealP1 < holandaRealP2) {
    ecuadorPts += 0
}

if (ecuadorRealP3.length === 0) {
    ecuadorPts += 0
} else if (ecuadorRealP3 > senegalRealP3) {
    ecuadorPts += 3
} else if (ecuadorRealP3 === senegalRealP3) {
    ecuadorPts += 1
} else if (ecuadorRealP1 < senegalRealP3) {
    ecuadorPts += 0
}


// SENEGAL TABLA //

let arrSenegalGF = [+senegalRealP1, +senegalRealP2, +senegalRealP3] // armamos array con los valores de los inputs
let arrSenegalGC = [+holandaRealP1, +catarRealP2, +ecuadorRealP3]

let senegalPj = senegalRealP1.length + senegalRealP2.length + senegalRealP3.length
let senegalGolesF = arrSenegalGF.reduce((a, b) => a + b)
let senegalGolesC = arrSenegalGC.reduce((a, b) => a + b)
let senegalDiferencia = senegalGolesF - senegalGolesC

let senegalPts = 0
if (senegalRealP1.length === 0) { //usamos el lengt para comprobar de que no este vacio
    senegalPts += 0
} else if (senegalRealP1 > holandaRealP1) {
    senegalPts += 3
} else if (senegalRealP1 === holandaRealP1) {
    senegalPts += 1
} else if (senegalRealP1 < holandaRealP1) {
    senegalPts += 0
}

if (senegalRealP2.length === 0) {
    senegalPts += 0
} else if (senegalRealP2 > catarRealP2) {
    senegalPts += 3
} else if (senegalRealP2 === catarRealP2) {
    senegalPts += 1
} else if (senegalRealP1 < catarRealP2) {
    senegalPts += 0
}

if (senegalRealP3.length === 0) {
    senegalPts += 0
} else if (senegalRealP3 > ecuadorRealP3) {
    senegalPts += 3
} else if (senegalRealP3 === ecuadorRealP3) {
    senegalPts += 1
} else if (senegalRealP1 < ecuadorRealP3) {
    senegalPts += 0
}


// HOLANDA TABLA //

let arrHolandaGF = [+holandaRealP1, +holandaRealP2, +holandaRealP3] // armamos array con los valores de los inputs
let arrHolandaGC = [+senegalRealP1, +ecuadorRealP2, +catarRealP3]

let holandaPj = holandaRealP1.length + holandaRealP2.length + holandaRealP3.length
let holandaGolesF = arrHolandaGF.reduce((a, b) => a + b)
let holandaGolesC = arrHolandaGC.reduce((a, b) => a + b)
let holandaDiferencia = holandaGolesF - holandaGolesC


let holandaPts = 0
if (holandaRealP1.length === 0) { //usamos el lengt para comprobar de que no este vacio
    holandaPts += 0
} else if (holandaRealP1 > senegalRealP1) {
    holandaPts += 3
} else if (holandaRealP1 === senegalRealP1) {
    holandaPts += 1
} else if (holandaRealP1 < senegalRealP1) {
    holandaPts += 0
}

if (holandaRealP2.length === 0) {
    holandaPts += 0
} else if (holandaRealP2 > ecuadorRealP2) {
    holandaPts += 3
} else if (holandaRealP2 === ecuadorRealP2) {
    holandaPts += 1
} else if (holandaRealP1 < ecuadorRealP2) {
    holandaPts += 0
}

if (holandaRealP3.length === 0) {
    holandaPts += 0
} else if (holandaRealP3 > catarRealP3) {
    holandaPts += 3
} else if (holandaRealP3 === catarRealP3) {
    holandaPts += 1
} else if (holandaRealP1 < catarRealP3) {
    holandaPts += 0
}


// TABLA GRUPO A //
let banderaCatar = new Image();
banderaCatar.src = "https://www.promiedos.com.ar/images/ps/qatar.gif"

let banderaEcuador = new Image()
banderaEcuador.src = "https://www.promiedos.com.ar/images/ps/ecuador.gif"

let banderaSenegal = new Image()
banderaSenegal.src = "https://www.promiedos.com.ar/images/ps/senegal.gif"

let banderaHolanda = new Image()
banderaHolanda.src = "https://www.promiedos.com.ar/images/ps/paisesbajos.gif"

let gA = [{ equipo: "catar", bandera: banderaCatar, pts: catarPts, pj: catarPj, gf: catarGolesF, gc: catarGolesC, dif: catarDiferencia },
{ equipo: "ecuador", bandera: banderaEcuador, pts: ecuadorPts, pj: ecuadorPj, gf: ecuadorGolesF, gc: ecuadorGolesC, dif: ecuadorDiferencia },
{ equipo: "holanda", bandera: banderaHolanda, pts: holandaPts, pj: holandaPj, gf: holandaGolesF, gc: holandaGolesC, dif: holandaDiferencia },
{ equipo: "senegal", bandera: banderaSenegal, pts: senegalPts, pj: senegalPj, gf: senegalGolesF, gc: senegalGolesC, dif: senegalDiferencia }] // armamos un array donde guardamos toda la informacion de la tabla de grupos //


gA.sort((a, b) => b.dif - a.dif) // y despues por diferencia de goles
gA.sort((a, b) => b.pts - a.pts) // ordenamos los objetos primero por pts

grupoA[0].innerHTML = gA[0].equipo
grupoA[0].appendChild(gA[0].bandera)
grupoA[1].innerHTML = gA[0].pts
grupoA[2].innerHTML = gA[0].pj
grupoA[3].innerHTML = gA[0].gf
grupoA[4].innerHTML = gA[0].gc
grupoA[5].innerHTML = gA[0].dif

grupoA[6].innerHTML = gA[1].equipo
grupoA[6].appendChild(gA[1].bandera)
grupoA[7].innerHTML = gA[1].pts
grupoA[8].innerHTML = gA[1].pj
grupoA[9].innerHTML = gA[1].gf
grupoA[10].innerHTML = gA[1].gc
grupoA[11].innerHTML = gA[1].dif

grupoA[12].innerHTML = gA[2].equipo
grupoA[12].appendChild(gA[2].bandera)
grupoA[13].innerHTML = gA[2].pts
grupoA[14].innerHTML = gA[2].pj
grupoA[15].innerHTML = gA[2].gf
grupoA[16].innerHTML = gA[2].gc
grupoA[17].innerHTML = gA[2].dif

grupoA[18].innerHTML = gA[3].equipo
grupoA[18].appendChild(gA[3].bandera)
grupoA[19].innerHTML = gA[3].pts
grupoA[20].innerHTML = gA[3].pj
grupoA[21].innerHTML = gA[3].gf
grupoA[22].innerHTML = gA[3].gc
grupoA[23].innerHTML = gA[3].dif

const totalPTSGA = [+spanPuntosA[0].innerText,+spanPuntosA[1].innerText,+spanPuntosA[2].innerText,+spanPuntosA[3].innerText,+spanPuntosA[4].innerText,+spanPuntosA[5].innerText] // armamos un array para meter los puntos obtenidos de cada partido y lo hacemos con el push

const resultGA = totalPTSGA.reduce((a,b) => a+b) // sumamos todos los puntos obtenidos del array

spanPuntosA[6].innerHTML = resultGA
spanPuntosA[7].innerHTML = resultGA

// CONTADOR DE PUNTOS GRUPO B //
// tomamos los valores de los simulados, que luego deberiamos traerlos del local storage
const inglaterraSimuP1 = d.getElementById("ip1s").value
const inglaterraSimuP2 = d.getElementById("ip2s").value
const inglaterraSimuP3 = d.getElementById("ip3s").value
const iranSimuP1 = d.getElementById("irp1s").value
const iranSimuP2 = d.getElementById("irp2s").value
const iranSimuP3 = d.getElementById("irp3s").value
const usaSimuP1 = d.getElementById("up1s").value
const usaSimuP2 = d.getElementById("up2s").value
const usaSimuP3 = d.getElementById("up3s").value
const galesSimuP1 = d.getElementById("gp1s").value
const galesSimuP2 = d.getElementById("gp2s").value
const galesSimuP3 = d.getElementById("gp3s").value    


// COMPARACION DE PUNTOS //
// INGLATERRA VS IRAN //
if (inglaterraRealP1.length === 0) { // hacemos esta comparacion para que cuando este vacio el input no lo tome como si fuese 0-0 y te tome como empate
    spanPuntosB[0].innerHTML = ""
    } else if (inglaterraSimuP1 === inglaterraRealP1 && 
    iranSimuP1 === iranRealP1) {
     spanPuntosB[0].innerHTML=3
    } else if (inglaterraRealP1 > iranRealP1 && 
                 inglaterraSimuP1 > iranSimuP1 &&
                 inglaterraRealP1 === inglaterraSimuP1 &&
                 iranRealP1 !== iranSimuP1) {
      spanPuntosB[0].innerHTML=2
    } else if (inglaterraRealP1 > iranRealP1 &&
               inglaterraSimuP1 > iranSimuP1 &&
               inglaterraRealP1 !== inglaterraSimuP1 &&
               iranRealP1 === iranSimuP1) {
    spanPuntosB[0].innerHTML=2
    } else if (inglaterraRealP1 < iranRealP1 &&
                   inglaterraSimuP1 < iranSimuP1 &&
                   inglaterraRealP1 === inglaterraSimuP1 &&
                   iranRealP1 !== iranSimuP1 ){
       spanPuntosB[0].innerHTML=2
    } else if (inglaterraRealP1 < iranRealP1 &&
                  inglaterraSimuP1 < iranSimuP1 &&
                  inglaterraRealP1 !== inglaterraSimuP1 &&
                  iranRealP1 === iranSimuP1) {
       spanPuntosB[0].innerHTML=2
    } else if (inglaterraRealP1 > iranRealP1 &&
                  inglaterraSimuP1 < iranSimuP1 &&
                  inglaterraRealP1 === inglaterraSimuP1 &&
                  iranRealP1 !== iranSimuP1 ){
        spanPuntosB[0].innerHTML=1
    } else if (inglaterraRealP1 > iranRealP1 &&
                inglaterraSimuP1 < iranSimuP1 &&
                inglaterraRealP1 !== inglaterraSimuP1 &&
                iranRealP1 === iranSimuP1) {
        spanPuntosB[0].innerHTML=1
    } else if (inglaterraRealP1 < iranRealP1 &&
                  inglaterraSimuP1 > iranSimuP1 &&
                  inglaterraRealP1 === inglaterraSimuP1 &&
                  iranRealP1 !== iranSimuP1) {
        spanPuntosB[0].innerHTML=1
    } else if (inglaterraRealP1 < iranRealP1 &&
                inglaterraSimuP1 > iranSimuP1 &&
               inglaterraRealP1 !== inglaterraSimuP1 &&
               iranRealP1 === iranSimuP1){
       spanPuntosB[0].innerHTML=1
    } else if (inglaterraRealP1 === iranRealP1 &&
                  inglaterraSimuP1 !== iranSimuP1 &&
                  inglaterraRealP1 === inglaterraSimuP1 &&
                  iranRealP1 !== iranSimuP1 ) {
        spanPuntosB[0].innerHTML=1
    } else if (inglaterraRealP1 === iranRealP1 &&
                inglaterraSimuP1 !== iranSimuP1 &&
                inglaterraRealP1 !== inglaterraSimuP1 &&
                iranRealP1 === iranSimuP1) {
       spanPuntosB[0].innerHTML=1
    } else if (inglaterraRealP1 === iranRealP1 &&
                   inglaterraSimuP1 === iranSimuP1 &&
                  inglaterraRealP1 !== inglaterraSimuP1 &&
                  iranRealP1 !== iranSimuP1) {
        spanPuntosB[0].innerHTML=1
    } else if (inglaterraRealP1 > iranRealP1 &&
                  inglaterraSimuP1 > iranSimuP1 &&
                  inglaterraRealP1 !== inglaterraSimuP1 &&
                  iranRealP1 !== iranSimuP1) {
        spanPuntosB[0].innerHTML=1
    } else if (inglaterraRealP1 < iranRealP1 &&
                  inglaterraSimuP1 < iranSimuP1 &&
                  inglaterraRealP1 !== inglaterraSimuP1 &&
                 iranRealP1 !== iranSimuP1) {
         spanPuntosB[0].innerHTML= 1
    } else if (inglaterraRealP1 !== iranRealP1 &&
                  inglaterraSimuP1 === iranSimuP1 &&
                  inglaterraRealP1 === inglaterraSimuP1 &&
                  iranRealP1 !== iranSimuP1 ) {
        spanPuntosB[0].innerHTML=1
    } else if (inglaterraRealP1 !== iranRealP1 &&
                inglaterraSimuP1 === iranSimuP1 &&
               inglaterraRealP1 !== inglaterraSimuP1 &&
               iranRealP1 === iranSimuP1){
       spanPuntosB[0].innerHTML=1  
    } else spanPuntosB[0].innerHTML=0
    
    
    //USA VS GALES //
    if (usaRealP1.length === 0) {
        spanPuntosB[1].innerHTML = ""
    }else if (usaSimuP1 === usaRealP1 && 
    galesSimuP1 === galesRealP1) {
     spanPuntosB[1].innerHTML=3
    } else if (usaRealP1 > galesRealP1 && 
                 usaSimuP1 > galesSimuP1 &&
                 usaRealP1 === usaSimuP1 &&
                 galesRealP1 !== galesSimuP1) {
      spanPuntosB[1].innerHTML=2
    } else if (usaRealP1 > galesRealP1 &&
               usaSimuP1 > galesSimuP1 &&
               usaRealP1 !== usaSimuP1 &&
               galesRealP1 === galesSimuP1) {
    spanPuntosB[1].innerHTML=2
    } else if (usaRealP1 < galesRealP1 &&
                   usaSimuP1 < galesSimuP1 &&
                   usaRealP1 === usaSimuP1 &&
                   galesRealP1 !== galesSimuP1 ){
       spanPuntosB[1].innerHTML=2
    } else if (usaRealP1 < galesRealP1 &&
                  usaSimuP1 < galesSimuP1 &&
                  usaRealP1 !== usaSimuP1 &&
                  galesRealP1 === galesSimuP1) {
       spanPuntosB[1].innerHTML=2
    } else if (usaRealP1 > galesRealP1 &&
                  usaSimuP1 < galesSimuP1 &&
                  usaRealP1 === usaSimuP1 &&
                  galesRealP1 !== galesSimuP1 ){
        spanPuntosB[1].innerHTML=1
    } else if (usaRealP1 > galesRealP1 &&
                usaSimuP1 < galesSimuP1 &&
                usaRealP1 !== usaSimuP1 &&
                galesRealP1 === galesSimuP1) {
        spanPuntosB[1].innerHTML=1
    } else if (usaRealP1 < galesRealP1 &&
                  usaSimuP1 > galesSimuP1 &&
                  usaRealP1 === usaSimuP1 &&
                  galesRealP1 !== galesSimuP1) {
        spanPuntosB[1].innerHTML=1
    } else if (usaRealP1 < galesRealP1 &&
                usaSimuP1 > galesSimuP1 &&
               usaRealP1 !== usaSimuP1 &&
               galesRealP1 === galesSimuP1){
       spanPuntosB[1].innerHTML=1
    } else if (usaRealP1 === galesRealP1 &&
                  usaSimuP1 !== galesSimuP1 &&
                  usaRealP1 === usaSimuP1 &&
                  galesRealP1 !== galesSimuP1 ) {
        spanPuntosB[1].innerHTML=1
    } else if (usaRealP1 === galesRealP1 &&
                usaSimuP1 !== galesSimuP1 &&
                usaRealP1 !== usaSimuP1 &&
                galesRealP1 === galesSimuP1) {
       spanPuntosB[1].innerHTML=1
    } else if (usaRealP1 === galesRealP1 &&
                   usaSimuP1 === galesSimuP1 &&
                  usaRealP1 !== usaSimuP1 &&
                  galesRealP1 !== galesSimuP1) {
        spanPuntosB[1].innerHTML=1
    } else if (usaRealP1 > galesRealP1 &&
                  usaSimuP1 > galesSimuP1 &&
                  usaRealP1 !== usaSimuP1 &&
                  galesRealP1 !== galesSimuP1) {
        spanPuntosB[1].innerHTML=1
    } else if (usaRealP1 < galesRealP1 &&
                  usaSimuP1 < galesSimuP1 &&
                  usaRealP1 !== usaSimuP1 &&
                 galesRealP1 !== galesSimuP1) {
         spanPuntosB[1].innerHTML= 1
    } else if (usaRealP1 !== galesRealP1 &&
                  usaSimuP1 === galesSimuP1 &&
                  usaRealP1 === usaSimuP1 &&
                  galesRealP1 !== galesSimuP1 ) {
        spanPuntosB[1].innerHTML=1
    } else if (usaRealP1 !== galesRealP1 &&
                usaSimuP1 === galesSimuP1 &&
               usaRealP1 !== usaSimuP1 &&
               galesRealP1 === galesSimuP1){
       spanPuntosB[1].innerHTML=1  
    } else spanPuntosB[1].innerHTML=0
    
    
    // GALES VS IRAN //
    if (galesRealP2.length === 0) {
        spanPuntosB[2].innerHTML = ""
    } else if (galesSimuP2 === galesRealP2 && 
    iranSimuP2 === iranRealP2) {
     spanPuntosB[2].innerHTML=3
    } else if (galesRealP2 > iranRealP2 && 
                 galesSimuP2 > iranSimuP2 &&
                 galesRealP2 === galesSimuP2 &&
                 iranRealP2 !== iranSimuP2) {
      spanPuntosB[2].innerHTML=2
    } else if (galesRealP2 > iranRealP2 &&
               galesSimuP2 > iranSimuP2 &&
               galesRealP2 !== galesSimuP2 &&
               iranRealP2 === iranSimuP2) {
    spanPuntosB[2].innerHTML=2
    } else if (galesRealP2 < iranRealP2 &&
                   galesSimuP2 < iranSimuP2 &&
                   galesRealP2 === galesSimuP2 &&
                   iranRealP2 !== iranSimuP2 ){
       spanPuntosB[2].innerHTML=2
    } else if (galesRealP2 < iranRealP2 &&
                  galesSimuP2 < iranSimuP2 &&
                  galesRealP2 !== galesSimuP2 &&
                  iranRealP2 === iranSimuP2) {
       spanPuntosB[2].innerHTML=2
    } else if (galesRealP2 > iranRealP2 &&
                  galesSimuP2 < iranSimuP2 &&
                  galesRealP2 === galesSimuP2 &&
                  iranRealP2 !== iranSimuP2 ){
        spanPuntosB[2].innerHTML=1
    } else if (galesRealP2 > iranRealP2 &&
                galesSimuP2 < iranSimuP2 &&
                galesRealP2 !== galesSimuP2 &&
                iranRealP2 === iranSimuP2) {
        spanPuntosB[2].innerHTML=1
    } else if (galesRealP2 < iranRealP2 &&
                  galesSimuP2 > iranSimuP2 &&
                  galesRealP2 === galesSimuP2 &&
                  iranRealP2 !== iranSimuP2) {
        spanPuntosB[2].innerHTML=1
    } else if (galesRealP2 < iranRealP2 &&
                galesSimuP2 > iranSimuP2 &&
               galesRealP2 !== galesSimuP2 &&
               iranRealP2 === iranSimuP2){
       spanPuntosB[2].innerHTML=1
    } else if (galesRealP2 === iranRealP2 &&
                  galesSimuP2 !== iranSimuP2 &&
                  galesRealP2 === galesSimuP2 &&
                  iranRealP2 !== iranSimuP2 ) {
        spanPuntosB[2].innerHTML=1
    } else if (galesRealP2 === iranRealP2 &&
                galesSimuP2 !== iranSimuP2 &&
                galesRealP2 !== galesSimuP2 &&
                iranRealP2 === iranSimuP2) {
       spanPuntosB[2].innerHTML=1
    } else if (galesRealP2 === iranRealP2 &&
                   galesSimuP2 === iranSimuP2 &&
                  galesRealP2 !== galesSimuP2 &&
                  iranRealP2 !== iranSimuP2) {
        spanPuntosB[2].innerHTML=1
    } else if (galesRealP2 > iranRealP2 &&
                  galesSimuP2 > iranSimuP2 &&
                  galesRealP2 !== galesSimuP2 &&
                  iranRealP2 !== iranSimuP2) {
        spanPuntosB[2].innerHTML=1
    } else if (galesRealP2 < iranRealP2 &&
                  galesSimuP2 < iranSimuP2 &&
                  galesRealP2 !== galesSimuP2 &&
                 iranRealP2 !== iranSimuP2) {
         spanPuntosB[2].innerHTML= 1
    } else if (galesRealP2 !== iranRealP2 &&
                  galesSimuP2 === iranSimuP2 &&
                  galesRealP2 === galesSimuP2 &&
                  iranRealP2 !== iranSimuP2 ) {
        spanPuntosB[2].innerHTML=1
    } else if (galesRealP2 !== iranRealP2 &&
                galesSimuP2 === iranSimuP2 &&
               galesRealP2 !== galesSimuP2 &&
               iranRealP2 === iranSimuP2){
       spanPuntosB[2].innerHTML=1  
    } else spanPuntosB[2].innerHTML=0
    
    
    // INGLATERRA VS USA //
    if (inglaterraRealP2.length === 0){
        spanPuntosB[3].innerHTML = ""
    }else if (inglaterraSimuP2 === inglaterraRealP2 && 
    usaSimuP2 === usaRealP2) {
     spanPuntosB[3].innerHTML=3
    } else if (inglaterraRealP2 > usaRealP2 && 
                 inglaterraSimuP2 > usaSimuP2 &&
                 inglaterraRealP2 === inglaterraSimuP2 &&
                 usaRealP2 !== usaSimuP2) {
      spanPuntosB[3].innerHTML=2
    } else if (inglaterraRealP2 > usaRealP2 &&
               inglaterraSimuP2 > usaSimuP2 &&
               inglaterraRealP2 !== inglaterraSimuP2 &&
               usaRealP2 === usaSimuP2) {
    spanPuntosB[3].innerHTML=2
    } else if (inglaterraRealP2 < usaRealP2 &&
                   inglaterraSimuP2 < usaSimuP2 &&
                   inglaterraRealP2 === inglaterraSimuP2 &&
                   usaRealP2 !== usaSimuP2 ){
       spanPuntosB[3].innerHTML=2
    } else if (inglaterraRealP2 < usaRealP2 &&
                  inglaterraSimuP2 < usaSimuP2 &&
                  inglaterraRealP2 !== inglaterraSimuP2 &&
                  usaRealP2 === usaSimuP2) {
       spanPuntosB[3].innerHTML=2
    } else if (inglaterraRealP2 > usaRealP2 &&
                  inglaterraSimuP2 < usaSimuP2 &&
                  inglaterraRealP2 === inglaterraSimuP2 &&
                  usaRealP2 !== usaSimuP2 ){
        spanPuntosB[3].innerHTML=1
    } else if (inglaterraRealP2 > usaRealP2 &&
                inglaterraSimuP2 < usaSimuP2 &&
                inglaterraRealP2 !== inglaterraSimuP2 &&
                usaRealP2 === usaSimuP2) {
        spanPuntosB[3].innerHTML=1
    } else if (inglaterraRealP2 < usaRealP2 &&
                  inglaterraSimuP2 > usaSimuP2 &&
                  inglaterraRealP2 === inglaterraSimuP2 &&
                  usaRealP2 !== usaSimuP2) {
        spanPuntosB[3].innerHTML=1
    } else if (inglaterraRealP2 < usaRealP2 &&
                inglaterraSimuP2 > usaSimuP2 &&
               inglaterraRealP2 !== inglaterraSimuP2 &&
               usaRealP2 === usaSimuP2){
       spanPuntosB[3].innerHTML=1
    } else if (inglaterraRealP2 === usaRealP2 &&
                  inglaterraSimuP2 !== usaSimuP2 &&
                  inglaterraRealP2 === inglaterraSimuP2 &&
                  usaRealP2 !== usaSimuP2 ) {
        spanPuntosB[3].innerHTML=1
    } else if (inglaterraRealP2 === usaRealP2 &&
                inglaterraSimuP2 !== usaSimuP2 &&
                inglaterraRealP2 !== inglaterraSimuP2 &&
                usaRealP2 === usaSimuP2) {
       spanPuntosB[3].innerHTML=1
    } else if (inglaterraRealP2 === usaRealP2 &&
                   inglaterraSimuP2 === usaSimuP2 &&
                  inglaterraRealP2 !== inglaterraSimuP2 &&
                  usaRealP2 !== usaSimuP2) {
        spanPuntosB[3].innerHTML=1
    } else if (inglaterraRealP2 > usaRealP2 &&
                  inglaterraSimuP2 > usaSimuP2 &&
                  inglaterraRealP2 !== inglaterraSimuP2 &&
                  usaRealP2 !== usaSimuP2) {
        spanPuntosB[3].innerHTML=1
    } else if (inglaterraRealP2 < usaRealP2 &&
                  inglaterraSimuP2 < usaSimuP2 &&
                  inglaterraRealP2 !== inglaterraSimuP2 &&
                 usaRealP2 !== usaSimuP2) {
         spanPuntosB[3].innerHTML= 1
    } else if (inglaterraRealP2 !== usaRealP2 &&
                  inglaterraSimuP2 === usaSimuP2 &&
                  inglaterraRealP2 === inglaterraSimuP2 &&
                  usaRealP2 !== usaSimuP2 ) {
        spanPuntosB[3].innerHTML=1
    } else if (inglaterraRealP2 !== usaRealP2 &&
                inglaterraSimuP2 === usaSimuP2 &&
               inglaterraRealP2 !== inglaterraSimuP2 &&
               usaRealP2 === usaSimuP2){
       spanPuntosB[3].innerHTML=1  
    } else spanPuntosB[3].innerHTML=0
    
    
    // GALES VS INGLATERRA //
    if (galesRealP3.length === 0) {
        spanPuntosB[4].innerHTML = ""
    }else if (galesSimuP3 === galesRealP3 && 
    inglaterraSimuP3 === inglaterraRealP3) {
     spanPuntosB[4].innerHTML=3
    } else if (galesRealP3 > inglaterraRealP3 && 
                 galesSimuP3 > inglaterraSimuP3 &&
                 galesRealP3 === galesSimuP3 &&
                 inglaterraRealP3 !== inglaterraSimuP3) {
      spanPuntosB[4].innerHTML=2
    } else if (galesRealP3 > inglaterraRealP3 &&
               galesSimuP3 > inglaterraSimuP3 &&
               galesRealP3 !== galesSimuP3 &&
               inglaterraRealP3 === inglaterraSimuP3) {
    spanPuntosB[4].innerHTML=2
    } else if (galesRealP3 < inglaterraRealP3 &&
                   galesSimuP3 < inglaterraSimuP3 &&
                   galesRealP3 === galesSimuP3 &&
                   inglaterraRealP3 !== inglaterraSimuP3 ){
       spanPuntosB[4].innerHTML=2
    } else if (galesRealP3 < inglaterraRealP3 &&
                  galesSimuP3 < inglaterraSimuP3 &&
                  galesRealP3 !== galesSimuP3 &&
                  inglaterraRealP3 === inglaterraSimuP3) {
       spanPuntosB[4].innerHTML=2
    } else if (galesRealP3 > inglaterraRealP3 &&
                  galesSimuP3 < inglaterraSimuP3 &&
                  galesRealP3 === galesSimuP3 &&
                  inglaterraRealP3 !== inglaterraSimuP3 ){
        spanPuntosB[4].innerHTML=1
    } else if (galesRealP3 > inglaterraRealP3 &&
                galesSimuP3 < inglaterraSimuP3 &&
                galesRealP3 !== galesSimuP3 &&
                inglaterraRealP3 === inglaterraSimuP3) {
        spanPuntosB[4].innerHTML=1
    } else if (galesRealP3 < inglaterraRealP3 &&
                  galesSimuP3 > inglaterraSimuP3 &&
                  galesRealP3 === galesSimuP3 &&
                  inglaterraRealP3 !== inglaterraSimuP3) {
        spanPuntosB[4].innerHTML=1
    } else if (galesRealP3 < inglaterraRealP3 &&
                galesSimuP3 > inglaterraSimuP3 &&
               galesRealP3 !== galesSimuP3 &&
               inglaterraRealP3 === inglaterraSimuP3){
       spanPuntosB[4].innerHTML=1
    } else if (galesRealP3 === inglaterraRealP3 &&
                  galesSimuP3 !== inglaterraSimuP3 &&
                  galesRealP3 === galesSimuP3 &&
                  inglaterraRealP3 !== inglaterraSimuP3 ) {
        spanPuntosB[4].innerHTML=1
    } else if (galesRealP3 === inglaterraRealP3 &&
                galesSimuP3 !== inglaterraSimuP3 &&
                galesRealP3 !== galesSimuP3 &&
                inglaterraRealP3 === inglaterraSimuP3) {
       spanPuntosB[4].innerHTML=1
    } else if (galesRealP3 === inglaterraRealP3 &&
                   galesSimuP3 === inglaterraSimuP3 &&
                  galesRealP3 !== galesSimuP3 &&
                  inglaterraRealP3 !== inglaterraSimuP3) {
        spanPuntosB[4].innerHTML=1
    } else if (galesRealP3 > inglaterraRealP3 &&
                  galesSimuP3 > inglaterraSimuP3 &&
                  galesRealP3 !== galesSimuP3 &&
                  inglaterraRealP3 !== inglaterraSimuP3) {
        spanPuntosB[4].innerHTML=1
    } else if (galesRealP3 < inglaterraRealP3 &&
                  galesSimuP3 < inglaterraSimuP3 &&
                  galesRealP3 !== galesSimuP3 &&
                 inglaterraRealP3 !== inglaterraSimuP3) {
         spanPuntosB[4].innerHTML= 1
    } else if (galesRealP3 !== inglaterraRealP3 &&
                  galesSimuP3 === inglaterraSimuP3 &&
                  galesRealP3 === galesSimuP3 &&
                  inglaterraRealP3 !== inglaterraSimuP3 ) {
        spanPuntosB[4].innerHTML=1
    } else if (galesRealP3 !== inglaterraRealP3 &&
                galesSimuP3 === inglaterraSimuP3 &&
               galesRealP3 !== galesSimuP3 &&
               inglaterraRealP3 === inglaterraSimuP3){
       spanPuntosB[4].innerHTML=1  
    } else spanPuntosB[4].innerHTML=0

    
    // IRAN VS USA //
    if (iranRealP3.length === 0){
        spanPuntosB[5].innerHTML = ""
    }  else  if (iranSimuP3 === iranRealP3 && 
            usaSimuP3 === usaRealP3) {
             spanPuntosB[5].innerHTML=3
    } else if (iranRealP3 > usaRealP3 && 
                         iranSimuP3 > usaSimuP3 &&
                         iranRealP3 === iranSimuP3 &&
                         usaRealP3 !== usaSimuP3) {
              spanPuntosB[5].innerHTML=2
    } else if (iranRealP3 > usaRealP3 &&
                       iranSimuP3 > usaSimuP3 &&
                       iranRealP3 !== iranSimuP3 &&
                       usaRealP3 === usaSimuP3) {
            spanPuntosB[5].innerHTML=2
    } else if (iranRealP3 < usaRealP3 &&
                           iranSimuP3 < usaSimuP3 &&
                           iranRealP3 === iranSimuP3 &&
                           usaRealP3 !== usaSimuP3 ){
               spanPuntosB[5].innerHTML=2
    } else if (iranRealP3 < usaRealP3 &&
                          iranSimuP3 < usaSimuP3 &&
                          iranRealP3 !== iranSimuP3 &&
                          usaRealP3 === usaSimuP3) {
               spanPuntosB[5].innerHTML=2
    } else if (iranRealP3 > usaRealP3 &&
                          iranSimuP3 < usaSimuP3 &&
                          iranRealP3 === iranSimuP3 &&
                          usaRealP3 !== usaSimuP3 ){
                spanPuntosB[5].innerHTML=1
    } else if (iranRealP3 > usaRealP3 &&
                        iranSimuP3 < usaSimuP3 &&
                        iranRealP3 !== iranSimuP3 &&
                        usaRealP3 === usaSimuP3) {
                spanPuntosB[5].innerHTML=1
    } else if (iranRealP3 < usaRealP3 &&
                          iranSimuP3 > usaSimuP3 &&
                          iranRealP3 === iranSimuP3 &&
                          usaRealP3 !== usaSimuP3) {
                spanPuntosB[5].innerHTML=1
    } else if (iranRealP3 < usaRealP3 &&
                        iranSimuP3 > usaSimuP3 &&
                       iranRealP3 !== iranSimuP3 &&
                       usaRealP3 === usaSimuP3){
               spanPuntosB[5].innerHTML=1
    } else if (iranRealP3 === usaRealP3 &&
                          iranSimuP3 !== usaSimuP3 &&
                          iranRealP3 === iranSimuP3 &&
                          usaRealP3 !== usaSimuP3 ) {
                spanPuntosB[5].innerHTML=1
    } else if (iranRealP3 === usaRealP3 &&
                        iranSimuP3 !== usaSimuP3 &&
                        iranRealP3 !== iranSimuP3 &&
                        usaRealP3 === usaSimuP3) {
               spanPuntosB[5].innerHTML=1
    } else if (iranRealP3 === usaRealP3 &&
                           iranSimuP3 === usaSimuP3 &&
                          iranRealP3 !== iranSimuP3 &&
                          usaRealP3 !== usaSimuP3) {
                spanPuntosB[5].innerHTML=1
    } else if (iranRealP3 > usaRealP3 &&
                          iranSimuP3 > usaSimuP3 &&
                          iranRealP3 !== iranSimuP3 &&
                          usaRealP3 !== usaSimuP3) {
                spanPuntosB[5].innerHTML=1
    } else if (iranRealP3 < usaRealP3 &&
                          iranSimuP3 < usaSimuP3 &&
                          iranRealP3 !== iranSimuP3 &&
                         usaRealP3 !== usaSimuP3) {
                 spanPuntosB[5].innerHTML= 1
    } else if (iranRealP3 !== usaRealP3 &&
                          iranSimuP3 === usaSimuP3 &&
                          iranRealP3 === iranSimuP3 &&
                          usaRealP3 !== usaSimuP3 ) {
                spanPuntosB[5].innerHTML=1
    } else if (iranRealP3 !== usaRealP3 &&
                        iranSimuP3 === usaSimuP3 &&
                       iranRealP3 !== iranSimuP3 &&
                       usaRealP3 === usaSimuP3){
               spanPuntosB[5].innerHTML=1  
    } else spanPuntosB[5].innerHTML=0


    // INGLATERRA TABLA REAL//

let arrInglaterraGF = [+inglaterraRealP1, +inglaterraRealP2, +inglaterraRealP3] // armamos array con los valores de los inputs
let arrInglaterraGC = [+iranRealP1, +usaRealP2, +galesRealP3]

let inglaterraPj = inglaterraRealP1.length + inglaterraRealP2.length + inglaterraRealP3.length
let inglaterraGolesF = arrInglaterraGF.reduce((a, b) => a + b)
let inglaterraGolesC = arrInglaterraGC.reduce((a, b) => a + b)
let inglaterraDiferencia = inglaterraGolesF - inglaterraGolesC

let inglaterraPts = 0
if (inglaterraRealP1.length === 0) { //usamos el lengt para comprobar de que no este vacio
    inglaterraPts += 0
} else if (inglaterraRealP1 > iranRealP1) {
    inglaterraPts += 3
} else if (inglaterraRealP1 === iranRealP1) {
    inglaterraPts += 1
} else if (inglaterraRealP3 < iranRealP1) {
    inglaterraPts += 0
}

if (inglaterraRealP2.length === 0) {
    inglaterraPts += 0
} else if (inglaterraRealP2 > usaRealP2) {
    inglaterraPts += 3
} else if (inglaterraRealP2 === usaRealP2) {
    inglaterraPts += 1
} else if (inglaterraRealP3 < usaRealP2) {
    inglaterraPts += 0
}

if (inglaterraRealP3.length === 0) {
    inglaterraPts += 0
} else if (inglaterraRealP3 > galesRealP3) {
    inglaterraPts += 3
} else if (inglaterraRealP3 === galesRealP3) {
    inglaterraPts += 1
} else if (inglaterraRealP3 < galesRealP3) {
    inglaterraPts += 0
}

// IRAN TABLA //

let arrIranGF = [+iranRealP1, +iranRealP2, +iranRealP3] // armamos array con los valores de los inputs
let arrIranGC = [+inglaterraRealP1, +galesRealP2, +usaRealP3]

let iranPj = iranRealP1.length + iranRealP2.length + iranRealP3.length
let iranGolesF = arrIranGF.reduce((a, b) => a + b)
let iranGolesC = arrIranGC.reduce((a, b) => a + b)
let iranDiferencia = iranGolesF - iranGolesC

let iranPts = 0
if (iranRealP1.length === 0) { //usamos el lengt para comprobar de que no este vacio
    iranPts += 0
} else if (iranRealP1 > catarRealP1) {
    iranPts += 3
} else if (iranRealP1 === catarRealP1) {
    iranPts += 1
} else if (iranRealP1 < catarRealP1) {
    iranPts += 0
}

if (iranRealP2.length === 0) {
    iranPts += 0
} else if (iranRealP2 > galesRealP2) {
    iranPts += 3
} else if (iranRealP2 === galesRealP2) {
    iranPts += 1
} else if (iranRealP1 < galesRealP2) {
    iranPts += 0
}

if (iranRealP3.length === 0) {
    iranPts += 0
} else if (iranRealP3 > usaRealP3) {
    iranPts += 3
} else if (iranRealP3 === usaRealP3) {
    iranPts += 1
} else if (iranRealP1 < usaRealP3) {
    iranPts += 0
}


// USA TABLA //

let arrUsaGF = [+usaRealP1, +usaRealP2, +usaRealP3] // armamos array con los valores de los inputs
let arrUsaGC = [+galesRealP1, +inglaterraRealP2, +iranRealP3]

let usaPj = usaRealP1.length + usaRealP2.length + usaRealP3.length
let usaGolesF = arrUsaGF.reduce((a, b) => a + b)
let usaGolesC = arrUsaGC.reduce((a, b) => a + b)
let usaDiferencia = usaGolesF - usaGolesC

let usaPts = 0
if (usaRealP1.length === 0) { //usamos el lengt para comprobar de que no este vacio
    usaPts += 0
} else if (usaRealP1 > galesRealP1) {
    usaPts += 3
} else if (usaRealP1 === galesRealP1) {
    usaPts += 1
} else if (usaRealP1 < galesRealP1) {
    usaPts += 0
}

if (usaRealP2.length === 0) {
    usaPts += 0
} else if (usaRealP2 > catarRealP2) {
    usaPts += 3
} else if (usaRealP2 === catarRealP2) {
    usaPts += 1
} else if (usaRealP1 < catarRealP2) {
    usaPts += 0
}

if (usaRealP3.length === 0) {
    usaPts += 0
} else if (usaRealP3 > iranRealP3) {
    usaPts += 3
} else if (usaRealP3 === iranRealP3) {
    usaPts += 1
} else if (usaRealP1 < iranRealP3) {
    usaPts += 0
}


// GALES TABLA //

let arrGalesGF = [+galesRealP1, +galesRealP2, +galesRealP3] // armamos array con los valores de los inputs
let arrGalesGC = [+usaRealP1, +iranRealP2, +inglaterraRealP3]

let galesPj = galesRealP1.length + galesRealP2.length + galesRealP3.length
let galesGolesF = arrGalesGF.reduce((a, b) => a + b)
let galesGolesC = arrGalesGC.reduce((a, b) => a + b)
let galesDiferencia = galesGolesF - galesGolesC


let galesPts = 0
if (galesRealP1.length === 0) { //usamos el lengt para comprobar de que no este vacio
    galesPts += 0
} else if (galesRealP1 > usaRealP1) {
    galesPts += 3
} else if (galesRealP1 === usaRealP1) {
    galesPts += 1
} else if (galesRealP1 < usaRealP1) {
    galesPts += 0
}

if (galesRealP2.length === 0) {
    galesPts += 0
} else if (galesRealP2 > iranRealP2) {
    galesPts += 3
} else if (galesRealP2 === iranRealP2) {
    galesPts += 1
} else if (galesRealP1 < iranRealP2) {
    galesPts += 0
}

if (galesRealP3.length === 0) {
    galesPts += 0
} else if (galesRealP3 > inglaterraRealP3) {
    galesPts += 3
} else if (galesRealP3 === inglaterraRealP3) {
    galesPts += 1
} else if (galesRealP1 < inglaterraRealP3) {
    galesPts += 0
}


// TABLA GRUPO B REAL //
let banderaInglaterra = new Image();
banderaInglaterra.src = "https://www.promiedos.com.ar/images/ps/inglaterra.gif"

let banderaIran = new Image()
banderaIran.src = "https://www.promiedos.com.ar/images/ps/iran.gif"

let banderaUsa = new Image()
banderaUsa.src = "https://www.promiedos.com.ar/images/ps/usa.gif"

let banderaGales = new Image()
banderaGales.src = "https://www.promiedos.com.ar/images/ps/gales.gif"

let gB = [{ equipo: "inglaterra", bandera: banderaInglaterra, pts: inglaterraPts, pj: inglaterraPj, gf: inglaterraGolesF, gc: inglaterraGolesC, dif: inglaterraDiferencia },
{ equipo: "iran", bandera: banderaIran, pts: iranPts, pj: iranPj, gf: iranGolesF, gc: iranGolesC, dif: iranDiferencia },
{ equipo: "gales", bandera: banderaGales, pts: galesPts, pj: galesPj, gf: galesGolesF, gc: galesGolesC, dif: galesDiferencia },
{ equipo: "usa", bandera: banderaUsa, pts: usaPts, pj: usaPj, gf: usaGolesF, gc: usaGolesC, dif: usaDiferencia }] // armamos un array donde guardamos toda la informacion de la tabla de grupos //


gB.sort((a, b) => b.dif - a.dif) // y despues por diferencia de goles
gB.sort((a, b) => b.pts - a.pts) // ordenamos los objetos primero por pts

grupoB[0].innerHTML = gB[0].equipo
grupoB[0].appendChild(gB[0].bandera)
grupoB[1].innerHTML = gB[0].pts
grupoB[2].innerHTML = gB[0].pj
grupoB[3].innerHTML = gB[0].gf
grupoB[4].innerHTML = gB[0].gc
grupoB[5].innerHTML = gB[0].dif

grupoB[6].innerHTML = gB[1].equipo
grupoB[6].appendChild(gB[1].bandera)
grupoB[7].innerHTML = gB[1].pts
grupoB[8].innerHTML = gB[1].pj
grupoB[9].innerHTML = gB[1].gf
grupoB[10].innerHTML = gB[1].gc
grupoB[11].innerHTML = gB[1].dif

grupoB[12].innerHTML = gB[2].equipo
grupoB[12].appendChild(gB[2].bandera)
grupoB[13].innerHTML = gB[2].pts
grupoB[14].innerHTML = gB[2].pj
grupoB[15].innerHTML = gB[2].gf
grupoB[16].innerHTML = gB[2].gc
grupoB[17].innerHTML = gB[2].dif

grupoB[18].innerHTML = gB[3].equipo
grupoB[18].appendChild(gB[3].bandera)
grupoB[19].innerHTML = gB[3].pts
grupoB[20].innerHTML = gB[3].pj
grupoB[21].innerHTML = gB[3].gf
grupoB[22].innerHTML = gB[3].gc
grupoB[23].innerHTML = gB[3].dif
const totalPTSGB = [+spanPuntosB[0].innerText,+spanPuntosB[1].innerText,+spanPuntosB[2].innerText,+spanPuntosB[3].innerText,+spanPuntosB[4].innerText,+spanPuntosB[5].innerText] // armamos un array para meter los puntos obtenidos de cada partido y lo hacemos con el push

const resultGB = totalPTSGB.reduce((a,b) => a+b) // sumamos todos los puntos obtenidos del array

spanPuntosB[6].innerHTML = resultGB
spanPuntosB[7].innerHTML = resultGB

// CONTADOR DE PUNTOS GRUPO C //
// tomamos los valores de los simulados, que luego deberiamos traerlos del local storage
const argentinaSimuP1 = d.getElementById("ap1s").value
const argentinaSimuP2 = d.getElementById("ap2s").value
const argentinaSimuP3 = d.getElementById("ap3s").value
const arabiaSimuP1 = d.getElementById("asp1s").value
const arabiaSimuP2 = d.getElementById("asp2s").value
const arabiaSimuP3 = d.getElementById("asp3s").value
const mexicoSimuP1 = d.getElementById("mp1s").value
const mexicoSimuP2 = d.getElementById("mp2s").value
const mexicoSimuP3 = d.getElementById("mp3s").value
const poloniaSimuP1 = d.getElementById("polp1s").value
const poloniaSimuP2 = d.getElementById("polp2s").value
const poloniaSimuP3 = d.getElementById("polp3s").value    


// COMPARACION DE PUNTOS C//
// ARG VS ARABIA //
if (argentinaRealP1.length === 0) { // hacemos esta comparacion para que cuando este vacio el input no lo tome como si fuese 0-0 y te tome como empate
spanPuntosC[0].innerHTML = ""
} else if (argentinaSimuP1 === argentinaRealP1 &&
arabiaSimuP1 === arabiaRealP1) {
spanPuntosC[0].innerHTML=3
} else if (argentinaRealP1 > arabiaRealP1 && 
         argentinaSimuP1 > arabiaSimuP1 &&
         argentinaRealP1 === argentinaSimuP1 &&
         arabiaRealP1 !== arabiaSimuP1) {
spanPuntosC[0].innerHTML=2
} else if (argentinaRealP1 > arabiaRealP1 &&
       argentinaSimuP1 > arabiaSimuP1 &&
       argentinaRealP1 !== argentinaSimuP1 &&
       arabiaRealP1 === arabiaSimuP1) {
spanPuntosC[0].innerHTML=2
} else if (argentinaRealP1 < arabiaRealP1 &&
           argentinaSimuP1 < arabiaSimuP1 &&
           argentinaRealP1 === argentinaSimuP1 &&
           arabiaRealP1 !== arabiaSimuP1 ){
spanPuntosC[0].innerHTML=2
} else if (argentinaRealP1 < arabiaRealP1 &&
          argentinaSimuP1 < arabiaSimuP1 &&
          argentinaRealP1 !== argentinaSimuP1 &&
          arabiaRealP1 === arabiaSimuP1) {
spanPuntosC[0].innerHTML=2
} else if (argentinaRealP1 > arabiaRealP1 &&
          argentinaSimuP1 < arabiaSimuP1 &&
          argentinaRealP1 === argentinaSimuP1 &&
          arabiaRealP1 !== arabiaSimuP1 ){
spanPuntosC[0].innerHTML=1
} else if (argentinaRealP1 > arabiaRealP1 &&
        argentinaSimuP1 < arabiaSimuP1 &&
        argentinaRealP1 !== argentinaSimuP1 &&
        arabiaRealP1 === arabiaSimuP1) {
spanPuntosC[0].innerHTML=1
} else if (argentinaRealP1 < arabiaRealP1 &&
          argentinaSimuP1 > arabiaSimuP1 &&
          argentinaRealP1 === argentinaSimuP1 &&
          arabiaRealP1 !== arabiaSimuP1) {
spanPuntosC[0].innerHTML=1
} else if (argentinaRealP1 < arabiaRealP1 &&
        argentinaSimuP1 > arabiaSimuP1 &&
       argentinaRealP1 !== argentinaSimuP1 &&
       arabiaRealP1 === arabiaSimuP1){
spanPuntosC[0].innerHTML=1
} else if (argentinaRealP1 === arabiaRealP1 &&
          argentinaSimuP1 !== arabiaSimuP1 &&
          argentinaRealP1 === argentinaSimuP1 &&
          arabiaRealP1 !== arabiaSimuP1 ) {
spanPuntosC[0].innerHTML=1
} else if (argentinaRealP1 === arabiaRealP1 &&
        argentinaSimuP1 !== arabiaSimuP1 &&
        argentinaRealP1 !== argentinaSimuP1 &&
        arabiaRealP1 === arabiaSimuP1) {
spanPuntosC[0].innerHTML=1
} else if (argentinaRealP1 === arabiaRealP1 &&
           argentinaSimuP1 === arabiaSimuP1 &&
          argentinaRealP1 !== argentinaSimuP1 &&
          arabiaRealP1 !== arabiaSimuP1) {
spanPuntosC[0].innerHTML=1
} else if (argentinaRealP1 > arabiaRealP1 &&
          argentinaSimuP1 > arabiaSimuP1 &&
          argentinaRealP1 !== argentinaSimuP1 &&
          arabiaRealP1 !== arabiaSimuP1) {
spanPuntosC[0].innerHTML=1
} else if (argentinaRealP1 < arabiaRealP1 &&
          argentinaSimuP1 < arabiaSimuP1 &&
          argentinaRealP1 !== argentinaSimuP1 &&
         arabiaRealP1 !== arabiaSimuP1) {
 spanPuntosC[0].innerHTML= 1
} else if (argentinaRealP1 !== arabiaRealP1 &&
          argentinaSimuP1 === arabiaSimuP1 &&
          argentinaRealP1 === argentinaSimuP1 &&
          arabiaRealP1 !== arabiaSimuP1 ) {
spanPuntosC[0].innerHTML=1
} else if (argentinaRealP1 !== arabiaRealP1 &&
        argentinaSimuP1 === arabiaSimuP1 &&
       argentinaRealP1 !== argentinaSimuP1 &&
       arabiaRealP1 === arabiaSimuP1){
spanPuntosC[0].innerHTML=1  
} else spanPuntosC[0].innerHTML=0


// MEX VS POL //
if (mexicoRealP1.length === 0) {
spanPuntosC[1].innerHTML = ""
}else if (mexicoSimuP1 === mexicoRealP1 && 
poloniaSimuP1 === poloniaRealP1) {
spanPuntosC[1].innerHTML=3
} else if (mexicoRealP1 > poloniaRealP1 && 
         mexicoSimuP1 > poloniaSimuP1 &&
         mexicoRealP1 === mexicoSimuP1 &&
         poloniaRealP1 !== poloniaSimuP1) {
spanPuntosC[1].innerHTML=2
} else if (mexicoRealP1 > poloniaRealP1 &&
       mexicoSimuP1 > poloniaSimuP1 &&
       mexicoRealP1 !== mexicoSimuP1 &&
       poloniaRealP1 === poloniaSimuP1) {
spanPuntosC[1].innerHTML=2
} else if (mexicoRealP1 < poloniaRealP1 &&
           mexicoSimuP1 < poloniaSimuP1 &&
           mexicoRealP1 === mexicoSimuP1 &&
           poloniaRealP1 !== poloniaSimuP1 ){
spanPuntosC[1].innerHTML=2
} else if (mexicoRealP1 < poloniaRealP1 &&
          mexicoSimuP1 < poloniaSimuP1 &&
          mexicoRealP1 !== mexicoSimuP1 &&
          poloniaRealP1 === poloniaSimuP1) {
spanPuntosC[1].innerHTML=2
} else if (mexicoRealP1 > poloniaRealP1 &&
          mexicoSimuP1 < poloniaSimuP1 &&
          mexicoRealP1 === mexicoSimuP1 &&
          poloniaRealP1 !== poloniaSimuP1 ){
spanPuntosC[1].innerHTML=1
} else if (mexicoRealP1 > poloniaRealP1 &&
        mexicoSimuP1 < poloniaSimuP1 &&
        mexicoRealP1 !== mexicoSimuP1 &&
        poloniaRealP1 === poloniaSimuP1) {
spanPuntosC[1].innerHTML=1
} else if (mexicoRealP1 < poloniaRealP1 &&
          mexicoSimuP1 > poloniaSimuP1 &&
          mexicoRealP1 === mexicoSimuP1 &&
          poloniaRealP1 !== poloniaSimuP1) {
spanPuntosC[1].innerHTML=1
} else if (mexicoRealP1 < poloniaRealP1 &&
        mexicoSimuP1 > poloniaSimuP1 &&
       mexicoRealP1 !== mexicoSimuP1 &&
       poloniaRealP1 === poloniaSimuP1){
spanPuntosC[1].innerHTML=1
} else if (mexicoRealP1 === poloniaRealP1 &&
          mexicoSimuP1 !== poloniaSimuP1 &&
          mexicoRealP1 === mexicoSimuP1 &&
          poloniaRealP1 !== poloniaSimuP1 ) {
spanPuntosC[1].innerHTML=1
} else if (mexicoRealP1 === poloniaRealP1 &&
        mexicoSimuP1 !== poloniaSimuP1 &&
        mexicoRealP1 !== mexicoSimuP1 &&
        poloniaRealP1 === poloniaSimuP1) {
spanPuntosC[1].innerHTML=1
} else if (mexicoRealP1 === poloniaRealP1 &&
           mexicoSimuP1 === poloniaSimuP1 &&
          mexicoRealP1 !== mexicoSimuP1 &&
          poloniaRealP1 !== poloniaSimuP1) {
spanPuntosC[1].innerHTML=1
} else if (mexicoRealP1 > poloniaRealP1 &&
          mexicoSimuP1 > poloniaSimuP1 &&
          mexicoRealP1 !== mexicoSimuP1 &&
          poloniaRealP1 !== poloniaSimuP1) {
spanPuntosC[1].innerHTML=1
} else if (mexicoRealP1 < poloniaRealP1 &&
          mexicoSimuP1 < poloniaSimuP1 &&
          mexicoRealP1 !== mexicoSimuP1 &&
         poloniaRealP1 !== poloniaSimuP1) {
 spanPuntosC[1].innerHTML= 1
} else if (mexicoRealP1 !== poloniaRealP1 &&
          mexicoSimuP1 === poloniaSimuP1 &&
          mexicoRealP1 === mexicoSimuP1 &&
          poloniaRealP1 !== poloniaSimuP1 ) {
spanPuntosC[1].innerHTML=1
} else if (mexicoRealP1 !== poloniaRealP1 &&
        mexicoSimuP1 === poloniaSimuP1 &&
       mexicoRealP1 !== mexicoSimuP1 &&
       poloniaRealP1 === poloniaSimuP1){
spanPuntosC[1].innerHTML=1  
} else spanPuntosC[1].innerHTML=0


//POL VS ARABIA //
if (poloniaRealP2.length === 0) {
spanPuntosC[2].innerHTML = ""
} else if (poloniaSimuP2 === poloniaRealP2 && 
arabiaSimuP2 === arabiaRealP2) {
spanPuntosC[2].innerHTML=3
} else if (poloniaRealP2 > arabiaRealP2 && 
         poloniaSimuP2 > arabiaSimuP2 &&
         poloniaRealP2 === poloniaSimuP2 &&
         arabiaRealP2 !== arabiaSimuP2) {
spanPuntosC[2].innerHTML=2
} else if (poloniaRealP2 > arabiaRealP2 &&
       poloniaSimuP2 > arabiaSimuP2 &&
       poloniaRealP2 !== poloniaSimuP2 &&
       arabiaRealP2 === arabiaSimuP2) {
spanPuntosC[2].innerHTML=2
} else if (poloniaRealP2 < arabiaRealP2 &&
           poloniaSimuP2 < arabiaSimuP2 &&
           poloniaRealP2 === poloniaSimuP2 &&
           arabiaRealP2 !== arabiaSimuP2 ){
spanPuntosC[2].innerHTML=2
} else if (poloniaRealP2 < arabiaRealP2 &&
          poloniaSimuP2 < arabiaSimuP2 &&
          poloniaRealP2 !== poloniaSimuP2 &&
          arabiaRealP2 === arabiaSimuP2) {
spanPuntosC[2].innerHTML=2
} else if (poloniaRealP2 > arabiaRealP2 &&
          poloniaSimuP2 < arabiaSimuP2 &&
          poloniaRealP2 === poloniaSimuP2 &&
          arabiaRealP2 !== arabiaSimuP2 ){
spanPuntosC[2].innerHTML=1
} else if (poloniaRealP2 > arabiaRealP2 &&
        poloniaSimuP2 < arabiaSimuP2 &&
        poloniaRealP2 !== poloniaSimuP2 &&
        arabiaRealP2 === arabiaSimuP2) {
spanPuntosC[2].innerHTML=1
} else if (poloniaRealP2 < arabiaRealP2 &&
          poloniaSimuP2 > arabiaSimuP2 &&
          poloniaRealP2 === poloniaSimuP2 &&
          arabiaRealP2 !== arabiaSimuP2) {
spanPuntosC[2].innerHTML=1
} else if (poloniaRealP2 < arabiaRealP2 &&
        poloniaSimuP2 > arabiaSimuP2 &&
       poloniaRealP2 !== poloniaSimuP2 &&
       arabiaRealP2 === arabiaSimuP2){
spanPuntosC[2].innerHTML=1
} else if (poloniaRealP2 === arabiaRealP2 &&
          poloniaSimuP2 !== arabiaSimuP2 &&
          poloniaRealP2 === poloniaSimuP2 &&
          arabiaRealP2 !== arabiaSimuP2 ) {
spanPuntosC[2].innerHTML=1
} else if (poloniaRealP2 === arabiaRealP2 &&
        poloniaSimuP2 !== arabiaSimuP2 &&
        poloniaRealP2 !== poloniaSimuP2 &&
        arabiaRealP2 === arabiaSimuP2) {
spanPuntosC[2].innerHTML=1
} else if (poloniaRealP2 === arabiaRealP2 &&
           poloniaSimuP2 === arabiaSimuP2 &&
          poloniaRealP2 !== poloniaSimuP2 &&
          arabiaRealP2 !== arabiaSimuP2) {
spanPuntosC[2].innerHTML=1
} else if (poloniaRealP2 > arabiaRealP2 &&
          poloniaSimuP2 > arabiaSimuP2 &&
          poloniaRealP2 !== poloniaSimuP2 &&
          arabiaRealP2 !== arabiaSimuP2) {
spanPuntosC[2].innerHTML=1
} else if (poloniaRealP2 < arabiaRealP2 &&
          poloniaSimuP2 < arabiaSimuP2 &&
          poloniaRealP2 !== poloniaSimuP2 &&
         arabiaRealP2 !== arabiaSimuP2) {
 spanPuntosC[2].innerHTML= 1
} else if (poloniaRealP2 !== arabiaRealP2 &&
          poloniaSimuP2 === arabiaSimuP2 &&
          poloniaRealP2 === poloniaSimuP2 &&
          arabiaRealP2 !== arabiaSimuP2 ) {
spanPuntosC[2].innerHTML=1
} else if (poloniaRealP2 !== arabiaRealP2 &&
        poloniaSimuP2 === arabiaSimuP2 &&
       poloniaRealP2 !== poloniaSimuP2 &&
       arabiaRealP2 === arabiaSimuP2){
spanPuntosC[2].innerHTML=1  
} else spanPuntosC[2].innerHTML=0


// ARG VS MEX //
if (argentinaRealP2.length === 0){
spanPuntosC[3].innerHTML = ""
}else if (argentinaSimuP2 === argentinaRealP2 && 
mexicoSimuP2 === mexicoRealP2) {
spanPuntosC[3].innerHTML=3
} else if (argentinaRealP2 > mexicoRealP2 && 
         argentinaSimuP2 > mexicoSimuP2 &&
         argentinaRealP2 === argentinaSimuP2 &&
         mexicoRealP2 !== mexicoSimuP2) {
spanPuntosC[3].innerHTML=2
} else if (argentinaRealP2 > mexicoRealP2 &&
       argentinaSimuP2 > mexicoSimuP2 &&
       argentinaRealP2 !== argentinaSimuP2 &&
       mexicoRealP2 === mexicoSimuP2) {
spanPuntosC[3].innerHTML=2
} else if (argentinaRealP2 < mexicoRealP2 &&
           argentinaSimuP2 < mexicoSimuP2 &&
           argentinaRealP2 === argentinaSimuP2 &&
           mexicoRealP2 !== mexicoSimuP2 ){
spanPuntosC[3].innerHTML=2
} else if (argentinaRealP2 < mexicoRealP2 &&
          argentinaSimuP2 < mexicoSimuP2 &&
          argentinaRealP2 !== argentinaSimuP2 &&
          mexicoRealP2 === mexicoSimuP2) {
spanPuntosC[3].innerHTML=2
} else if (argentinaRealP2 > mexicoRealP2 &&
          argentinaSimuP2 < mexicoSimuP2 &&
          argentinaRealP2 === argentinaSimuP2 &&
          mexicoRealP2 !== mexicoSimuP2 ){
spanPuntosC[3].innerHTML=1
} else if (argentinaRealP2 > mexicoRealP2 &&
        argentinaSimuP2 < mexicoSimuP2 &&
        argentinaRealP2 !== argentinaSimuP2 &&
        mexicoRealP2 === mexicoSimuP2) {
spanPuntosC[3].innerHTML=1
} else if (argentinaRealP2 < mexicoRealP2 &&
          argentinaSimuP2 > mexicoSimuP2 &&
          argentinaRealP2 === argentinaSimuP2 &&
          mexicoRealP2 !== mexicoSimuP2) {
spanPuntosC[3].innerHTML=1
} else if (argentinaRealP2 < mexicoRealP2 &&
        argentinaSimuP2 > mexicoSimuP2 &&
       argentinaRealP2 !== argentinaSimuP2 &&
       mexicoRealP2 === mexicoSimuP2){
spanPuntosC[3].innerHTML=1
} else if (argentinaRealP2 === mexicoRealP2 &&
          argentinaSimuP2 !== mexicoSimuP2 &&
          argentinaRealP2 === argentinaSimuP2 &&
          mexicoRealP2 !== mexicoSimuP2 ) {
spanPuntosC[3].innerHTML=1
} else if (argentinaRealP2 === mexicoRealP2 &&
        argentinaSimuP2 !== mexicoSimuP2 &&
        argentinaRealP2 !== argentinaSimuP2 &&
        mexicoRealP2 === mexicoSimuP2) {
spanPuntosC[3].innerHTML=1
} else if (argentinaRealP2 === mexicoRealP2 &&
           argentinaSimuP2 === mexicoSimuP2 &&
          argentinaRealP2 !== argentinaSimuP2 &&
          mexicoRealP2 !== mexicoSimuP2) {
spanPuntosC[3].innerHTML=1
} else if (argentinaRealP2 > mexicoRealP2 &&
          argentinaSimuP2 > mexicoSimuP2 &&
          argentinaRealP2 !== argentinaSimuP2 &&
          mexicoRealP2 !== mexicoSimuP2) {
spanPuntosC[3].innerHTML=1
} else if (argentinaRealP2 < mexicoRealP2 &&
          argentinaSimuP2 < mexicoSimuP2 &&
          argentinaRealP2 !== argentinaSimuP2 &&
         mexicoRealP2 !== mexicoSimuP2) {
 spanPuntosC[3].innerHTML= 1
} else if (argentinaRealP2 !== mexicoRealP2 &&
          argentinaSimuP2 === mexicoSimuP2 &&
          argentinaRealP2 === argentinaSimuP2 &&
          mexicoRealP2 !== mexicoSimuP2 ) {
spanPuntosC[3].innerHTML=1
} else if (argentinaRealP2 !== mexicoRealP2 &&
        argentinaSimuP2 === mexicoSimuP2 &&
       argentinaRealP2 !== argentinaSimuP2 &&
       mexicoRealP2 === mexicoSimuP2){
spanPuntosC[3].innerHTML=1  
} else spanPuntosC[3].innerHTML=0


// POL VS ARG //
if (poloniaRealP3.length === 0) {
spanPuntosC[4].innerHTML = ""
}else if (poloniaSimuP3 === poloniaRealP3 && 
argentinaSimuP3 === argentinaRealP3) {
spanPuntosC[4].innerHTML=3
} else if (poloniaRealP3 > argentinaRealP3 && 
         poloniaSimuP3 > argentinaSimuP3 &&
         poloniaRealP3 === poloniaSimuP3 &&
         argentinaRealP3 !== argentinaSimuP3) {
spanPuntosC[4].innerHTML=2
} else if (poloniaRealP3 > argentinaRealP3 &&
       poloniaSimuP3 > argentinaSimuP3 &&
       poloniaRealP3 !== poloniaSimuP3 &&
       argentinaRealP3 === argentinaSimuP3) {
spanPuntosC[4].innerHTML=2
} else if (poloniaRealP3 < argentinaRealP3 &&
           poloniaSimuP3 < argentinaSimuP3 &&
           poloniaRealP3 === poloniaSimuP3 &&
           argentinaRealP3 !== argentinaSimuP3 ){
spanPuntosC[4].innerHTML=2
} else if (poloniaRealP3 < argentinaRealP3 &&
          poloniaSimuP3 < argentinaSimuP3 &&
          poloniaRealP3 !== poloniaSimuP3 &&
          argentinaRealP3 === argentinaSimuP3) {
spanPuntosC[4].innerHTML=2
} else if (poloniaRealP3 > argentinaRealP3 &&
          poloniaSimuP3 < argentinaSimuP3 &&
          poloniaRealP3 === poloniaSimuP3 &&
          argentinaRealP3 !== argentinaSimuP3 ){
spanPuntosC[4].innerHTML=1
} else if (poloniaRealP3 > argentinaRealP3 &&
        poloniaSimuP3 < argentinaSimuP3 &&
        poloniaRealP3 !== poloniaSimuP3 &&
        argentinaRealP3 === argentinaSimuP3) {
spanPuntosC[4].innerHTML=1
} else if (poloniaRealP3 < argentinaRealP3 &&
          poloniaSimuP3 > argentinaSimuP3 &&
          poloniaRealP3 === poloniaSimuP3 &&
          argentinaRealP3 !== argentinaSimuP3) {
spanPuntosC[4].innerHTML=1
} else if (poloniaRealP3 < argentinaRealP3 &&
        poloniaSimuP3 > argentinaSimuP3 &&
       poloniaRealP3 !== poloniaSimuP3 &&
       argentinaRealP3 === argentinaSimuP3){
spanPuntosC[4].innerHTML=1
} else if (poloniaRealP3 === argentinaRealP3 &&
          poloniaSimuP3 !== argentinaSimuP3 &&
          poloniaRealP3 === poloniaSimuP3 &&
          argentinaRealP3 !== argentinaSimuP3 ) {
spanPuntosC[4].innerHTML=1
} else if (poloniaRealP3 === argentinaRealP3 &&
        poloniaSimuP3 !== argentinaSimuP3 &&
        poloniaRealP3 !== poloniaSimuP3 &&
        argentinaRealP3 === argentinaSimuP3) {
spanPuntosC[4].innerHTML=1
} else if (poloniaRealP3 === argentinaRealP3 &&
           poloniaSimuP3 === argentinaSimuP3 &&
          poloniaRealP3 !== poloniaSimuP3 &&
          argentinaRealP3 !== argentinaSimuP3) {
spanPuntosC[4].innerHTML=1
} else if (poloniaRealP3 > argentinaRealP3 &&
          poloniaSimuP3 > argentinaSimuP3 &&
          poloniaRealP3 !== poloniaSimuP3 &&
          argentinaRealP3 !== argentinaSimuP3) {
spanPuntosC[4].innerHTML=1
} else if (poloniaRealP3 < argentinaRealP3 &&
          poloniaSimuP3 < argentinaSimuP3 &&
          poloniaRealP3 !== poloniaSimuP3 &&
         argentinaRealP3 !== argentinaSimuP3) {
 spanPuntosC[4].innerHTML= 1
} else if (poloniaRealP3 !== argentinaRealP3 &&
          poloniaSimuP3 === argentinaSimuP3 &&
          poloniaRealP3 === poloniaSimuP3 &&
          argentinaRealP3 !== argentinaSimuP3 ) {
spanPuntosC[4].innerHTML=1
} else if (poloniaRealP3 !== argentinaRealP3 &&
        poloniaSimuP3 === argentinaSimuP3 &&
       poloniaRealP3 !== poloniaSimuP3 &&
       argentinaRealP3 === argentinaSimuP3){
spanPuntosC[4].innerHTML=1  
} else spanPuntosC[4].innerHTML=0


// ARABIA VS MEX //
if (arabiaRealP3.length === 0){
spanPuntosC[5].innerHTML = ""
}  else  if (arabiaSimuP3 === arabiaRealP3 && 
    mexicoSimuP3 === mexicoRealP3) {
     spanPuntosC[5].innerHTML=3
} else if (arabiaRealP3 > mexicoRealP3 && 
                 arabiaSimuP3 > mexicoSimuP3 &&
                 arabiaRealP3 === arabiaSimuP3 &&
                 mexicoRealP3 !== mexicoSimuP3) {
      spanPuntosC[5].innerHTML=2
} else if (arabiaRealP3 > mexicoRealP3 &&
               arabiaSimuP3 > mexicoSimuP3 &&
               arabiaRealP3 !== arabiaSimuP3 &&
               mexicoRealP3 === mexicoSimuP3) {
    spanPuntosC[5].innerHTML=2
} else if (arabiaRealP3 < mexicoRealP3 &&
                   arabiaSimuP3 < mexicoSimuP3 &&
                   arabiaRealP3 === arabiaSimuP3 &&
                   mexicoRealP3 !== mexicoSimuP3 ){
       spanPuntosC[5].innerHTML=2
} else if (arabiaRealP3 < mexicoRealP3 &&
                  arabiaSimuP3 < mexicoSimuP3 &&
                  arabiaRealP3 !== arabiaSimuP3 &&
                  mexicoRealP3 === mexicoSimuP3) {
       spanPuntosC[5].innerHTML=2
} else if (arabiaRealP3 > mexicoRealP3 &&
                  arabiaSimuP3 < mexicoSimuP3 &&
                  arabiaRealP3 === arabiaSimuP3 &&
                  mexicoRealP3 !== mexicoSimuP3 ){
        spanPuntosC[5].innerHTML=1
} else if (arabiaRealP3 > mexicoRealP3 &&
                arabiaSimuP3 < mexicoSimuP3 &&
                arabiaRealP3 !== arabiaSimuP3 &&
                mexicoRealP3 === mexicoSimuP3) {
        spanPuntosC[5].innerHTML=1
} else if (arabiaRealP3 < mexicoRealP3 &&
                  arabiaSimuP3 > mexicoSimuP3 &&
                  arabiaRealP3 === arabiaSimuP3 &&
                  mexicoRealP3 !== mexicoSimuP3) {
        spanPuntosC[5].innerHTML=1
} else if (arabiaRealP3 < mexicoRealP3 &&
                arabiaSimuP3 > mexicoSimuP3 &&
               arabiaRealP3 !== arabiaSimuP3 &&
               mexicoRealP3 === mexicoSimuP3){
       spanPuntosC[5].innerHTML=1
} else if (arabiaRealP3 === mexicoRealP3 &&
                  arabiaSimuP3 !== mexicoSimuP3 &&
                  arabiaRealP3 === arabiaSimuP3 &&
                  mexicoRealP3 !== mexicoSimuP3 ) {
        spanPuntosC[5].innerHTML=1
} else if (arabiaRealP3 === mexicoRealP3 &&
                arabiaSimuP3 !== mexicoSimuP3 &&
                arabiaRealP3 !== arabiaSimuP3 &&
                mexicoRealP3 === mexicoSimuP3) {
       spanPuntosC[5].innerHTML=1
} else if (arabiaRealP3 === mexicoRealP3 &&
                   arabiaSimuP3 === mexicoSimuP3 &&
                  arabiaRealP3 !== arabiaSimuP3 &&
                  mexicoRealP3 !== mexicoSimuP3) {
        spanPuntosC[5].innerHTML=1
} else if (arabiaRealP3 > mexicoRealP3 &&
                  arabiaSimuP3 > mexicoSimuP3 &&
                  arabiaRealP3 !== arabiaSimuP3 &&
                  mexicoRealP3 !== mexicoSimuP3) {
        spanPuntosC[5].innerHTML=1
} else if (arabiaRealP3 < mexicoRealP3 &&
                  arabiaSimuP3 < mexicoSimuP3 &&
                  arabiaRealP3 !== arabiaSimuP3 &&
                 mexicoRealP3 !== mexicoSimuP3) {
         spanPuntosC[5].innerHTML= 1
} else if (arabiaRealP3 !== mexicoRealP3 &&
                  arabiaSimuP3 === mexicoSimuP3 &&
                  arabiaRealP3 === arabiaSimuP3 &&
                  mexicoRealP3 !== mexicoSimuP3 ) {
        spanPuntosC[5].innerHTML=1
} else if (arabiaRealP3 !== mexicoRealP3 &&
                arabiaSimuP3 === mexicoSimuP3 &&
               arabiaRealP3 !== arabiaSimuP3 &&
               mexicoRealP3 === mexicoSimuP3){
       spanPuntosC[5].innerHTML=1  
} else spanPuntosC[5].innerHTML=0


// ARGENTINA TABLA REAL//

let arrArgentinaGF = [+argentinaRealP1, +argentinaRealP2, +argentinaRealP3] // armamos array con los valores de los inputs
let arrArgentinaGC = [+arabiaRealP1, +mexicoRealP2, +poloniaRealP3]

let argentinaPj = argentinaRealP1.length + argentinaRealP2.length + argentinaRealP3.length
let argentinaGolesF = arrArgentinaGF.reduce((a, b) => a + b)
let argentinaGolesC = arrArgentinaGC.reduce((a, b) => a + b)
let argentinaDiferencia = argentinaGolesF - argentinaGolesC

let argentinaPts = 0
if (argentinaRealP1.length === 0) { //usamos el lengt para comprobar de que no este vacio
argentinaPts += 0
} else if (argentinaRealP1 > arabiaRealP1) {
argentinaPts += 3
} else if (argentinaRealP1 === arabiaRealP1) {
argentinaPts += 1
} else if (argentinaRealP3 < arabiaRealP1) {
argentinaPts += 0
}

if (argentinaRealP2.length === 0) {
argentinaPts += 0
} else if (argentinaRealP2 > mexicoRealP2) {
argentinaPts += 3
} else if (argentinaRealP2 === mexicoRealP2) {
argentinaPts += 1
} else if (argentinaRealP3 < mexicoRealP2) {
argentinaPts += 0
}

if (argentinaRealP3.length === 0) {
argentinaPts += 0
} else if (argentinaRealP3 > poloniaRealP3) {
argentinaPts += 3
} else if (argentinaRealP3 === poloniaRealP3) {
argentinaPts += 1
} else if (argentinaRealP3 < poloniaRealP3) {
argentinaPts += 0
}

// ARABIA TABLA //

let arrArabiaGF = [+arabiaRealP1, +arabiaRealP2, +arabiaRealP3] // armamos array con los valores de los inputs
let arrArabiaGC = [+argentinaRealP1, +poloniaRealP2, +mexicoRealP3]

let arabiaPj = arabiaRealP1.length + arabiaRealP2.length + arabiaRealP3.length
let arabiaGolesF = arrArabiaGF.reduce((a, b) => a + b)
let arabiaGolesC = arrArabiaGC.reduce((a, b) => a + b)
let arabiaDiferencia = arabiaGolesF - arabiaGolesC

let arabiaPts = 0
if (arabiaRealP1.length === 0) { //usamos el lengt para comprobar de que no este vacio
arabiaPts += 0
} else if (arabiaRealP1 > argentinaRealP1) {
arabiaPts += 3
} else if (arabiaRealP1 === argentinaRealP1) {
arabiaPts += 1
} else if (arabiaRealP1 < argentinaRealP1) {
arabiaPts += 0
}

if (arabiaRealP2.length === 0) {
arabiaPts += 0
} else if (arabiaRealP2 > poloniaRealP2) {
arabiaPts += 3
} else if (arabiaRealP2 === poloniaRealP2) {
arabiaPts += 1
} else if (arabiaRealP1 < poloniaRealP2) {
arabiaPts += 0
}

if (arabiaRealP3.length === 0) {
arabiaPts += 0
} else if (arabiaRealP3 > mexicoRealP3) {
arabiaPts += 3
} else if (arabiaRealP3 === mexicoRealP3) {
arabiaPts += 1
} else if (arabiaRealP1 < mexicoRealP3) {
arabiaPts += 0
}


// MEXICO TABLA //

let arrMexicoGF = [+mexicoRealP1, +mexicoRealP2, +mexicoRealP3] // armamos array con los valores de los inputs
let arrMexicoGC = [+poloniaRealP1, +argentinaRealP2, +arabiaRealP3]

let mexicoPj = mexicoRealP1.length + mexicoRealP2.length + mexicoRealP3.length
let mexicoGolesF = arrMexicoGF.reduce((a, b) => a + b)
let mexicoGolesC = arrMexicoGC.reduce((a, b) => a + b)
let mexicoDiferencia = mexicoGolesF - mexicoGolesC

let mexicoPts = 0
if (mexicoRealP1.length === 0) { //usamos el lengt para comprobar de que no este vacio
mexicoPts += 0
} else if (mexicoRealP1 > poloniaRealP1) {
mexicoPts += 3
} else if (mexicoRealP1 === poloniaRealP1) {
mexicoPts += 1
} else if (mexicoRealP1 < poloniaRealP1) {
mexicoPts += 0
}

if (mexicoRealP2.length === 0) {
mexicoPts += 0
} else if (mexicoRealP2 > argentinaRealP2) {
mexicoPts += 3
} else if (mexicoRealP2 === argentinaRealP2) {
mexicoPts += 1
} else if (mexicoRealP1 < argentinaRealP2) {
mexicoPts += 0
}

if (mexicoRealP3.length === 0) {
mexicoPts += 0
} else if (mexicoRealP3 > arabiaRealP3) {
mexicoPts += 3
} else if (mexicoRealP3 === arabiaRealP3) {
mexicoPts += 1
} else if (mexicoRealP1 < arabiaRealP3) {
mexicoPts += 0
}


// POLONIA TABLA //

let arrPoloniaGF = [+poloniaRealP1, +poloniaRealP2, +poloniaRealP3] // armamos array con los valores de los inputs
let arrPoloniaGC = [+mexicoRealP1, +arabiaRealP2, +argentinaRealP3]

let poloniaPj = poloniaRealP1.length + poloniaRealP2.length + poloniaRealP3.length
let poloniaGolesF = arrPoloniaGF.reduce((a, b) => a + b)
let poloniaGolesC = arrPoloniaGC.reduce((a, b) => a + b)
let poloniaDiferencia = poloniaGolesF - poloniaGolesC


let poloniaPts = 0
if (poloniaRealP1.length === 0) { //usamos el lengt para comprobar de que no este vacio
poloniaPts += 0
} else if (poloniaRealP1 > mexicoRealP1) {
poloniaPts += 3
} else if (poloniaRealP1 === mexicoRealP1) {
poloniaPts += 1
} else if (poloniaRealP1 < mexicoRealP1) {
poloniaPts += 0
}

if (poloniaRealP2.length === 0) {
poloniaPts += 0
} else if (poloniaRealP2 > arabiaRealP2) {
poloniaPts += 3
} else if (poloniaRealP2 === arabiaRealP2) {
poloniaPts += 1
} else if (poloniaRealP1 < arabiaRealP2) {
poloniaPts += 0
}

if (poloniaRealP3.length === 0) {
poloniaPts += 0
} else if (poloniaRealP3 > argentinaRealP3) {
poloniaPts += 3
} else if (poloniaRealP3 === argentinaRealP3) {
poloniaPts += 1
} else if (poloniaRealP1 < argentinaRealP3) {
poloniaPts += 0
}


// TABLA GRUPO A //
let banderaArgentina = new Image();
banderaArgentina.src = "https://www.promiedos.com.ar/images/ps/argentina.gif"

let banderaArabia = new Image()
banderaArabia.src = "https://www.promiedos.com.ar/images/ps/arabiasaudita.gif"

let banderaMexico = new Image()
banderaMexico.src = "https://www.promiedos.com.ar/images/ps/mexico.gif"

let banderaPolonia = new Image()
banderaPolonia.src = "https://www.promiedos.com.ar/images/ps/polonia.gif"

let gC = [{ equipo: "argentina", bandera: banderaArgentina, pts: argentinaPts, pj: argentinaPj, gf: argentinaGolesF, gc: argentinaGolesC, dif: argentinaDiferencia },
{ equipo: "arabia", bandera: banderaArabia, pts: arabiaPts, pj: arabiaPj, gf: arabiaGolesF, gc: arabiaGolesC, dif: arabiaDiferencia },
{ equipo: "polonia", bandera: banderaPolonia, pts: poloniaPts, pj: poloniaPj, gf: poloniaGolesF, gc: poloniaGolesC, dif: poloniaDiferencia },
{ equipo: "mexico", bandera: banderaMexico, pts: mexicoPts, pj: mexicoPj, gf: mexicoGolesF, gc: mexicoGolesC, dif: mexicoDiferencia }] // armamos un array donde guardamos toda la informacion de la tabla de grupos //


gC.sort((a, b) => b.dif - a.dif) // y despues por diferencia de goles
gC.sort((a, b) => b.pts - a.pts) // ordenamos los objetos primero por pts

grupoC[0].innerHTML = gC[0].equipo
grupoC[0].appendChild(gC[0].bandera)
grupoC[1].innerHTML = gC[0].pts
grupoC[2].innerHTML = gC[0].pj
grupoC[3].innerHTML = gC[0].gf
grupoC[4].innerHTML = gC[0].gc
grupoC[5].innerHTML = gC[0].dif

grupoC[6].innerHTML = gC[1].equipo
grupoC[6].appendChild(gC[1].bandera)
grupoC[7].innerHTML = gC[1].pts
grupoC[8].innerHTML = gC[1].pj
grupoC[9].innerHTML = gC[1].gf
grupoC[10].innerHTML = gC[1].gc
grupoC[11].innerHTML = gC[1].dif

grupoC[12].innerHTML = gC[2].equipo
grupoC[12].appendChild(gC[2].bandera)
grupoC[13].innerHTML = gC[2].pts
grupoC[14].innerHTML = gC[2].pj
grupoC[15].innerHTML = gC[2].gf
grupoC[16].innerHTML = gC[2].gc
grupoC[17].innerHTML = gC[2].dif

grupoC[18].innerHTML = gC[3].equipo
grupoC[18].appendChild(gC[3].bandera)
grupoC[19].innerHTML = gC[3].pts
grupoC[20].innerHTML = gC[3].pj
grupoC[21].innerHTML = gC[3].gf
grupoC[22].innerHTML = gC[3].gc
grupoC[23].innerHTML = gC[3].dif

const totalPTSGC = [+spanPuntosC[0].innerText,+spanPuntosC[1].innerText,+spanPuntosC[2].innerText,+spanPuntosC[3].innerText,+spanPuntosC[4].innerText,+spanPuntosC[5].innerText] // armamos un array para meter los puntos obtenidos de cada partido y lo hacemos con el push

const resultGC = totalPTSGC.reduce((a,b) => a+b) // sumamos todos los puntos obtenidos del array

spanPuntosC[6].innerHTML = resultGC
spanPuntosC[7].innerHTML = resultGC


// CONTADOR DE PUNTOS GRUPO D //
// tomamos los valores de los simulados, que luego deberiamos traerlos del local storage
const franciaSimuP1 = d.getElementById("fp1s").value
const franciaSimuP2 = d.getElementById("fp2s").value
const franciaSimuP3 = d.getElementById("fp3s").value
const australiaSimuP1 = d.getElementById("aup1s").value
const australiaSimuP2 = d.getElementById("aup2s").value
const australiaSimuP3 = d.getElementById("aup3s").value
const dinamarcaSimuP1 = d.getElementById("dp1s").value
const dinamarcaSimuP2 = d.getElementById("dp2s").value
const dinamarcaSimuP3 = d.getElementById("dp3s").value
const tunezSimuP1 = d.getElementById("tp1s").value
const tunezSimuP2 = d.getElementById("tp2s").value
const tunezSimuP3 = d.getElementById("tp3s").value    


// COMPARACION DE PUNTOS C//
// DIN VS TUN //
if (dinamarcaRealP1.length === 0) { // hacemos esta comparacion para que cuando este vacio el input no lo tome como si fuese 0-0 y te tome como empate
spanPuntosD[0].innerHTML = ""
} else if (dinamarcaSimuP1 === dinamarcaRealP1 &&
tunezSimuP1 === tunezRealP1) {
spanPuntosD[0].innerHTML=3
} else if (dinamarcaRealP1 > tunezRealP1 && 
         dinamarcaSimuP1 > tunezSimuP1 &&
         dinamarcaRealP1 === dinamarcaSimuP1 &&
         tunezRealP1 !== tunezSimuP1) {
spanPuntosD[0].innerHTML=2
} else if (dinamarcaRealP1 > tunezRealP1 &&
       dinamarcaSimuP1 > tunezSimuP1 &&
       dinamarcaRealP1 !== dinamarcaSimuP1 &&
       tunezRealP1 === tunezSimuP1) {
spanPuntosD[0].innerHTML=2
} else if (dinamarcaRealP1 < tunezRealP1 &&
           dinamarcaSimuP1 < tunezSimuP1 &&
           dinamarcaRealP1 === dinamarcaSimuP1 &&
           tunezRealP1 !== tunezSimuP1 ){
spanPuntosD[0].innerHTML=2
} else if (dinamarcaRealP1 < tunezRealP1 &&
          dinamarcaSimuP1 < tunezSimuP1 &&
          dinamarcaRealP1 !== dinamarcaSimuP1 &&
          tunezRealP1 === tunezSimuP1) {
spanPuntosD[0].innerHTML=2
} else if (dinamarcaRealP1 > tunezRealP1 &&
          dinamarcaSimuP1 < tunezSimuP1 &&
          dinamarcaRealP1 === dinamarcaSimuP1 &&
          tunezRealP1 !== tunezSimuP1 ){
spanPuntosD[0].innerHTML=1
} else if (dinamarcaRealP1 > tunezRealP1 &&
        dinamarcaSimuP1 < tunezSimuP1 &&
        dinamarcaRealP1 !== dinamarcaSimuP1 &&
        tunezRealP1 === tunezSimuP1) {
spanPuntosD[0].innerHTML=1
} else if (dinamarcaRealP1 < tunezRealP1 &&
          dinamarcaSimuP1 > tunezSimuP1 &&
          dinamarcaRealP1 === dinamarcaSimuP1 &&
          tunezRealP1 !== tunezSimuP1) {
spanPuntosD[0].innerHTML=1
} else if (dinamarcaRealP1 < tunezRealP1 &&
        dinamarcaSimuP1 > tunezSimuP1 &&
       dinamarcaRealP1 !== dinamarcaSimuP1 &&
       tunezRealP1 === tunezSimuP1){
spanPuntosD[0].innerHTML=1
} else if (dinamarcaRealP1 === tunezRealP1 &&
          dinamarcaSimuP1 !== tunezSimuP1 &&
          dinamarcaRealP1 === dinamarcaSimuP1 &&
          tunezRealP1 !== tunezSimuP1 ) {
spanPuntosD[0].innerHTML=1
} else if (dinamarcaRealP1 === tunezRealP1 &&
        dinamarcaSimuP1 !== tunezSimuP1 &&
        dinamarcaRealP1 !== dinamarcaSimuP1 &&
        tunezRealP1 === tunezSimuP1) {
spanPuntosD[0].innerHTML=1
} else if (dinamarcaRealP1 === tunezRealP1 &&
           dinamarcaSimuP1 === tunezSimuP1 &&
          dinamarcaRealP1 !== dinamarcaSimuP1 &&
          tunezRealP1 !== tunezSimuP1) {
spanPuntosD[0].innerHTML=1
} else if (dinamarcaRealP1 > tunezRealP1 &&
          dinamarcaSimuP1 > tunezSimuP1 &&
          dinamarcaRealP1 !== dinamarcaSimuP1 &&
          tunezRealP1 !== tunezSimuP1) {
spanPuntosD[0].innerHTML=1
} else if (dinamarcaRealP1 < tunezRealP1 &&
          dinamarcaSimuP1 < tunezSimuP1 &&
          dinamarcaRealP1 !== dinamarcaSimuP1 &&
         tunezRealP1 !== tunezSimuP1) {
 spanPuntosD[0].innerHTML= 1
} else if (dinamarcaRealP1 !== tunezRealP1 &&
          dinamarcaSimuP1 === tunezSimuP1 &&
          dinamarcaRealP1 === dinamarcaSimuP1 &&
          tunezRealP1 !== tunezSimuP1 ) {
spanPuntosD[0].innerHTML=1
} else if (dinamarcaRealP1 !== tunezRealP1 &&
        dinamarcaSimuP1 === tunezSimuP1 &&
       dinamarcaRealP1 !== dinamarcaSimuP1 &&
       tunezRealP1 === tunezSimuP1){
spanPuntosD[0].innerHTML=1  
} else spanPuntosD[0].innerHTML=0


// FRA VS AUS //
if (franciaRealP1.length === 0) {
spanPuntosD[1].innerHTML = ""
}else if (franciaSimuP1 === franciaRealP1 && 
australiaSimuP1 === australiaRealP1) {
spanPuntosD[1].innerHTML=3
} else if (franciaRealP1 > australiaRealP1 && 
         franciaSimuP1 > australiaSimuP1 &&
         franciaRealP1 === franciaSimuP1 &&
         australiaRealP1 !== australiaSimuP1) {
spanPuntosD[1].innerHTML=2
} else if (franciaRealP1 > australiaRealP1 &&
       franciaSimuP1 > australiaSimuP1 &&
       franciaRealP1 !== franciaSimuP1 &&
       australiaRealP1 === australiaSimuP1) {
spanPuntosD[1].innerHTML=2
} else if (franciaRealP1 < australiaRealP1 &&
           franciaSimuP1 < australiaSimuP1 &&
           franciaRealP1 === franciaSimuP1 &&
           australiaRealP1 !== australiaSimuP1 ){
spanPuntosD[1].innerHTML=2
} else if (franciaRealP1 < australiaRealP1 &&
          franciaSimuP1 < australiaSimuP1 &&
          franciaRealP1 !== franciaSimuP1 &&
          australiaRealP1 === australiaSimuP1) {
spanPuntosD[1].innerHTML=2
} else if (franciaRealP1 > australiaRealP1 &&
          franciaSimuP1 < australiaSimuP1 &&
          franciaRealP1 === franciaSimuP1 &&
          australiaRealP1 !== australiaSimuP1 ){
spanPuntosD[1].innerHTML=1
} else if (franciaRealP1 > australiaRealP1 &&
        franciaSimuP1 < australiaSimuP1 &&
        franciaRealP1 !== franciaSimuP1 &&
        australiaRealP1 === australiaSimuP1) {
spanPuntosD[1].innerHTML=1
} else if (franciaRealP1 < australiaRealP1 &&
          franciaSimuP1 > australiaSimuP1 &&
          franciaRealP1 === franciaSimuP1 &&
          australiaRealP1 !== australiaSimuP1) {
spanPuntosD[1].innerHTML=1
} else if (franciaRealP1 < australiaRealP1 &&
        franciaSimuP1 > australiaSimuP1 &&
       franciaRealP1 !== franciaSimuP1 &&
       australiaRealP1 === australiaSimuP1){
spanPuntosD[1].innerHTML=1
} else if (franciaRealP1 === australiaRealP1 &&
          franciaSimuP1 !== australiaSimuP1 &&
          franciaRealP1 === franciaSimuP1 &&
          australiaRealP1 !== australiaSimuP1 ) {
spanPuntosD[1].innerHTML=1
} else if (franciaRealP1 === australiaRealP1 &&
        franciaSimuP1 !== australiaSimuP1 &&
        franciaRealP1 !== franciaSimuP1 &&
        australiaRealP1 === australiaSimuP1) {
spanPuntosD[1].innerHTML=1
} else if (franciaRealP1 === australiaRealP1 &&
           franciaSimuP1 === australiaSimuP1 &&
          franciaRealP1 !== franciaSimuP1 &&
          australiaRealP1 !== australiaSimuP1) {
spanPuntosD[1].innerHTML=1
} else if (franciaRealP1 > australiaRealP1 &&
          franciaSimuP1 > australiaSimuP1 &&
          franciaRealP1 !== franciaSimuP1 &&
          australiaRealP1 !== australiaSimuP1) {
spanPuntosD[1].innerHTML=1
} else if (franciaRealP1 < australiaRealP1 &&
          franciaSimuP1 < australiaSimuP1 &&
          franciaRealP1 !== franciaSimuP1 &&
         australiaRealP1 !== australiaSimuP1) {
 spanPuntosD[1].innerHTML= 1
} else if (franciaRealP1 !== australiaRealP1 &&
          franciaSimuP1 === australiaSimuP1 &&
          franciaRealP1 === franciaSimuP1 &&
          australiaRealP1 !== australiaSimuP1 ) {
spanPuntosD[1].innerHTML=1
} else if (franciaRealP1 !== australiaRealP1 &&
        franciaSimuP1 === australiaSimuP1 &&
       franciaRealP1 !== franciaSimuP1 &&
       australiaRealP1 === australiaSimuP1){
spanPuntosD[1].innerHTML=1  
} else spanPuntosD[1].innerHTML=0


//TUN VS AUS //
if (tunezRealP2.length === 0) {
spanPuntosD[2].innerHTML = ""
} else if (tunezSimuP2 === tunezRealP2 && 
australiaSimuP2 === australiaRealP2) {
spanPuntosD[2].innerHTML=3
} else if (tunezRealP2 > australiaRealP2 && 
         tunezSimuP2 > australiaSimuP2 &&
         tunezRealP2 === tunezSimuP2 &&
         australiaRealP2 !== australiaSimuP2) {
spanPuntosD[2].innerHTML=2
} else if (tunezRealP2 > australiaRealP2 &&
       tunezSimuP2 > australiaSimuP2 &&
       tunezRealP2 !== tunezSimuP2 &&
       australiaRealP2 === australiaSimuP2) {
spanPuntosD[2].innerHTML=2
} else if (tunezRealP2 < australiaRealP2 &&
           tunezSimuP2 < australiaSimuP2 &&
           tunezRealP2 === tunezSimuP2 &&
           australiaRealP2 !== australiaSimuP2 ){
spanPuntosD[2].innerHTML=2
} else if (tunezRealP2 < australiaRealP2 &&
          tunezSimuP2 < australiaSimuP2 &&
          tunezRealP2 !== tunezSimuP2 &&
          australiaRealP2 === australiaSimuP2) {
spanPuntosD[2].innerHTML=2
} else if (tunezRealP2 > australiaRealP2 &&
          tunezSimuP2 < australiaSimuP2 &&
          tunezRealP2 === tunezSimuP2 &&
          australiaRealP2 !== australiaSimuP2 ){
spanPuntosD[2].innerHTML=1
} else if (tunezRealP2 > australiaRealP2 &&
        tunezSimuP2 < australiaSimuP2 &&
        tunezRealP2 !== tunezSimuP2 &&
        australiaRealP2 === australiaSimuP2) {
spanPuntosD[2].innerHTML=1
} else if (tunezRealP2 < australiaRealP2 &&
          tunezSimuP2 > australiaSimuP2 &&
          tunezRealP2 === tunezSimuP2 &&
          australiaRealP2 !== australiaSimuP2) {
spanPuntosD[2].innerHTML=1
} else if (tunezRealP2 < australiaRealP2 &&
        tunezSimuP2 > australiaSimuP2 &&
       tunezRealP2 !== tunezSimuP2 &&
       australiaRealP2 === australiaSimuP2){
spanPuntosD[2].innerHTML=1
} else if (tunezRealP2 === australiaRealP2 &&
          tunezSimuP2 !== australiaSimuP2 &&
          tunezRealP2 === tunezSimuP2 &&
          australiaRealP2 !== australiaSimuP2 ) {
spanPuntosD[2].innerHTML=1
} else if (tunezRealP2 === australiaRealP2 &&
        tunezSimuP2 !== australiaSimuP2 &&
        tunezRealP2 !== tunezSimuP2 &&
        australiaRealP2 === australiaSimuP2) {
spanPuntosD[2].innerHTML=1
} else if (tunezRealP2 === australiaRealP2 &&
           tunezSimuP2 === australiaSimuP2 &&
          tunezRealP2 !== tunezSimuP2 &&
          australiaRealP2 !== australiaSimuP2) {
spanPuntosD[2].innerHTML=1
} else if (tunezRealP2 > australiaRealP2 &&
          tunezSimuP2 > australiaSimuP2 &&
          tunezRealP2 !== tunezSimuP2 &&
          australiaRealP2 !== australiaSimuP2) {
spanPuntosD[2].innerHTML=1
} else if (tunezRealP2 < australiaRealP2 &&
          tunezSimuP2 < australiaSimuP2 &&
          tunezRealP2 !== tunezSimuP2 &&
         australiaRealP2 !== australiaSimuP2) {
 spanPuntosD[2].innerHTML= 1
} else if (tunezRealP2 !== australiaRealP2 &&
          tunezSimuP2 === australiaSimuP2 &&
          tunezRealP2 === tunezSimuP2 &&
          australiaRealP2 !== australiaSimuP2 ) {
spanPuntosD[2].innerHTML=1
} else if (tunezRealP2 !== australiaRealP2 &&
        tunezSimuP2 === australiaSimuP2 &&
       tunezRealP2 !== tunezSimuP2 &&
       australiaRealP2 === australiaSimuP2){
spanPuntosD[2].innerHTML=1  
} else spanPuntosD[2].innerHTML=0


// FRA VS DIN //
if (franciaRealP2.length === 0){
spanPuntosD[3].innerHTML = ""
}else if (franciaSimuP2 === franciaRealP2 && 
dinamarcaSimuP2 === dinamarcaRealP2) {
spanPuntosD[3].innerHTML=3
} else if (franciaRealP2 > dinamarcaRealP2 && 
         franciaSimuP2 > dinamarcaSimuP2 &&
         franciaRealP2 === franciaSimuP2 &&
         dinamarcaRealP2 !== dinamarcaSimuP2) {
spanPuntosD[3].innerHTML=2
} else if (franciaRealP2 > dinamarcaRealP2 &&
       franciaSimuP2 > dinamarcaSimuP2 &&
       franciaRealP2 !== franciaSimuP2 &&
       dinamarcaRealP2 === dinamarcaSimuP2) {
spanPuntosD[3].innerHTML=2
} else if (franciaRealP2 < dinamarcaRealP2 &&
           franciaSimuP2 < dinamarcaSimuP2 &&
           franciaRealP2 === franciaSimuP2 &&
           dinamarcaRealP2 !== dinamarcaSimuP2 ){
spanPuntosD[3].innerHTML=2
} else if (franciaRealP2 < dinamarcaRealP2 &&
          franciaSimuP2 < dinamarcaSimuP2 &&
          franciaRealP2 !== franciaSimuP2 &&
          dinamarcaRealP2 === dinamarcaSimuP2) {
spanPuntosD[3].innerHTML=2
} else if (franciaRealP2 > dinamarcaRealP2 &&
          franciaSimuP2 < dinamarcaSimuP2 &&
          franciaRealP2 === franciaSimuP2 &&
          dinamarcaRealP2 !== dinamarcaSimuP2 ){
spanPuntosD[3].innerHTML=1
} else if (franciaRealP2 > dinamarcaRealP2 &&
        franciaSimuP2 < dinamarcaSimuP2 &&
        franciaRealP2 !== franciaSimuP2 &&
        dinamarcaRealP2 === dinamarcaSimuP2) {
spanPuntosD[3].innerHTML=1
} else if (franciaRealP2 < dinamarcaRealP2 &&
          franciaSimuP2 > dinamarcaSimuP2 &&
          franciaRealP2 === franciaSimuP2 &&
          dinamarcaRealP2 !== dinamarcaSimuP2) {
spanPuntosD[3].innerHTML=1
} else if (franciaRealP2 < dinamarcaRealP2 &&
        franciaSimuP2 > dinamarcaSimuP2 &&
       franciaRealP2 !== franciaSimuP2 &&
       dinamarcaRealP2 === dinamarcaSimuP2){
spanPuntosD[3].innerHTML=1
} else if (franciaRealP2 === dinamarcaRealP2 &&
          franciaSimuP2 !== dinamarcaSimuP2 &&
          franciaRealP2 === franciaSimuP2 &&
          dinamarcaRealP2 !== dinamarcaSimuP2 ) {
spanPuntosD[3].innerHTML=1
} else if (franciaRealP2 === dinamarcaRealP2 &&
        franciaSimuP2 !== dinamarcaSimuP2 &&
        franciaRealP2 !== franciaSimuP2 &&
        dinamarcaRealP2 === dinamarcaSimuP2) {
spanPuntosD[3].innerHTML=1
} else if (franciaRealP2 === dinamarcaRealP2 &&
           franciaSimuP2 === dinamarcaSimuP2 &&
          franciaRealP2 !== franciaSimuP2 &&
          dinamarcaRealP2 !== dinamarcaSimuP2) {
spanPuntosD[3].innerHTML=1
} else if (franciaRealP2 > dinamarcaRealP2 &&
          franciaSimuP2 > dinamarcaSimuP2 &&
          franciaRealP2 !== franciaSimuP2 &&
          dinamarcaRealP2 !== dinamarcaSimuP2) {
spanPuntosD[3].innerHTML=1
} else if (franciaRealP2 < dinamarcaRealP2 &&
          franciaSimuP2 < dinamarcaSimuP2 &&
          franciaRealP2 !== franciaSimuP2 &&
         dinamarcaRealP2 !== dinamarcaSimuP2) {
 spanPuntosD[3].innerHTML= 1
} else if (franciaRealP2 !== dinamarcaRealP2 &&
          franciaSimuP2 === dinamarcaSimuP2 &&
          franciaRealP2 === franciaSimuP2 &&
          dinamarcaRealP2 !== dinamarcaSimuP2 ) {
spanPuntosD[3].innerHTML=1
} else if (franciaRealP2 !== dinamarcaRealP2 &&
        franciaSimuP2 === dinamarcaSimuP2 &&
       franciaRealP2 !== franciaSimuP2 &&
       dinamarcaRealP2 === dinamarcaSimuP2){
spanPuntosD[3].innerHTML=1  
} else spanPuntosD[3].innerHTML=0


// TUN VS FRA //
if (tunezRealP3.length === 0) {
spanPuntosD[4].innerHTML = ""
}else if (tunezSimuP3 === tunezRealP3 && 
franciaSimuP3 === franciaRealP3) {
spanPuntosD[4].innerHTML=3
} else if (tunezRealP3 > franciaRealP3 && 
         tunezSimuP3 > franciaSimuP3 &&
         tunezRealP3 === tunezSimuP3 &&
         franciaRealP3 !== franciaSimuP3) {
spanPuntosD[4].innerHTML=2
} else if (tunezRealP3 > franciaRealP3 &&
       tunezSimuP3 > franciaSimuP3 &&
       tunezRealP3 !== tunezSimuP3 &&
       franciaRealP3 === franciaSimuP3) {
spanPuntosD[4].innerHTML=2
} else if (tunezRealP3 < franciaRealP3 &&
           tunezSimuP3 < franciaSimuP3 &&
           tunezRealP3 === tunezSimuP3 &&
           franciaRealP3 !== franciaSimuP3 ){
spanPuntosD[4].innerHTML=2
} else if (tunezRealP3 < franciaRealP3 &&
          tunezSimuP3 < franciaSimuP3 &&
          tunezRealP3 !== tunezSimuP3 &&
          franciaRealP3 === franciaSimuP3) {
spanPuntosD[4].innerHTML=2
} else if (tunezRealP3 > franciaRealP3 &&
          tunezSimuP3 < franciaSimuP3 &&
          tunezRealP3 === tunezSimuP3 &&
          franciaRealP3 !== franciaSimuP3 ){
spanPuntosD[4].innerHTML=1
} else if (tunezRealP3 > franciaRealP3 &&
        tunezSimuP3 < franciaSimuP3 &&
        tunezRealP3 !== tunezSimuP3 &&
        franciaRealP3 === franciaSimuP3) {
spanPuntosD[4].innerHTML=1
} else if (tunezRealP3 < franciaRealP3 &&
          tunezSimuP3 > franciaSimuP3 &&
          tunezRealP3 === tunezSimuP3 &&
          franciaRealP3 !== franciaSimuP3) {
spanPuntosD[4].innerHTML=1
} else if (tunezRealP3 < franciaRealP3 &&
        tunezSimuP3 > franciaSimuP3 &&
       tunezRealP3 !== tunezSimuP3 &&
       franciaRealP3 === franciaSimuP3){
spanPuntosD[4].innerHTML=1
} else if (tunezRealP3 === franciaRealP3 &&
          tunezSimuP3 !== franciaSimuP3 &&
          tunezRealP3 === tunezSimuP3 &&
          franciaRealP3 !== franciaSimuP3 ) {
spanPuntosD[4].innerHTML=1
} else if (tunezRealP3 === franciaRealP3 &&
        tunezSimuP3 !== franciaSimuP3 &&
        tunezRealP3 !== tunezSimuP3 &&
        franciaRealP3 === franciaSimuP3) {
spanPuntosD[4].innerHTML=1
} else if (tunezRealP3 === franciaRealP3 &&
           tunezSimuP3 === franciaSimuP3 &&
          tunezRealP3 !== tunezSimuP3 &&
          franciaRealP3 !== franciaSimuP3) {
spanPuntosD[4].innerHTML=1
} else if (tunezRealP3 > franciaRealP3 &&
          tunezSimuP3 > franciaSimuP3 &&
          tunezRealP3 !== tunezSimuP3 &&
          franciaRealP3 !== franciaSimuP3) {
spanPuntosD[4].innerHTML=1
} else if (tunezRealP3 < franciaRealP3 &&
          tunezSimuP3 < franciaSimuP3 &&
          tunezRealP3 !== tunezSimuP3 &&
         franciaRealP3 !== franciaSimuP3) {
 spanPuntosD[4].innerHTML= 1
} else if (tunezRealP3 !== franciaRealP3 &&
          tunezSimuP3 === franciaSimuP3 &&
          tunezRealP3 === tunezSimuP3 &&
          franciaRealP3 !== franciaSimuP3 ) {
spanPuntosD[4].innerHTML=1
} else if (tunezRealP3 !== franciaRealP3 &&
        tunezSimuP3 === franciaSimuP3 &&
       tunezRealP3 !== tunezSimuP3 &&
       franciaRealP3 === franciaSimuP3){
spanPuntosD[4].innerHTML=1  
} else spanPuntosD[4].innerHTML=0


// AUS VS DIN //
if (australiaRealP3.length === 0){
spanPuntosD[5].innerHTML = ""
}  else  if (australiaSimuP3 === australiaRealP3 && 
    dinamarcaSimuP3 === dinamarcaRealP3) {
     spanPuntosD[5].innerHTML=3
} else if (australiaRealP3 > dinamarcaRealP3 && 
                 australiaSimuP3 > dinamarcaSimuP3 &&
                 australiaRealP3 === australiaSimuP3 &&
                 dinamarcaRealP3 !== dinamarcaSimuP3) {
      spanPuntosD[5].innerHTML=2
} else if (australiaRealP3 > dinamarcaRealP3 &&
               australiaSimuP3 > dinamarcaSimuP3 &&
               australiaRealP3 !== australiaSimuP3 &&
               dinamarcaRealP3 === dinamarcaSimuP3) {
    spanPuntosD[5].innerHTML=2
} else if (australiaRealP3 < dinamarcaRealP3 &&
                   australiaSimuP3 < dinamarcaSimuP3 &&
                   australiaRealP3 === australiaSimuP3 &&
                   dinamarcaRealP3 !== dinamarcaSimuP3 ){
       spanPuntosD[5].innerHTML=2
} else if (australiaRealP3 < dinamarcaRealP3 &&
                  australiaSimuP3 < dinamarcaSimuP3 &&
                  australiaRealP3 !== australiaSimuP3 &&
                  dinamarcaRealP3 === dinamarcaSimuP3) {
       spanPuntosD[5].innerHTML=2
} else if (australiaRealP3 > dinamarcaRealP3 &&
                  australiaSimuP3 < dinamarcaSimuP3 &&
                  australiaRealP3 === australiaSimuP3 &&
                  dinamarcaRealP3 !== dinamarcaSimuP3 ){
        spanPuntosD[5].innerHTML=1
} else if (australiaRealP3 > dinamarcaRealP3 &&
                australiaSimuP3 < dinamarcaSimuP3 &&
                australiaRealP3 !== australiaSimuP3 &&
                dinamarcaRealP3 === dinamarcaSimuP3) {
        spanPuntosD[5].innerHTML=1
} else if (australiaRealP3 < dinamarcaRealP3 &&
                  australiaSimuP3 > dinamarcaSimuP3 &&
                  australiaRealP3 === australiaSimuP3 &&
                  dinamarcaRealP3 !== dinamarcaSimuP3) {
        spanPuntosD[5].innerHTML=1
} else if (australiaRealP3 < dinamarcaRealP3 &&
                australiaSimuP3 > dinamarcaSimuP3 &&
               australiaRealP3 !== australiaSimuP3 &&
               dinamarcaRealP3 === dinamarcaSimuP3){
       spanPuntosD[5].innerHTML=1
} else if (australiaRealP3 === dinamarcaRealP3 &&
                  australiaSimuP3 !== dinamarcaSimuP3 &&
                  australiaRealP3 === australiaSimuP3 &&
                  dinamarcaRealP3 !== dinamarcaSimuP3 ) {
        spanPuntosD[5].innerHTML=1
} else if (australiaRealP3 === dinamarcaRealP3 &&
                australiaSimuP3 !== dinamarcaSimuP3 &&
                australiaRealP3 !== australiaSimuP3 &&
                dinamarcaRealP3 === dinamarcaSimuP3) {
       spanPuntosD[5].innerHTML=1
} else if (australiaRealP3 === dinamarcaRealP3 &&
                   australiaSimuP3 === dinamarcaSimuP3 &&
                  australiaRealP3 !== australiaSimuP3 &&
                  dinamarcaRealP3 !== dinamarcaSimuP3) {
        spanPuntosD[5].innerHTML=1
} else if (australiaRealP3 > dinamarcaRealP3 &&
                  australiaSimuP3 > dinamarcaSimuP3 &&
                  australiaRealP3 !== australiaSimuP3 &&
                  dinamarcaRealP3 !== dinamarcaSimuP3) {
        spanPuntosD[5].innerHTML=1
} else if (australiaRealP3 < dinamarcaRealP3 &&
                  australiaSimuP3 < dinamarcaSimuP3 &&
                  australiaRealP3 !== australiaSimuP3 &&
                 dinamarcaRealP3 !== dinamarcaSimuP3) {
         spanPuntosD[5].innerHTML= 1
} else if (australiaRealP3 !== dinamarcaRealP3 &&
                  australiaSimuP3 === dinamarcaSimuP3 &&
                  australiaRealP3 === australiaSimuP3 &&
                  dinamarcaRealP3 !== dinamarcaSimuP3 ) {
        spanPuntosD[5].innerHTML=1
} else if (australiaRealP3 !== dinamarcaRealP3 &&
                australiaSimuP3 === dinamarcaSimuP3 &&
               australiaRealP3 !== australiaSimuP3 &&
               dinamarcaRealP3 === dinamarcaSimuP3){
       spanPuntosD[5].innerHTML=1  
} else spanPuntosD[5].innerHTML=0


// FRANCIA TABLA REAL//

let arrFranciaGF = [+franciaRealP1, +franciaRealP2, +franciaRealP3] // armamos array con los valores de los inputs
let arrFranciaGC = [+australiaRealP1, +dinamarcaRealP2, +tunezRealP3]

let franciaPj = franciaRealP1.length + franciaRealP2.length + franciaRealP3.length
let franciaGolesF = arrFranciaGF.reduce((a, b) => a + b)
let franciaGolesC = arrFranciaGC.reduce((a, b) => a + b)
let franciaDiferencia = franciaGolesF - franciaGolesC

let franciaPts = 0
if (franciaRealP1.length === 0) { //usamos el lengt para comprobar de que no este vacio
franciaPts += 0
} else if (franciaRealP1 > australiaRealP1) {
franciaPts += 3
} else if (franciaRealP1 === australiaRealP1) {
franciaPts += 1
} else if (franciaRealP3 < australiaRealP1) {
franciaPts += 0
}

if (franciaRealP2.length === 0) {
franciaPts += 0
} else if (franciaRealP2 > dinamarcaRealP2) {
franciaPts += 3
} else if (franciaRealP2 === dinamarcaRealP2) {
franciaPts += 1
} else if (franciaRealP3 < dinamarcaRealP2) {
franciaPts += 0
}

if (franciaRealP3.length === 0) {
franciaPts += 0
} else if (franciaRealP3 > tunezRealP3) {
franciaPts += 3
} else if (franciaRealP3 === tunezRealP3) {
franciaPts += 1
} else if (franciaRealP3 < tunezRealP3) {
franciaPts += 0
}

// AUSTRALIA TABLA //

let arrAustraliaGF = [+australiaRealP1, +australiaRealP2, +australiaRealP3] // armamos array con los valores de los inputs
let arrAustraliaGC = [+franciaRealP1, +tunezRealP2, +dinamarcaRealP3]

let australiaPj = australiaRealP1.length + australiaRealP2.length + australiaRealP3.length
let australiaGolesF = arrAustraliaGF.reduce((a, b) => a + b)
let australiaGolesC = arrAustraliaGC.reduce((a, b) => a + b)
let australiaDiferencia = australiaGolesF - australiaGolesC

let australiaPts = 0
if (australiaRealP1.length === 0) { //usamos el lengt para comprobar de que no este vacio
australiaPts += 0
} else if (australiaRealP1 > franciaRealP1) {
australiaPts += 3
} else if (australiaRealP1 === franciaRealP1) {
australiaPts += 1
} else if (australiaRealP1 < franciaRealP1) {
australiaPts += 0
}

if (australiaRealP2.length === 0) {
australiaPts += 0
} else if (australiaRealP2 > tunezRealP2) {
australiaPts += 3
} else if (australiaRealP2 === tunezRealP2) {
australiaPts += 1
} else if (australiaRealP1 < tunezRealP2) {
australiaPts += 0
}

if (australiaRealP3.length === 0) {
australiaPts += 0
} else if (australiaRealP3 > dinamarcaRealP3) {
australiaPts += 3
} else if (australiaRealP3 === dinamarcaRealP3) {
australiaPts += 1
} else if (australiaRealP1 < dinamarcaRealP3) {
australiaPts += 0
}


// DINAMARCA TABLA //

let arrDinamarcaGF = [+dinamarcaRealP1, +dinamarcaRealP2, +dinamarcaRealP3] // armamos array con los valores de los inputs
let arrDinamarcaGC = [+tunezRealP1, +franciaRealP2, +australiaRealP3]

let dinamarcaPj = dinamarcaRealP1.length + dinamarcaRealP2.length + dinamarcaRealP3.length
let dinamarcaGolesF = arrDinamarcaGF.reduce((a, b) => a + b)
let dinamarcaGolesC = arrDinamarcaGC.reduce((a, b) => a + b)
let dinamarcaDiferencia = dinamarcaGolesF - dinamarcaGolesC

let dinamarcaPts = 0
if (dinamarcaRealP1.length === 0) { //usamos el lengt para comprobar de que no este vacio
dinamarcaPts += 0
} else if (dinamarcaRealP1 > tunezRealP1) {
dinamarcaPts += 3
} else if (dinamarcaRealP1 === tunezRealP1) {
dinamarcaPts += 1
} else if (dinamarcaRealP1 < tunezRealP1) {
dinamarcaPts += 0
}

if (dinamarcaRealP2.length === 0) {
dinamarcaPts += 0
} else if (dinamarcaRealP2 > franciaRealP2) {
dinamarcaPts += 3
} else if (dinamarcaRealP2 === franciaRealP2) {
dinamarcaPts += 1
} else if (dinamarcaRealP1 < franciaRealP2) {
dinamarcaPts += 0
}

if (dinamarcaRealP3.length === 0) {
dinamarcaPts += 0
} else if (dinamarcaRealP3 > australiaRealP3) {
dinamarcaPts += 3
} else if (dinamarcaRealP3 === australiaRealP3) {
dinamarcaPts += 1
} else if (dinamarcaRealP1 < australiaRealP3) {
dinamarcaPts += 0
}


// TUNEZ TABLA //

let arrTunezGF = [+tunezRealP1, +tunezRealP2, +tunezRealP3] // armamos array con los valores de los inputs
let arrTunezGC = [+dinamarcaRealP1, +australiaRealP2, +franciaRealP3]

let tunezPj = tunezRealP1.length + tunezRealP2.length + tunezRealP3.length
let tunezGolesF = arrTunezGF.reduce((a, b) => a + b)
let tunezGolesC = arrTunezGC.reduce((a, b) => a + b)
let tunezDiferencia = tunezGolesF - tunezGolesC


let tunezPts = 0
if (tunezRealP1.length === 0) { //usamos el lengt para comprobar de que no este vacio
tunezPts += 0
} else if (tunezRealP1 > dinamarcaRealP1) {
tunezPts += 3
} else if (tunezRealP1 === dinamarcaRealP1) {
tunezPts += 1
} else if (tunezRealP1 < dinamarcaRealP1) {
tunezPts += 0
}

if (tunezRealP2.length === 0) {
tunezPts += 0
} else if (tunezRealP2 > australiaRealP2) {
tunezPts += 3
} else if (tunezRealP2 === australiaRealP2) {
tunezPts += 1
} else if (tunezRealP1 < australiaRealP2) {
tunezPts += 0
}

if (tunezRealP3.length === 0) {
tunezPts += 0
} else if (tunezRealP3 > franciaRealP3) {
tunezPts += 3
} else if (tunezRealP3 === franciaRealP3) {
tunezPts += 1
} else if (tunezRealP1 < franciaRealP3) {
tunezPts += 0
}


// TABLA GRUPO A //
let banderaFrancia = new Image();
banderaFrancia.src = "https://www.promiedos.com.ar/images/ps/francia.gif"

let banderaAustralia = new Image()
banderaAustralia.src = "https://www.promiedos.com.ar/images/ps/australia.gif"

let banderaDinamarca = new Image()
banderaDinamarca.src = "https://www.promiedos.com.ar/images/ps/dinamarca.gif"

let banderaTunez = new Image()
banderaTunez.src = "https://www.promiedos.com.ar/images/ps/tunez.gif"

let gD = [{ equipo: "francia", bandera: banderaFrancia, pts: franciaPts, pj: franciaPj, gf: franciaGolesF, gc: franciaGolesC, dif: franciaDiferencia },
{ equipo: "australia", bandera: banderaAustralia, pts: australiaPts, pj: australiaPj, gf: australiaGolesF, gc: australiaGolesC, dif: australiaDiferencia },
{ equipo: "tunez", bandera: banderaTunez, pts: tunezPts, pj: tunezPj, gf: tunezGolesF, gc: tunezGolesC, dif: tunezDiferencia },
{ equipo: "dinamarca", bandera: banderaDinamarca, pts: dinamarcaPts, pj: dinamarcaPj, gf: dinamarcaGolesF, gc: dinamarcaGolesC, dif: dinamarcaDiferencia }] // armamos un array donde guardamos toda la informacion de la tabla de grupos //


gD.sort((a, b) => b.dif - a.dif) // y despues por diferencia de goles
gD.sort((a, b) => b.pts - a.pts) // ordenamos los objetos primero por pts

grupoD[0].innerHTML = gD[0].equipo
grupoD[0].appendChild(gD[0].bandera)
grupoD[1].innerHTML = gD[0].pts
grupoD[2].innerHTML = gD[0].pj
grupoD[3].innerHTML = gD[0].gf
grupoD[4].innerHTML = gD[0].gc
grupoD[5].innerHTML = gD[0].dif

grupoD[6].innerHTML = gD[1].equipo
grupoD[6].appendChild(gD[1].bandera)
grupoD[7].innerHTML = gD[1].pts
grupoD[8].innerHTML = gD[1].pj
grupoD[9].innerHTML = gD[1].gf
grupoD[10].innerHTML = gD[1].gc
grupoD[11].innerHTML = gD[1].dif

grupoD[12].innerHTML = gD[2].equipo
grupoD[12].appendChild(gD[2].bandera)
grupoD[13].innerHTML = gD[2].pts
grupoD[14].innerHTML = gD[2].pj
grupoD[15].innerHTML = gD[2].gf
grupoD[16].innerHTML = gD[2].gc
grupoD[17].innerHTML = gD[2].dif

grupoD[18].innerHTML = gD[3].equipo
grupoD[18].appendChild(gD[3].bandera)
grupoD[19].innerHTML = gD[3].pts
grupoD[20].innerHTML = gD[3].pj
grupoD[21].innerHTML = gD[3].gf
grupoD[22].innerHTML = gD[3].gc
grupoD[23].innerHTML = gD[3].dif

const totalPTSGD = [+spanPuntosD[0].innerText,+spanPuntosD[1].innerText,+spanPuntosD[2].innerText,+spanPuntosD[3].innerText,+spanPuntosD[4].innerText,+spanPuntosD[5].innerText] // armamos un array para meter los puntos obtenidos de cada partido y lo hacemos con el push

const resultGD = totalPTSGD.reduce((a,b) => a+b) // sumamos todos los puntos obtenidos del array

spanPuntosD[6].innerHTML = resultGD
spanPuntosD[7].innerHTML = resultGD

// eventos //

d.addEventListener("click", classBurgerMenu)
d.addEventListener('click', predicciones)



