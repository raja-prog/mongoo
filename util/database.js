const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-assignments', 'root', '999aaaAAA!@#', {
    dialect: 'mysql',
    host:'localhost'
});

module.exports= sequelize;