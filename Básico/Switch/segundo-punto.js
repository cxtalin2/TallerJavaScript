// Usa el prompt para solicitar un número que representará el mes del año (por ejemplo, 1 para enero, 2 para febrero, etc.). 
// Utiliza una estructura switch para mostrar cuántos días tiene ese mes.

var numeroAño = prompt( "Digite un mes del año:" );

numeroAño = Number( numeroAño );


switch( numeroAño ) {
    case 1:
        console.log( "Enero tiene 31." );
        break;
    case 2:
        console.log( "Febrero tiene 28 días, o 29 en años bisiestos." );
        break;
    case 3:
        console.log( "Marzo tiene 31 días." );
        break;
    case 4:
        console.log( "Abril tiene 30 días." );
        break;
    case 5:
        console.log( "Mayo tiene 31 días." );
        break;
    case 6:
        console.log( "Junio tiene 30 días." );
        break;
    case 7:
        console.log( "Julio tiene 31 días." );
        break;
    case 8:
        console.log( "Agosto tiene 31 días." );
        break;
    case 9:
        console.log( "Septiembre tiene 30 días." );
        break;
    case 10:
        console.log( "Octubre tiene 31 días." );
        break;
    case 11: 
        console.log( "Noviembre tiene 30 días." );
        break;
    case 12: 
        console.log( "Diciembre tiene 31 días." );
        break;
    default:
        console.log( 'El mes ' + numeroAño + ' no existe. Intenta otra vez.' );
}