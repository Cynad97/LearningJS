//Strings
const tweet = "Learing Front End Html Css JavaScript";
const product2 = "Monitor HD\"";
const email = "email@email.com"
//const product2 = String('Monitor 30\"'); //No es muy comun.
//const product3 = new String('Monitor 50\"');//No es muy comun.

//Lenght es para la extension.
console.log(tweet.length);
console.log(product2);
//console.log(typeof product3)

// IndexoF (retorna la pos)
console.log(tweet.indexOf('JavaScript')); //Devuelve la pos en la que se encuentra la palabra.
console.log(product2.indexOf('React')); //Si devuelve negativo, no se encuentra.

// Include (retorna true o false)
console.log(tweet.includes('JavaScript'));
console.log(product2.includes('React'));
console.log(email.includes('@'));

