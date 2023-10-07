// Implementar el concepto de clases para gestionar la información de los estudiantes y calcular las notas de los tres estudiantes.

// Estructura, Modelo, Clase
class Persona {
    //  Atributos
    name = ''
    proffesion = ''


    constructor( name ) {
        this.name = name;
    }

    // Metodos
    sumar( a, b ){
        return a + b;
    }
}

new Persona(); //instanciacion: crea un objeto a partir de una clase

let gato = 'Orion'

function sumar( a, b ){
    return a + b;
}