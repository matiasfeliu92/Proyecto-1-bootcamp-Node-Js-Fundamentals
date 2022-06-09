import axios from 'axios'
import { useState, useEffect} from 'react'
import {Link, useNavigate } from 'react-router-dom'
import swal from 'sweetalert'

const URI = 'http://localhost:4000/canciones'

const CompMostrarCanciones = () => {
    const [canciones, setCancion] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        mostrarCanc()
    }, [])

    //para mostrar todas las canciones
    const mostrarCanc = async () => {
        const res = await axios.get(URI)
        setCancion(res.data)
    }

    //para eliminar todas las canciones
    const eliminarCanc = async (id) => {
        axios.delete(URI+'/eliminar/'+id)
        
        swal({
            title: 'OK',
            text: "cancion eliminada",
            icon: 'success'
        })
        mostrarCanc()
        navigate('/')
    }

    return (
        <div className='container'>
            <div className='row'>
                <h1>Guarda y escucha tus canciones favoritas</h1>
                <Link to="/guardar" className="btn btn-primary">Ingresa tu cancion favorita</Link>
                <div className='col'>
                    <table className='table'>
                        <thead className='table-primary'>
                            <tr>
                                <th>Imagen</th>
                                <th>Titulo</th>
                                <th>Autor</th>
                                <th>Album</th>
                                <th>Genero</th>
                                <th>Duracion</th>
                                <th>YouTube</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {canciones.map(cancion => (
                                <tr key= {cancion.id}>
                                    <td><img className="imgCancion img-thumbnail rounded img-fluid" src={cancion.imagen} alt="img" /></td>
                                    <td>{cancion.titulo}</td>
                                    <td>{cancion.autor}</td>
                                    <td>{cancion.album}</td>
                                    <td>{cancion.genero}</td>
                                    <td>{cancion.duracion}</td>
                                    <td><a className="btn btn-primary" href={cancion.linkyoutube}>Link YouTube</a></td>
                                    <td>
                                        <Link to={`/actualizar/${cancion.id}`} className='btn btn-info'>Editar</Link>
                                        <button onClick={()=>eliminarCanc(cancion.id)} className='btn btn-danger'>Eliminar</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default CompMostrarCanciones