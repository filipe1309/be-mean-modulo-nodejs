/*
Criar uma função com uma entrada para nome e
imprimir esta entrada em uma outra função,
como continuação da execução da mesma
*/

function readName(name, printCallback) {
  if (typeof name == "string") {
    return printCallback(null, name);
  } else {
    var error = new Error("informe uma string!!!");
    return printCallback(error, null);
  }
}


function printCallback(err, result) {
  if (err) {
    console.log(err);
  } else {
    console.log(result)
  }
}

readName("nome_teste", printCallback);
readName(1, printCallback);
