'use strict';

const fs = require('fs');
fs.writeFile("arquivo.txt", "Hello World!!!", 'utf-8', function(err, result) {
  if(err) throw err;
  console.log('==> Arquivo criado!!!');
});

// Saída
//==> Arquivo criado!!!
