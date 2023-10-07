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

/* [alumno]
    (nomnbres)
    (id) 

/** SOLUCIÓN CON FUNCIONES HECHA EN CLASE */

let calificacion;

const alumno = {};
const nota = {};
const materia = {};

function promedio( notas ) {
    let suma = 0;
    for ( let i = 0; i < notas.lenght; i++ ) {
        suma = suma + notas[ i ];
    }

    return suma / notas.lenght;
}

function capturarNotas ( cant_notas ) {
    let notas = [];
    for ( let i = 0; i < cant_notas; i++ ) {
        notas.push( Number( prompt( 'Digita tu nota:' )))
    return notas;
    }
}
const calificaciones = capturarNotas();
const resultado = promedio( calificaciones );
console.log( resultado );



function capturarMaterias( cant_materias ) {
    let materias = [];
    for ( let i = 0; i < cant_materias; i++ ) {
        const nombreMateria = prompt( 'Digita el nombre de la materia:' );

        const nuevaMateria = {
            nombre: nombreMateria,
            notas : capturarNotas( 3 )
        }
        
        materias.push( nuevaMateria );
    }
    return materias;
}


function capturaDatosAlumno( nombreAlumno ) {
    const nombre = prompt( 'Digita el nombre del alumno:' );
    const materias = capturarMaterias( 3 );

    const nombreAlumno = {
        nombre,
        materias
    };

    return nuevoAlumno;

}

function init( ) {
    capturaDatosAlumno( 'Maicol' );
}

init();


//---------------------- CLASES -------------------------------------//

class Alumno {
    constructor( nombre ) {
        this.nombre= nombres;
    }
}

class Materia {
    constructor( nombre, objNotas ) {
        this.nombre = nombre;
        this.notas = objNotas;
    }
}

class Nota {
    constructor() {
        this.notas = []
    }
    agregarUna( nota ) {
        this.nota.push( nota );
    }
    agregarVarias( listaNotas) {
        this.notas = [ ...this.notas, ...listaNotas ]
    }
    reiniciar() {
        this.notas = [];
    }
    promedio() {
        let suma = 0;
        for ( const nota of this.notas ) {
            suma = suma + nota;
        }
        return suma / this.notas.length;
    }
}


const logica = new Materia(
    'Logica de programacion', 
    nota

)

