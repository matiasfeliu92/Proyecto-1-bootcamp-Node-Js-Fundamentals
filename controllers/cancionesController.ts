import {Request, Response} from 'express'
import { Canciones } from '../models/Cancion'

export const crearCancion = async (req: Request, res: Response) => {
    try {
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
    } catch (error) {
        if(error instanceof Error){
            res.status(403).json({message: error.message})
        }
    }
}

export const mostrarCanciones = async(req: Request, res: Response) => {
    try {
        const canciones = await Canciones.find()
        res.json(canciones)
    } catch (error) {
        if(error instanceof Error){
            res.status(403).json({message: error.message})
        }
    }
}

export const mostrarCancion = async(req: Request, res: Response) => {
    try {
        const {id} = req.params
        const cancion = await Canciones.findOneBy({ id: parseInt(id) })
        if(cancion) {
            res.json(cancion)
        } else {
            res.status(403).json({message: 'no se encontro la cancion buscada'})
        }
    } catch (error) {
        if(error instanceof Error){
            res.status(403).json({message: error.message})
        }
    }
}