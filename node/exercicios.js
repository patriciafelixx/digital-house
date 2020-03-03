// Exercício: Importando Módulos
const moduloNativo = require('http');
const moduloInstalado = require('./node_modules/axios');
const moduloProprio = require('./minhaFuncao');


// Exercício: Exportar Módulos
let cachorro = {
    nome: 'Scooby',
    idade: 7,
    gostaDeComer: true
}
module.exports = cachorro;


// Exercício: Requisitando Módulos
const cachorro = require ('./cachorro');
console.log(`O cachorro se chama ${cachorro.nome} e tem ${cachorro.idade} anos`);