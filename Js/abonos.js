// Codigo para calcular el costo total de un pedido

let nombreTienda = "Tiendas Deli LTDA";
let descripcioTienda = "Tienda de reposteria y panaderia tradicional";
let telefonoTienda = "(+054) 4588898";
let nombreProducto = "Torta de Chocolate";
let precioProducto = 30000;
let costoEnvio = 7800;
let descuentoTotal = 10000;

let costoTotal = (precioProducto + costoEnvio) - descuentoTotal;

console.log("El costo total de su pedido es de: " + costoTotal);
alert("El costo total de su pedido es de: " + costoTotal + " PESOS");


// Codigo para definir el descuento de servicios publicos en la ciudad de medellin
let cedulaCliente = prompt("¿Cuál es su número de cédula?");
let estratoCliente = prompt("¿Cuál es el estrato socioeconómico de su hogar?");


if (estratoCliente == 1) {
    alert("señor usuario, identificado con cédula número: " + cedulaCliente + " usted tiene un descuento del 40%");
} else if (estratoCliente == 2) {
    alert("señor usuario, identificado con cédula número: " + cedulaCliente + " usted tiene un descuento del 30%");
} else if (estratoCliente == 3) {
    alert("señor usuario, identificado con cédula número: " + cedulaCliente + " usted tiene un descuento del 20%");
} else {
    alert("señor usuario, identificado con cédula número: " + cedulaCliente + " usted no tiene un descuento");
}