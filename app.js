// Obtener elementos del DOM
var num1 = document.getElementById("num1");
var sumaButton = document.getElementById("suma");
var restaButton = document.getElementById("resta");
var multiplicacionButton = document.getElementById("multiplicacion");
var divisionButton = document.getElementById("division");
var igualButton = document.getElementById("igual");
var resultadoInput = document.getElementById("resultado");
// Funciones de operaciones
function sumar() {
    var resultado = Number(resultadoInput.value) + Number(num1.value);
    resultadoInput.value = resultado;
}

function restar() {
    if(Number(resultadoInput.value) == 0) {
        resultadoInput.value = num1.value;
    } else {
    var resultado = Number(resultadoInput.value) - Number(num1.value);
    resultadoInput.value = resultado;
    }
}
function multiplicar() {
    var resultado = Number(resultadoInput.value) * Number(num1.value);
    resultadoInput.value = resultado;

}
function dividir() {
    var resultado = Number(resultadoInput.value) / Number(num1.value);
    resultadoInput.value = resultado;
}
// Eventos de botones
sumaButton.addEventListener("click", sumar);
restaButton.addEventListener("click", restar);
multiplicacionButton.addEventListener("click", multiplicar);
divisionButton.addEventListener("click", dividir);








