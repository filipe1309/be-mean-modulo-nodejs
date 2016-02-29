/*
Criar uma função que calcula a soma de dois valores e
passe o resultado em uma outra função e imprima-o,
de acordo com o padrão apresentado em aula
*/

function sumValues(value1, value2, printCallback) {
 if (typeof value1 == "number" && typeof value2 == "number") {
    var result = value1 + value2;
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

sumValues("nome_teste", 2, printCallback);
sumValues(1, 2, printCallback);
