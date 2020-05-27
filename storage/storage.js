let nome = localStorage.getItem('nome');

if (nome === null) {
    nome = prompt('Digite seu nome:')
}
let spanNome = document.getElementById('nome');
spanNome.innerText = nome;


// sessionStorage.setItem('nome', nome);
localStorage.setItem('nome', nome);