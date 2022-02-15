const conn = require('../database/db')

const control = {}

control.formCreate = (req, res) => {
    return res.render('index', {h1Index: 'Ingresa tu Canción favorita'})
}

control.getAll = async (req, res) => {
    await conn.query('SELECT * FROM canciones', (err, results)=>{
        if(err){
            return res.json(err)
        }
            return res.render('verCanciones', {h1VerCanciones: 'Bienvenidos a mi lista de canciones', results: results})
    })
}

control.getbyId = async (req,res) => {
    const id = req.params.id
    await conn.query('SELECT * FROM canciones where id = ?', [id], (err, results) => {
        if(err) {
            return res.json(err)
        }
        return res.render('detalleCancion', {results: results})
    })
}


control.insert = async (req, res) => {
    const cancion = req.body
    console.log(cancion)
    await conn.query('INSERT INTO canciones SET ?', [cancion], (err, results)=>{
        if(err){
            return res.json(err)
        }
            return res.redirect('/canciones')
    })
}

control.update = async (req, res) => {
    const id = req.params.id
    const cancion = req.body
    await conn.query('UPDATE canciones SET ? WHERE id = ?', [cancion, id], (err, results)=>{
        if(err){
            return res.json(err)
        }
            return res.redirect('/canciones')
    })
}

control.delete = async (req, res) => {
    const id = req.params.id
    await conn.query('DELETE FROM canciones WHERE id = ?', [id], (err, results)=>{
        if(err){
            return res.json(err)
        }
            return res.redirect('/canciones')
    })
}

module.exports = control