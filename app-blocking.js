//el require pide informacion que se encuentra en el archivo de usuarios, 
//le estamos pidiendo que traiga la funcion de getUsuarioSync
//para comenzar a ejecutar este programa abrimos una terminal de vscode o windows o del D.O.S
//Y abrimos con Node: node + el nombre del programa (app-blocking.js) 
const { getUsuarioSync } = require('./usuarios/usuarios');

console.log('Inicio de programa');
console.time('inicio');  //timer de javaScript


const usuario1 = getUsuarioSync( 1 ); // trae informacion del usuario1, simulamos una peticion a una base de Datos
//de manera bloqueante, es decir sincrona, primero trae la informacion y luego la imprime en consola
console.log('Usuario 1:', usuario1 );


const usuario2 = getUsuarioSync( 2 );
console.log('Usuario 2:', usuario2 );



console.log('Fin de programa');
console.timeEnd('inicio'); //indica cuanto tiempo tardó en ejecutar el programa