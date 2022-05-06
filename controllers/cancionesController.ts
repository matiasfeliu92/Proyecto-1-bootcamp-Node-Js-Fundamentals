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

export const actualizarCancion = async(req: Request, res: Response) => {
    const {id} = req.params
    try {
        const cancion = await Canciones.findOneBy({id: parseInt(id)})
        if(cancion){
            await Canciones.update({id: parseInt(id)}, req.body)
            res.json(cancion)
        } else {
            res.status(403).json({message: 'no se pudo actualizar la cancion'})
        }
    } catch (error) {
        if(error instanceof Error){
            res.status(403).json({message: error.message})
        }
    }
}

export const eliminarCancion = async (req: Request, res: Response) => {
    const {id} = req.params
    try {
        const cancion = await Canciones.findOneBy({id: parseInt(id)})
        if(cancion){
            await Canciones.delete({id: parseInt(id)})
            res.json(cancion)
        } else {
            res.status(403).json({message: 'no se pudo eliminar la cancion'})
        }
    } catch (error) {
        if(error instanceof Error){
            res.status(403).json({message: error.message})
        }
    }
}