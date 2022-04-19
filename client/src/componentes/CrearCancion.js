import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const URI = 'http://localhost:4000/guardar'

const CrearCancion = () => {

    const [titulo, setTitulo] = useState('')
    const [autor, setAutor] = useState('')
    const [album, setAlbum] = useState('')
    const [genero, setGenero] = useState('')
    const [duracion, setDuracion] = useState('')
    const [imagen, setImagen] = useState('')
    const [linkYouTube, setLinkYouTube] = useState('')
    const navigate = useNavigate()

    const store = async (e) => {
        e.preventDefault()
        await axios.post(URI, {imagen: imagen,titulo: titulo, autor: autor, album: album, genero: genero, duracion: duracion, linkYouTube: linkYouTube})
        navigate('/')
    }

    return (
        <div>
            <h1>Ingresa tu cancion favorita</h1>
            <form onSubmit= {store}>
                <div className="container">
                    <label className="form-label">Imagen</label>
                    <input className='form-control' value={imagen} onChange={(e) => setImagen(e.target.value)} type="url" />
                    <label className="form-label">Titulo</label>
                    <input className='form-control' value={titulo} onChange={(e) => setTitulo(e.target.value)} type="text" />
                    <label className="form-label">Autor</label>
                    <input className='form-control' value={autor} onChange={(e) => setAutor(e.target.value)} type="text" />
                    <label className="form-label">Album</label>
                    <input className='form-control' value={album} onChange={(e) => setAlbum(e.target.value)} type="text" />
                    <label className="form-label">Genero</label>
                    <input className='form-control' value={genero} onChange={(e) => setGenero(e.target.value)} type="text" />
                    <label className="form-label">Duracion</label>
                    <input className='form-control' value={duracion} onChange={(e) => setDuracion(e.target.value)} type="text" />
                    <label className="form-label">Link YouTube</label>
                    <input className='form-control' value={linkYouTube} onChange={(e) => setLinkYouTube(e.target.value)} type="url" />
                    <button type='submit' className='btn btn-primary'>Enviar</button>
                </div>
            </form>
        </div>
    )
}

export default CrearCancion