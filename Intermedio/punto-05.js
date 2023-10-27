// Implementar el concepto de clases para gestionar la información de los estudiantes y calcular las notas de los tres estudiantes.


class Estudiante {
   
    constructor(nombre, nota1, nota2, nota3) {
      this.nombre = nombre;
      this.nota1 = nota1;
      this.nota2 = nota2;
      this.nota3 = nota3;
    }
  

    calcularPromedio() {
      return (this.nota1 + this.nota2 + this.nota3) / 3;
    }
  

    mostrarInformacion() {
      console.log(`Nombre: ${this.nombre}`);
      console.log(`Nota 1: ${this.nota1}`);
      console.log(`Nota 2: ${this.nota2}`);
      console.log(`Nota 3: ${this.nota3}`);
      console.log(`Promedio: ${this.calcularPromedio()}`);
    }
  }
  

  const estudiante1 = new Estudiante("Bruno Vega", 90, 85, 78);
  const estudiante2 = new Estudiante("Mora Meza", 75, 88, 92);
  const estudiante3 = new Estudiante("Paco Cuéllar", 82, 79, 91);
  

  estudiante1.mostrarInformacion();
  estudiante2.mostrarInformacion();
  estudiante3.mostrarInformacion();