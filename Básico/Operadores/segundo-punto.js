// Declara una variable numérica. Usa el prompt para pedir al usuario que ingrese un valor numérico. Utiliza operadores de comparación para determinar 
// si son iguales o si una es mayor que la otra. Muestra los resultados en la consola.

var valorIngresado = parseInt(prompt("Por favor, ingresa un valor numérico:"));

var numero = 10;

var esIgual = numero === valorIngresado;
var esMayor = numero > valorIngresado;
var esMenor = numero < valorIngresado;


console.log("El número " + numero + " es igual a " + valorIngresado + ": " + esIgual);  
console.log("El número " + numero + " es mayor que " + valorIngresado + ": " + esMayor);  
console.log("El número " + numero + " es menor que " + valorIngresado + ": " + esMenor);