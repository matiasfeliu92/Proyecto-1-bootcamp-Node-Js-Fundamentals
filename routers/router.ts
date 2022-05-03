import {Router} from 'express'
import cors from 'cors'
import { crearCancion, mostrarCancion, mostrarCanciones } from '../controllers/cancionesController'
const router = Router()

// const corsOptions = {
//     origin: '*',
//     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }

router.get('/', mostrarCanciones)
router.get('/:id', mostrarCancion)
router.post('/guardar', crearCancion)
// router.put('/actualizar/:id', cors(corsOptions), cancionesController.update)
// router.get('/eliminar/:id', cancionesController.delete)

export default router