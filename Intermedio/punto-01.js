//Ingresar una calificación y determinar si el alumno aprobó o reprobó la materia (3.5 es la nota mínima para pasar).
var calificación = parseFloat(prompt( "Ingresa la calificación del alumno:" ));

if(calificación >= 3.5) {
    console.log( "Felicitaciones, pasó la materia." );
} else {
    console.log( "Reprobaste. :(" );  
}