## NODE JS

**Package.json**
```
$ npm init -y
```

**Node modules**
```
npm install <module-name>
<!-- Módulos nativos do Node: https://nodejs.org/api/ -->
```

**Dependencies E devDependencies**
```
npm install express --save
npm install nodemon -D --save
```
```json
"dependencies": {
    "express": "~4.16.1"
},
"devDependencies" : {
    "nodemon": "^2.0.2"
}
```

## Módulo HTTP
```javascript
// 1. Exigir o módulo HTTP
const http = require('http');

// 2. Criar o servidor --> http.createServer()
// 3. Esse método recebe uma callback, que será executada toda vez que uma solicitaçao for enviada ao servidor
// 4. Definir a porta que o servidor será escutado.
// 5. Definir cabecalhos com writeHead(status http, {tipo conteudo da resposta - sem formatação, html ou json})
// 6. Método .end para fechar o ciclo, que enviará a resposta para o client
// 7. Routing - examinar cada solicitação recebida nas rotas, com o objeto req

http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/plain; charset=utf-8"});

    switch (req.url) {
        case '/':
            res.end('Você está na página Home!');
            break;
        case '/contato':
            res.end('Você está na página Contato!');
            break;
        default:
            res.end('Você está no nosso Servidor!');
    }
}).listen(3000);
```

## Exercícios

```javascript
// 01: Importando Módulos
const moduloNativo = require('http');
const moduloInstalado = require('./node_modules/axios');
const moduloProprio = require('./minhaFuncao');


// 02: Exportando Módulos
let cachorro = {
    nome: 'Scooby',
    idade: 7,
    gostaDeComer: true
}
module.exports = cachorro;


// 03: Requisitando Módulos
const cachorro = require ('./cachorro');
console.log(`O cachorro se chama ${cachorro.nome} e tem ${cachorro.idade} anos`);
```