import {Router} from 'express'
import cors from 'cors'
import { actualizarCancion, crearCancion, eliminarCancion, mostrarCancion, mostrarCanciones } from '../controllers/cancionesController'
const router = Router()

router.get('/', mostrarCanciones)
router.get('/:id', mostrarCancion)
router.post('/guardar', crearCancion)
router.put('/actualizar/:id', actualizarCancion)
router.delete('/eliminar/:id', eliminarCancion)

export default router