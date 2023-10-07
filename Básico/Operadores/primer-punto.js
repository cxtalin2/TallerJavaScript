// Crea un programa que solicite al usuario dos números usando el prompt y realice operaciones de suma, resta, multiplicación y división con estos números. 
// Muestra los resultados en la consola para cada una de estas operaciones.

var numero1 = prompt( "Por favor, ingresa un número: ");
var numero2 = prompt( "Por favor, ingresa otro número: ");

numero1 = parseInt( numero1 );
numero2 = parseInt( numero2 );

var suma = numero1 + numero2;
var resta = numero1 - numero2;
var multiplicación = numero1 * numero2;
var división = numero1 / numero2;


console.log( "Suma:", suma );
console.log( "Resta:", resta );
console.log( "Multiplicación:", multiplicación );
console.log( "División:", división );


