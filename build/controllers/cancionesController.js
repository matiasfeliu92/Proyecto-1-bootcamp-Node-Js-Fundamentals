"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mostrarCancion = exports.mostrarCanciones = exports.crearCancion = void 0;
const Cancion_1 = require("../models/Cancion");
const crearCancion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { titulo, autor, album, genero, duracion, imagen, linkyoutube } = req.body;
        const cancion = new Cancion_1.Canciones();
        cancion.titulo = titulo;
        cancion.autor = autor;
        cancion.album = album;
        cancion.genero = genero;
        cancion.duracion = duracion;
        cancion.imagen = imagen;
        cancion.linkyoutube = linkyoutube;
        yield cancion.save();
        res.json(cancion);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(403).json({ message: error.message });
        }
    }
});
exports.crearCancion = crearCancion;
const mostrarCanciones = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const canciones = yield Cancion_1.Canciones.find();
        res.json(canciones);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(403).json({ message: error.message });
        }
    }
});
exports.mostrarCanciones = mostrarCanciones;
const mostrarCancion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const cancion = yield Cancion_1.Canciones.findOneBy({ id: parseInt(id) });
        if (cancion) {
            res.json(cancion);
        }
        else {
            res.status(403).json({ message: 'no se encontro la cancion buscada' });
        }
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(403).json({ message: error.message });
        }
    }
});
exports.mostrarCancion = mostrarCancion;
