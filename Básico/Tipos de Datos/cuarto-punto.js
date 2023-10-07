// Crea un programa que declare un lista de nombres de frutas. Luego, elimina la primera fruta, ahora cambia el valor de la segunda fruta 
// que ahora esta de primero en la lista, inserta una nueva fruta al final de la lista y muestra toda la lista en consola.

var frutas = ["manzana", "pera", "uva", "fresa"];


frutas.shift();
frutas[0] = "mango";
frutas.push("mora");


console.log("Lista de frutas actualizada:", frutas);