import {Router} from 'express'
import cors from 'cors'
import { actualizarCancion, crearCancion, eliminarCancion, mostrarCancion, mostrarCanciones } from '../controllers/cancionesController'
const router = Router()

// const corsOptions = {
//     origin: '*',
//     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }

router.get('/', mostrarCanciones)
router.get('/:id', mostrarCancion)
router.post('/guardar', crearCancion)
router.put('/actualizar/:id', actualizarCancion)
router.delete('/eliminar/:id', eliminarCancion)

export default router