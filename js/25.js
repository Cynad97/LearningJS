const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500 },
    { nombre: 'Television 50 Pulgadas', precio: 700 },
    { nombre: 'Tablet', precio: 300 },
    { nombre: 'Auriculares', precio: 200 },
    { nombre: 'Teclado', precio: 50 },
    { nombre: 'Celular', precio: 500 },
    { nombre: 'Parlantes', precio: 300 },
    { nombre: 'Netbook', precio: 800 },
];

//ForEach cuando quieras iterar sobre un listado y mostrarlos por pantalla solamente
carrito.forEach(producto => console.log(producto.nombre));

//map Cuando quieras crear un nuevo arreglo en base a otro.
const arreglo2 = carrito.map(producto => `${producto.nombre} - ${producto.precio}`);


console.log(arreglo2);
