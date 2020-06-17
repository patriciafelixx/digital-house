// $ npm init -y <!-- package.json -->
// $ npm i -D typescript
// $ npx tsc index.ts  <!-- typescript compiler -->

let altura: number = 1.5;

let frutas: string[] = ['maçã', 'banana', 'melão'];

class Usuario {
    public nome: string;
    public email: string;
    public senha: string;
    public idade: number;
    public casado: boolean;

    constructor(nome: string, email: string, senha: string, idade: number, casado: boolean) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.idade = idade;
        this.casado = casado;
    }

    digaOla() {
        console.log(`Olá! Meu nome é ${this.nome}`);
    }
}

let user = new Usuario('fulano', 'fulano@java.com', '123456', 20, true);
user.digaOla();

function calculeDataDeNascimento(u: Usuario) {
    return (new Date()).getFullYear() - u.idade;
}

let data = calculeDataDeNascimento(user);