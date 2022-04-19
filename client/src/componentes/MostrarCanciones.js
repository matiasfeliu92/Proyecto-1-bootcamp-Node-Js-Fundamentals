import axios from 'axios'
import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'

const URI = 'http://localhost:4000/canciones'

const CompMostrarCanciones = () => {
    const [canciones, setCancion] = useState([])
    useEffect(() => {
        mostrarCanc()
    }, [])

    //para mostrar todas las canciones
    const mostrarCanc = async () => {
        const res = await axios.get(URI)
        // console.log(res)
        setCancion(res.data)
        //console.log(res.data)
    }

    //para eliminar todas las canciones
    const eliminarCanc = async (id) => {
        axios.delete(`${URI}${id}`)
        mostrarCanc()
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <table className='table'>
                        <thead className='table-primary'>
                            <tr>
                                <th>Titulo</th>
                                <th>Autor</th>
                                <th>Album</th>
                            </tr>
                        </thead>
                        <tbody>
                            {canciones.map((cancion) => (
                                <tr key= {cancion.id}>
                                    <td>{cancion.titulo}</td>
                                    <td>{cancion.autor}</td>
                                    <td>{cancion.album}</td>
                                    <td>{cancion.genero}</td>
                                    <td>{cancion.duracion}</td>
                                    <td>
                                        <Link to={`/edit/${cancion.id}`} className='btn btn-info'>Editar</Link>
                                        <button onClick={ () => eliminarCanc(cancion.id) } className='btn btn-danger'>Eliminar</button>
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