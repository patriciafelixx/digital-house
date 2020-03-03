## Introdução ao JavaScript

### Variáveis
```javascript
var nome;
let contador;
const url;

var meuApelido = 'Hackerman';
meuApelido = 'Zezinho';
```

### Tipos de dados

```javascript
// Number
var idade = 35;
var preco = 150.65;

// String
var nome = 'Madero';

// Boolean
var luzLigada = true;
var diaEstaChuvoso = false;

// Object
var pessoa = {
    nome: 'João',
    idade: 34,
    solteiro: true;
}

// Array
var comidasFavoritas = ['Feijoada', 'Pizza', 'Hamburger'];

// NaN
var divisaoRuim = '35' / 2;

// Null
var temperatura = null;

// Undefined
var outraVariavel;
```

### Operadores
```javascript
// aritméticos
let soma = n1 + n2;
let subtracao = n1 - n2;
let multiplicacao = n1 * n2;
let divisao = n1 / n2;

// de incremento
let incremento = n++ || ++n;
let decremento = n-- || --n;

// de comparação
let igualdade = 10 == 5; // false;
let diferença = 10 != 5; // true;
let igualdadeEstrita = 5 === '5'; // false
let diferençaEstrita = 5 !== '5'; // true
let maior = 10 > 5; // true
let menor = 10 < 5; // false

// lógicos
let and = (3 % 2 == 0) && (1 != 2) // false
let or = (3 % 2 == 0) || (1 != 2) // true
let not = !(2 == 2) // false;
```

### Condicionais
```javascript
// if
if (dia == 'domingo') {
    console.log('Vou para a praia');
} else {
    console.log('Vou ficar em casa');
}

// else if {
if (clima == 'ensolarado' && dia == 'domingo') {
    console.log('Vou para a praia');
} else if (clima == 'nublado' && dia == 'sabado') {
    console.log('Vou para o cinema');
} else {
    console.log('Vou ficar em casa');
}

// if ternário
let decisao = dia == domingo ? 'Vou para a praia' : 'Vou ficar em casa';

// switch
switch (dia) {
    case 'segunda':
        console.log('Vou para o curso');
        break;
    case 'sabado':
        console.log('Vou para o cinema');
        break;
    case 'domingo':
        console.log('Vou para a praia');
        break;
    default:
        console.log('Vou fazer nada!');
}
```

### Ciclos
```javascript
// for
for (let i = 0; i < 4; i++) {
    console.log(i); // 0 1 2 3
}

// while
while (i < 4) {
    console.log(i) ;
    i++;
}

// do while
do {
    console.log(i);
    i++;
} while (i < 4)

// for in
let carro = { nome: 'fox', ano: '2011' };
for(let prop in carro) {
    console.log(prop); // nome  ano
    console.log(carro[prop]); // fox  2011
}

// for of
let series = ['Friends', 'Game of Thrones', 'Breaking Bad']
for(let item of series) {
    console.log(item); // Friends  Game of Thrones  Breaking Bad
}
```

### Operador Spread
```javascript
// Spread Operator

let frutasUm = ['banana', 'pera', 'maçã'];
let frutasDois = ['pessego', 'ameixa', 'laranja'];
let frutas = [...frutasUm, ...frutasDois];
console.log(frutas); 
// [ 'banana', 'pera', 'maçã', 'pessego', 'ameixa', 'laranja' ]

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
```

### Desestruturação
```javascript
// Destructuring

let destinosDelMundo = ['Marruecos', 'Bariloche', 'Barcelona', 'China', 'Grecia'];
let [ , bariloche, , china, ] = destinosDelMundo;

console.log(bariloche); // Bariloche
console.log(china); // China
```

