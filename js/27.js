//POO 

//Object literal
const producto = {
    nombre: 'Tablet',
    precio: 500
}

//Object Constructor
//Una clase es para almacenar una forma de un objeto. Sirve como un plano donde podemos crear multiples objetos.
function Cliente(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
}

Cliente.prototype.formatearCliente = function() {
    return `Nombre: ${this.nombre} Apellido: ${this.apellido}.`
}

function Producto(nombre, precio, disponible) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = disponible;
}

//Prototype nos permite crear funciones que solo se utilizan en un objeto en especifico.
Producto.prototype.formatearProducto = function() {
    return `El producto ${this.nombre} tiene un precio de: ${this.precio}.`
}

const producto2 = new Producto('Monitor 49"', 800, false);
const producto3 = new Producto('Netbook', 1200, true);
const cliente = new Cliente('Ariel', 'Hernandez');

console.log(cliente.formatearCliente());
console.log(producto2.formatearProducto());
console.log(producto3.formatearProducto());


