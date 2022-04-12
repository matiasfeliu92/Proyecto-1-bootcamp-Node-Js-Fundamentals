const Sequelize = require('sequelize')
const dotenv = require('dotenv').config()

const CancionModel = require('../models/canciones')

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'mysql'
})

const Cancion = CancionModel(sequelize, Sequelize)

sequelize.sync()
    .then(()=>{
        console.log('Tablas Creadas')
    })

    module.exports = {
        Cancion
    }