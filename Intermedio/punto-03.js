//Ingresar el nombre de un alumno y tres notas por materia (en total tres materias) y determinar qué materias aprobó y cuáles reprobó.

/** SOLUCIÓN PROPIA */

var nombreAlumno = prompt( "Ingrese el nombre del alumno:" );

var notaMateria1 = parseFloat(prompt( "Ingrese la nota de la primera materia:" ));
var notaMateria2 = parseFloat(prompt( "Ingrese la nota de la segunda materia:" ));
var notaMateria3 = parseFloat(prompt( "Ingrese la nota de la tercera materia:" ));

function sacarEstadoMaterias(nota) {
    if(nota >= 3.5) {
        return nombreAlumno + " pasó la materia.";
    } else {
        return nombreAlumno + " perdió la materia.";
    }
}

console.log(sacarEstadoMaterias(notaMateria1));
console.log(sacarEstadoMaterias(notaMateria2));
console.log(sacarEstadoMaterias(notaMateria3));

/*--------------------------------- SOLUCIÓN HECHA EN CLASE --------------------------------------*/

const NUM_NOTAS = 3;
const NUM_MATERIAS = 3;


const materias = [];

for( let j = 0; j < NUM_MATERIAS; j++ ) {
    const materia = {
        nombre: prompt( 'Digite el nombre de la materia' )
    }
    
    const notas = [];
    for( let i = 0; i < NUM_NOTAS; i++ ) {
        const nota = Number( prompt( `Digite nota de la materia` ) );
        notas.push( nota );
    }
    
    materia.notas = notas;
    materias.push( materia );
}



console.log( materias );

// Proceso de calcular los promedios
const promedios = [];

for( let i = 0; i < 3; i++ ) {
    const notas = materias[ i ].notas;

    let suma = 0
    for( let j = 0; j < notas.length; j++ ) {
        suma = suma + notas[ j ];
    }

    const promedio = suma / notas.length;
    promedios.push( promedio );
}