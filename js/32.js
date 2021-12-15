// Async / Await

function descargarNuevosClientes() {
    return new Promise( resolve => {
        console.log('Descargando clientes... Espere');
        setTimeout(() => {
            resolve('Los clientes fueron decargados.');
        }, 5000);
    });
}

function descargarultimosPedidos() {
    return new Promise( resolve => {
        console.log('Descargando pedidos... Espere');
        setTimeout(() => {
            resolve('Los pedidos fueron decargados.');
        }, 300);
    });
}

// setTimeout( function(){
//     console.log('Set timeout...')
// },5000)

// setInterval( function(){
//     console.log('Set timeout...')
// },3000)

//Espera a que este llamado se complete, pero sigue ejecutando lo demas del codigo.
async function app() {
    try {
        // const clientes = await descargarNuevosClientes();
        // const pedidos = await descargarultimosPedidos();
        // console.log(clientes);

        //Asi descargar todo al mismo tiempo.
        const resultado = await Promise.all([descargarNuevosClientes(), descargarultimosPedidos()])
        console.log(resultado[0]);
        console.log(resultado[1]);
    } catch (error) {
        console.log(error);
    }
}

app();

console.log('Este codigo no se bloquea');