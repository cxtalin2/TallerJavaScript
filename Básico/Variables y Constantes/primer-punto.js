/** Crea un programa que declare una variable para almacenar la temperatura actual en grados Celsius. 
 * Luego, convierte esta temperatura a grados Fahrenheit utilizando la fórmula correspondiente y muestra el resultado en la consola. */

console.log("¡Bienvenido al conversor de grados Fahrenheit a Celsius!");

function cambioTemperatura(valorFahrenheit) {
    var cambioACelsius = (valorFahrenheit - 32) / 1.8;
    var valorRedondeado = cambioACelsius.toFixed(2);
    return valorRedondeado;
}

var gradoFahrenheit = prompt("Ingrese el valor de los grados en Fahrenheit, por favor:");
var gradFa = parseFloat(gradoFahrenheit);

var convertirTemperatura = cambioTemperatura(gradFa);
console.log("El valor en grados Fahrenheit de: " + gradoFahrenheit + " grados Fahrenheit a grados Celsius es de: " + convertirTemperatura + " grados Celsius");


