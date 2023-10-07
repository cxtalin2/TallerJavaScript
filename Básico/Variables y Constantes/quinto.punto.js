/** Declara una variable de tipo string con una cadena de texto larga. Luego, utiliza métodos de cadenas para obtener la longitud de la cadena, 
 * convertirla a minúsculas y mostrar la última palabra en mayúsculas. */

var str = 'Juan vive en Canadá y toca la guitarra.';

var length = str.length;
var textoMinusculas = str.toLowerCase();
var palabras = str.split(" ");
var ultimaPalabra = palabras[palabras.length - 1];

console.log("Longitud de la cadena: " + length);
console.log("Cadena en minúsculas: " + textoMinusculas);
console.log("Última palabra en mayúsculas: " + ultimaPalabra.toUpperCase());

// Este me costó mucho, profe:(