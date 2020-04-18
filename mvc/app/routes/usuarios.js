var express = require('express');
var router = express.Router();
// https://www.npmjs.com/package/multer#diskstorage
const multer = require('multer');
const path = require('path');

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
router.post('/criar', upload.any(), UsuarioController.salvarForm);

router.get('/login', UsuarioController.loginForm);
router.post('/login', UsuarioController.logarUsuario);

module.exports = router;
