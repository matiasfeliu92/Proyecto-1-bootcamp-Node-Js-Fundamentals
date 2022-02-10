const conn = require('../database/db')
const path = require('path')

function views(document){
    return path.join(__dirname,"views",document)
}

const control = {}

control.getAll = async (req, res) => {
    await conn.query('SELECT * FROM canciones', (err, results)=>{
        if(err){
            return res.json(err)
        }
            return res.json(results)
    })
}

control.insert = async (req, res) => {
    const cancion = req.body
    console.log(cancion)
    await conn.query('INSERT INTO canciones SET ?', [cancion], (err, results)=>{
        if(err){
            return res.json(err)
        }
            return res.json(results)
    })
}

control.update = async (req, res) => {
    const id = req.params.id
    const cancion = req.body
    await conn.query('UPDATE canciones SET ? WHERE id = ?', [cancion, id], (err, results)=>{
        if(err){
            return res.json(err)
        }
            return res.json(results)
    })
}

control.delete = async (req, res) => {
    const id = req.params.id
    await conn.query('DELETE FROM canciones WHERE id = ?', [id], (err, results)=>{
        if(err){
            return res.json(err)
        }
            return res.json(results)
    })
}

module.exports = control 