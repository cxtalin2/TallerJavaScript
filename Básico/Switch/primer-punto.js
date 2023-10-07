// Crea un programa que solicite al usuario tres notas calcular el promedio. El rango permitido es de 0 a 5, incluidos decimales. 
// Utilice una estructura switch para mostrar un mensaje correspondiente a la calificación ingresada, así:

//Si saca menos de 2.5 ( 'Insuficiente, has perdido la materia' )
//Si saca 2.5 y de menos de 3.5 ( 'Insuficiente, tienes derecho a habilitar' )
//Si saca 3.5 y menos de 4.0 ( 'Aceptable' )
//Si saca 4.1 y hasta 5.0 ( 'Excelente' )

var nota1 = parseFloat(prompt( "Ingresa la primera nota. El rango permitido es de 0 a 5, incluyendo decimales:" ));
var nota2 = parseFloat(prompt( "Ingresa la segunda nota. El rango permitido es de 0 a 5, incluyendo decimales:" ));
var nota3 = parseFloat(prompt( "Ingresa la tercera nota. El rango permitido es de 0 a 5, incluyendo decimales:" ));

var promedio = (nota1 + nota2 + nota3) / 3;


switch(true) {
    case promedio < 2.5: 
        alert( "Tu nota es: " + promedio + ". Insuficiente, has perdido el Bootcamp.")
        break;
    case promedio >= 2.5 && promedio < 3.5: 
        alert( "Tu nota es: " + promedio + ". Insuficiente, te vas a recuperaciones." )
        break;
    case promedio >= 3.5 && promedio <= 4.0:
        alert( "Tu nota es: " + promedio + ". Pasaste raspando." )
        break;
    case promedio >= 4.1 && promedio <= 5.0:
        alert( "Tu nota es: " + promedio + ". Excelente. Toma tu diploma." )
        break;
    default:
        alert("Calificación no válida");
}