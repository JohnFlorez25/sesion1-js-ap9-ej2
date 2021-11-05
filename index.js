/**
 * 1. Si el cliente compra 4 unidades o menos, pero más de 1, se le da un 15% de descuento 
 * sobre el total de la compra. 
 * 2. Si compra más de 4 pero menos de 12 se le da el 30% de descuento 
 * sobre el total de la compra; 
 * 3. y si compra más de 12 unidades se le da el 50% de descuento 
 * sobre el total de la compra.”
 */

//ENTRADAS
let cantidadCompra = -5;
let valorProducto = 50000;
//Calculado (resultado de operaciones según el descuento a aplicar)
let valorDescuento = 0;
let valorFinalDeCompra = 0;
//PROCESOS
if( cantidadCompra >=2 && cantidadCompra <= 4){
    valorDescuento = valorProducto * 0.15;
    valorFinalDeCompra = valorProducto - valorDescuento;
}else if(cantidadCompra > 4 && cantidadCompra <= 12){
    valorDescuento = valorProducto * 0.3;
    valorFinalDeCompra = valorProducto - valorDescuento;
}else if(cantidadCompra > 12){
    valorDescuento = valorProducto * 0.5;
    valorFinalDeCompra = valorProducto - valorDescuento;
}else if( cantidadCompra >=1 && cantidadCompra < 2){
    valorFinalDeCompra = valorProducto;
}else {
    console.log("La cantidad es incorrecta "+cantidadCompra);
}

//Multiplicar el valor final de compra por la cantidad de compra
//SALIDAS
console.log("El valor total a pagar es de " + (valorFinalDeCompra * cantidadCompra));