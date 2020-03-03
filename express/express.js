// Tour no Ecossistema Express
const express = require('express');
let app = express();

// Servidor HTTP no Express

app.listen(8000, () => {
    console.log('Servidor rodando com Express.')
})

// Rotas no Express --> app.method(path, handler);

app.get('/', (req, res) => {
    res.send('Olá Mundo!');
})

app.get('/contato', (req, res) => {
    res.send(['Contato1', 'Contato2']);
})

'npm install nodemon -g' // nodemon para restartar o servidor automaticamente;

// Rotas Parametrizadas

app.get('/produtos/:id?', (req, res) => {
    let id = req.params.id;
    res.send('Escolheu o produto ' + id);
})

// Sistema de Roteamento -> arquivo dentro de ./routes (boa prática)

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    // código
})

router.get('/detalhe', (req, res) => {
    // código
})

module.exports = router;