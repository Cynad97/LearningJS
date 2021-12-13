const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

const carrito = [
    {nombre: 'Monitor 20 Pulgadas', precio: 500},
    {nombre: 'Television 50 Pulgadas', precio: 700},
    {nombre: 'Tablet', precio: 300},
    {nombre: 'Auriculares', precio: 200},
    {nombre: 'Teclado', precio: 50},
    {nombre: 'Celular', precio: 500},
    {nombre: 'Parlantes', precio: 300},
    {nombre: 'Netbook', precio: 800},
];

//ForEach.
meses.forEach(function(mes){
    if(mes == 'Marzo'){
        console.log('Marzo Existe');
    }
});

//Includes. Cuando un arreglo es plano sin objetos. (Meses, numeros, etc).
let resultado = meses.includes('Marzo'); //Retorna  true si se encuentra en el arreglo. No funciona con un arreglo de Objetos.
console.log(resultado);

//Some ideal para arreglo de objetos
resultado = carrito.some(function(producto){
    return producto.nombre === 'Celular';
})
console.log(resultado);

//Reduce.
resultado = carrito.reduce(function(total, producto){
    return total + producto.precio
},0)
console.log(resultado);

//Filter.
resultado = carrito.filter(function(producto){
    return producto.precio > 400
});
console.log(resultado);

resultado = carrito.filter(function(producto){
    return producto.nombre !== 'Celular'
});
console.log(resultado);