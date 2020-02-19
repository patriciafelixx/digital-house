// let dobro = n => n * 2;
// let triplo = n => n * 3;
// let aplicar = (n, funcao) => funcao(n);

const somar = (a, b) => a + b;
const diff = (a, b) => a - b;

const operar = (operacao, a, b) => {
    return operacao(a, b);
}

console.log(operar(somar, 4, 5));

// Exemplo de setTimeout
setTimeout(() => {
    console.log('Alô, primavera!!!')
}, 2000);

// -------------------------------------------------------------- //

function dobro(n) {
    return n * 2;
};
function triplo(n) {
    return n * 3;
}
function aplicar(n, funcao) {
    return funcao(n);
}
// console.log(aplicar(3, triplo)); // 9

// -------------------------------------------------------------- //

function somar(a, b) {
    return a + b;
};
function subtrair(a, b) {
    return a - b;
};
function multiplicar(a, b) {
    return a * b;
};
function dividir(a, b) {
    return a / b;
};
function calculadora(a, b, calculo) {
    return calculo(a, b);
}
// console.log(calculadora(7, 20, subtrair));