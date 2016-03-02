'use strict';

const fs = require('fs');
fs.readFile("arquivo.txt", 'utf-8', function(err, result) {
  if(err) throw err;
  console.log('==> Arquivo lido: ', result);
});

// Saída
//==> Arquivo lido:  Hello World!!!
