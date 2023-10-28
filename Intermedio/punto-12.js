//Agregar la opción de ingresar el número total de exámenes y las calificaciones correspondientes de cada examen para calcular el promedio del estudiante.

class Estudiante {
    constructor(nombre) {
      this.nombre = nombre;
      this.notasPorMateria = [];
      this.porcentajesPorMateria = [];
      this.calificacionesExamenes = [];
    }
  
    ingresarNotasYPorcentajes(notas, porcentajes) {
      this.notasPorMateria = notas;
      this.porcentajesPorMateria = porcentajes;
    }
  
    ingresarCalificacionesExamenes(calificaciones) {
      this.calificacionesExamenes = calificaciones;
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
  
    calcularPromedioExamenes() {
      if (this.calificacionesExamenes.length === 0) {
        return "No se ingresaron calificaciones de exámenes.";
      }
  
      const sumaCalificaciones = this.calificacionesExamenes.reduce((total, calificacion) => total + calificacion, 0);
      return sumaCalificaciones / this.calificacionesExamenes.length;
    }
  }
  
  class GrupoEstudiantes {
    constructor() {
      this.estudiantes = [];
    }
  
    agregarEstudiante(estudiante) {
      this.estudiantes.push(estudiante);
    }
  
    calcularCalificacionesFinalesYPromedios() {
      this.estudiantes.forEach((estudiante) => {
        const calificacionFinal = estudiante.calcularCalificacionFinal();
        const promedioExamenes = estudiante.calcularPromedioExamenes();
        console.log(`Calificación final de ${estudiante.nombre}: ${calificacionFinal}`);
        console.log(`Promedio de exámenes de ${estudiante.nombre}: ${promedioExamenes}`);
      });
    }
  }
  
  const estudiante1 = new Estudiante("Pelusa");
  const estudiante2 = new Estudiante("Bruno");
  const estudiante3 = new Estudiante("Pancho");
  
  estudiante1.ingresarNotasYPorcentajes([90, 35, 95], [30, 40, 30]);
  estudiante2.ingresarNotasYPorcentajes([75, 88, 92], [40, 30, 30]);
  estudiante3.ingresarNotasYPorcentajes([78, 86, 90], [30, 30, 40]);
  
  const grupo = new GrupoEstudiantes();
  
  grupo.agregarEstudiante(estudiante1);
  grupo.agregarEstudiante(estudiante2);
  grupo.agregarEstudiante(estudiante3);

  grupo.estudiantes.forEach((estudiante) => {
    const numExamenes = parseInt(prompt(`Ingrese el número total de exámenes para ${estudiante.nombre}:`), 10);
    const calificaciones = [];
    for (let i = 0; i < numExamenes; i++) {
      const calificacionExamen = parseFloat(prompt(`Ingrese la calificación del examen ${i + 1} para ${estudiante.nombre}:`));
      calificaciones.push(calificacionExamen);
    }
    estudiante.ingresarCalificacionesExamenes(calificaciones);
  });
  
  grupo.calcularCalificacionesFinalesYPromedios();
  