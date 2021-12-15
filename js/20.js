//Metodos de propiedad.
const reproductor = {
    reproducir: function(id) {
        console.log(`reproduciendo Cancion con el ID: ${id}`);
    },
    pausar: function(){
        console.log('Pausando...')
    },
    crearPlaylist: function(nombre) {
        console.log(`Creando la playlist: ${nombre}`);
    },
    reproducirPlaylist: function(nombre) {
        console.log(`Reproduciendo la playlist: ${nombre}`);
    }
}

//Se puede agregar funciones por fuera del objeto.
reproductor.borrarCancion = function(id) {
    console.log(`Eliminando la cancion: ${id}`);
}

reproductor.reproducir(3840);
reproductor.pausar();
reproductor.borrarCancion(20);
reproductor.crearPlaylist('HeavyMetal');
reproductor.reproducirPlaylist('HeavyMetal');

