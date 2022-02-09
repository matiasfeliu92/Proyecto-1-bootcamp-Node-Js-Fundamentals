const express = require('express')
const router = express.Router()

const control = require('./controllers/control')

router.get('/canciones', control.getAll)
router.post('/guardar', control.insert)
router.post('/actualizar/:id', control.update)
router.get('/eliminar/:id', control.delete)

module.exports = router 