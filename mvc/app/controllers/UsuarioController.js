const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
let usuarioJson = path.join('database/usuarios.json');
const { check, validationResult, body } = require('express-validator');

const UsuarioController = {
    registroForm: (req, res) => {
        res.render('registroUsuario');
    },
    salvarForm: (req, res) => {
        let listErrors = validationResult(req);

        if (listErrors.isEmpty()) {
            let { nome, email, senha } = req.body;
            let { files } = req;
            let senhaCript = bcrypt.hashSync(senha, 10);
            let usuario = JSON.stringify({ nome, email, senha: senhaCript, avatar: files[0].originalname });
            fs.writeFileSync(usuarioJson, usuario);
            res.send('Usuario cadastrado com sucesso!')
        } else {
            res.render('registroUsuario', { errors: listErrors.errors });
        }
    },
    loginForm: (req, res) => {
        res.render('login');
    },
    logarUsuario: (req, res) => {
        let { email, senha, logado } = req.body;
        let usuarioSalvo = fs.readFileSync(usuarioJson, { encoding: "utf-8" });
        usuarioSalvo = JSON.parse(usuarioSalvo);

        if (email != usuarioSalvo.email) {
            return res.send('Usuário inválido!')
        }

        if (!bcrypt.compareSync(senha, usuarioSalvo.senha)) {
            return res.send('Senha inválida!');
        }

        req.session.usuario = usuarioSalvo;

        if (logado != undefined) {
            res.cookie('logado', usuarioSalvo.email, { maxAge: 600000 });
        }

        res.redirect('/produtos');
    },
}

module.exports = UsuarioController;