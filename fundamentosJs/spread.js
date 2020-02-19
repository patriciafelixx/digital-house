// Spread Operator

let frutasUm = ['banana', 'pera', 'maçã'];
let frutasDois = ['pessego', 'ameixa', 'laranja'];
let frutas = [...frutasUm, ...frutasDois];
console.log(frutas); // [ 'banana', 'pera', 'maçã', 'pessego', 'ameixa', 'laranja' ]

// -------------------------------------------------------------- //

let curso = {
    curso: 'Fullstack',
    turno: 'Manhã',
    sede: 'São Paulo'
};

let estudanteUm = {
    nome: 'Denise',
    email: 'denise@email.com',
    ...curso
};

console.log(estudanteUm);
// { nome: 'Denise',
//   email: 'denise@email.com',
//   curso: 'Fullstack',
//   turno: 'Manhã',
//   sede: 'São Paulo' }