### Conversão de dados
```javascript
Number('5'); // 5
Number('olá'); // NaN
parseInt('18.9'); // 18
parseFloat('5.6'); // 5.6
String(3005); // '3005'
String({nome: 'Rosa'}); // "[object Object]"
```
### Métodos de Strings
```javascript
.length // representa o comprimento de uma string.
.indexOf() // retorna o índice da primeira ocorrência do valor especificado .
.lastIndexOf() // retorna o índice da última ocorrência do valor especificado.
.slice() // extrai uma sessão de uma string e retorna uma nova  string.
.trim() // remove os espaços em branco (whitespaces) do início e/ou fim de um texto.
.split() // divide uma string em um array de strings, podendo especificar o separador.
.replace() // retorna uma nova string com as substituições especificadas.
.charAt() // retorna o caractere especificado a partir de uma string.
.charCodeAt() // retorna um inteiro entre 0 e 65535 representando a unidade de código UTF-16 em seu dado índice.
.match() // recupera as correspondências ao testar uma string com uma expressão regular.
.repeat() // constrói e retorna uma nova string com o determinado número de cópias concatenadas da string na qual ele foi chamado.
.substr() // retorna os caracteres em uma string começando na localização especificada através do número especificado de caracteres.
.toLowerCase() // retorna a string chamada convertida para minúsculo.
.toUpperCase() // retorna o valor da string chamada convertida para maiúscula.
```

### Métodos de Arrays
```javascript
.push() // adiciona um ou mais elementos ao final de um array.
.pop() // remove o último elemento do array.
.unshift() // adiciona um ou mais elementos no início de um array.
.shift() // remove o primeiro elemento do array.
.indexOf() // retorna o primeiro índice do elemento encontrado, ou -1 caso não esteja presente.
.lastIndexOf() // retorna o ultimo índice do elemento encontrado, ou -1 caso não esteja presente.
.join() // junta todos os elementos de uma array.
.includes() // determina se um array contém um determinado elemento, retornando true ou false.
.slice() // retorna uma cópia de parte de um array a partir de um subarray criado entre as posições início e fim.
.splice() // altera o conteúdo de uma lista, adicionando novos elementos enquanto remove elementos antigos.
.reverse() // inverte os itens de um array. 
.sort() // ordena os elementos do próprio array e retorna o array.
.concat() // retorna um novo array contendo todos os arrays ou valores passados como parâmetro.
.findIndex() // retorna o índice no array do primeiro elemento que satisfizer a função de teste provida, ou -1.

.map() // invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado.
.find() // retorna o valor do primeiro elemento do array que satisfizer a função de teste provida.
.filter() // cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.
.reduce() // executa uma função reducer para cada membro do array, resultando num único valor de retorno.
.forEach() // executa uma dada função em cada elemento de um array.

.flat() // cria um novo array com todos elementos sub-arrays concatenados nele de forma recursiva até a profundidade especificada.
.some() // testa se algum dos elementos no array passam no teste implementado pela função atribuída.
.toLocaleString() // retorna uma representaçao de elementos de um array.
.toString() // retorna uma string representando um array específico e seus elementos.
```

## Funções

### Tipos de funções
```javascript
// Declarada
function dobro(n) {
    return n * 2;
}
// Expressa
let dobro = function(n) {
    return n * 2;
}
// Arrow function
let dobro = n => n * 2;
```

### Callbacks
```javascript
const somar = (a, b) => a + b;
const diff = (a, b) => a - b;
const operar = (operacao, a, b) => {
    return operacao(a, b);
}
console.log(operar(somar, 4, 5)); // 9

// -------------------------------------------- //

setTimeout(() => {
    console.log('Alô, primavera!!!')
}, 2000);
```

### Closures
```javascript
/*  function pai() {
        function filha() {
            ...
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
console.log(saudacao('Mohana'));
```



### Assincronísmo
```javascript
const alarme1 = () => 'Hora de acordar! São 08h00';
const alarme2 = () => 'Está perto da sua hora de acordar! São 07h50';

setTimeout(function() {
    console.log(alarme1())
}, 2000)

console.log(alarme2());
// Está perto da sua hora de acordar! São 07h50
// Hora de acordar! São 08h00
```