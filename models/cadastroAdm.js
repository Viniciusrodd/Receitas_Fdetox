
const Conection = require('../database/database');
const Sequelize = require('sequelize');


const cadastroAdm = Conection.define('cadastroAdm', {
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    senha: {
        type: Sequelize.STRING,
        allowNull: false
    }
})


module.exports = cadastroAdm;