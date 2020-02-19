/* Exercício: Importando Módulos
Vamos praticar a importação de módulos, algo que usaremos com frequência.
Seu objetivo será criar 3 variáveis: "moduloNativo", "moduloInstalado" e 
"moduloProprio", onde cada uma armazenará um módulo distinto. 
A primeira deve requisitar o módulo http, a segunda o módulo axios e 
a terceira um módulo local exportado do arquivo minhaFuncao.js. 
Este arquivo se encontra na mesma pasta que o arquivo index.js. */

const moduloNativo = require('http');
const moduloInstalado = require('./node_modules/axios');
const moduloProprio = require('./minhaFuncao');

/* Exercício: Exportar Módulos
Temos dados do cachorro Scooby armazenados em diversas variáveis. 
Seu trabalho será criar a variável cachorro e armazenar nela todos os dados e depois, exporta-los. */

let cachorro = {
    nome: 'Scooby',
    idade: 7,
    gostaDeComer: true
}

module.exports = cachorro;

/* Exercício: Requisitando Módulos
Dentro de um novo arquivo queremos acessar os dados contidos no arquivo
cachorro.js o mesmo, para requisita-lo,se encontra em ./cachorro. 
O arquivo possui um objeto literal que tem os atributos nome e idade.
Seu trabalho será criar a variável cachorro e requisitar o módulo cachorro. 
Em seguida, imprima por console.log() os dados usando a seguinte frase: 
"O cachorro se chama ____ e tem ____ anos" */

const cachorro = require ('./cachorro');
console.log('O cachorro se chama '+ cachorro.nome + ' e tem ' + cachorro.idade + ' anos');
// console.log(`O cachorro se chama ${cachorro.nome} e tem ${cachorro.idade} anos`);