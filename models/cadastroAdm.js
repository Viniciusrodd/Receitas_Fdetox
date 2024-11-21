
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


cadastroAdm.sync({force: false})
    .then(() =>{
        console.log('Tabela registro sincronizada')
    })
    .catch((error) =>{
        console.log('Tabela registro falha na sincronização' + error)
    });


module.exports = cadastroAdm;