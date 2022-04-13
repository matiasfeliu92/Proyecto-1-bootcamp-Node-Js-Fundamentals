const {Cancion} = require('../database/db')

const control = {

    create: (req, res) => {
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
            //console.log(cancion)
            res.status(200).json(cancion)
        })
        .catch((err) => {
            console.log(err.parent.sqlMessage)
            res.status(403).json(err.parent.sqlMessage)
        })
    },

    showAll: (req, res) => {
        Cancion.findAll()
        .then((cancion) => {
            if(cancion) {
                //console.log(cancion)
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
                //console.log(cancion)
                return res.status(200).json(cancion)
            } else {
                res.status(403).json({message: "no se encontro ninguna cancion con el id seleccionado"})
            }
        })
        .catch((err) => {
            console.log(`Se ha producido el siguiente error: ${err}`)
        })
    },

    update: (req, res) => {
        const id = req.params.id
        Cancion.findOne({where:{id: id}})
        .then((cancion) => {
            if(cancion) {
                Cancion.update({
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
                    console.log(`Se ha producido el siguiente error: ${err}`)
                })
            } else {
                return res.status(404).json({message: 'No se pudo actualizar la cancion'})
            }
        })
    },

    delete: (req, res) => {
        const id = req.params.id
        Cancion.findOne({where:{id: id}})
        .then((cancion) => {
            if(cancion) {
                Cancion.destroy({
                    where:{id: id}
                })
                .then((cancion) => {
                    //console.log(cancion)
                    res.status(200).json({message: `se elimino la cancion seleccionada`})
                })
            } else {
                return res.status(403).json({message: 'No se pudo eliminar la cancion'})
            }
        })
        .catch(function(error){
            console.log(`Se ha producido el siguiente error: `, error);
        })
    }

}

module.exports = control