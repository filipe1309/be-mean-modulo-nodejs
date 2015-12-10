# be-mean-modulo-nodejs

Repositório criado para armazenar os exercicios do módulo de Mongodb do [Workshop de BE MEAN - Instagram](https://github.com/Webschool-io/be-mean-instagram), da [Webschool.io](https://github.com/Webschool-io)

### Aula 01
#### [Explicação sobre o node](https://github.com/Webschool-io/be-mean-instagram/blob/master/Apostila/module-nodejs/pt-br/theory.md), [Callback](https://github.com/Webschool-io/be-mean-instagram/blob/master/Apostila/module-nodejs/pt-br/callback.md), [Instalação](https://github.com/Webschool-io/be-mean-instagram/blob/master/Apostila/module-nodejs/pt-br/installation.md)

 - [Slides](https://docs.google.com/presentation/d/1_CHh_fTkzgxAnxB3MlZ5WRhTqMLViMk__jkCZiZ3IMA/edit?pli=1#slide=id.p)
 - [Vídeo](https://www.youtube.com/watch?time_continue=91&v=OgfO37F6mdg)
 - [Descrição do exercício]()
 - [Resolução do exercício]()

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
                -> ~ array bidimentsional [# tasks, tasks completadas]
                -> 1 tasks por thread (idle, i/o) da thread pool
                -> proporciona menor gasto de memória

            Event Driven
                -> orientação a eventos
                -> GUI Pattern
                -> simplificam a programação assíncrona
                -> diminui o aninhamento de callback
                -> eventos podem ser emitidos (para um listener) quando uma tarefa esta pronta
                -> callback pattern
                -> high-order functions (programação funcional)

            use casa PayPal

            Instalação
            -> node v5
            -> build essential

            yum:
                sudo yum install nodejs npm --enablerepo=epel
                http://tecadmin.net/upgrade-nodejs-via-npm/




```
Exemplo
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


### Links importantes:
- NodeJS
 - [Chat NodeJS - Rocket](http://be-mean.rocket.chat/channel/node)
 - [Repositório de exercícios](https://github.com/Webschool-io/be-mean-instagram-nodejs-exercises)


- Geral
 - [Chat Geral - Rocket](http://be-mean.rocket.chat/channel/general)
 - [Class Guidelines](https://github.com/Webschool-io/be-mean-instagram/blob/master/class-guidelines.md)
 - [Como entregar o exercício](https://github.com/Webschool-io/be-mean-instagram/wiki/Exerc%C3%ADcios)
 - [Dagora - BE MEAN](http://dagora.net/be-mean/)
 - [EAD - Dagora](http://aprenda.dagora.net/login/)
 - [Facebook - Webschool.io - Workshop Be MEAN](https://www.facebook.com/groups/workshop.be.mean/)
 - [Material de estudos - Pré-requisito](http://aprenda.dagora.net/discussao/1/1/material-de-estudos-como-pre-requisitos/)
 - [Wiki](https://github.com/Webschool-io/be-mean-instagram/wiki)
