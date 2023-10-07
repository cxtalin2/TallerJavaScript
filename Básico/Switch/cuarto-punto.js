// Crea un programa que solicite al usuario una opción de menú (por ejemplo, 1 para "Ver perfil", 2 para "Editar configuración", etc.) y 
// utilice una estructura switch para realizar la acción correspondiente.

var opcionMenu = parseInt(prompt( "¡Bienvenidx! Ingresa 1 para ver y editar tu perfil, 2 para ver la galería, 3 para leer el blog, y 4 para contactarnos:" ));

switch(opcionMenu) {
    case 1: 
        alert( "Editar perfil." );
        break;
    case 2:
        alert( "Galería." );
        break;
    case 3:
        alert( "Blog." );
        break;
    case 4:
        alert( "Contáctanos." );
}