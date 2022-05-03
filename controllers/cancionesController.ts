import {Request, Response} from 'express'
import { Canciones } from '../models/Cancion'

export const crearCancion = async (req: Request, res: Response) => {
    const {titulo, autor, album, genero, duracion, imagen, linkyoutube} = req.body

    const cancion = new Canciones()
    cancion.titulo = titulo
    cancion.autor = autor
    cancion.album = album
    cancion.genero = genero
    cancion.duracion = duracion
    cancion.imagen = imagen
    cancion.linkyoutube = linkyoutube

    await cancion.save()
    res.json(cancion)
}