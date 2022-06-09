import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import swal from 'sweetalert'

const URI = 'http://localhost:4000/canciones/'

const EditarCancion = () => {

    const [titulo, setTitulo] = useState('')
    const [autor, setAutor] = useState('')
    const [album, setAlbum] = useState('')
    const [genero, setGenero] = useState('')
    const [duracion, setDuracion] = useState('')
    const [imagen, setImagen] = useState('')
    const [linkYouTube, setLinkYouTube] = useState('')
    const navigate = useNavigate()

    const {id} = useParams()

    useEffect( () => {
        cancionById()
    })

    const cancionById = async () => {
        const res = await axios.get(URI+id)
        setTitulo(res.data.titulo)
        setAutor(res.data.autor)
        setAlbum(res.data.album)
        setGenero(res.data.genero)
        setDuracion(res.data.duracion)
        setImagen(res.data.imagen)
        setLinkYouTube(res.data.linkYouTube)
    }
    
    const update = async (e) => {
        e.preventDefault(e)
        const res = await axios.put(URI+'actualizar/'+id, {
            titulo: titulo,
            autor: autor,
            album: album,
            genero: genero,
            duracion: duracion,
            imagen: imagen,
            linkYouTube: linkYouTube
        })
        if(res) {
            swal({
                title: 'OK',
                text: "cancion actualizada",
                icon: 'success'
            })
            navigate('/')
        } else {
            swal({
                title: 'FAIL',
                text: 'no se pudo crear la cancion',
                icon: 'error'
            })
        }
        // navigate('/')
    }
    
    return (
        <div>
            <h1>Actualiza tu cancion favorita</h1>
            <Link to="/" className="btn btn-primary">Ir a la lista</Link>
            <form onSubmit= {update}>
                <div className="container">
                    <label className="form-label">Imagen</label>
                    <input className='form-control' value={imagen} placeholder="ingresa la URL de la imagen" onChange={(e) => setImagen(e.target.value)} type="url" />
                    <label className="form-label">Titulo</label>
                    <input className='form-control' value={titulo} placeholder="ingresa el titulo" onChange={(e) => setTitulo(e.target.value)} type="text" />
                    <label className="form-label">Autor</label>
                    <input className='form-control' value={autor} placeholder="ingresa el autor" onChange={(e) => setAutor(e.target.value)} type="text" />
                    <label className="form-label">Album</label>
                    <input className='form-control' value={album} placeholder="ingresa el album" onChange={(e) => setAlbum(e.target.value)} type="text" />
                    <label className="form-label">Genero</label>
                    <input className='form-control' value={genero} placeholder="ingresa el genero musical" onChange={(e) => setGenero(e.target.value)} type="text" />
                    <label className="form-label">Duracion</label>
                    <input className='form-control' value={duracion} placeholder="ingresa la duracion" onChange={(e) => setDuracion(e.target.value)} type="text" />
                    <label className="form-label">Link YouTube</label>
                    <input className='form-control' value={linkYouTube} placeholder="ingresa la URL de YouTube" onChange={(e) => setLinkYouTube(e.target.value)} type="url" />
                    <button type='submit' className='btn btn-primary'>Enviar</button>
                </div>
            </form>
        </div> 
    )

}

export default EditarCancion