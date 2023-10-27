//Implementar funciones para calcular el promedio de notas de un grupo de estudiantes, dados sus nombres y notas por materia.


function calcularPromedio(notas) {
    const sumaNotas = notas.reduce((total, nota) => total + nota, 0);
    return sumaNotas / notas.length;
  }
  
  function calcularPromedioGrupo(estudiantes) {
    estudiantes.forEach((estudiante) => {
      const promedio = calcularPromedio(estudiante.notas);
      console.log(`Nombre: ${estudiante.nombre}`);
      console.log(`Promedio de notas: ${promedio}`);
    });
  }
  
  const grupoEstudiantes = [
    { nombre: "Bruno", notas: [80, 90, 75] },
    { nombre: "Mora", notas: [85, 92, 88] },
    { nombre: "Pelusa", notas: [78, 86, 90] },
  ];
  
  calcularPromedioGrupo(grupoEstudiantes);
  