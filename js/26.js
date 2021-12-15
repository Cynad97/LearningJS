//This, no funciona con arrow function genera undefined.

const reservacion = {
    nombre: 'Ariel',
    apellido: 'Hernandez',
    total: 5000,
    pagado: false,
    informacion: function() {
        console.log(`El cliente ${this.nombre} reservo y su cantidad a pagar es de ${this.total}.`);
    }
}

const reservacion2 = {
    nombre: 'Cynad',
    apellido: 'Hernandez',
    total: 7000,
    pagado: false,
    informacion: function() {
        console.log(`El cliente ${this.nombre} reservo y su cantidad a pagar es de ${this.total}.`);
    }
}

reservacion.informacion();
reservacion2.informacion();