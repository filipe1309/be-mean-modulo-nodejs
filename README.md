# be-mean-modulo-nodejs

Repositório criado para armazenar os exercicios do módulo de Mongodb do [Workshop de BE MEAN - Instagram](https://github.com/Webschool-io/be-mean-instagram), da [Webschool.io](https://github.com/Webschool-io)

### Aula 01
#### [Explicação sobre o node](https://github.com/Webschool-io/be-mean-instagram/blob/master/Apostila/module-nodejs/pt-br/theory.md), [Callback](https://github.com/Webschool-io/be-mean-instagram/blob/master/Apostila/module-nodejs/pt-br/callback.md), [Instalação](https://github.com/Webschool-io/be-mean-instagram/blob/master/Apostila/module-nodejs/pt-br/installation.md)

 - [Slides](https://docs.google.com/presentation/d/1_CHh_fTkzgxAnxB3MlZ5WRhTqMLViMk__jkCZiZ3IMA/edit?pli=1#slide=id.p)
 - [Vídeo](https://www.youtube.com/watch?time_continue=91&v=OgfO37F6mdg)
 - [Descrição do exercício](https://github.com/Webschool-io/be-mean-instagram/blob/master/Apostila/classes/nodejs/exercises/class-01.md)
 - [Resolução do exercício](https://github.com/filipe1309/be-mean-modulo-nodejs/blob/master/exercises/class-01-resolved-filipe1309-filipe-leuch-bonfim.md)

#### Resumo:
```
    Node.js -> é uma plataforma
        -> é um interpretador de JS que funciona do lado do servidor
        -> criado a partir do V8 (c++) que é o motor js do chrome
        -> roda com outras apis, ex: Libuv
        -> plataforma de execução de apps js no lado do servidor

        V8 -> "compila" código js para o código nativo da máquina, para depois executá-lo

        Single Thread
            -> é possível criar outras threads, mas por default o node é single

        Event Loop -> while(true)
            -> fila **infinita** que recebe todos os eventos do node.js
            gerenciamento
            assíncrono
            callback

        Libuv = libev (Event Loop) + libeio (I/O Assíncrono) + DNS (C-Ares)
            api responsável pelo gerenciamento assíncrono do node

        I/O Assíncrono
            -> por default, qualquer função do node é assíncrona, e após seu termino
            podes utilizar outra função conhecida como callback
            -> o processo não fica parada aguardando sua finalização no event loop

            Ex
                Restaurante síncrono
                    garçom -> 1ª mesa
                    garçom -> avisa cozinha, e espera o pedido
                    garçom -> entrega o pedido da 1ª mesa
                    garçom -> 2ª mesa
                    ...

                Restaurante assíncrono
                    garçom -> 1ª mesa
                    garçom -> avisa cozinha
                    garçom -> 2ª mesa
                    garçom -> avisa cozinha
                    cozinha -> avisa que o pedido da 1ª mesa está pronto (sino)
                    garçom -> entrega o pedido da 1ª mesa
                    ...

            Thread Pool
                -> tamanho fixo
                -> ~ array bidimentsional [fila de tasks, fila de tasks completadas]
                -> as threads no nodejs são "idle threads" responsável por um I/O, ou seja elas são pré-executadas, e ficam aguardando uma task
                -> 1 tasks por thread (idle, i/o) da thread pool
                -> proporciona menor gasto de memória

            Event Driven
                -> orientação a eventos
                -> GUI Pattern
                -> simplificam a programação assíncrona
                -> diminui o aninhamento de callback
                -> eventos(emit) podem ser emitidos (para um listener(on)) quando uma tarefa esta pronta
                -> callback pattern
                -> high-order functions (programação funcional)

            Use Case - PayPal
              -> 2013
              -> java --> nodejs
              -> cracken
              -> tempo de construção: 2 vezes mais rápido, com menos pessoas
              -> 33% menos linhas de códigp
              -> 40% menos arquivos
              -> dobro de requests/segundo em comparação com java
              -> 35% mais rápido tempo médio de resposta por página


            Instalação
            -> node v5
            -> build essential

            yum:
                sudo yum install nodejs npm --enablerepo=epel
                http://tecadmin.net/upgrade-nodejs-via-npm/

```
#### Exemplo
```javascript
node
> var arr = [{_id: 1}, {_id: 2}, {_id: 3}]
undefined
> arr
[ { _id: 1 }, { _id: 2 }, { _id: 3 } ]
> function getObject(id) { var obj = {order: id._id}; arr.push(obj) }
undefined
> getObject
[Function: getObject]
> function getObject(id) { var obj = {order: id._id}; console.log('id', id); console.log('obj', obj); arr.push(obj) }
undefined
> arr.forEach(function(item) { getObject(item); })
id { _id: 1 }
obj { order: 1 }
id { _id: 2 }
obj { order: 2 }
id { _id: 3 }
obj { order: 3 }
undefined
> arr
[ { _id: 1 },
  { _id: 2 },
  { _id: 3 },
  { order: 1 },
  { order: 2 },
  { order: 3 } ]
> var arr = [{_id: 1}, {_id: 2}, {_id: 3}]
undefined
> arr.forEach(getObject)
id { _id: 1 }
obj { order: 1 }
id { _id: 2 }
obj { order: 2 }
id { _id: 3 }
obj { order: 3 }
undefined
> arr
[ { _id: 1 },
  { _id: 2 },
  { _id: 3 },
  { order: 1 },
  { order: 2 },
  { order: 3 } ]
```

### Aula 02
#### [HTTP, createServer, Methods, Status Codes, Rotas](https://github.com/Webschool-io/be-mean-instagram/blob/master/Apostila/module-nodejs/pt-br/http.md)

 - [Slides](https://docs.google.com/presentation/d/1_CHh_fTkzgxAnxB3MlZ5WRhTqMLViMk__jkCZiZ3IMA/edit#slide=id.gec2cb278a_0_23)
 - [Vídeo](https://www.youtube.com/watch?v=mDtNcosGgiU)
 - [Descrição do exercício](https://github.com/Webschool-io/be-mean-instagram/blob/master/Apostila/classes/nodejs/exercises/class-02.md)
 - [Resolução do exercício]()

#### Resumo:
##### HTTP
  - nativo
  - require("http")
  - requisição -> cabeçalho

  - Métodos
    - GET - busca/requisita uma representação do recurso especificado
    - HEAD - retorna os cabeçalhos de uma resposta
    - POST = [Cria, utilizado quando recurso não existe] - envia uma entidade e requisita que o servidor aceite-a como subordinada do recurso identificado pela URI.
    - PUT =  [Cria e modifica, utiliado quando recurso existe]- requisita que uma entidade seja armazenada embaixo da URI forncedida.
    - DELETE - Apaga o recurso especificado.
    - TRACE - "traceroute da requisição" - Ecoa de volta a requisição recebida para que o cliente veja se houveram mudanças e adições feitas por servidores intermediários.
    -  OPTIONS - retorna os métodos HTTP que o servidor suporta para a URL especificada.
    - CONNECT - Converte a requisição de conexão para um túnel TCP/IP transparente, usualmente para facilitar comunicação criptografada com SSL (HTTPS) através de um proxy HTTP não criptografado.
    - PATCH - Usado para aplicar modificações parciais a um recurso.
    - CRUD do HTTP = [C = POST][R = GET][U = PUT][D = DELETE]

#### Status Codes
- 3 dígitos
- 1XX Informacional
- 2XX Sucesso
- 3XX Redirecionamento
- 4XX Erro do cliente
- 5XX Erro do servidor

#### createServer
- inicia um servidor HTTP
- 2 parâmetros
  - request
  - response

##### hello-world.js
```js
var http = require('http');

http.createServer(function(request, response){
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Be MEAN");
  response.end();
}).listen(3000, function(){
  console.log('Servidor rodando em localhost:3000');
});

// OU, utlizando uma variável para o servidor

var http = require('http');

var server = http.createServer(function(request, response){
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Be MEAN");
  response.end();
});

server.listen(3000, function(){
  console.log('Executando Servidor HTTP');
});

```

##### hello-http.js
```js
var http = require('http');

http.createServer(function(request, response){
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("<h1>Be MEAN</h1>");
  response.end();
}).listen(3000, function(){
  console.log('Servidor rodando em localhost:3000');
});
```

##### index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Be MEAN - Instagram</title>
</head>
<body>
  <h1>Be MEAN - Instagram - html</h1>
</body>
</html>
```
##### hello-html.js.
```js
var http = require('http')
  , fs = require('fs')
  , index = fs.readFileSync('index.html');

http.createServer(function(request, response){
  response.writeHead(200, {"Content-Type": "text/html"});
  // end + write
  response.end(index);
}).listen(3000, function(){
  console.log('Servidor rodando em localhost:3000');
});
```

#### Rotas
##### server.js
```js
'use strict';

var date = (new Date()).toJSON();

/* Adicionado JSON  de resposta */
const http = require('http')
    , SUCCESS = {
        version: '1.0'
      , name: 'Be MEAN'
      , returned_at: date
      }
    , ERROR = {
        message: "Não encontrado!"
      }
    ;

http.createServer(function(req, res){
  if(req.url === '/api/v1') {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write(JSON.stringify(SUCCESS));
  }
  else {
    res.writeHead(404, {'Content-Type': 'application/json; charset=utf-8'});
    res.write(JSON.stringify(ERROR));
  }
  res.end();
}).listen(3000, function(){
  console.log('Servidor rodando em localhost:3000');
});
```

##### Nodemon
- evita derrubar o servidor a cada atualização
```
npm i -g nodemon

// Levantando o servidor com o nodemon
nodemon server.js
6 Dec 16:05:26 - [nodemon] v1.3.8
6 Dec 16:05:26 - [nodemon] to restart at any time, enter `rs`
6 Dec 16:05:26 - [nodemon] watching: *.*
6 Dec 16:05:26 - [nodemon] starting `node server.js`
Servidor rodando em localhost:3000
```
##### POSTMAN
- estensção do crhome que será utilizado para testar a API implementada no curso
- GET = http://localhost:3000/api/v1

#### QueryString
##### hello-querystring.js
```js
var http = require('http')
  , url = require('url');

http.createServer(function(request, response){

  var result = url.parse(request.url, true);

  response.writeHead(200, {'Content-Type': 'text/html'});
  response.write('<html><body>');
  response.write('<h1>Query string</h1>');
  response.write('<ul>');

  for(var key in result.query){
    response.write('<li>'+key+' : '+result.query[key]+'</li>');
  }
  response.write('</ul>');
  response.write('</body></html>');
  response.end();
}).listen(3000, function(){
  console.log('Servidor rodando em localhost:3000');
});
```


### Links importantes:
- NodeJS
 - [Chat NodeJS - Rocket](http://be-mean.rocket.chat/channel/node)
 - [Repositório de exercícios](https://github.com/Webschool-io/be-mean-instagram-nodejs-exercises)


- Geral
 - [Chat Geral - Rocket](http://be-mean.rocket.chat/channel/general)
 - [Class Guidelines](https://github.com/Webschool-io/be-mean-instagram/blob/master/class-guidelines.md)
 - [Be Mean - Code Style](https://github.com/Webschool-io/be-mean-instagram/blob/master/Apostila/module-nodejs/pt-br/code-style.md)
 - [Como entregar o exercício](https://github.com/Webschool-io/be-mean-instagram/wiki/Exerc%C3%ADcios)
 - [Dagora - BE MEAN](http://dagora.net/be-mean/)
 - [EAD - Dagora](http://aprenda.dagora.net/login/)
 - [Facebook - Webschool.io - Workshop Be MEAN](https://www.facebook.com/groups/workshop.be.mean/)
 - [Material de estudos - Pré-requisito](http://aprenda.dagora.net/discussao/1/1/material-de-estudos-como-pre-requisitos/)
 - [Wiki](https://github.com/Webschool-io/be-mean-instagram/wiki)
