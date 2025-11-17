let operation = " ";
let fondos = 1000000;
let ab = 10;



do
{



//let operation = "";
operation = parseInt (prompt(" BIENVENIDOS A LA RED DE TELECAJEROS 7B, \n PRESIONE 1 PARA DEPOSITOS \n  PRESIONE 2 PARA RETIROS \n  PRESIONE 3 PRESIONE PARA SALDO \n  PRESIONE 4 PARA FINALIZAR ") )

;


//let fondos=1000000;

if ( operation === 1) {
  let dep = prompt( " Monto a Depositar ");

   //let  = prompt ( "  ");
   let dep1 = parseFloat( dep );
   fondos = fondos + dep1;
   alert( " saldo: " + fondos);


  
  }


if ( operation === 2) {
   let ret = prompt ( " Monto a Retirar");
   let ret1 = parseFloat ( ret );
   if ( ret1 > fondos) {
    alert( " Fondo insuficiente ");

    
   }
   else { 
    fondos = fondos - ret1;

    alert( " Saldo " + fondos)

   }


   }
if ( operation === 3) {
   alert(" su saldo es " + fondos + " bs " );

   }

if ( operation === 4) {
   alert( "Gracias por utilizar nuestros servicios");
  }

if ( operation < 1  || operation > 4) {
  alert ( " invalid operation");
}

  
  console.log( operation)
  console.log(typeof operation)
  
}
while( operation !== 4 ) 
;



