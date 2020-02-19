const express = require('express');
const rotasProdutos = require('./routes/produtos');

let app = express();
app.use('/produtos', rotasProdutos);

app.listen(8000, () => { console.log('Servidor rodando com Express.') })

app.get('/', (req, res) => { res.send('Olá Mundo!'); })

app.get('/contato', (req, res) => { res.send(['Contato1', 'Contato2']); })

app.get('/produtos/:id?', (req, res) => { 
    let id = req.params.id; 
    res.send('Escolheu o produto ' + id); 
})