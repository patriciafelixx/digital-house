var express = require('express');
var router = express.Router();
// https://www.npmjs.com/package/multer#diskstorage
const multer = require('multer');
const path = require('path');
const logDBMiddleware = require('../middlewares/logDB');
const { check, validationResult, body } = require('express-validator');
const fs = require('fs');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join('uploads'));
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
}) 
var upload = multer({ storage: storage });

const UsuarioController = require('../controllers/UsuarioController');

router.get('/criar', UsuarioController.registroForm);

// EXPRESS-VALIDATOR 
// https://github.com/validatorjs/validator.js#validators
router.post('/criar', upload.any(), logDBMiddleware, [
  check('nome').isLength({min: 3}).withMessage('O nome do usuário deve conster no mínimo 3 caracteres.'),
  check('email').isEmail().withMessage('Digite um e-mail válido.'),
  check('senha').isLength({min: 6}).withMessage('A senha deve conster no mínimo 6 caracteres.'),
  body('email').custom( email => {
    let usuario = JSON.parse(fs.readFileSync('database/usuarios.json'));
    return usuario.email != email;
  }).withMessage('Usuário já existe!')
], UsuarioController.salvarForm);

router.get('/login', UsuarioController.loginForm);
router.post('/login', UsuarioController.logarUsuario);

module.exports = router;
