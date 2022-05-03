import {Router} from 'express'
import cors from 'cors'
import { crearCancion } from '../controllers/cancionesController'
const router = Router()

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

// router.get('/', cors(corsOptions), cancionesController.showAll)
// router.get('/detalleCancion/:id', cors(corsOptions), cancionesController.showById)
router.post('/guardar', cors(corsOptions), crearCancion)
// router.put('/actualizar/:id', cors(corsOptions), cancionesController.update)
// router.get('/eliminar/:id', cancionesController.delete)

export default router