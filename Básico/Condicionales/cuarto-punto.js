//Crea un programa que tome un número como argumento y utilice el operador ternario para determinar si es par o impar. 
//Devuelve un mensaje que indique el resultado.

var numero = parseInt(prompt( "Ingresa tu número:" ));

if(numero % 2 === 0) {
    alert( "El número que ingresaste, es par." );
} else {
    alert( "El número que ingresaste, es impar." );
}