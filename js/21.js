//Arrow functions.
const sumar2 = (n1, n2) => console.log (n1 + n2);
sumar2(5,10);

const aprendiendo = (tecnologia) => console.log(`Aprendiendo ${tecnologia}`);

aprendiendo('JavaScript');


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
meses.forEach(mes => {
    if(mes == 'Marzo'){
        console.log('Marzo Existe');
    }
});

//Some ideal para arreglo de objetos
let resultado;
resultado = carrito.some(producto => producto.nombre === 'Celular');
console.log(resultado);

//Reduce.
resultado = carrito.reduce((total, producto) => total + producto.precio,0);
console.log(resultado);

//Filter.
resultado = carrito.filter(producto => producto.precio > 400);
console.log(resultado);

resultado = carrito.filter(producto => producto.nombre !== 'Celular');
console.log(resultado);

