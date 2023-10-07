// Usa el prompt para capturar un numero que representará una dirección cardinal (Norte, Sur, Este, Oeste). 
// Utiliza una estructura switch para determinar en qué dirección se encuentra un punto cardinal opuesto (por ejemplo, Norte-opuesto es Sur).

var direccionCardinal = parseInt(prompt( "Ingresa una dirección cardinal (1 para Norte, 2 para Sur, 3 para Este, 4 para Oeste):" ))

switch(direccionCardinal) {
    case 1:
        alert( "La dirección cardinal opuesta es: Sur" );
        break;
    case 2: 
        alert( "La dirección cardinal opuesta es: Norte" );
        break;
    case 3: 
        alert( "La dirección cardinal opuesta es: Oeste" );
        break;
    case 4: 
        alert( "La dirección cardinal opuesta es: Este" );
        break;
}