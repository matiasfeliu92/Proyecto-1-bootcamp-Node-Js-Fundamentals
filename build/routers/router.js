"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cancionesController_1 = require("../controllers/cancionesController");
const router = (0, express_1.Router)();
// const corsOptions = {
//     origin: '*',
//     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }
router.get('/', cancionesController_1.mostrarCanciones);
router.get('/:id', cancionesController_1.mostrarCancion);
router.post('/guardar', cancionesController_1.crearCancion);
// router.put('/actualizar/:id', cors(corsOptions), cancionesController.update)
// router.get('/eliminar/:id', cancionesController.delete)
exports.default = router;
