//Implementar funciones para realizar la misma funcionalidad del punto 3, pero calculando las notas de tres estudiantes.


const estudiantes = [];

function calcularPromedio(notas) {
    let suma = 0;
    for (let i = 0; i < notas.length; i++) {
        suma += notas[i];
    }

    return suma / notas.length;
}

function capturaNotas(cant_notas) {
    let notas = [];

    for (let i = 0; i < cant_notas; i++) {
        notas.push(Number(prompt('Digita tu nota')));
    }

    return notas;
}

function capturaMaterias(cant_materias) {
    let materias = [];

    for (let i = 0; i < cant_materias; i++) {
        const nombreMateria = prompt('Digita nombre de la materia');
        const notas = capturaNotas(3);
        let promedio = calcularPromedio(notas);

        const nuevaMateria = {
            nombre: nombreMateria,
            notas,
            promedio
        };

        materias.push(nuevaMateria);
    }

    return materias;
}

function capturaDatosEstudiante() {
    const nombre = prompt('Digita el nombre del estudiante');
    const materias = capturaMaterias(3);

    const nuevoEstudiante = {
        nombre,
        materias
    };

    return nuevoEstudiante;
}

function capturaTresEstudiantes() {
    for (let i = 0; i < 3; i++) {
        const estudiante = capturaDatosEstudiante();
        estudiantes.push(estudiante);
    }
}

function init() {
    capturaTresEstudiantes();
    console.log(estudiantes);
}

init();
