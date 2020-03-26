const ContatoController = {
    index: (req, res) => {
        return res.render('contato'); 
        // ContatoControler.index irá renderizar a view contato.ejs
    }
};

module.exports = ContatoController;