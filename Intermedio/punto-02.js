//Ingresar tres calificaciones, calcular el promedio y determinar si el alumno aprobó la materia (3.5 es la nota mínima para pasar).

var calificacion1 = parseFloat(prompt( "Ingresa la primera calificación:" ));
var calificacion2 = parseFloat(prompt( "Ingresa la segunda calificación:" ));
var calificacion3 = parseFloat(prompt( "Ingresa la tercera calificación:" ));

var promedio = ( calificacion1 + calificacion2 + calificacion3) / 3;

if(promedio >= 3.5) {
    console.log( "Felicitaciones, pasó la materia con un promedio de " + promedio );
} else {
    console.log( "Reprobaste. :( Tu promedio fue de " + promedio );  
}