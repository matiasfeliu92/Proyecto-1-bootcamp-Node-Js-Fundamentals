const express = require('express')
const router = express.Router()

const control = require('../controllers/control')

// router.get('/', control.formCreate)
router.get('/canciones', control.showAll)
router.post('/guardar', control.create)
router.get('/detalleCancion/:id', control.showById)
// router.post('/actualizar/:id', control.update)
// router.get('/eliminar/:id', control.delete)

module.exports = router