const express = require('express')
const router = express.Router()
const cors = require('cors');

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

const cancionesController = require('../controllers/control')

router.get('/canciones', cors(corsOptions), cancionesController.showAll)
router.get('/detalleCancion/:id', cancionesController.showById)
router.post('/guardar', cancionesController.create)
router.put('/actualizar/:id', cancionesController.update)
router.get('/eliminar/:id', cancionesController.delete)

module.exports = router