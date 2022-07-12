


function cuotas (){
    let precioProducto = 100;
    let cuotas = parseInt(prompt("Ingrese el numero de cuotas en el que desea abonar, el procto permite 1, 3, 6 o 12."));

    if (cuotas = 1) {
    alert (`Su pago se realizara en 1 cuota de ${precioProducto}`);
} else if (cuotas = 3) {
    let valorCuotas = precioProducto / 3;
    alert (`Su pago se realizara en 3 cuotas de ${valorCuotas}`);
} else if (cuotas = 6) {
    let valorCuotas = precioProducto / 6;
    alert (`Su pago se realizara en 6 cuotas de ${valorCuotas}`);
} else if (cuotas = 12) {
    let valorCuotas = precioProducto / 12;
    alert (`Su pago se realizara en 12 cuotas de ${valorCuotas}`);
} else {
    alert("Ingrese una cantidad de cuotas valida.")
}
}

function panelPagos(){
    for (let cuotasPagar = 0; i < 10; i++) {
        alert(i);
    } if (cuotasPagar == 0){
        break;
        alert ("No tienes cuotas a pagar")
    }
    
}

