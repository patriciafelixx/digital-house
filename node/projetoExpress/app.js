const express = require('express');
const rotasProdutos = require('./routes/rotasProdutos');

let app = express();

app.get('/', (req, res) => { res.send('Olá Mundo!') });
app.get('/contato', (req, res) => { res.send('Página contatos!') });

app.use('/produtos', rotasProdutos);

// app.get('/produtos/:id?', (req, res) => { 
//     let { id } = req.params; 
//     res.send('Eu tenho um produto com o id ' + id); 
// })

app.listen(3000, () => { console.log('Servidor rodando na porta 3000.') });