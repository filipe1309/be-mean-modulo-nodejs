'use strict';

const fs = require('fs');

fs.readFile("arquivo.txt", 'utf-8', function(err, result){
  if (err) throw err;

  var conteudo_editado = result + " - Editado!!!";
  fs.writeFile("arquivo.txt" ,conteudo_editado, "utf-8", function (err) {
    if (err) throw err;
    console.log("==> Arquivo editado!!!");
  });
});

// Saída
// ==> Arquivo editado!!!
