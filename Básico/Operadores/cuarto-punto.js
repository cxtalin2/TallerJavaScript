// Crea un programa que calcule el área de un triángulo utilizando la fórmula: área = (base * altura) / 2. 
// Solicita al usuario que ingrese los valores de la base y la altura usando el prompt

var base = parseInt(prompt( "Ingrese el valor de la base:" ));
var altura = parseInt(prompt( "Ingrese el valor de la altura:" ));

var area = (base * altura) / 2;

console.log( "El área del triángulo es: " + area );