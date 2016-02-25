# Node.js - Aula 03 - Exercício
**user:** [filipe109](https://github.com/filipe1309)  
**autor:** Filipe Leuch Bonfim

## Por que quando requisitamos ao nosso servidor de *Query String*, **com o Chrome**, ele executa 2 requisições, sendo a última "*vazia*"?

Este é um **bug**, [já conhecido do Chrome](http://crbug.com/39402), que envia um `request` a mais, solicitando o `favicon.ico` da aplicação.

## Qual a DIFERENÇA entre o GET e o POST?
A principal diferença entre estes métodos HTTP é a **visibilidade**.

|        -         | GET                                                                              | POST|
|------------------------------ | -------------------------------------------------------------------------------- |-----|
|**Quando usar**| poucos dados, e sem necessidade de segurança | grande quantidade de dados e necessidade de segurança|
|**Visibilidade** | os parâmetros do request são passados, de maneira visível, junto á URL | os parâmetros são encapsulados junto com a requisição HTTP, não sendo "visível" pela URL |
|**limite de caracteres** | Sim | Não |
|**Velocidade** | + Rápido | + Lento devido ao encapsulamento |
|**Tipo dos dados** | somente `string` | tanto `strings`, quanto dados binários |
|**Armazenamento [Cache/Favoritos]** | Sim | Não |


## Crie um Pokemon na nossa API com seu nome, depois modifique seu nome pelo seu User do Github.
#### Criando
##### http-request-post.js
```js
// ...
const postData = querystring.stringify({
        name: 'Filipe Leuch Bonfim'
      , type: 'estudante'
      });
// ...
```
```
> node http-request-post.js
postData name=Filipe%20Leuch%20Bonfim&type=estudante
Tamanho do postData 43
STATUS: 201
HEADERS:
{"server":"Cowboy","connection":"close","x-powered-by":"Express","access-control-allow-origin":"*","content-type":"application/json; charset=utf-8","content-length":"90","etag":"W/\"5a-mfMhUZqUwCgMFkJAaSZciQ\"","date":"Thu, 25 Feb 2016 03:17:12 GMT","via":"1.1 vegur"}
Dados finalizados:  {"__v":0,"name":"Filipe Leuch Bonfim","type":"estudante","_id":"56ce7238beca0911007b63d4"}
```
#### Modificando
##### http-request-put.js
```js
// ...
const postData = querystring.stringify({
        name: 'filipe1309'
      , type: 'estudante'
      });
// ...
const options = {
        host: 'webschool-io.herokuapp.com'
      , method: 'PUT'
      , path: '/api/pokemons/56ce7238beca0911007b63d4'
      , headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        , 'Content-Length': postData.length
        }
      };
// ...
```
```
> node http-request-put.js
postData name=filipe1309&type=estudante
Tamanho do postData 30
STATUS: 202
HEADERS: {"server":"Cowboy","connection":"close","x-powered-by":"Express","access-control-allow-origin":"*","content-type":"application/json; charset=utf-8","content-length":"108","etag":"W/\"6c-gdBvthDD89Q1hnGOpDGo5A\"","date":"Thu, 25 Feb 2016 03:19:07 GMT","via":"1.1 vegur"}
Dados finalizados:  {"data":{"ok":1,"nModified":1,"n":1,"lastOp":"6255063011229171713","electionId":"565e25d106dca622271891c4"}}
```


## **Depois faça o DELETE**, criando o script para tal, colocando aqui a resposta.
```
node http-request-del.js
STATUS: 204
HEADERS: {"server":"Cowboy","content-length":"0","connection":"close","x-powered-by":"Express","access-control-allow-origin":"*","date":"Thu, 25 Feb 2016 03:43:11 GMT","via":"1.1 vegur"}
Dados finalizados:  
```

## Escolha uma **API externa** e crie um script para fazer um GET nela **mostrando o resultado com HTML**.
