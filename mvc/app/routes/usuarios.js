var express = require('express');
var router = express.Router();

const UsuarioController = require('../controllers/UsuarioController');

router.get('/criar', UsuarioController.registroForm);
router.post('/criar', UsuarioController.salvarForm);

router.get('/login', UsuarioController.loginForm);
router.post('/login', UsuarioController.logarUsuario);

module.exports = router;
