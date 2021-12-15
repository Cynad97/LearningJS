//For Loop
// for(let i = 0; i < 10; i++) {
//     console.log(i);
// }

// for(let i = 1; i < 10; i++) {
//     if(i % 2 === 0){
//         console.log(`El numero ${i} es par`);
//     } else {
//         console.log(`El numero ${i} es impar`);
//     }
// }

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

for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i].nombre);
}

//While Loop

// let i = 1; //Indice o valor inicial

// // while (i <= 10) {
// //     if (i % 2 === 0) {
// //         console.log(`El numero ${i} es par`);
// //     } else {
// //         console.log(`El numero ${i} es impar`);
// //     }
// //     i++; //Incremento para alcanzar al condicion de corte.
// // }

// while(i <= carrito.length) {
//     console.log(carrito[i].nombre);
//     i++;
// }


//Do While Loop. Aca el codigo al menos se ejecuta una vez.

let i = 0;

do {
    console.log(i);
    i++
} while(i < 10);

