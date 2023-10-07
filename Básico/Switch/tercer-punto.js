// Usa el prompt para que tome un valor numérico del 1 al 12 (representando un mes) como argumento 
// y devuelva el nombre del mes utilizando una estructura switch.

var numeroAño = prompt( "Digite un mes del año:" );

numeroAño = Number( numeroAño );


switch( numeroAño ) {
    case 1:
        console.log( "Enero" );
        break;
    case 2:
        console.log( "Febrero" );
        break;
    case 3:
        console.log( "Marzo" );
        break;
    case 4:
        console.log( "Abril" );
        break;
    case 5:
        console.log( "Mayo" );
        break;
    case 6:
        console.log( "Junio" );
        break;
    case 7:
        console.log( "Julio" );
        break;
    case 8:
        console.log( "Agosto" );
        break;
    case 9:
        console.log( "Septiembre" );
        break;
    case 10:
        console.log( "Octubre" );
        break;
    case 11: 
        console.log( "Noviembre" );
        break;
    case 12: 
        console.log( "Diciembre" );
        break;
    default:
        console.log( 'El mes ' + numeroAño + ' no existe. Intenta otra vez.' );
}