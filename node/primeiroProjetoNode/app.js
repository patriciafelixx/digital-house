const fs = require('fs');
const moment = require('moment');
const superHerois = require('./superHerois')

let dados = fs.readFileSync(__dirname + '/dados.txt', 'utf8');
console.log(dados);
/* Olá pessoal!! */

let data = moment().format('MMM/YYYY');
console.log(data);
/* Feb/2020 */

console.log(superHerois);
/* [
  { nome: 'Batman', poder: 'Inteligência' },
  { nome: 'Superman', poder: 'Super Força' }
] */