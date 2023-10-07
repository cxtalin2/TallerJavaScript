// Usa el prompt para que tome un número. Indique si el número es par o impar lanzando un alert()

var numero = prompt( "Por favor, ingresa un número: ");

if (numero % 2 === 0) {
    alert( "El número " + numero + " es par." );
} else {
    alert( "El número " + numero + " es impar." );
}