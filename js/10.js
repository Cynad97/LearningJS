//Objets

const nombreProducto = "Monitor 20 pulgadas";
const precio = 300;
const disponible = true;

//Esto es un objeto, con una , agrego mas datos al objeto.
const producto = {
    nombreProducto: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

console.log(producto);

//Acceder a los atributos de los objetos.

console.log(producto.nombreProducto);
console.log(producto.precio);
console.log(producto.disponible);

console.log(producto["precio"]); // Esta forma no es tan clara como la de arriba.


//Agregar nuevas propiedades.
producto.imagen = 'imagen.jpg';

//Eliminar propiedades.
delete producto.disponible;
console.log(producto);