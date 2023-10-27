//Implementar una función para calcular la calificación final de un estudiante, considerando los porcentajes asignados a cada materia.

class Estudiante {
    constructor(nombre) {
      this.nombre = nombre;
      this.notasPorMateria = [];
      this.porcentajesPorMateria = [];
    }
  
    ingresarNotasYPorcentajes() {
      const numMaterias = parseInt(prompt(`Ingrese el número de materias para ${this.nombre}:`), 10);
      for (let i = 0; i < numMaterias; i++) {
        const nota = parseFloat(prompt(`Ingrese la nota para la materia ${i + 1} de ${this.nombre}:`));
        const porcentaje = parseFloat(prompt(`Ingrese el porcentaje para la materia ${i + 1} de ${this.nombre}:`));
        this.notasPorMateria.push(nota);
        this.porcentajesPorMateria.push(porcentaje);
      }
    }
  
    calcularCalificacionFinal() {
      if (this.notasPorMateria.length !== this.porcentajesPorMateria.length) {
        return "La cantidad de notas y porcentajes no coincide.";
      }
  
      let calificacionFinal = 0;
      for (let i = 0; i < this.notasPorMateria.length; i++) {
        calificacionFinal += (this.notasPorMateria[i] * this.porcentajesPorMateria[i] / 100);
      }
  
      return calificacionFinal;
    }
  }
  
  const nombreEstudiante = prompt("Ingrese el nombre del estudiante:");
  const estudiante = new Estudiante(nombreEstudiante);
  estudiante.ingresarNotasYPorcentajes();
  
  const calificacionFinal = estudiante.calcularCalificacionFinal();
  console.log(`La calificación final de ${estudiante.nombre} es: ${calificacionFinal}`);
  