//Arreglos o Arrays.

const numeros = [10, 20, 30 ,40, 50];

console.log(numeros);
// console.table(numeros);

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];
//console.table(meses);

//Puede tener todo tipo de valores.
const arreglo = ["Hola", 10, true, "si", null, {nombre: "Juan", trabajo: "Programador"}, [1,2,3]];
//console.log(arreglo);

//Acceder a los valores de un array.
// console.log(numeros[4]);
// console.log(numeros[1]);

//Conocer la extension de un array.
// console.log(meses.length);

// Iterador, recorrer arreglo.
// numeros.forEach(function(numero) {
//     console.log(numero);
// })


//Agregar elemento al final. Se recomienda no modificar los datos originales.
numeros.push(60);
numeros.push(70);
numeros.push(80, 90);

numeros.unshift(-10, -20, -30); //Agrega al inicio del arreglo.
console.table(numeros);
//Eliminar elementos del arreglo.

meses.pop();//Elimina el ultimo elemento del Arreglo.
meses.shift();//Elimina el primero del arreglo.

meses.splice(2, 1); //Recorre el arreglo hasta llegar a la posicion 2 y borra 1 desde esa posicion.

console.table(meses);


//Rest Operator o Spread Operator.

const nuevoArreglo = [...meses, 'Junio']; //Copia y agrega al final.
const nuevoArreglo2 = ['Julio', ...meses]; //Copia y agrega al inicio.

console.log(nuevoArreglo);
console.log(nuevoArreglo2);