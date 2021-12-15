//classes.

class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    formatearProducto() {
        return `El producto ${this.nombre} tiene un precio de: ${this.precio}`;
    }
}

const producto2 = new Producto('Monitor 49"', 800, false);

//Herencia.
class Libro extends Producto {
    constructor(nombre, precio, isbn) {
        super(nombre, precio);
        this.isbn = isbn;
    }

    formatearProducto() {
        return `${super.formatearProducto()} y su ISBM es: ${this.isbn}.`;
    }
}

const libro = new Libro('JavaScript', 120, '9991293912391827');
console.log(libro.formatearProducto());
console.log(producto2.formatearProducto());
