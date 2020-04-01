var express = require('express');
var router = express.Router();
const IndexController = require('../controllers/IndexController');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Blend' });
});

router.get('/contato', IndexController.contatoView);
router.get('/confirmarcontato', IndexController.confirmarContato);
router.get('/celulares', IndexController.listarCelulares);

module.exports = router;