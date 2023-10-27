//Utilizar clases para gestionar la información de un grupo de estudiantes y calcular los promedios de notas de cada estudiante.

class Estudiante {
    constructor(nombre, notas) {
      this.nombre = nombre;
      this.notas = notas;
    }
  
    calcularPromedio() {
      const sumaNotas = this.notas.reduce((total, nota) => total + nota, 0);
      return sumaNotas / this.notas.length;
    }
  }
  
  class GrupoEstudiantes {
    constructor() {
      this.estudiantes = [];
    }
  
    agregarEstudiante(estudiante) {
      this.estudiantes.push(estudiante);
    }
  
    calcularPromedios() {
      this.estudiantes.forEach((estudiante) => {
        const promedio = estudiante.calcularPromedio();
        console.log(`Nombre: ${estudiante.nombre}`);
        console.log(`Promedio de notas: ${promedio}`);
      });
    }
  }

  const estudiante1 = new Estudiante("Bruno", [80, 90, 75]);
  const estudiante2 = new Estudiante("Mora", [85, 92, 88]);
  const estudiante3 = new Estudiante("Paco", [78, 86, 90]);
  
  const grupo = new GrupoEstudiantes();
  
  grupo.agregarEstudiante(estudiante1);
  grupo.agregarEstudiante(estudiante2);
  grupo.agregarEstudiante(estudiante3);

  grupo.calcularPromedios();
  