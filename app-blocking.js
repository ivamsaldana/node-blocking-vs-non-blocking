//el require pide informacion que se encuentra en el archivo de usuarios, 
//le estamos pidiendo que traiga la funcion de getUsuarioSync, esta funcion será usada varias veces a lo largo del programa
//para comenzar a ejecutar este programa abrimos una terminal de vscode o windows o del D.O.S
//Ejecutamos el programa con Node: node + el nombre del programa (app-blocking.js) 
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

//esta es una ejecucion BLOQUEANTE, en el ejemplo de NO BLOQUEANTE, hay dos argumentos, el segundo es un callback, que es una funcion como argumento de otra funcion
//la diferencia entre blocking y no blocking es el modo de ejecucion, ver codigo en carpeta usuarios.js
//El ciclo while es BLOQUEANTE, porque realiza procedimientos hasta que se cumpla la condicion
//la segunda funcion del archivo usuarios.js es NO BLOCKING
