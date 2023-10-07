/** Usa el prompt para tomar dos números como argumentos y utilice una variable para almacenar la suma de estos números. 
Luego, muestra el resultado en la consola. */

let numero1 = prompt( "Ingrese el primer número:" );
let numero2 = prompt( "Ingresa el segundo número:" );

numero1 = parseInt( numero1 );
numero2 = parseInt( numero2 );

let suma = numero1 + numero2;

console.log("La suma de ambos números es: " + suma);