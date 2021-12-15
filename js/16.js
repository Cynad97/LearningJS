//Funciones.
//Declaracion de funcion.

function sumar() {
    console.log(10 + 10);
}

sumar();

//Expresion de la funcion. Es mas como una variable.
const sumar2 = function(){
    console.log (3 + 3);
}

sumar2();

//IIFE
(function() {
    console.log('Esto es una funcion');
})();


//Esto no genera error porque se ejecuta en 2 vueltas, en las segunda hace el llamado a la funcion.
sumar();
function sumar() {
    console.log(10 + 10);
}