const usuarioautenticado = new Promise((resolve, reject) => {
    const auth = true;

    if (auth) {
        resolve('Usuario Autenticado.'); //El Promise se cumple
    } else {
        reject('No se pudo iniciar sesion.'); //El Promise no se cumple
    }
});

usuarioautenticado
    .then((resultado) => console.log(resultado))
    .catch((error) => console.log(error))

//En los Promises existen 3 valores posibles
// Pending: No se ha cumplido pero tampoco se ha rechazado.
// Fullfilled: Ya se cumplio.
//Rejected; Se ha rechazado o no se pudo cumplir.