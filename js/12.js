"use strict"; //Tira error si no seguimos las buenas practicas.
//Objets

const producto = {
    nombreProducto: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

Object.freeze(producto); //Esto no permite agregar propiedades ni modificar valores (tampoco eliminar).

producto.image = 'image.jpg';


console.log(producto);