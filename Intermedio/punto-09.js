//Agregar la opción de ingresar el número total de estudiantes y las notas correspondientes de cada materia para calcular el promedio por materia.

class Estudiante {
  constructor(nombre) {
    this.nombre = nombre;
    this.notasPorMateria = [];
  }

  ingresarNotas() {
    const numMaterias = parseInt(prompt(`Ingrese el número de materias para ${this.nombre}:`), 10);
    for (let i = 0; i < numMaterias; i++) {
      const numNotas = parseInt(prompt(`Ingrese la cantidad de notas para la materia ${i + 1} de ${this.nombre}:`), 10);
      const notas = [];
      for (let j = 0; j < numNotas; j++) {
        const nota = parseFloat(prompt(`Ingrese la nota ${j + 1} para la materia ${i + 1} de ${this.nombre}:`));
        notas.push(nota);
      }
      this.notasPorMateria.push(notas);
    }
  }

  calcularPromedioPorMateria() {
    const promedios = [];
    for (let i = 0; i < this.notasPorMateria.length; i++) {
      const sumaNotas = this.notasPorMateria[i].reduce((total, nota) => total + nota, 0);
      const promedio = sumaNotas / this.notasPorMateria[i].length;
      promedios.push(`Materia ${i + 1}: ${promedio}`);
    }
    return promedios;
  }
}

class GrupoEstudiantes {
  constructor() {
    this.estudiantes = [];
  }

  agregarEstudiante(estudiante) {
    this.estudiantes.push(estudiante);
  }

  calcularPromediosPorMateria() {
    this.estudiantes.forEach((estudiante) => {
      console.log(`Promedios por materia para ${estudiante.nombre}:`);
      const promedios = estudiante.calcularPromedioPorMateria();
      promedios.forEach((promedio) => {
        console.log(promedio);
      });
    });
  }
}

const numEstudiantes = parseInt(prompt("Ingrese el número total de estudiantes:"), 10);

const grupo = new GrupoEstudiantes();

for (let i = 0; i < numEstudiantes; i++) {
  const nombreEstudiante = prompt(`Ingrese el nombre del estudiante ${i + 1}:`);
  const estudiante = new Estudiante(nombreEstudiante);
  estudiante.ingresarNotas();
  grupo.agregarEstudiante(estudiante);
}

grupo.calcularPromediosPorMateria();


//Este me generó muchos errores, no sé si sí está bien:(