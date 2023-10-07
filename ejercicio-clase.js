let encontrarMayor = [8, 1, 3, 5, 2];
let mayor = encontrarMayor[0]; 

for (let i = 0; i < encontrarMayor.length; i++) {
  if (encontrarMayor[i] > mayor) {
    mayor = encontrarMayor[i];
  }
}

console.log("El número mayor es: " + mayor);

//_______________________________________________________//

let ordenarLista = [8, 1, 3, 5, 2];

for (let i = 0; i < ordenarLista.length - 1; i++) {
  let minIndex = i;

  for (let j = i + 1; j < ordenarLista.length; j++) {
    if (ordenarLista[j] < ordenarLista[minIndex]) {
      minIndex = j;
    }
  }

  if (minIndex !== i) {
    let temp = ordenarLista[i];
    ordenarLista[i] = ordenarLista[minIndex];
    ordenarLista[minIndex] = temp;
  }
}

console.log("Lista ordenada de menor a mayor: " + ordenarLista);
