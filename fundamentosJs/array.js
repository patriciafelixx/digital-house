/*  Métodos
    .push() - insere final
    .pop() - remove final
    .unshift() - insere inicio
    .shift() - remove inicio
    .indexOf() - indiceDe
    .lastIndexOf() - indice de tras p frente
    .join() - junção 
*/

let alunos = ["João", "Pedro", "Jorge", "Francisco"];
let indiceJoao = alunos.indexOf("João");
let indiceFrancisco = alunos.indexOf("Francisco");

// -------------------------------------------------------------- //

let arrayFrase = [
  "Não",
  "fracassei,",
  "simplesmente",
  "encontrei",
  "dez",
  "mil",
  "soluções",
  "equivocadas"
];

let fraseNova = arrayFrase.join(" ");
console.log(fraseNova);
// Não fracassei, simplesmente encontrei dez mil soluções equivocadas

// -------------------------------------------------------------- //
let estudantesX = [{
  nome: "Álvaro",
  media: 9,
  curso: "Android"
}, {
  nome: "Daniel",
  media: 6,
  curso: "Full Stack"
}, {
  nome: "Alexis",
  media: 3,
  curso: "iOS"
}
];
let alunoFormado = estudantesX.pop();

// -------------------------------------------------------------- //

let estudantesY = [{
  nome: 'Álvaro',
  media: 9,
  curso: 'Android',
}, {
  nome: 'Daniel',
  media: 6,
  curso: 'Full Stack',
}]

estudantesY.push({
  nome: 'João',
  media: 5,
  curso: 'iOS',
})

estudantesY.push({
  nome: 'Miguel',
  media: 2,
  curso: 'Android',
})
// console.log(estudantes);

// -------------------------------------------------------------- //

let estudantesZ = [{
  nome: 'Álvaro',
  media: 9,
  curso: 'Android',
}, {
  nome: 'Daniel',
  media: 6,
  curso: 'Full Stack',
}, {
  nome: 'Alexis',
  media: 3,
  curso: 'iOS',
}]

let alunoDesistente = estudantesZ.shift();

// -------------------------------------------------------------- //

let estudantes = [{
  nome: 'Alvaro',
  media: 9,
  curso: 'Android',
}, {
  nome: 'Daniel',
  media: 6,
  curso: 'Full Stack',
}, {
  nome: 'Alexis',
  media: 3,
  curso: 'iOS',
}]

estudantes.unshift({
  nome: 'Francisco',
  media: 2,
  curso: 'Android'
}, {
  nome: 'Mariana',
  media: 9,
  curso: 'Full Stack'
})

console.log(estudantes);

// -------------------------------------------------------------- //