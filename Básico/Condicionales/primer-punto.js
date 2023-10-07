//Crea un programa que solicite al usuario un número y determine si es positivo, negativo o cero utilizando una estructura condicional (if).

var numero = parseInt(prompt( "Por favor, ingresa un número:" ));

if(numero > 0) {
    alert( "El número que ingresaste es positivo. :)" );
} else if(numero < 0) {
    alert( "El número que ingresaste es negativo. :(" );
} else {
    alert( "El número que ingresaste es igual a cero. :o" )
}