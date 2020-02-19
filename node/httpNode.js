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