const button = document.querySelector('#button');
button.addEventListener('click', () => {
    Notification.requestPermission()
        .then(resultado => console.log(`El resultado es: ${resultado}.`));
});


if(Notification.permission == 'granted') {
    new Notification('Esta es una notificacion', {
        icon: 'img/onizuka.png',
        body: 'Codigo'
    })
}