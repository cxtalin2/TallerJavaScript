// Es noche de amor y amistad, en esta ocasión el cover para ingresar a la disco incrementará 2 veces para los chicos y decrementará 2 veces para las chicas. 
// El valor habitual es de 7 dólares. Usando el prompt solicite el nombre y el genero de una persona e imprima usando alert() 
// el siguiente mensaje si es un chico Juan tu entrada a la disco vale $9 dólares, en caso de ser chica Ana tu entrada a la disco vale $5 dólares

var nombre = prompt( "Ingresa tu nombre:" );

var genero = prompt( "Ingresa tu género:" );

var precioInicial = 7;

if(genero == "chico") {
    precioInicial++
    precioInicial++
    alert( nombre + " tu entrada a la disco vale $" + precioInicial + " dólares.")
} else{
    precioInicial--
    precioInicial--
    alert( nombre + " tu entrada a la disco vale $" + precioInicial + " dólares.")
}