const {Cancion} = require('../database/db')

const control = {

    create: (req, res) => {
        Cancion.findOne()
        .then((cancion) => {
            if(cancion) {
                return res.json({message: "la cancion ya esta en la lista"})
            } else {
                Cancion.create({
                    titulo: req.body.titulo,
                    autor: req.body.autor,
                    album: req.body.album,
                    duracion: req.body.duracion,
                    genero: req.body.genero,
                    imagen: req.body.imagen,
                    linkyoutube: req.body.linkyoutube
                })
                .then((cancion) => {
                    console.log(cancion)
                    res.status(200).json(cancion)
                })
                .catch((err) => {
                    console.log("No se pudo crear la cancion")
                })
            }
        })
    },

    showAll: (req, res) => {
        Cancion.findAll()
        .then((cancion) => {
            if(cancion) {
                console.log(cancion)
                return res.status(200).json(cancion)
            } else {
                res.status(403).json({message: "no se encontro ninguna cancion en la lista"})
            }
        })
        .catch((err) => {
            console.log(`Se ha producido el siguiente error: ${err}`)
        })
    },

    showById: (req, res) => {
        const id = req.params.id
        Cancion.findOne({where:{id: id}})
        .then((cancion) => {
            if(cancion) {
                console.log(cancion)
                return res.status(200).json(cancion)
            } else {
                res.status(403).json({message: "no se encontro ninguna cancion con el id seleccionado"})
            }
        })
        .catch((err) => {
            console.log(`Se ha producido el siguiente error: ${err}`)
        })
    }

}

module.exports = control