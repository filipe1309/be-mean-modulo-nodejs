/*
Criar uma função que calcula a média de dois valores e
imprima essa média em outra função,
como continuação da execução da mesma
*/

function average(value1, value2, printCallback) {
 if (typeof value1 == "number" && typeof value2 == "number") {
    var result = (value1 + value2)/2;
    return printCallback(null, result);
  } else {
    var error = new Error("informe somente números!!!");
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

average("nome_teste", 2, printCallback);
average(1, 2, printCallback);
