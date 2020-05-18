let logo = document.getElementById('logo');
let servicos = document.getElementById('nav-servicos');
let cards = document.querySelectorAll('.card-servico img');
let relogio = document.getElementById('relogio');
let nome = document.getElementById('nome');
let estado = document.getElementById('estado');
let form = document.getElementById('contato-form');
let errorList = document.querySelector('#error-list')
let errorListUl = document.querySelector('#error-list ul')

servicos.addEventListener('click', (e) => {
    e.preventDefault();
    servicos.style.backgroundColor = '#FFA000';
    servicos.style.color = '#FFF';
})

logo.onclick = function () {
    this.style.transform = 'scale(1.1)';
}

logo.ondblclick = function () {
    this.style.transform = 'scale(1)';
}

for (let i = 0; i < cards.length; i++) {
    cards[i].onmouseover = function() {
        this.classList.remove('shrink');
        this.classList.add('grow');
    }
    cards[i].onmouseout = function() {
        this.classList.remove('grow');
        this.classList.add('shrink');
    }
}

window.addEventListener('keypress', (e) => {
    if (e.key == 'Enter') {
        alert('Enter pressionado')
    }
})

let timer =  setInterval(() => {
    let date = new Date();
    relogio.innerText = date.toLocaleString();
}, 1000);

setTimeout(() => {
    clearInterval(timer);
}, 10000);

nome.addEventListener('focus', () => {
    nome.style.backgroundColor = '#EEE';
})

nome.addEventListener('blur', () => {
    nome.style.backgroundColor = '#FFF';
})

nome.addEventListener('keyup', () => {
    if (nome.value.length > 2) {
        console.log(nome.value);
    }
})

estado.addEventListener('change', () => {
    console.log(estado.value);
})

form.addEventListener('submit', (e) => {
    
    errorListUl.innerHTML = '';
    if (nome.value == '') {
        errorListUl.innerHTML += '<li>Campo <strong>nome</strong> não preenchido</li>'
    }
    if (email.value == '') {
        errorListUl.innerHTML += '<li>Campo <strong>email</strong> não preenchido</li>'
    }
    if (estado.value == '') {
        errorListUl.innerHTML += '<li>Campo <strong>estado</strong> não preenchido</li>'
    }
    if (mensagem.value == '') {
        errorListUl.innerHTML += '<li>Campo <strong>mensagem</strong> não preenchido</li>'
    }
    
    if (errorListUl.querySelectorAll('li').length > 0) {
        e.preventDefault();
        errorList.hidden = '';
    }

})