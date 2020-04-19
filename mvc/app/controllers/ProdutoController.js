const fs = require('fs');
const path = require('path');
const produtosJson = path.join('database', 'produtos.json');

const ProdutoController = {
    viewForm: (req, res) => {
        res.render('produto');  
    },
    saveForm: (req, res) => {
        let { nomeProduto, precoProduto } = req.body;
        // salvar no banco
        let dadosJson = JSON.stringify([{ nome: nomeProduto, preco: precoProduto }]);
        fs.writeFileSync(produtosJson, dadosJson);
        res.redirect('/produtos/sucesso');
    },
    sucesso: (req, res) => {
        res.render('sucesso');
    },
    viewAttForm: (req, res) => {
        let { id } = req.params;
        let produtos = [
            { id: 1, nome: 'Produto X', preco: 10 },
            { id: 2, nome: 'Produto Y', preco: 20 }
        ]
        res.render('editarProduto', { produto: produtos[id] });
    },
    editar: (req, res) => {
        let { nomeProduto, precoProduto } = req.body;
        res.send(`Voce editou o produto ${nomeProduto}`)
    },
    listarProdutos: (req, res)  => {
        let produtos = fs.readFileSync(produtosJson, { encoding: 'utf-8'});
        produtos = JSON.parse(produtos);
        res.render('listaProdutos', { listaProdutos: produtos, usuario: req.session.usuario });
    },
    deletarProduto: (req, res) => {
        let { id } = req.params;
        res.send(`Estou deletando o produto com o id ${id}.`)
    }
}

module.exports = ProdutoController;