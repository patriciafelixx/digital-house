// --------------------EXERCICIO-----------------
// Escrever uma função que retorne o preço de um celular, com a comissão do vendedor(a);
// E que te faça comprar celulares enquanto você tiver dinheiro no banco (saldo); (loops)
// E que você compre acessórios (capinha) se não passar o limite que você quer gastar; (condicional)
// Depois de calcular o preço da compra (celular + capinha) adiciona a comissão para o preço final.
// Checar se o preço final bate cabe no orçamento.

// Você deve declarar constantes para a comissão do vendedor(a); preço do celular e preço da capinha
// usar uma variável para o saldo bancário;
// definir uma função para calcular o preço com a comissão; e formatar o valor com R$/$ -> R$ 100.00;
// arendodar duas casas decimais -> variavel.toFixed (2);

const precoCelular = 800;
const precoCapinha = 20;
let comissaoVendedor = 0.1;
let saldoBanco = 2000;

const real = valor => `R$ ${valor.toFixed(2).replace('.', ',')}`;

const precoCombo = (precoCelular + precoCapinha) * (1 + comissaoVendedor);

console.log(`Saldo Bancário: ${real(saldoBanco)}`)

const comprar = () => {    
    let qtd = 0;
    while (saldoBanco >= precoCombo) {
        saldoBanco -= precoCombo;
        qtd++;
    }
    const subtotal = (qtd * precoCelular) + (qtd * precoCapinha);
    console.log(`- - - - - COMPRA EFETUADA - - - - -`);
    console.log(`CELULAR - ${qtd} unidade(s): ${real(qtd * precoCelular)}`);
    console.log(`CAPINHA - ${qtd} unidade(s): ${real(qtd * precoCapinha)}`);
    console.log(`SUBTOTAL ${real(subtotal)}`);
    console.log(`${comissaoVendedor * 100}% de comissão p/ o vendedor: ${real(subtotal * comissaoVendedor)}`);
    console.log(`TOTAL COMPRA: ${real(subtotal * (1 + comissaoVendedor))}`)
    console.log(`Saldo Bancário Atualizado: ${real(saldoBanco)}`)
    return saldoBanco;
}

comprar();

/* Info: Start process
Saldo Bancário: R$ 2000,00
- - - - - COMPRA EFETUADA - - - - -
CELULAR - 2 unidade(s): R$ 1600,00
CAPINHA - 2 unidade(s): R$ 40,00
SUBTOTAL R$ 1640,00
10% de comissão p/ o vendedor: R$ 164,00
TOTAL COMPRA: R$ 1804,00
Saldo Bancário Atualizado: R$ 196,00
Info: End process */