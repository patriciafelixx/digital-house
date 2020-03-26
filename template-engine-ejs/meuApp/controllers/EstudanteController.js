const EstudanteController = {
    index: (req, res) => {
        res.render('estudantes');
    }
    // EstudanteControler.index irá renderizar a view estudantes.ejs
}

module.exports = EstudanteController;