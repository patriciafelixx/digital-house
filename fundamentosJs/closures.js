/*
function pai() {
    function filha() {
        . . .
    }
}
*/

function saudacao(nome) {
    let mensagem = 'Olá, seja bem vindes';
    function juntarNome() {
        return mensagem + ' ' + nome;
    }
    return juntarNome();
}

console.log(saudacao('Patricia'));