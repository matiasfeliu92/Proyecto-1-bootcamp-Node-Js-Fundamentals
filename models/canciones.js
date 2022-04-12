module.exports = (sequelize, type) => {
    const Cancion = sequelize.define('canciones', {
        titulo: {
            type: type.STRING,
            allowNull: false
        },
        autor: {
            type: type.STRING,
            allowNull: false
        },
        album: {
            type: type.STRING,
            allowNull: false
        },
        duracion: {
            type: type.INTEGER,
            allowNull: false
        },
        genero: {
            type: type.STRING,
            allowNull: false
        },
        imagen: {
            type: type.STRING(1000) 
        },
        linkyoutube: {
            type: type.STRING(1000) 
        }
    })
    return Cancion
}