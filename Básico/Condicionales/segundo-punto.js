//Declara una variable para representar la temperatura en grados Celsius. Utiliza una estructura if-else para determinar si la temperatura está por encima o por debajo de cero grados y muestra un mensaje apropiado.

var temperaturaCelsius = parseInt(prompt( "Por favor, ingresa tu temperatura:" ));

if(temperaturaCelsius > 0) {
    alert( "La temperatura está por encima de 0º. :)" );
} else if(temperaturaCelsius < 0) {
    alert( "La temperatura está por debajo de 0º. Qué frío. :(" );
} else {
    alert( "La temperatura es igual a 0º. :o" )
}