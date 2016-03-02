'use strict';

const fs = require('fs');

fs.unlink("arquivo_renomeado.txt", function(err){
  if (err) throw err;
  console.log("==> Arquivo removido!!!");
});

// Saída
// ==> Arquivo removido!!!
