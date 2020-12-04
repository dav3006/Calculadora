var Numero1 = 0
var Numero2 = 0
var operador


function calcular(Numero1, operador, Numero2) {
    console.log([Numero1, operador, Numero2])
    switch (operador) {
        case "+": return Numero1 + Numero2
        case "-": return Numero1 - Numero2
        case "*": return Numero1 * Numero2
        case "/": return Numero1 / Numero2
        case "%": return Numero1 % Numero2
    }
}

function setarNumeros(numero) {
    var valor = document.getElementById("btnVis").innerText
    if (!operador) {
        Numero1 = valor + numero
    }
    else {
        Numero2 = Numero2 + "" + numero
    }
    document.getElementById("btnVis").innerHTML += numero
}

function setarOperador(op) {
    if (!operador) {
        operador = op
    }
    else {
        setarResultado()
        operador = operador = op
    }

    document.getElementById("btnVis").innerHTML += op
}

function setarResultado() {
    var resultado = 0
    if (operador) {
        resultado = calcular(parseFloat(Numero1),operador,parseFloat(Numero2) )
    }
    document.getElementById("btnVis").innerHTML = resultado
    operador = ""
    Numero2 = 0
    Numero1 = resultado


}
function apagar() {
    Numero1 = 0
    operador = ""
    Numero2 = 0
    document.getElementById("btnVis").innerHTML = ""

}

