//Usa el prompt para capturar dos numeros que representarán los ejes X y Y. 
//Utiliza una estructura if, if-else para determinar en qué cuadrante se encuentra el punto que representa cada valor ingresado por el usuario, así:

//Si los dos valores son positivos, el punto se encuentra en el cuadrante 1
//Si X es positivo y Y es negativo, el punto se encuentra en el cuadrante 2
//Si los dos valore son negaticos, el punto se encuentra en el cuadrante 3
//Si X es negativo y Y es positivo, el punto se encuentra en el cuadrante 4

var X = parseInt(prompt( "Ingresa un número para el eje X:" ));
var Y = parseInt(prompt( "Ingresa un número para el eje Y:" ));

if(X > 0 && Y > 0) {
    alert( "El punto se encuentra en el cuadrante 1." );
} else if(X > 0 && Y < 0) {
    alert( "El punto se encuentra en el cuadrante 2." );
} else if(X < 0 && Y < 0) {
    alert( "El punto se encuentra en el cuadrante 3." )
} else if(X < 0 && Y > 0) {
    alert( "El punto se encuentra en el cuadrante 4." )
}