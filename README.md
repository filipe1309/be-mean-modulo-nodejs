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
#### [npm](https://github.com/Webschool-io/be-mean-instagram/tree/master/Apostila/module-nodejs/src/npm)

 - [Slides](https://docs.google.com/presentation/d/1_CHh_fTkzgxAnxB3MlZ5WRhTqMLViMk__jkCZiZ3IMA/edit#slide=id.gebeab41d1_0_370)
 - [Vídeo](https://www.youtube.com/watch?v=Kg4RovUQWeg)
 - [Descrição do exercício](https://github.com/Webschool-io/be-mean-instagram/blob/master/Apostila/classes/nodejs/exercises/class-05.md)
 - [Resolução do exercício](https://github.com/filipe1309/be-mean-modulo-nodejs/blob/master/exercises/class-05-resolved-filipe1309-filipe-leuch-bonfim.md)

#### Resumo:
##### NPM
- Gerenciador de pacotes do Node.js
- para o gerenciamento utiliza um arquivo obrigatório JSON chamado **package.json**
- **package.json** contém:
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

- nunca enviar o `node_modules`!!! ao invés utilizar as depedências listas no **package.json**, através do comando **npm install**, e adicionar o `node_modules` no **.gitignore**
- além do npm, exitem outros dois gerenciadores de versões para o Node.js
 - n
 - nvm

###### Comandos npm
####### npm init
utilizado quando um projeto é iniciado, responsável por criar o **package.json**
```
mkdir pokemons-api
cd pokemons-api
npm init
```

Exemplo de um **package.json**:
```js
{
  "name": "pokemons-api",
  "version": "0.0.1",
  "description": "API para nossos Pokemons",
  "main": "index.js",
  "scripts": {
￼
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "pokemons",
    "node",
    "mongodb",
    "webschool"
  ],
  "author": "Filipe",
  "license": "WTFPL"
}
```
####### npm install
Instala algum módulo/pacote e suas dependências
######## Instalar globalmente -g ou --global
```
npm install --global ou -g
```

Instalando o gulp globalmente
```
sudo npm install -g gulp
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
Deste modo, o módulo não é adicionado na lista de dependência do **package.json**, a não ser que se use a opção **--save** ou **-S**:
```
npm install --save ou -S
```

Exemplo
```
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

######## Formas de especificar a versão do módulo
- ~versão "Equivalente a versão"
- ^versão "Compatível com a versão"
- versão Precisa ser a versão exata
- >versão Precisa ser maior que a versão
- >=versão Precisa ser maior ou igual que a versão
- < versão Precisa ser menor que a versão
- <=versão Precisa ser menor ou igual que a versão
- 1.2.x 1.2.0, 1.2.1, etc., mas não 1.3.0

Exemplo de faixa de versões:
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
Exemplo
```
npm install --save-dev jasmine
```
no **package.json** aparecerá:
```js
"devDependencies": {
  "jasmine": "~2.4.1"
}
```
######## optionalDependencies
São dependências opcionais que não devem interferir na execução do projeto.
```
npm install --optional ou -O
```
Exemplo
```
npm i colors --save-optional
```
no **package.json** aparecerá:
```js
"optionalDependencies": {
  "colors": "~1.1.2"
}
```

####### npm run
- Executa scripts
- Pode ser utilizado para automatizar tarefas
```js
//script.js
console.log("Rodei!");
```
Adicionar no **package.json**
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

Exemplo
```
npm start
```

### Aula 05 - Parte 2
#### [Globals](https://github.com/Webschool-io/be-mean-instagram/tree/master/Apostila/module-nodejs/src/globals), Process

 - [Slides](https://docs.google.com/presentation/d/1_CHh_fTkzgxAnxB3MlZ5WRhTqMLViMk__jkCZiZ3IMA/edit#slide=id.gebeab41d1_0_172)
 - [Vídeo](https://www.youtube.com/watch?v=DD1XKyaq9NE)
 - [Descrição do exercício](https://github.com/Webschool-io/be-mean-instagram/blob/master/Apostila/classes/nodejs/exercises/class-05.md)
 - [Resolução do exercício](https://github.com/filipe1309/be-mean-modulo-nodejs/blob/master/exercises/class-05-resolved-filipe1309-filipe-leuch-bonfim.md)

#### Resumo:
####### Globals
- Não tem compartilhamento global de escopo
- + secure development
- Disponíveis em todos os módulos
- Não precisa de `require()`;

Exemplos
```js
'use strict';

console.log(__dirname);
console.log(__filename);

var buff = new Buffer('Hello, world!');
console.log(buff.toString()); // Hello, world!

const time = setInterval(() => console.log("hello async"), 1000); // syntax de arrow function
setTimeout(() => {
	clearInterval(time); // 4 X hello async
}, 5000);
// clearTimeout
```

####### Process
- Módulo global
- Instancia de `EventEmitter`: emite eventos
Exemplos
```js
'use strict';

const http = require('http');
process.nextTick(() => { // Espera o proximo loop do Event IO
	console.log('Eu sou um async');
});

console.log(process.execPath); // path do node
console.log(process.cwd()); // dir atual
console.log(process.pid); // pid do node

let server = http.createServer((req, res)=>{
});


server.listen(3000, () => {
	console.log('I am on');
});
process.on('SIGINT', () => {
	console.log('\teu sai caraa!');
	process.exit(0);
});
```

### Aula 06 - Parte 1/3
#### [Mongoose](https://github.com/Webschool-io/be-mean-instagram/tree/master/Apostila/module-nodejs/src/mongoose)

 - [Slides](https://docs.google.com/presentation/d/1_CHh_fTkzgxAnxB3MlZ5WRhTqMLViMk__jkCZiZ3IMA/edit#slide=id.gdb1ce2528_0_8)
 - [Vídeo](https://www.youtube.com/watch?v=O8odFa3dl-k)

#### Resumo:
##### Mongoose
- proporciona `schemas` para o MongoDb
- ODM - Object Document Mapper (tipo um ORM)
- `schema` no mongoose
 - é o esqueleto da coleção
 - é o objeto onde são definidos os campos da coleção com seus tipos, atributos e validações


**Importando o módulo do Mongoose**
```js
const mongoose = require('mongoose');
```

**conectando no MongoDb**
```js
mongoose.connect('mongodb://localhost/be-mean-instagram');
```

**criação do `schema`**
```js
const Schema = mongoose.Schema;
// Criação do Schema
const pokemonSchema = new Schema({
 name:  String,
 description: String,
 type:   String,
 attack:   Number,
 defense:   Number,
 height:   Number
});
```
###### connect
**Conexão**
```js
var dbURI = 'mongodb://localhost/be-mean-instagram';

mongoose.connect(dbURI);
```

**Eventos**
```js
mongoose.connection.on('connected', function () {
  console.log('Mongoose default connection open to ' + dbURI);
});
mongoose.connection.on('error',function (err) {
  console.log('Mongoose default connection error: ' + err);
});
mongoose.connection.on('disconnected', function () {
  console.log('Mongoose default connection disconnected');
});
mongoose.connection.on('open', function () {
  console.log('Mongoose default connection is open');
});
```

**Fecha a conexão com o MongDb, caso o Node.js seja finalizado**
```js
process.on('SIGINT', function() {
  mongoose.connection.close(function () {
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});
```

###### default
**adicionando o campo created_at, com a data atual como default**
```js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/be-mean-instagram');
const Schema = mongoose.Schema;
const _schema = {
  name:  String,
  description: String,
  type:   String,
  attack:   Number,
  defense:   Number,
  height:   Number,
  created_at: { type: Date, default: Date.now }
}

const pokemonSchema = new Schema(_schema);

const data = {name: 'Suissamon'};

var Model = mongoose.model('pokemons', pokemonSchema);
var poke = new Model(data);
poke.save(function (err, data) {
  if (err) return console.log('ERRO: ', err);
  console.log('Inseriu: ', data)
})
```

**Saída**
```js
Inseriu:  { created_at: Sat Mar 05 2016 22:37:49 GMT-0300 (BRT),
  _id: 56db89ed4e0194cc50f23242,
  name: 'Suissamon',
  __v: 0 }
```

###### Sintaxe do campo do `Schema`
campo: tipo == campo: {type: tipo}  
Exemplo name: String == name: {type: String}

###### Tipos
- String
 - Number é convertido para String
- Number
 - positivos, negativos, inteiros, decimais e frações
- Date
 - Date.now é executado quando o objeto/model for criado, já no Date.now() todos os objetos teriam o mesmo valor
- Buffer
 - utilizado para salvar arquivos e retorná-los na forma de `buffer` (`binary` no MongoDb)
 - utilizado para dados binários (imagens, vídeos, ...)
- Boolean
- Mixed
 - Virtualmente aceita qualquer tipo
 - Schema.Types.Mixed
- ObjectId
 - campo importante para fazer ligações(relacionamentos) entre coleções
 - Schema.Types.ObjectId
- Array
 - Schema.Types.Array cria um array para cada elemento contido no campo.
 - a forma mais utilizada é [tipo]. Ex: [String]

###### Populate
será o responsável por fazer a busca pelos **_ids** especificados no campo com **Schema.Types.ObjectId**, utilizando o atributo `ref` para selecionar a coleção.


###### `__v`
- adicionado automaticamente quando um documento novo é inserido
- tem a função de gerenciar, internamente, a versão de cada documento caso haja alguma alteração concorrente

### Aula 06 - Parte 2/3
#### [Mongoose](https://github.com/Webschool-io/be-mean-instagram/tree/master/Apostila/module-nodejs/src/mongoose)

 - [Slides](https://docs.google.com/presentation/d/1_CHh_fTkzgxAnxB3MlZ5WRhTqMLViMk__jkCZiZ3IMA/edit#slide=id.gfd3afa4fe_0_412)
 - [Vídeo](https://www.youtube.com/watch?v=02a_lo_KLwU)

#### Resumo
###### Validação
- Validação é definida no tipo do campo, no `Schema`;
- Validação é uma peça interna do *Middleware*;
- Validação ocorre quando um documento tenta ser salvo, após ter sido definido com seu padrão;
- Validadores não são executados em valores indefinidos (undefined, null). A única exceção é a validação required;
- Validação é assincronamente recursiva, quando você chamar a função `save` do *Model*, a validação dos sub-documentos é executado também. Se ocorrer um erro ele será enviado para o *callback* da função `save`;
- Validação suporta a personalização completa.

####### Validação padrão
- Existem em alguns tipos de campos.
- Todos os tipos também possui a validação de required.
- Validadores específicos:
 - Number: possui os validadores de max e min
 - String: possui os validadores de enum, match, maxlength e minlength

**No objeto de erro do Mongoose:**
message: "nome do Model" "validation failed"
name: nome da validação que deu errado
```js
{ [ValidationError: testepokemon validation failed]
  message: 'testepokemon validation failed',
  name: 'ValidationError'
  ...
}
```

errors
```js
{ message: 'Cast to String failed for value "[object Object]" at path "name"',
  name: 'CastError',
  kind: 'String',
  value: [Object],
  path: 'name',
  reason: undefined
}
```
- message: texto da mensagem de erro;
- name: nome do erro;
- kind: tipo do campo;
- value: valor que provocou o erro;
- path: nome do campo;
- reason: razão porque o erro ocorreu, raramente usado.

####### Validação customizada
Aula 8 ... =P

###### Model
- implementação do `Schema`
- possui a propriedade de pluralização automática e manual
 - ex: model('Model', schema) irá buscar automaticamente pela collection models
 - model('Carro', schema,'carros' ) irá buscar automaticamente pela collection carros
```js
var Model = mongoose.model('Model', schema);
```

Exemplo
```js
const _schema = {
  name:  String
}
const pokemonSchema = new Schema(_schema);
const PokemonModel = mongoose.model('Pokemon', pokemonSchema);
const Suissamon = new PokemonModel({ name: 'Suissamon' });
Suissamon.save(function (err, data) {
  if (err) return console.log('ERRO: ', err);
  return console.log('Inseriu:', data);
})
// ou
PokemonModel.create({ name: 'Suissamon' }, function (err, data) {
  if (err) return console.log('ERRO: ', err);
  return console.log('Inseriu:', data);
})
```

###### Create
- utilizaremos como padrão o save!!!
```js
const _schema = {
  name:  String
}
const pokemonSchema = new Schema(_schema);
const PokemonModel = mongoose.model('Pokemon', pokemonSchema);
const dataModel = { name: 'Suissamon' };
const Suissamon = new PokemonModel(dataModel);

Suissamon.save(function (err, data) {
  if (err) return console.log('ERRO: ', err);
  return console.log('Inseriu:', data);
})
```

###### Retrieve
find
- 2 formas de buscar no Mongoose
 - via callback com JSON
 - encadeando funções

Exemplo
```js
const pokemonSchema = new Schema(_schema);
const PokemonModel = mongoose.model('Pokemon', pokemonSchema);
const query = {name: 'Pikachu', attack: {$gt: 90}};

PokemonModel.find(query, function (err, data) {
  if (err) return console.log('ERRO: ', err);
  return console.log('Buscou:', data);
});
```
ou
```js
const pokemonSchema = new Schema(_schema);
const PokemonModel = mongoose.model('Pokemon', pokemonSchema);

const query = {name: 'Pikachu'};
const callback = function (err, data) {
  if (err) return console.log('ERRO: ', err);
  return console.log('Buscou:', data);
}

PokemonModel.find(query).where({attack: {$gt: 90}}).exec(callback)
```

findOne
```js
PokemonModel.findOne(query, function (err, data) {});

PokemonModel.findOne(query).exec(callback);
```

findById
- equivalente ao findOne({_id: id})
```js
PokemonModel.findById(id, function (err, data) {});

PokemonModel.findById(id).exec(callback);
```

###### Update
- podemos omitir o operador $set pois ele não irá sobrescrever todo seu objeto caso não o use, assim como é no cliente do MongoDb

Exemplo
```js
const _schema = {
      name:  String,
      description: String,
      type:   String,
      attack:   Number,
      defense:   Number,
      height:   Number
    };
const PokemonSchema = new Schema(_schema);
const Pokemon = mongoose.model('Pokemon', PokemonSchema);
const query = {name: /pikachu/i};
const mod = {attack: 666};

Pokemon.update(query, mod, function (err, data) {
  if (err) return console.log('ERRO: ', err);
  return console.log('Alterou:', data);
});
```


### Aula 06 - Parte 3/3
#### [Mongoose](https://github.com/Webschool-io/be-mean-instagram/tree/master/Apostila/module-nodejs/src/mongoose)

 - [Slides](https://docs.google.com/presentation/d/1_CHh_fTkzgxAnxB3MlZ5WRhTqMLViMk__jkCZiZ3IMA/edit#slide=id.gfd3afa4fe_0_412)
 - [Vídeo](https://www.youtube.com/watch?v=02a_lo_KLwU)
 - [Descrição do exercício](https://github.com/Webschool-io/be-mean-instagram/blob/master/Apostila/classes/nodejs/exercises/class-06.md)
 - [Resolução do exercício](https://github.com/filipe1309/be-mean-modulo-nodejs/blob/master/exercises/class-06-resolved-filipe1309-filipe-leuch-bonfim.md)

#### Resumo
###### Delete
- default -> multi: true
Exemplo
```js
const Schema = mongoose.Schema;
const _schema = {
      name:  String,
      description: String,
      type:   String,
      attack:   Number,
      defense:   Number,
      height:   Number
    };
const PokemonSchema = new Schema(_schema);
const Pokemon = mongoose.model('Pokemon', PokemonSchema);
const query = {_id: '569b27ebfdafdac00914d495'};

Pokemon.remove(query, function (err, data) {
  if (err) return console.log('ERRO: ', err);
  return console.log('Deletou:', data);
});
```

### Aula 07
#### [Eventos](https://github.com/Webschool-io/be-mean-instagram/blob/master/Apostila/module-nodejs/pt-br/events.md), [Promises](https://github.com/Webschool-io/be-mean-instagram/blob/master/Apostila/module-nodejs/pt-br/promise.md)

 - [Slides](https://docs.google.com/presentation/d/1_CHh_fTkzgxAnxB3MlZ5WRhTqMLViMk__jkCZiZ3IMA/edit#slide=id.gf9c5c9121_0_38)
 - [Vídeo](https://www.youtube.com/watch?v=i6h1A-l11-k)
 - [Descrição do exercício](https://github.com/Webschool-io/be-mean-instagram/blob/master/Apostila/classes/nodejs/exercises/class-07.md)
 - [Resolução do exercício](https://github.com/filipe1309/be-mean-modulo-nodejs/blob/master/exercises/class-07-resolved-filipe1309-filipe-leuch-bonfim.md)

#### Resumo
Esse módulo pode ser acessado através do módulo
```js
require(‘events’)
```

Eventos podem ser nominados de acordo com a necessidade de cada função, contudo eles seguem um padrão para emissão (emit) e escuta (listener/on) de eventos.

```js
obj.emit(“event:name”, value)
obj.on(“event:name”, action(value){})
```

###### Código 01 [On]
```js
 'use strict';

 const events  = require('events');
 const em      = new events.EventEmitter();

 em.on("time:event", timeEvent);
 em.on("mod:three", mod3Event);

 function timeEvent(interval) {
     console.log('timeEvent '+interval);
 }

 function mod3Event(mod3) {
     console.log('3 mod %s === 0 ',mod3);
 }

 module.exports = em;
```

###### Código 02 [Emit]
```js
'use strict';

const em  = require('./events');

setInterval(( function() {
            let i = 1;
            return function () {
                if(i % 3 === 0) {
                    em.emit('mod:three',i++);
                } else {
                    em.emit('time:event', i++);
                }
            };
})(),1000);
```

###### Código 03 [Herança]
```js
'use strict';

const EventEmitter = require('events').EventEmitter;
const util = require('util');

function User () {
    EventEmitter.call(this);
}

util.inherits(User, EventEmitter);

module.exports = User;
```

###### Código 04 [Herança]
```js
“use strict”;

const EventEmitter = require('events').EventEmitter;
const util = require('util');

function User (data) {
    this.data = data;
    this.on('user:save', sendMail);
    this.on('error', sendError);
    EventEmitter.call(this);
}


User.prototype.save = function () {  
    if(this.data.name){
        this.emit('user:save',this.data);
    }
    else {
        this.emit('error', new TypeError('User need an name'));
    }
};

util.inherits(User, EventEmitter);

function sendMail(user) {
    user.pass = Math.floor(Math.random() * (1000000 - 900000)) + 900000;
    util.log(`\n
            \tOla ${user.name}!
            \tbem vindo seu pass é ${user.pass}
            \tvocê tem 24 horas para muda-lo
            \tou tera que pedir reenvio\n`
            );
}

function sendError(err) {
    throw err;
}

module.exports = User;
```

###### Events no mongoose
- todo model do mongoose é um evento Emitter
- Um model pode executar tarefas antes e/ou quando for executar alguma função, como: save, create, find ou ou  qualquer função interna.


###### Código 05
```js
'use strict';
const mongoose = require('mongoose');
const util = require('util');

function pokemonHandler () {
    let Schema = mongoose.Schema;
    const ObjectId = Schema.ObjectId;         

    const schema = new Schema({
            id          : ObjectId,
            name        : {type : String, trin : true},
            type        : {type : String, trin : true},
            attack      : {type : Number},
            defence     : {type : Number},
            height      : {type : Number},
            description : {type : String, trin : true}
});

schema.pre('find',function (next) {
        this.start = Date.now();
        util.log("finding ...");
        next();
});

schema.post('find', function(result) {
        setTimeout(function(){
                console.log('finding end :P')
                },1000);
        });
    return mongoose.model('Pokemon', schema);
}
module.exports = exports = pokemonHandler();
```

##### Promises
É uma abstração para trabalhar com código assíncrono de forma elegante, organizada e simplificada.

Uma Promise é composta por três estados básicos:
- pendente: quando ainda está executando.
- realizada / fulfilled: quando ela termina e tem um resultado de sucesso.
- rejeitada / reject: quando termina e tem algum erro;

Usar a Promise para abstrair o código assincrono e deixá-lo simples de ler, testar e manter é uma boa prática.

###### Código 01 [Sem Promise]
```js
'use strict';

const fs = require('fs');

fs.readFile('./persons.json','utf-8',function(err, file){
        if(!err) console.log(file);
        });
```

###### Código 02 [Sem Promise, com mais funções encadeadas]
```js
'use strict';

const fs = require('fs');
//lendo primeiro arquivo
fs.readFile('./persons.json','utf-8', function(err, persons){
        //array para juntar todos
        let todos = [];
        if(!err){
        fs.readFile('./friends.json','utf-8', function(err, friends){
                if(!err){
                    //juntando arquivos
                    todos.push(JSON.parse(persons));
                    todos.push(JSON.parse(friends));
                }
                    //fazendo uma operação com eles
                    sendFiles(todos);
                });
        }
});

function sendFiles(files){
    //mapeando os arquivos
    var arr = files.map(function(person) {
        return person.concat(person)
    });
    //lendo o resultado
    console.log(arr[0]);
}
```

###### Código 03 [Com Promise]
```js
'use strict';

const fs =  require('fs');

function readFile (path) {
    return new Promise(function(resolve, reject) {
            fs.readFile(path,'utf8',function(err, res) {
                    err ? reject(err) : resolve(res);
                    });    
            });
}

module.exports = readFile;
```

###### Código 04 [Com Promise]
```js
'use strict';

const readFile = require('./fs-promise');

readFile('./persons.json')
.then(function(data) {
        success(data);
        })
.catch(function(err){
        error(err);
        });

readFile('./perso.json')
.then(success , error);

function success (data) {
    console.log(data);
}

function error (err) {
    console.error(err);
}
```

###### Código 05 [Promise.all]
```js
Promise.all([  
        readFile('./persons.json'),
        readFile('./friends.json')
])
.then(function(result) {
        console.log(result);
        })
.catch(function(err){
        console.log(err);
        });
```

###### Promise no Mongoose
Nos models do mongoose assim como temos Eventemitters por padrão, podemos também trabalhar com Promise, que ajuda muito a deixar o código simples de manter e testar.
 + http://mongoosejs.com/docs/promises.html

###### Código 01 - Promise no `create`
```js
'use strict';

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yourdb');
const Pokemon = require('./models/pokemon');


const pokemon = {
            name : "Pompeu Limp",
            type : "Fire",
            attack : 81,
            defence : 65,
            height : 1.82,
            description : "jiujitero"
};


Pokemon.create(pokemon).then(success , error);

function success(data) {
    console.log(data);
}

function error (err) {
    console.log(err);
}
```

###### Código 02 - Promise no `find`
```js
'use strict';

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/pompeuapi');
const Pokemon = require('./models/pokemon');

let promise = Pokemon.find({}).exec();
promise.then(success, error);
```

###### Código 03 - Promise no `findOne`
```js
'use strict';

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/pompeuapi');
const Pokemon = require('./models/pokemon');


let promise = Pokemon.findOne({ _id : '5666fd32ff4ea39e23e1528f' }).exec();
promise.then(success , error);
```

###### Código 04 - Promise no `update`
```js
const pokemon = {
            name : "Pompeu Limp",
            type : "Fire",
            attack : 99,
            defence : 99,
            height : 1.82,
            description : "jiujitero"
};

let promise = Pokemon.update({ _id : '5666ff2a9fa2a10c25d57ef7'},pokemon).exec();

promise.then(success , error);
```

###### Código 05 - Promise no `remove`
```js
let promise = Pokemon.remove({_id :’ '5666ff2a9fa2a10c25d57ef7'’})
promise.then(success , error);
```
https://spion.github.io/posts/why-i-am-switching-to-promises.html  
http://stackoverflow.com/questions/9022099/how-to-use-mongoose-promise-mongo  
http://erikaybar.name/using-es6-promises-with-mongoosejs-queries/  

### Aula 08 - 1/6
#### [Mongoose - Arquitetura Atômica](https://github.com/Webschool-io/be-mean-instagram/blob/master/Apostila/module-nodejs/pt-br/mongoose-atomic-design.md)

 - [Slides](https://docs.google.com/presentation/d/1_CHh_fTkzgxAnxB3MlZ5WRhTqMLViMk__jkCZiZ3IMA/edit#slide=id.gebeab41d1_0_230)
 - [Vídeo](https://www.youtube.com/watch?v=tscqqhVQje8)

#### Resumo
A Arquitetura Atômica no Mongoose a forma em que separamos seus arquivos/contextos como:

- validação;
- campo;
- schema;
- model;
- etc.

A fim de facilitar seu re-uso e manutenção.




### Aula 08 - 2/6
#### [Validate]()
- [Slides](https://docs.google.com/presentation/d/1_CHh_fTkzgxAnxB3MlZ5WRhTqMLViMk__jkCZiZ3IMA/edit#slide=id.gfd4f1232f_155_6)
- [Vídeo](https://www.youtube.com/watch?v=_wj0y_77CYs)

#### Resumo

##### Validate
Validação customizada
Para criar uma validação customizada é bem simples, basta passar um objeto para o atributo validate do seu campo, no Schema:
```js
age: {
  type: Number,
  validate: {
    validator: function(v) {
      return v >= 18;
    },
    message: 'Sua idade({VALUE}) não é permitida!'
  }
}
```
Validadores sempre recebem o valor para validar como seu primeiro argumento e devem retornar um valor booleano.
*Retornando false significa que a validação falhou*.

Vamos testar a validação:
*schema-validate-age.js*
```js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

mongoose.connect('mongodb://localhost/teste');


const userSchema = new Schema({
  age: {
    type: Number,
    validate: {
      validator: function(v) {
        return v >= 18;
      },
      message: 'Sua idade({VALUE}) não é permitida!'
    }
  }
});

const User = mongoose.model('user', userSchema);
const u = new User();

// u.age = 24;
// console.log('Validou: ', u.validateSync());

u.age = 69;
console.log('Apenas msg:', u.validateSync().toString());

// u.age = 2;
// console.log('Todo objeto: ', u.validateSync());
```

Executando essa validação temos:
```js
undefined
ValidationError: Sua idade(6) não é permitida!
{ [ValidationError: user validation failed]
  message: 'user validation failed',
  name: 'ValidationError',
  errors:
   { age:
      { [ValidatorError: Sua idade(2) não é permitida!]
        properties: [Object],
        message: 'Sua idade(2) não é permitida!',
        name: 'ValidatorError',
        kind: 'user defined',
        path: 'age',
        value: 2 } } }
```
*undefined* é o retorno de uma validação de sucesso e logo abaixo temos apenas a mensagem
de erro que vem de *u.validateSync().toString()*
e por último objeto de erro que já conhecemos.

Agora vamos tentar *validateSync().toString()* com um valor maior que 18:
```js
u.age = 69;
console.log(u.validateSync().toString());
```

```js
console.log(u.validateSync().toString());
                                             ^
TypeError: Cannot read property 'toString' of undefined
    at Object.<anonymous> (/Users/jeancarlonascimento/www/projetos/webschool/cursos/be-mean-instagram/repo-oficial/Apostila/module-nodejs/src/mongoose/schemas/teste.js:23:29)
    at Module._compile (module.js:399:26)
    at Object.Module._extensions..js (module.js:406:10)
    at Module.load (module.js:345:32)
    at Function.Module._load (module.js:302:12)
    at Function.Module.runMain (module.js:431:10)
    at startup (node.js:141:18)
    at node.js:977:3
```
Com isso conseguimos deduzir que a função *toString* não existe em *undefined* e podemos provar isso indo
no console do node, para isso basta
executar *node* no seu terminal.

```js
➜  ~  node
> undefined.toString()
TypeError: Cannot read property 'toString' of undefined
    at repl:1:10
    at REPLServer.defaultEval (repl.js:252:27)
    at bound (domain.js:281:14)
    at REPLServer.runBound [as eval] (domain.js:294:12)
    at REPLServer.<anonymous> (repl.js:417:12)
    at emitOne (events.js:83:20)
    at REPLServer.emit (events.js:170:7)
    at REPLServer.Interface._onLine (readline.js:211:10)
    at REPLServer.Interface._line (readline.js:550:8)
    at REPLServer.Interface._ttyWrite (readline.js:827:14)
> "Suissa".toString()
'Suissa'
```
*Por isso cuidado ao usar essa função, tenha certeza
que esteja executando em um erro!*

Vamos criar uma validação um pouco mais complexa agora:
*schema-validate-email.js*
```js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validateEmail = function(email) {
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
};
const EmailSchema = new Schema({
  email: {
    type: String
  , trim: true
  , unique: true
  , required: 'Email é obrigatório'
  , validate: [validateEmail, 'Preencha com um email válido']
  }
});
const Email = mongoose.model('Email', EmailSchema);
const mail = new Email({email: null});

console.log(mail.validateSync());
```

Existe mais uma forma de utilizar a validação com Mongoose, utilizando o *Model.schema.path('campo')*,
passando uma função e a mensagem
de erro para o *validate*.

```js
const RequisitosSchema = new Schema({
  name: String
});
const Requisitos = mongoose.model('Requisitos', RequisitosSchema);

Requisitos.schema.path('name').validate(function (value) {
  return /js|html|css|angular|node|mongodb/i.test(value);
}, 'Requisito({VALUE}) inválido!');

const req = new Requisitos({ name: 'php'});
console.log(req.validateSync());
```

##### Getters e Setters
Getters e setters ajudam a mudar a forma como você obtém e/ou define os atributos do documento.

##### Setters
Setters permitem que você transforme os dados originais antes que cheguem ao documento.

Suponha que você está implementando o registro do usuário para um site. Usuário fornecer um e-mail e senha, que fica guardado no MongoDB. O e-mail é uma seqüência de caracteres que você vai querer normalizar para minúsculas.

Você pode configurar a normalização do e-mail para minúsculas facilmente através de um setter.
```js
function toLower (v) {
  return v.toLowerCase();
}

const UserSchema = new Schema({
  email: { type: String, set: toLower }
});

const User = mongoose.model('User', UserSchema);
const user = new User({email: 'SUISSERA@webschool.io'});

console.log(user.email); // 'suissera@webschool.io';
```

##### Getters
Getters permitem que você transforme a representação dos dados, uma vez que é transformado a partir do documento para o valor que você vê.

Suponha que você queira retornar o título do post todo em maiúscula.

Você pode fazê-lo através da definição de um getter.

```js
function apenasMaiusculas (v) {
  return v.toUpperCase();
}
const CommentsSchema = new Schema({
  title: String
, body: String
, date: Date
});
const BlogPostSchema = new Schema({
  title: { type: String, get: apenasMaiusculas }
, body: String
, comments: [CommentsSchema]
});

const BlogPostModel = mongoose.model('BlogPost', BlogPostSchema);
const post_id = '569e36b2d6a928b526db9135';

BlogPostModel.findById(post_id, function (err, post) {
  if (err) return console.log('Erro:', err);
  return console.log('Título: ', post.title);
});
```

##### Virtuals
O Mongoose suporta atributos virtuais, que são convenientes em alguns momentos, mas
*não são armazenados no MongoDB*.

Pense no seguinte Schema:
```js
const PersonSchema = new Schema({
  name: {
    first: String
  , last: String
  }
});
const Person = mongoose.model('Person', PersonSchema);

const Suissao = new Person({
    name: { first: 'Jean', last: 'Suissa' }
});
```
Se você quiser mostrar o nome completo terá que fazer:
```js
console.log(Suissao.name.first + ' ' + Suissao.name.last);
```
É mais conveniente definir um atributo virtual *name.full* e escrever dessa forma:
```js
console.log(Suissao.name.full);
```

Para fazer isso basta passar 'name.full' para a função virtual do Schema:
```js
PersonSchema
.virtual('name.full')
.get(function () {
  return this.name.first + ' ' + this.name.last;
});
```

Agora buscando o `Person` para verificar seu nome completo:
```js
Person.findById('569e513f7672012c28da89f1', (err, data) => {
  if (err) return console.log('Erro:', err);
  return console.log('Nome completo: ', data.name.full);
});
```
Retornando:

Nome completo:  Jean Suissa

Vamos fazer um outro campo virtual que irá retornar apenas as iniciais de `Person`:

```js
PersonSchema
.virtual('name.initials')
.get(function () {
  return this.name.first[0] + this.name.last[0];
});

const Person = mongoose.model('Person', PersonSchema);

Person.findById('569e513f7672012c28da89f1', (err, data) => {
  if (err) return console.log('Erro:', err);
  return console.log('Iniciais: ', data.name.initials);
});
```
Retornando:
Iniciais:  JS

##### Embedded Documents
Documentos incorporados(embedded) desfrutam
dos mesmos recursos que os Models.
Sempre que ocorrer um erro ele
irá para o callback do *save()*.

###### Adicionando
Exemplo de Blog:

```js
const CommentsSchema = new Schema({
  title: String,
  body: String,
  date: Date
});

const BlogPostSchema = new Schema({
  title: String,
  body: String,
  comments: [CommentsSchema]
});

const BlogPostModel = mongoose.model('BlogPost', BlogPostSchema);
```
O atributo *comments* em BlogPostSchema será uma instância de *DocumentArray*, que é um subclasse especial de *Array* que possui métodos específicos para trabalhar com documentos incorporados.
```js
const post = {
  title: 'Primeiro POST'
, body: 'Post inicial do blog UEBAAA'
, date: Date.now()
}
const comment = {
  title: 'Comentei aqui'
, body: 'Tá comentando meu fiiiii!'
, date: Date.now()
};
const BlogPostModel = mongoose.model('BlogPost', BlogPostSchema);
const BlogPost = new BlogPostModel(post);

BlogPost.comments.push(comment);
BlogPost.save(function (err, data) {
  if (err) return console.log('Erro:', err);
  return console.log('Sucesso:', data);
});
```
```js
Sucesso: { comments:
   [ { _id: 569e300ad1455a8326c9aa92,
       date: Tue Jan 19 2016 10:46:02 GMT-0200 (BRST),
       body: 'Tá comentando meu fiiiii!',
       title: 'Outro comentário' } ],
  _id: 569e300ad1455a8326c9aa91,
  body: 'Post inicial do blog UEBAAA',
  title: 'Primeiro POST',
  __v: 0 }
```

###### Removendo
Para remover um documento incorporado precisamos primeiramente buscar o documento "pai", pelo `_id` de preferência, para depois selecionar qual documento interno deve ser removido e depois
salvar o documento modificado.
```js
const BlogPostModel = mongoose.model('BlogPost', BlogPostSchema);
const BlogPost = new BlogPostModel(post);
const id = '569e300ad1455a8326c9aa91';

BlogPostModel.findById(id, function (err, post) {

  if (err) return console.log('Erro:', err);
  console.log('post.comments', post.comments)
  post.comments[0].remove();
  post.save(function (err, data) {
    if (err) return console.log('Erro interno:', err);
    return console.log('Sucesso:', data);
  });
});
```
```js
post.comments [{ title: 'Outro comentário',
  body: 'Tá comentando meu fiiiii!',
  date: Tue Jan 19 2016 10:46:02 GMT-0200 (BRST),
  _id: 569e300ad1455a8326c9aa92 }]
Sucesso: { comments: [],
  __v: 1,
  body: 'Post inicial do blog UEBAAA',
  title: 'Primeiro POST',
  _id: 569e300ad1455a8326c9aa91 }
```

###### Procurando pelo `_id`
O tipo *DocumentArray* possui o método especial
*id()* o qual filtra os documentos incorporados
pelo seu atributo `_id`.
```js
const BlogPostModel = mongoose.model('BlogPost', BlogPostSchema);
const BlogPost = new BlogPostModel(post);
const post_id = '569e36b2d6a928b526db9135';
const comment_id = '569e36b2d6a928b526db9136';

BlogPostModel.findById(post_id, function (err, post) {
  if (err) return console.log('Erro:', err);
  console.log('Achou esse comentário: ', post.comments.id(comment_id));
});
```
```js
Achou esse comentário:  { title: 'Outro comentário',
  body: 'Tá comentando meu fiiiii!',
  date: Tue Jan 19 2016 11:14:26 GMT-0200 (BRST),
  _id: 569e36b2d6a928b526db9136 }
```

###### Mongoose Plugins
- Os Schemas do mongoose, são passives do uso de plugins,  que permitem a adição de recursos aos models/schemas, isso ajuda muito no reuso dos plugins e deixa o schema mais flexivel.

- Um exemplo do uso de plugins é quando existe a necessidade de criar um novo campo, em uma collection. Veja um exemplo básico de um schema simples no *Código 01*, mais adiante será adicionado um plugin nesse schema.
```js
'use strict';

var mongoose  = require('mongoose'),
    Schema    = mongoose.Schema;

var BlogPost = new Schema({
  id    : Schema.ObjectId,
  title : {type : String, required : true},
  body  : {type : String, required : true}
});
```

###### Criando Primeiro Plugin
- Ao longo do tempo, verifica-se que a estrutura usado no schema do BlogPost esta deficiente, foi verificado que dois novos campos são necesários, um para gravar a data de criação e outro para gravar da data de alteração.

- Para quem já estudou Padrão de Projetos vai notar a semelhança de plugins com decorators.
```js
'use strict';

function timestemp (schema, options) {
  schema.add({created_at : {type : Date, default  : Date.now()}});
  schema.add({update_at  : {type : Date, default : Date.now()}});
}

module.exports = timestemp;
```

Algumas observações devem ser feitas.
Primeiro todo plugin deve seguir esse padrão, ele recebe dois argumentos, um é o proprio schema e o segundo são opções

###### Attach Plugin in Schema
- Para “atachar” um plugin ao model é muito simples, pois todo schema já possui um schema.plugin(plugin), essa função recebe um plugin como argumento
- Vamos Ver como fica um schema com o plugin

```js
var mongoose  = require('mongoose'),
    Schema    = mongoose.Schema,
    timestemp = require('../plugins/timestemp');

var bloogPost = new Schema({
  id    : Schema.ObjectId,
  title : {type : String, required : true},
  body  : {type : String, required : true}
});
bloogPost.plugin(timestemp);
module.exports = mongoose.model('Post', bloogPost);
```

Ao criar um documento no mongodb, usando esse schema sera adicionado dois novos atributos, create_at e update_at,  caso crie um novo schema de users por exemplo, pode-se usar esse plugin.

Contudo plugins vão muito alem disso, pode-se usar eles com os events do mongoose isso sera abordado mais adiante em outra aula.

###### Mongoose Populate
Não existe uma forma nativa para se fazer “joins” no mongodb, lembrando que join e uma prática que vem do modelo RELACIONAL, onde existe a necessidade de juntar valores de duas tabelas ou mais. Para que isso seja feito no mongodb, sera usado mongoose para ajudar e deixar simples essa atividade.

###### Criando Model
```js
'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userschema = new Schema({
  name : String
});

module.exports = mongoose.model('User',userschema);
```
```js
'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let postschema = new Schema({
  body : String,
  _user : {
    type : Schema.ObjectId,
    ref  : 'User'
  }
});

module.exports = mongoose.model('Post',postschema);
```

###### Criando User
###### Criando Post
###### Buscando Post


###### Populate

###### Considerações Finais
###### Indexes
Quando o aplicativo é iniciado, o Mongoose chama automaticamente *ensureIndex* para cada índice definido no seu Schema.

```js
Mongoose chamará *ensureIndex* sequencialmente para cada índice, os quais emitem um evento *index* no Model quando todas as chamadas de *ensureIndex* forem sucesso ou quando houver um erro.

const userSchema = new Schema({
  name: String,
  email: String,
  created_at: { type: String, , default: Date.now, index: true }
});

userSchema.index({ name: 1, type: -1 });
```
Recomenda-se que seja desativado em produção, a criação do índice pode causar um impacto significativo no desempenho. Para desativar esse comportamento, basta definir a opção autoIndex do seu Schema para false, ou globalmente na conexão, definindo a opção config.autoIndex como false.

```js
userSchema.set('autoIndex', false);
// ou
new Schema({..}, { autoIndex: false });
```
Mas ele só impacta quando você levanta seu sistema, sabendo disso você não precisa seguir essa recomendação de desligar o `autoIndex`, pois ele irá garantir certa integridade dos seus dados.

###### Methods e Statics
No Mongoose podemos definir métodos específicos para um Schema, como também métodos "estáticos".

###### Methods
Para se definir um método é muito simples, basta criar ele no objeto *Schema.methods*:
```js
const _schema = {
  name:  String, description: String, type: String, attack: Number, defense: Number, height: Number
};
const PokemonSchema = new Schema(_schema);

PokemonSchema.methods.findSimilarType = function (cb) {
  return this.model('Pokemon').find({ type: this.type }, cb);
};
const Pokemon = mongoose.model('Pokemon', PokemonSchema);
const poke = new Pokemon({ name: 'Teste', type: 'inseto' });

poke.findSimilarType(function (err, data) {
  if (err) return console.log('Erro:', err);
  return data.forEach((pokemon) => console.log('pokemon: ', pokemon));
```

Como retornamos o *find*, que é uma instância de *Query*, na função *findSimilarType* podemos escrever a busca dessa forma:
```js
poke
.findSimilarType()
.where('defense').gt(50)
.limit(2)
.exec(function (err, data) {
  if (err) return console.log('Erro:', err);
  return data.forEach((pokemon) => console.log('pokemon: ', pokemon));
});
```

###### Statics
Além dos métodos normais também podemos
criar os métodos estáticos, os quais sempre
estarão acessíveis no seu Model.
```js
const PokemonSchema = new Schema(_schema);

PokemonSchema.statics.search = function (name, cb) {
  return this.where('name', new RegExp(name, 'i')).exec(cb);
};

const Pokemon = mongoose.model('Pokemon', PokemonSchema);

Pokemon.search('caterpie', function (err, data) {
  if (err) return console.log('Erro:', err);
  return data.forEach((pokemon) => console.log('pokemon: ', pokemon));
});
```
O que fazemos na função *search* é receber um nome e depois retornamos um *find* implícito, pois usamos o *where* para testar o valor de `name` com uma expressão regular gerada pela função [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp), finalizando com a execução do callback *cb*.

###### Juntando tudo
Vamos agora criar um Schema mais completo
e atômico com o conhecimento adquirido.

Já conhecemos o conceito de *Arquitetura Atômica* para o Mongoose, então vamos criar um Schema de usuário, primeiramente da forma simples:
```js
const userSchema = new Schema({
  name: String
, password: String
, email: String
, type: String
, created_at: { type: Date, default: Date.now }
});
```

Antes de tudo vamos criar um projeto novo chamado *mongoose-user* via *npm init*, depois instalando localmente o *mongoose* vamos copiar a pasta *fields* do projeto *mongoose-atomic* e colar na pasta do projeto *mongoose-user*.

Agora salve o código abaixo como *schema.js* na pasta do *mongoose-user*:
```js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/mongoose-user-test');

const userSchema = new Schema({
  name: String
, password: String
, email: String
, type: String
, created_at: { type: Date, default: Date.now }
});
```

Pronto agora atomizamos nossos fields então está na hora de trabalhar em cada campo para definir suas peculiaridades, vamos começar pelo *name (fields/field-name)*.

Vamos definir para esse field:

- index;
- virtual;
- getter e setter;
- validate.

###### Arrow Function
Onde você usaria uma função anônima agora use arrow function.

Mas cuidado ele:
- não aceita new
- não possui arguments
- this não pode ser mudado
- this tem o valor onde foi criado e não chamado





### Links importantes:
- NodeJS
 - [Chat NodeJS - Rocket](http://be-mean.rocket.chat/channel/node)
 - [Repositório de exercícios](https://github.com/Webschool-io/be-mean-instagram-nodejs-exercises)
 - [Node Atomic Design - Modelo Padrão](https://github.com/Webschool-io/Node-Atomic-Design-Modelo-Padrao)


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
