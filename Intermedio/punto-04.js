//Implementar funciones para realizar la misma funcionalidad del punto 3, pero calculando las notas de tres estudiantes.

var nombreAlumno = prompt( "Ingrese el nombre del alumno:" );
var nombreAlumno2 = prompt( "Ingrese el nombre del segundo alumno:");
var nombreAlumno3 = prompt( "Ingrese el nombre del tercer alumno:" );

var notaMateria1 = parseFloat(prompt( "Ingrese la nota de la primera materia:" ));
var notaMateria2 = parseFloat(prompt( "Ingrese la nota de la segunda materia:" ));
var notaMateria3 = parseFloat(prompt( "Ingrese la nota de la tercera materia:" ));

function sacarEstadoMaterias(nota, nombre) {
    if(nota >= 3.5) {
        return nombre + " pasó la materia.";
    } else {
        return nombre + " perdió la materia.";
    }
}

console.log(sacarEstadoMaterias(notaMateria1, nombreAlumno));
console.log(sacarEstadoMaterias(notaMateria2, nombreAlumno2));
console.log(sacarEstadoMaterias(notaMateria3, nombreAlumno3));

//A este punto no le pongas atención, profe. Era una prueva pero no la pude tener para hoy. :( jajaja
