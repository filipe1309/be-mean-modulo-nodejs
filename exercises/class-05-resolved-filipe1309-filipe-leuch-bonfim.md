# Node.js - Aula 05 - Exercício
**user:** [filipe1309](https://github.com/filipe1309)  
**autor:** Filipe Leuch Bonfim


## Instale algum gerenciador de versão do Node.js e instale a versão mais atual como padrão, enquanto escrevo é a versão 5.4.0
#### NVM
```
sudo npm install -g nvm
nvm install 5.4.0  
nvm use 5.4.0
nvm alias default 5.4.0
```

## Inicie um projeto novo para essa aula, com o `npm` e instale, salvando no `package.json`:

```
npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg> --save` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
name: (projeto_ex2)
version: (1.0.0) 0.0.1
description: Projeto criado para o exercicio 2 da aula 5 de Node.js
entry point: (index.js)
test command:
git repository:
keywords: nodejs, bemean, webschool
author: Filipe Leuch Bonfim
license: (ISC)
About to write to /home/filipe1309/devel/be_mean/be-mean-modulo-nodejs/src/class05/projeto_ex2/package.json:
```
```js
{
  "name": "projeto_ex2",
  "version": "0.0.1",
  "description": "Projeto criado para o exercicio 2 da aula 5 de Node.js",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "nodejs",
    "bemean",
    "webschool"
  ],
  "author": "Filipe Leuch Bonfim",
  "license": "ISC"
}
```

#### 1 dependência local
##### Comando
```
npm i --save bower
```
##### package.json
```js
"dependencies": {
  "bower": "^1.7.7"
},
```

#### 1 dependência local de desenvolvimento
##### Comando
```
npm i --save-dev socket.io
```
##### package.json
```js
"devDependencies": {
  "socket.io": "^1.4.5"
},
```

#### 1 dependência local opcional
##### Comando
```
npm i --save-optional mocha
```
##### package.json
```js
"optionalDependencies": {
  "mocha": "^2.4.5"
}
```

## Crie e execute um script, via `npm`, que mostre uma mensagem no console com a global, que possui caminho para o diretório atual.
#### script_npm_run_ex03.js
```js
console.log(__dirname);
```
#### package.json
```js
// ...
"scripts": {
  "path_dir_atual": "node script_npm_run_ex03.js"
},
// ...
```
#### Terminal
```
npm run path_dir_atual

> projeto_ex2@0.0.1 path_dir_atual /home/filipe1309/devel/be_mean/be-mean-modulo-nodejs/src/class05/projeto_ex2
> node script_npm_run_ex03.js

/home/filipe1309/devel/be_mean/be-mean-modulo-nodejs/src/class05/projeto_ex2
```

## Cite 5 globais do Node.js e pelo menos 1 exemplo de cada.
#### console
```js
console.log('hello world');
```

#### process
```js
// Arquitetura do sistema
console.log('This processor architecture is ' + process.arch);
```

#### setInterval(cb, ms)
```js
// a cada 1 segundo retorna "My Interval"
setInterval(() => console.log("My Interval"), 1000);
```

#### setTimeout(cb, ms)
```js
var myTimeOut = setTimeout(() => {
  console.log('My TimeOut');
}, 6000);

// Após 6 segundos retorna "My TimeOut"
myTimeOut
```

#### clearTimeout(t)
```js
var myTimeOut = setTimeout(() => {
  console.log('My TimeOut');
}, 6000);

clearTimeout(myTimeOut);

// não retorna nada
myTimeOut
```

## Explique como funciona e de um exemplo de `process`.
O `process` é um objeto global e uma instancia de `EventEmitter`, que contém diversas funções e propriedades sobre o processo que está rodando o Node.js
Exemplo
```js
// Utilização de memória do Node.js em bytes
console.log(process.memoryUsage());

// Saída
{ rss: 22884352, heapTotal: 7523616, heapUsed: 4001696 }
```

## Criar um arquivo
```js
'use strict';

const fs = require('fs');
fs.writeFile("arquivo.txt", "Hello World!!!", 'utf-8', function(err, result) {
  if(err) throw err;
  console.log('==> Arquivo criado!!!');
});

// Saída
//==> Arquivo criado!!!
```

## Ler um arquivo
```js
'use strict';

const fs = require('fs');
fs.readFile("arquivo.txt", 'utf-8', function(err, result) {
  if(err) throw err;
  console.log('==> Arquivo lido: ', result);
});

// Saída
//==> Arquivo lido:  Hello World!!!
```

## Editar conteúdo desse arquivo
```js
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
```

## Deletar arquivo
```js
'use strict';

const fs = require('fs');

fs.unlink("arquivo_renomeado.txt", function(err){
  if (err) throw err;
  console.log("==> Arquivo removido!!!");
});

// Saída
// ==> Arquivo removido!!!
```

## Renomear o arquivo
```js
'use strict';

const fs = require('fs');

fs.rename("arquivo.txt", "arquivo_renomeado.txt", function(err){
  if(err) throw err;
  console.log("==> Arquivo renomeado!!!");
})

// Saída
// ==> Arquivo renomeado!!!
```

## Desafio
Criar um servidor web de arquivos estáticos: .css, .html, .js e etc... UTILIZANDO SOMENTE fs E http
