
window.addEventListener('load', function () {

  // Propriedades innerText e innerHTML
  document.querySelector('h1').innerText = 'Javascript Front';
  document.querySelector('h3').innerText = 'Adicionando conteúdo';
  document.querySelector('h3').innerText += ' usando código';
  document.querySelector('body').innerHTML += '<mark>Javascript ROCKS</mark>'

  // Propriedade style
  document.querySelector('body').style.color = 'blue';
  document.querySelector('h2').style.textAlign = 'center';
  document.querySelector('h4').style.fontStyle = 'italic';

  const livros = document.querySelectorAll('li');
  for (let livro of livros) {
    livro.style.color = 'orange';
  }

  // Propriedade classList
  document.querySelector('div').classList.add('container');
  document.querySelector('.titulo').classList.remove('titulo');
  document.querySelector('.titulo').classList.toggle('titulo-tuneado');

  // Eventos do mouse
  let linkContato = document.querySelector('.contato');
  linkContato.addEventListener('click', () => {
    console.log(this);
  })

  let titulo = document.querySelector('h1');
  titulo.addEventListener('mouseover', () => {
    titulo.classList.add('titulo');
  })

  let links = document.querySelectorAll('a');
  for (let link of links) {
    link.addEventListener('mouseout', () => {
      this.classList.toggle('dark-mode');
    })
  }

  // Eventos do teclado
  window.addEventListener('keypress', (e) => {
    if (e.key == 'Enter') {
      alert('Enter pressionado')
    }
  })

  // Timers
  setTimeout(() => {
    document.body.style.backgroundColor = 'coral';
  }, 5000);

  let timer = setInterval(() => {
    let date = new Date();
    relogio.innerText = date.toLocaleString();
  }, 1000);

  setTimeout(() => {
    clearInterval(timer);
  }, 10000);

});

// Eventos de formulários

let errorList = document.querySelector('#error-list')
let errorListUl = document.querySelector('#error-list ul')

form.addEventListener('submit', (e) => {    
  errorListUl.innerHTML = '';
  if (nome.value == '') {
      errorListUl.innerHTML += '<li>Campo <strong>nome</strong> não preenchido</li>'
  }
  if (email.value == '') {
      errorListUl.innerHTML += '<li>Campo <strong>email</strong> não preenchido</li>'
  }  
  if (errorListUl.querySelectorAll('li').length > 0) {
      e.preventDefault();
      errorList.hidden = '';
  }


// Validações

window.addEventListener('load', function() {
  let formulario = document.querySelector('form');
  formulario.addEventListener('submit', function(evento) {

    evento.preventDefault();

    let nome = document.querySelector('#nome');
    if (nome.value == '') {
      console.log( 'Ocorreu um erro no campo nome');
    }
    let senha = document.querySelector('#senha');
    if (senha.value.length < 4) {
      console.log( 'Ocorreu um erro no campo senha');
    }

  })
});