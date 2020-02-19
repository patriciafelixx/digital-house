let carro = {
    nome: 'fox',
    ano: '2011'
}

for(let prop in carro) {
    console.log(prop)
}
// nome
// ano

for(let prop in carro) {
    console.log(carro[prop]);
}
// fox
// 2011

// -------------------------------------------------------------- //

let bart = {
    mae: "Marge",
    pai: "Homer",
    hobbie: "Skate",
    corCamiseta: "Laranja"
}
for (let prop in bart) {
    console.log(bart[prop]);
}
// Marge
// Homer
// Skate
// Laranja