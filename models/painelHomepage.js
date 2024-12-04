
const Sequelize = require('sequelize');
const Conection = require('../database/database');

const painelHome = Conection.define('painelHome', {
    page_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    screen_time: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    clicks_lift: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    clicks_secando: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    clicks_treino: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    }
}, {
    timestamps: true
});


module.exports = painelHome;