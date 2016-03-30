'use strict';
/*
    1 - Crie um função que entenda de EventEmitter,
    nela crie um method, um chamado init,
    ele devera ser chamado toda vez que a sua função foi iniciada.
    Use o código 04 Como base.(use ele no prototype).
*/
const BazingaEmitter = require( './ex1_init_event.js' );
const myBazingaEmitter = new BazingaEmitter({ text: 'Bazinga!!!'});

myBazingaEmitter.init();
