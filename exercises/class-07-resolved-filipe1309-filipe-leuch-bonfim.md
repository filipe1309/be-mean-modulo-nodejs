# Node.js - Aula 07 - Exercício
**user:** [filipe1309](https://github.com/filipe1309)  
**autor:** Filipe Leuch Bonfim

1 - Crie um função que entenda de EventEmitter, nela crie um method, um chamado init, ele devera ser chamado toda vez que a sua função foi iniciada. Use o código 04 Como base.(use ele no prototype).

#### ex1_init_event.js
```js
'use strict';

const EventEmitter = require('events').EventEmitter;
const util = require('util');

function BazingaEmitter (data) {
    this.data = data;
    this.on('init', init);
    EventEmitter.call(this);
}


BazingaEmitter.prototype.init = function () {
    this.emit('init', this.data);
};

util.inherits(BazingaEmitter, EventEmitter);


function init (data) {
    console.log('init =>', data.text);
}

module.exports = BazingaEmitter;
```

#### ex1_init_event_main.js
```js
'use strict';

const BazingaEmitter = require( './ex1_init_event.js' );
const myBazingaEmitter = new BazingaEmitter({ text: 'Bazinga!!!'});

myBazingaEmitter.init();
```

#### Saída
```
$ node ex1_init_event_main.js
init => Bazinga!!!
```


2 - Faça, um modulo simples para ler diretórios usando modulo FS(fs.readdir), usando o exemplo do código 03, esse modulo deve retornar uma Promise.

#### ex2_readdir_promise.js
```js
'use strict';

const fs =  require('fs');

function readDir(path) {
    return new Promise(function(resolve, reject) {
        fs.readdir(path, function(err, res) {
            err ? reject(err) : resolve(res);
        });
    });
}

module.exports = readDir;
```

#### ex2_readdir_promise_main.js
```js
'use strict';

const readDir = require('./ex2_readdir_promise.js');

function myPromiseAll(arr) {
    return Promise.all(arr)
    .then(result => { return result; })
    .catch(err => { throw err; });
}

myPromiseAll([
    readDir('../class07'),
    readDir('../class02')
])
.then(result => console.log(result))
.catch(err => console.log(err));
```

3 - Os schemas do mongoose podem usar promises, em seus alguns methods, de “crud”, list 3 methods que usam promise , se chamada da função exec(), no final e 3 que usam exec(), mostre ao menos um exemplo de cada.
