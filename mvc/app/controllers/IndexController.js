const celulares = require('../database/celulares.json');

const IndexController = {
    contatoView: (req, res) => {
        let { nome, idade } = req.query;
        res.render('contato', { nomeUsuario: nome });
    },
    confirmarContato: (req, res) => {
        let { nome, email } = req.query;
        res.send(`Informações recebidas com sucesso! --> nome: ${nome} / email: ${email}.`);
    },
    listarCelulares: (req, res) => {
        let { max } = req.query;
        max ? res.send(celulares.filter(x => x.preco <= max)) : res.send(celulares);
    }
}

module.exports = IndexController;