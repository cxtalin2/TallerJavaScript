/** Declara una constante llamada PI y asigna el valor de π (aproximadamente 3.14159) a ella. 
 * Luego, pide al usuario que ingrese el radio de un círculo y calcula su área utilizando la constante PI. */

const PI = 3.14159 

var radio = parseFloat(prompt('Ingrese el radio del círculo'));
var area = PI * radio * radio;

console.log('El área del círculo es' + area);