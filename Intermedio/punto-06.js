//Agregar la opción de ingresar el número total de materias y las notas correspondientes de un solo estudiante. Determinar qué materias aprobó y cuáles reprobó.

class Estudiante {
    constructor(nombre, numeroMaterias) {
      this.nombre = nombre;
      this.numeroMaterias = numeroMaterias;
      this.notas = [];
      this.aprobadas = [];
      this.reprobadas = [];
    }

    ingresarNotas() {
      for (let i = 0; i < this.numeroMaterias; i++) {
        const nota = parseFloat(prompt(`Ingrese la nota para la materia ${i + 1}:`));
        this.notas.push(nota);
      }
    }
  
    determinarAprobadasReprobadas(notaMinima) {
      for (let i = 0; i < this.numeroMaterias; i++) {
        if (this.notas[i] >= notaMinima) {
          this.aprobadas.push(`Materia ${i + 1}`);
        } else {
          this.reprobadas.push(`Materia ${i + 1}`);
        }
      }
    }
  
    mostrarInformacion() {
      console.log(`Nombre: ${this.nombre}`);
      console.log(`Número de materias: ${this.numeroMaterias}`);
      console.log(`Notas: ${this.notas}`);
      console.log(`Materias aprobadas: ${this.aprobadas.join(', ')}`);
      console.log(`Materias reprobadas: ${this.reprobadas.join(', ')}`);
    }
  }
  

  const estudiante = new Estudiante("Bruno Tapias", 5);
  
  estudiante.ingresarNotas();
  estudiante.determinarAprobadasReprobadas(60);
  estudiante.mostrarInformacion();
  