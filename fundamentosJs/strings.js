/*  MÉTODOS STRINGS
    .length - comprimento
    .indexOf - indice de
    .lastIndexOf - ultimo indice de
    .slice - fatia
    .trim - aparar
    .split - dividir
    .replace - substituir
 */

function substituicaoRapida(texto, proc, subs) {
    return texto.replace(proc, subs);
}

let textoNovo = substituicaoRapida('Boa tarde','tarde','noite');
console.log(textoNovo) //'Boa noite'

// -------------------------------------------------------------- //

function menciona(texto, palavra) {
    return texto.indexOf(palavra) >= 0;
}
console.log(menciona('Existem muitas linguagens de programação e javascript é uma delas','programação')) // true

// -------------------------------------------------------------- //

let texto = "Olá, sou Carlos!";
let nomeUsuario = texto.slice(9, 15);
console.log(nomeUsuario);