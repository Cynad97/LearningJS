function sumar(numero1 = 0, numero2 = 0)  { //Numero 1 y 2 son parametros //El igual a 0 son parametros por default. Son llamados cuando los argumentos no estan presentes.
    console.log(numero1 + numero2);
}

sumar(10,10); //Argumentos o valores reales
sumar(3,3);
sumar(3,5);
sumar(3,10);
sumar(2);

//Expresion de la funcion. Es mas como una variable.
const sumar2 = function(numero1, numero2){
    console.log (numero1 + numero2);
}

sumar2(12,14);