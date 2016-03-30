'use strict';

/*
    2 - Faça, um modulo simples para ler diretórios usando
    modulo FS(fs.readdir), usando o exemplo do código 03,
    esse modulo deve retornar uma Promise.
*/

const readDir = require('./ex2_readdir_promise.js');

function myPromiseAll(arr) {
    return Promise.all(arr)
    .then(result => { return result; })
    .catch(err => { throw err; });
}

myPromiseAll([
    readDir('../class07'),
    readDir('../class02')
])
.then(result => console.log(result))
.catch(err => console.log(err));
