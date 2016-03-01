# be-mean-modulo-nodejs

Repositório criado para armazenar os exercicios do módulo de Node.js do [Workshop de BE MEAN - Instagram](https://github.com/Webschool-io/be-mean-instagram), da [Webschool.io](https://github.com/Webschool-io)

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
 - [Resolução do exercício](https://github.com/filipe1309/be-mean-modulo-nodejs/blob/master/exercises/class-02-resolved-filipe1309-filipe-leuch-bonfim.md)

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

##### Status Codes
- 3 dígitos
- 1XX Informacional
- 2XX Sucesso
- 3XX Redirecionamento
- 4XX Erro do cliente
- 5XX Erro do servidor

##### createServer
- inicia um servidor HTTP
- 2 parâmetros
  - request
  - response

###### hello-world.js
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

###### hello-http.js
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

###### index.html
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
###### hello-html.js.
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

##### Rotas
###### server.js
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

###### Nodemon
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
###### POSTMAN
- extensão do crhome que será utilizado para testar a API implementada no curso
- GET = http://localhost:3000/api/v1

##### QueryString
###### hello-querystring.js
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

### Aula 03
#### [get, request, post, put ](https://github.com/Webschool-io/be-mean-instagram/blob/master/Apostila/module-nodejs/pt-br/http.md)

 - [Slides](https://docs.google.com/presentation/d/1_CHh_fTkzgxAnxB3MlZ5WRhTqMLViMk__jkCZiZ3IMA/edit#slide=id.gdb157531c_0_214)
 - [Vídeo](https://www.youtube.com/watch?v=TpNofR3Axsk)
 - [Descrição do exercício](https://github.com/Webschool-io/be-mean-instagram/blob/master/Apostila/classes/nodejs/exercises/class-03.md)
 - [Resolução do exercício](https://github.com/filipe1309/be-mean-modulo-nodejs/blob/master/exercises/class-03-resolved-filipe1309-filipe-leuch-bonfim.md)

#### Resumo:

##### Diferença entre get e request
 - no request deve ser passado o `method(GET, POST,..)` e no get isto é setado automaticamente

##### get
###### http.get
```js
http.get({
  hostname: 'localhost',
  port: 80,
  path: '/',
  agent: false  // criar um novo agente apenas para este pedido
}, function (res) {
  // Faça algo com res
})
```
###### http-get-localhost-querystring.js
http.get
- Parâmetros = (JSON_de_configuração, função_anonima_executada_apos_response)
- seta o valor do verbo para **GET**
- chama o **req.end()** automaticamente
```js
'use strict';

const http = require('http');

http.get({
  hostname: 'localhost',
  path: '/user?name=Suissa&teacher=true&age=31',
  port: 3000,
  agent: false
}, (response) => { //function (response) {
   let body = '';
    console.log('STATUS: ' + response.statusCode);
    console.log('HEADERS: ' + JSON.stringify(response.headers));
    response.on('data', function(data) {
      body += data;
    });

    response.on('end', function() {
      console.log('Resposta: ', body);
    });
});
```
###### http.IncomingMessage
- response é uma instância de http.IncomingMessage
- https://nodejs.org/api/http.html#http_class_http_incomingmessage
- é criado por **http.Server** ou **http.ClientRequest**
- passado como o primeiro argumento para o **request** e **response**
- pode ser usado para acessar a reposta de staus, os cabeçalhos e os dados em si
- implementa a interface de `Readble Stream`, que fornce eventos como:
 - **close**: evento que ocorre quando uma stream é fechada
 - **data**: evento que recebe os dados do `Stream`
 - **end**: evento que ocorre quando não há mais dados para serem lidos
 - **error**: evento emitido quando acontece algum erro

##### request
###### JSON de configuração
```js
const options = {
  host: 'api.redtube.com'
, path: '/?data=redtube.Videos.searchVideos&search=Sasha%20Gray'
};
```
###### callback
```js
function callback(res) {
  console.log('STATUS: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));

  let data = '';

  res.setEncoding('utf8');
  res.on('data', (chunk) =>  {
    data += chunk;
  });
  res.on('end', () => {
    console.log('Dados finalizados: ', data)
  })
}
```
###### JSON
 - JSON.stringify => objeto -> string
 - JSON.parse => string -> objeto

###### Passando JSON e callback para o request
```js
const req = http.request(options, callback);
```
###### error + end
```js
req.on('error', (e) =>  {
  console.log('ERROOOO: ' + e.message);
});
req.end();
```

###### http-request.js
```js
'use strict';

const http = require('http');

const options = {
  host: 'api.redtube.com'
, path: '/?data=redtube.Videos.searchVideos&search=Sasha%20Gray'
};

function callback(res) {
  console.log('STATUS: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));

  let data = '';

  res.setEncoding('utf8');
  res.on('data', (chunk) =>  {
    data += chunk;
  });
  res.on('end', () => {
    console.log('Dados finalizados: ', data)
  })
}

const req = http.request(options, callback);
req.on('error', (e) =>  {
  console.log('ERROOOO: ' + e.message);
});
req.end();
```
###### CORS Server
- http://cors-server.getup.io/


##### Create - POST
- http://webschool-io.herokuapp.com/
- [http-request-post.js](https://github.com/Webschool-io/be-mean-instagram/blob/master/Apostila/module-nodejs/src/http/http-request-post.js)
- `queryString` irá *parsear* os dados no formato `QueryString`
- `QueryString` = padrão que o HTTP utiliza para transporte de informações
 - cliente -> servidor
 - cliente -> cliente
- `queryString` padrão:
 - **nome_da_variavel=conteudo da variavel**, separados por **&**
 - querystring.stringify() =>  **name=Jean%20Nascimento&type=professor**

###### JSON de configuração
 ```js
 const options = {
         host: 'webschool-io.herokuapp.com'
       , path: '/api/pokemons'
       , headers: {
           'Content-Type': 'application/x-www-form-urlencoded'
         , 'Content-Length': postData.length
         }
       };
 ```
###### 'Content-Type': 'application/x-www-form-urlencoded'
Diz a forma que a informação é enviada, nesse caso como `querystring`

###### 'Content-Length': postData.length
Diz qual é o tamanho(bytes) da informação enviada



### Aula 04
#### [Callbacks](https://github.com/Webschool-io/be-mean-instagram/tree/master/Apostila/module-nodejs/src/callbacks), [FileSystem](https://github.com/Webschool-io/be-mean-instagram/tree/master/Apostila/module-nodejs/src/filesystem)

 - [Slides](https://docs.google.com/presentation/d/1_CHh_fTkzgxAnxB3MlZ5WRhTqMLViMk__jkCZiZ3IMA/edit#slide=id.gdb1ce2528_0_4)
 - [Vídeo](https://www.youtube.com/watch?v=f9SE7Y0qYEg)
 - [Descrição do exercício](https://github.com/Webschool-io/be-mean-instagram/blob/master/Apostila/classes/nodejs/exercises/class-04.md)
 - [Resolução do exercício](https://github.com/filipe1309/be-mean-modulo-nodejs/blob/master/exercises/class-04-resolved-filipe1309-filipe-leuch-bonfim.md)

#### Resumo:

##### Callbacks
Para estendermos a execução de uma função, basta passar uma outra função como parâmetro. também conhecida como `callback`.
- funções em JS são tratadas como objetos
- `continuation passing style`
- setTimeout -> assync
- setInterval -> assync
- callback aninhado força a ordem da execução de funções
- CUIDADO com o `Callback HELL!!!!!` = muitos callbacks aninhados
```js
// assinatura de uma callback
function callback(err, result) {};

sayName('teste', callback);
```
- array `arguments` para acessar os parâmetros de uma função.


##### FileSystem
- Módulo nativo
- mpódulo para manipular o sistema de arquivos
- writeFile
```js
// Síncrona
var write = fs.writeFileSync(path_do_arquivo, conteudo);

// Assíncrona
fs.writeFile(path_do_arquivo, conteudo, callback);
```
- Stream de arquivos
```js
// Ex writeStream
var options = {defaultEnconding: 'utf8'};
var writeStream = fs.createWriteStream(path_do_arquivo, options);
writeStream.write(conteudo);
```
- mkdir
```js
// Assíncrona
fs.mkdir(path_do_diretorio, callback);

// Síncrona
fs.mkdirSync(path_do_diretorio, callback);

```
- open
```js
// Assíncrona
// retorna o descritor do arquivo
fs.open(path_do_arquivo, modo, callback)
```
- readdir
```js
// Assíncrona
// retorna os arquivos em um array
fs.readdir(path_do_diretorio, callback)
```
- readFile
```js
// Assíncrona
fs.readFile(path_do_arquivo, callback)

// Síncrona
var fileSync = fs.readFileSync(path_do_arquivo, modo)
```
- rename
```js
// Assíncrona
fs.rename(path, novo_path, callback)
```


### Aula 05 - Parte 1
#### [npm](https://github.com/Webschool-io/be-mean-instagram/tree/master/Apostila/module-nodejs/src/npm), [Globals](https://github.com/Webschool-io/be-mean-instagram/tree/master/Apostila/module-nodejs/src/globals), [Process]()

 - [Slides](https://docs.google.com/presentation/d/1_CHh_fTkzgxAnxB3MlZ5WRhTqMLViMk__jkCZiZ3IMA/edit#slide=id.gebeab41d1_0_370)
 - [Vídeo](https://www.youtube.com/watch?v=Kg4RovUQWeg)
 - [Descrição do exercício](https://github.com/Webschool-io/be-mean-instagram/blob/master/Apostila/classes/nodejs/exercises/class-05.md)
 - [Resolução do exercício](https://github.com/filipe1309/be-mean-modulo-nodejs/blob/master/exercises/class-05-resolved-filipe1309-filipe-leuch-bonfim.md)

#### Resumo:
##### NPM
- Gerenciador de pacotes do Node.js
- para o gerenciamento utiliza um arquivo obrigatório JSON chamado **package.json**
- **package.json** contem:
 - \*nome
  - < 214 caracteres,
  - não começar com `.` ou `_`
  - novos *packages* não podem ter letras maiúsculas no nome
  - não pode contem quaisquer caracteres *non-URL-safe*
  - Dicas:
   - não usar o mesmo nome de um módulo do core
   - não colocar "js" ou "node"
   - curto e descritivo
   - verificar se já existe (npmjs)[https://www.npmjs.com/]
 - \*versão
 - descrição
 - autor
 - licença
 - dependências
 - outros
 * obrigatórios, formam um identificador único (nome + versão), e a cada novo `release` recomenda-se atualizar a versão.

- nunca enviar node_modules (add no **.gitignore**)!!! ao invés utilizar as depedências listas no **package.json**, através do comando **npm install**
- além do npm, exitem outros dois gerenciadores de versões para o node
 - n
 - nvm

###### Comandos npm
####### npm init
utilizado qunado um projeto é iniciado
```
mkdir pokemons-api
cd pokemons-api
npm init
```
####### npm install
Instala algum módulo/pacote e suas dependências
```
npm install --global ou -g
```
######## Instalar globalmente -g

```
npm install -g gulp
```
Além disto intalar globalmente:
- nodemon;
- mocha;
- express-generator;
- e outros.

######## Instalar localmente
```
npm install nome_modulo
```
Deste modo, o módulo não é adicionado na lista de dependência do **package.json**, a não ser que se use a opção **--save**
```
npm install --save ou -S

npm i --save mongoose
```
no **package.json** aparecerá:
```js
"dependencies": {
   "mongoose": "^4.3.3"
 }
 ```
Para instalar uma versão específica
```
npm i --save modulo@versão
```
######## Formas de esppecificar a versão do módulo
- ~versão "Equivalente a versão"
- ^versão "Compatível com a versão"
- versão Precisa ser a versão exata
- >versão Precisa ser maior que a versão
- >=versão Precisa ser maior ou igual que a versão
- < versão Precisa ser menor que a versão
- <=versão Precisa ser menor ou igual que a versão
- 1.2.x 1.2.0, 1.2.1, etc., mas não 1.3.0

Exemplo faixa de versões:
```
npm i mongoose@">=4.1.0 <4.3.0"
```

######## instalar as depêndencias
```
npm install --production
```

######## devDependencies
Dependências apenas para o módo de desenvolvimento
Instalar módulo na **devDependencies**:
```
npm install --save-dev ou -D
```
Instalar apenas as **devDependencies**:
```
npm install --dev
```

######## optionalDependencies
São dependências opcionais que não devem interferir na execução do projeto.
```
npm install --optional ou -O
```

####### npm run
```js
//script.js
console.log("Rodei!");
```
```js
"scripts": {
    "roda": "node script.js"
  },
```
```
npm run roda
```
######## Scripts nativos
- preversion: Roda ANTES do comando version;
- version: Execute para modificar sua versão;
- postversion: Roda DEPOIS de rodar o version;
- pretest: Roda ANTES do test;
- test: Roda o comando que executa os testes;
- posttest: Roda DEPOIS de executar os testes;
- prestop: Roda ANTES do comando stop;
- stop: Roda o script caso definido;
- poststop: Roda DEPOIS do comando stop;
- prestart: Roda ANTES do comando start;
- start: Executa o comando definido, normalmente utilizado para levantar o servidor;
- poststart: Roda DEPOIS do comando start;
- prerestart: Roda ANTES do comando restart;
- restart: Reinicia o script;
  - prerestart
  - prestop
  - stop
  - poststop
  - restart
  - prestart
  - start
  - poststart
  - postrestart
- postrestart: Roda DEPOIS do comando restart.

####### Globals
- Não tem compartilhamento global de escopo
- + secure development
- Disponíveis em todos os módulos
- Not require();

####### Process
- Instancia de EventEmitter



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
