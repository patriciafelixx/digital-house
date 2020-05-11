const { Usuario } = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const UserController = {
    index: async (req, res) => {
        let { page=1 } = req.query;
        let {count:total, rows:users} = await Usuario.findAndCountAll({
            limit: 5,
            offset: (page - 1) * 5
        });
        let totPage = Math.round(total / 5);
        res.render('usuarios', {users, totPage});
    },
    create: (req, res) => {
        res.render('cadastroUsuario')
    },
    store: async (req, res) => {
        const { nome, email, senha } = req.body;
        const result = await Usuario.create({
            nome,
            email,
            senha
        })
        console.log(result);
        return res.redirect('/users');
    },
    findbyId: async (req, res) => {
        let { id } = req.params;

        let user = await Usuario.findOne({
            where: {
                id_usuario: id
            }
        });
        res.render('viewUsuario', {user});
    },
    search: async (req, res) => {
        let { key } = req.query;

        let users = await Usuario.findAll({
            where: {
                nome: {
                    [Op.like]: `%${key}%`
                }
            },
            order: [
                ['nome', 'DESC']
            ]
        });
        res.render('usuarios', {users});
    },
    bulkCreate: async (req, res) => {
        const listUsers = [
            { nome: 'Fulano1', email: 'fulano1@email.com', senha: '123456' },
            { nome: 'Fulano2', email: 'fulano2@email.com', senha: '234567' },
            { nome: 'Fulano3', email: 'fulano3@email.com', senha: '234567' },
            { nome: 'Fulano4', email: 'fulano4@email.com', senha: '123456' }
        ]
        const result = Usuario.bulkCreate(listUsers);
        console.log(result);

        res.send('criados');
    },
    edit: async (req, res) => {
        const {id} = req.params; 
        const user = await Usuario.findByPk(id);
        res.render('editarUsuario', {user});
    }, 
    update: async (req, res) => {
        const {id} = req.params;
        const {nome, email, senha} = req.body;
        
        const result = await Usuario.update({
            nome, 
            email,
            senha
        }, {
            where: {
                id_usuario: id
            }
        })
        console.log(result);
        res.redirect('/users');
    },
    destroy: async (req, res) => {
        const {id} = req.params;

        const result = await Usuario.destroy({
            where: {
                id_usuario: id
            }
        })
        console.log(result);
        res.redirect('/users');

    }
}

module.exports = UserController;