//Utilizar clases para gestionar la información de un grupo de estudiantes y calcular las calificaciones finales de cada estudiante.

class Estudiante {
    constructor(nombre) {
      this.nombre = nombre;
      this.notasPorMateria = [];
      this.porcentajesPorMateria = [];
    }
  
    ingresarNotasYPorcentajes(notas, porcentajes) {
      this.notasPorMateria = notas;
      this.porcentajesPorMateria = porcentajes;
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
  
  class GrupoEstudiantes {
    constructor() {
      this.estudiantes = [];
    }
  
    agregarEstudiante(estudiante) {
      this.estudiantes.push(estudiante);
    }
  
    calcularCalificacionesFinales() {
      this.estudiantes.forEach((estudiante) => {
        const calificacionFinal = estudiante.calcularCalificacionFinal();
        console.log(`Calificación final de ${estudiante.nombre}: ${calificacionFinal}`);
      });
    }
  }
  

  const estudiante1 = new Estudiante("Pancho");
  const estudiante2 = new Estudiante("Mora");
  const estudiante3 = new Estudiante("Bruno");
  
  estudiante1.ingresarNotasYPorcentajes([85, 90, 75], [30, 40, 30]);
  estudiante2.ingresarNotasYPorcentajes([75, 88, 92], [40, 30, 30]);
  estudiante3.ingresarNotasYPorcentajes([78, 86, 90], [30, 30, 40]);
  
  const grupo = new GrupoEstudiantes();
  
  grupo.agregarEstudiante(estudiante1);
  grupo.agregarEstudiante(estudiante2);
  grupo.agregarEstudiante(estudiante3);
  
  grupo.calcularCalificacionesFinales();
  