let precioProducto = 100;
let cuotas = parseInt(prompt("Ingrese el numero de cuotas en el que desea abonar, el producto permite 1, 3, 6 o 12. El producto seleccionado tiene un valor de 100."));
let cuotasPagar;

selectCuotas();
panelPagos();

function selectCuotas (){    
    if (cuotas == 1) {
    alert (`Su pago se realizara en 1 cuota de ${precioProducto}`);
} else if (cuotas == 3) {
    let valorCuotas = precioProducto / 3;
    alert (`Su pago se realizara en 3 cuotas de ${valorCuotas} finalizados los pagos usted abra pagado ${precioProducto}`);
} else if (cuotas == 6) {
    let valorCuotas = precioProducto / 6;
    alert (`Su pago se realizara en 6 cuotas de ${valorCuotas} finalizados los pagos usted abra pagado ${precioProducto}`);
} else if (cuotas == 12) {
    let valorCuotas = precioProducto / 12;
    alert (`Su pago se realizara en 12 cuotas de ${valorCuotas} finalizados los pagos usted abra pagado ${precioProducto}`);
} else {
    alert("Ingrese una cantidad de cuotas valida para el producto seleccionado.");
}
}


function panelPagos (){
    for (cuotasPagar = 0; cuotasPagar <= cuotas; cuotasPagar++){
        if (cuotasPagar == 0){
            alert ("Pulsa en el boton aceptar para comenzar a pagar tus cuotas")
        }
        alert (`Ya pagaste ${cuotasPagar} cuota(s). Termina de pagar tus cuotas para poder seguir navegando.`)
        if (cuotasPagar == cuotas){
            alert ("Ya has pagado todas tus cuotas, puedes seguir navegando.")
        }
    }
}



/* while (cuotasPagar >= 1) {
    alert(`Debes pagar todas las cuotas antes de poder seguir navegando, clickee en aceptar para pagar una cuota`);
    cuotas--;
    if (cuotasPagar == 0){
        alert ("No tienes cuotas a pagar, pulsa aceptar para seguir navegando")
        break;
    }    
} */


/* function selecCuotas (){
    switch(cuotas) {
        case (1):
            alert (`Pagaras tu producto en una cuota de ${precioProducto}`)
            break;
        case (3):
            return cuotasPagar = precioProducto / 3;
            alert (`Pagaras tu producto en tres cuotas de `);
            break;
        case (6):
            return cuotasPagar = precioProducto / 6;
            alert (`Pagaras tu producto en seis cuotas de `);
            break;
        case (12):
            return cuotasPagar = precioProducto / 12;
            alert (`Pagaras tu producto en doce cuotas de `);
            break;

    }
} */
