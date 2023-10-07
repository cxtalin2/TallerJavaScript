//Escribe un programa que pida al usuario su edad y determine si es un niño, adolescente o adulto utilizando una estructura if-else-if.

var edad = parseInt(prompt( "Por favor, ingresa tu edad:" ));

if (edad > 18) {
    alert( "Eres un adulto." );
} else if (edad >= 13 && edad <= 18) {
    alert( "Eres un adolescente." );
} else {
    alert( "Eres un niño." );
}