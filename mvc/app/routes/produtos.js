let express = require('express');
let router = express.Router();
let ProdutoController = require('../controllers/ProdutoController');
let auth = require('../middlewares/auth');

router.get('/criar', ProdutoController.viewForm);
router.post('/criar', ProdutoController.saveForm);
router.get('/sucesso', ProdutoController.sucesso);
router.get('/:id/editar', ProdutoController.viewAttForm);
router.put('/editar', ProdutoController.editar);
router.get('/', auth, ProdutoController.listarProdutos);
router.delete('/deletar/:id', ProdutoController.deletarProduto);

module.exports = router;