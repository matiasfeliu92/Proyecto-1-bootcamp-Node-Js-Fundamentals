const express = require('express')
const router = express.Router()

const control = require('../controllers/control')

router.get('/canciones', control.showAll)
router.get('/detalleCancion/:id', control.showById)
router.post('/guardar', control.create)
router.put('/actualizar/:id', control.update)
router.get('/eliminar/:id', control.delete)

module.exports = router