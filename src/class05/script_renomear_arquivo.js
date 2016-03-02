'use strict';

const fs = require('fs');

fs.rename("arquivo.txt", "arquivo_renomeado.txt", function(err){
  if(err) throw err;
  console.log("==> Arquivo renomeado!!!");
})

// Saída
// ==> Arquivo renomeado!!!
